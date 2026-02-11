import os
import logging
import time
from datetime import datetime
from typing import List, Optional, Dict, Any

import chromadb
from sentence_transformers import SentenceTransformer
import uuid
from datetime import datetime

logger = logging.getLogger(__name__)

class MemoryManager:
    def __init__(self):
        self.persist_directory = os.getenv("CHROMA_PERSIST_DIRECTORY", "./memory/chroma")
        self.collection_name = os.getenv("CHROMA_COLLECTION_NAME", "bmo_memory")
        
        # Initialize ChromaDB
        self.client = chromadb.PersistentClient(path=self.persist_directory)
        self.collection = self.client.get_or_create_collection(
            name=self.collection_name,
            metadata={"description": "BMO's conversation memories"}
        )
        
        # Initialize sentence transformer for embeddings
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
        
        logger.info(f"Memory manager initialized with collection: {self.collection_name}")
    
    async def store_interaction(self, conversation_id: str, user_input: str, bmo_response: str, context: dict = None):
        """
        Store a conversation interaction in memory
        """
        try:
            # Prepare metadata - convert complex objects to strings
            metadata = {
                "timestamp": str(datetime.now()),
                "conversation_id": str(conversation_id),
                "user_input": str(user_input),
                "bmo_response": str(bmo_response)
            }
            
            # Add context if provided (convert to string)
            if context:
                for key, value in context.items():
                    if isinstance(value, (str, int, float, bool)):
                        metadata[f"context_{key}"] = value
                    else:
                        metadata[f"context_{key}"] = str(value)
            
            # Store user input
            await self.collection.add(
                documents=[user_input],
                metadatas=[metadata],
                ids=[f"{conversation_id}_user_{int(time.time())}"]
            )
            
            # Store BMO response
            await self.collection.add(
                documents=[bmo_response],
                metadatas=[metadata],
                ids=[f"{conversation_id}_bmo_{int(time.time())}"]
            )
            
        except Exception as e:
            logger.error(f"Error storing interaction: {str(e)}")
            raise Exception(f"Failed to store interaction: {str(e)}")
    
    async def get_relevant_memories(self, query: str, limit: int = 3) -> List[str]:
        """
        Retrieve relevant memories based on a query
        """
        try:
            # Generate query embedding
            query_embedding = self.embedding_model.encode(query).tolist()
            
            # Search ChromaDB
            results = self.collection.query(
                query_embeddings=[query_embedding],
                n_results=limit,
                include=["documents", "metadatas", "distances"]
            )
            
            # Extract and filter memories
            memories = []
            if results["documents"] and results["documents"][0]:
                for i, (doc, metadata, distance) in enumerate(zip(
                    results["documents"][0],
                    results["metadatas"][0],
                    results["distances"][0]
                )):
                    # Only include memories with reasonable similarity (distance < 1.0)
                    if distance < 1.0:
                        memories.append(doc)
            
            logger.debug(f"Found {len(memories)} relevant memories for query: {query[:50]}...")
            return memories
            
        except Exception as e:
            logger.error(f"Error retrieving memories: {str(e)}")
            return []
    
    async def get_conversation_history(self, conversation_id: str, limit: int = 10) -> List[Dict[str, Any]]:
        """
        Get conversation history for a specific conversation ID
        """
        try:
            results = self.collection.query(
                query_texts=[conversation_id],
                n_results=limit,
                where={"conversation_id": conversation_id},
                include=["documents", "metadatas"]
            )
            
            conversations = []
            if results["documents"] and results["documents"][0]:
                for doc, metadata in zip(results["documents"][0], results["metadatas"][0]):
                    conversations.append({
                        "text": doc,
                        "metadata": metadata
                    })
            
            # Sort by timestamp (most recent first)
            conversations.sort(key=lambda x: x["metadata"]["timestamp"], reverse=True)
            
            return conversations
            
        except Exception as e:
            logger.error(f"Error retrieving conversation history: {str(e)}")
            return []
    
    async def clear_conversation(self, conversation_id: str):
        """
        Clear all memories for a specific conversation
        """
        try:
            # Get all documents for this conversation
            results = self.collection.get(
                where={"conversation_id": conversation_id},
                include=["metadatas"]
            )
            
            if results["ids"]:
                self.collection.delete(ids=results["ids"])
                logger.info(f"Cleared {len(results['ids'])} memories for conversation {conversation_id}")
            
        except Exception as e:
            logger.error(f"Error clearing conversation: {str(e)}")
            raise Exception(f"Failed to clear conversation: {str(e)}")
    
    async def get_memory_stats(self) -> Dict[str, Any]:
        """
        Get statistics about stored memories
        """
        try:
            count = self.collection.count()
            return {
                "total_memories": count,
                "collection_name": self.collection_name,
                "persist_directory": self.persist_directory
            }
        except Exception as e:
            logger.error(f"Error getting memory stats: {str(e)}")
            return {"error": str(e)}
