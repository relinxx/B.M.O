module.exports = [
"[project]/state/bmoState.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "useBMOState",
    ()=>useBMOState
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$zustand$29$__ = __turbopack_context__.i("[externals]/zustand [external] (zustand, esm_import, [project]/node_modules/zustand)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$zustand$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$zustand$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const useBMOState = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$zustand__$5b$external$5d$__$28$zustand$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$zustand$29$__["create"])((set, get)=>({
        state: 'IDLE',
        setState: (newState)=>set({
                state: newState
            }),
        // Convenience methods for state transitions
        setIdle: ()=>set({
                state: 'IDLE'
            }),
        setListening: ()=>set({
                state: 'LISTENING'
            }),
        setThinking: ()=>set({
                state: 'THINKING'
            }),
        setTalking: ()=>set({
                state: 'TALKING'
            }),
        // Get current state
        getCurrentState: ()=>get().state,
        // Check if currently in a specific state
        isState: (checkState)=>get().state === checkState
    }));
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/FacePlane.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "FacePlane",
    ()=>FacePlane
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs, [project]/node_modules/@react-three/drei)");
var __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/state/bmoState.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function FacePlane(props) {
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useBMOState"])((state)=>state.state);
    const textures = {
        IDLE: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useTexture"])('/textures/bmo_idle.png'),
        LISTENING: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useTexture"])('/textures/bmo_listening.png'),
        THINKING: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useTexture"])('/textures/bmo_thinking.png'),
        TALKING: (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useTexture"])('/textures/bmo_talking.png')
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    0.6,
                    0.6
                ]
            }, void 0, false, {
                fileName: "[project]/components/FacePlane.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meshBasicMaterial", {
                map: textures[state],
                transparent: true,
                toneMapped: false
            }, void 0, false, {
                fileName: "[project]/components/FacePlane.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FacePlane.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/BMOModel.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "BMOModel",
    ()=>BMOModel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/gltf/scene.gltf 
Author: Drawnah (https://sketchfab.com/EzequielMunoz)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bmo-bab0bf1991d04757954872507c5b1595
Title: BMO
*/ var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs, [project]/node_modules/@react-three/drei)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FacePlane$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FacePlane.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FacePlane$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FacePlane$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function BMOModel(props) {
    const { nodes, materials } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useGLTF"])('/gltf/scene.gltf');
    const modelRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
        ...props,
        ref: modelRef,
        dispose: null,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
                    rotation: [
                        Math.PI / 2,
                        0,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("group", {
                            position: [
                                5.895,
                                -0.228,
                                -4.424
                            ],
                            rotation: [
                                -0.602,
                                0.312,
                                1.605
                            ],
                            scale: 1.401,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                                    geometry: nodes.defaultMaterial_9.geometry,
                                    material: materials.M_Skate
                                }, void 0, false, {
                                    fileName: "[project]/components/BMOModel.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                                    geometry: nodes.defaultMaterial_10.geometry,
                                    material: materials.M_Ruedas
                                }, void 0, false, {
                                    fileName: "[project]/components/BMOModel.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                                    geometry: nodes.defaultMaterial_11.geometry,
                                    material: materials.M_Ruedas
                                }, void 0, false, {
                                    fileName: "[project]/components/BMOModel.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial.geometry,
                            material: materials.Mat_Atras
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_1.geometry,
                            material: materials.Mat_Atras
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_2.geometry,
                            material: materials.Mat_Atras
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_3.geometry,
                            material: materials.M_Vidrio
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_4.geometry,
                            material: materials.M_Piso
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_5.geometry,
                            material: materials.M_Extremidades
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_6.geometry,
                            material: materials.M_Extremidades
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_7.geometry,
                            material: materials.M_Botones
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("mesh", {
                            geometry: nodes.defaultMaterial_8.geometry,
                            material: materials.M_Cuerpo
                        }, void 0, false, {
                            fileName: "[project]/components/BMOModel.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/BMOModel.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/BMOModel.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FacePlane$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FacePlane"], {
                position: [
                    0,
                    1.2,
                    0.51
                ]
            }, void 0, false, {
                fileName: "[project]/components/BMOModel.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BMOModel.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["useGLTF"].preload('/gltf/scene.gltf');
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/utils/api.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "api",
    ()=>api
]);
// API utility functions for BMO backend communication
const API_BASE_URL = 'http://localhost:8001/api';
const VOICE_SERVER_URL = 'http://localhost:8000';
// Request timeout configuration
const DEFAULT_TIMEOUT = 30000 // 30 seconds
;
const VOICE_TIMEOUT = 60000 // 60 seconds for voice generation
;
class APIError extends Error {
    constructor(message, status, data){
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.data = data;
    }
}
async function fetchWithTimeout(url, options = {}, timeout = DEFAULT_TIMEOUT) {
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new APIError(errorData.detail || `HTTP ${response.status}`, response.status, errorData);
        }
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new APIError('Request timeout', 408);
        }
        throw error;
    }
}
const api = {
    // Speech-to-Text
    async speechToText (audioBlob) {
        const formData = new FormData();
        formData.append('audio_file', audioBlob, 'recording.wav');
        const response = await fetchWithTimeout(`${API_BASE_URL}/stt`, {
            method: 'POST',
            body: formData
        });
        return response.json();
    },
    // Think/LLM
    async think (text, conversationId = null, context = null) {
        console.log('Think API called with:', {
            text,
            conversationId,
            context
        });
        try {
            const response = await fetchWithTimeout(`${API_BASE_URL}/think`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text,
                    conversation_id: conversationId,
                    context
                })
            });
            console.log('Think API response status:', response.status);
            const result = await response.json();
            console.log('Think API result:', result);
            return result;
        } catch (error) {
            console.error('Think API error:', error);
            console.error('Error details:', error.message, error.status);
            // Return a fallback response if the backend fails
            return {
                response: "I'm having trouble thinking right now! Can you try again?",
                conversation_id: conversationId || 'fallback',
                context_used: false
            };
        }
    },
    // Text-to-Speech
    async speak (text) {
        try {
            const response = await fetchWithTimeout(`${API_BASE_URL}/speak`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text
                })
            }, VOICE_TIMEOUT);
            return response.blob();
        } catch (error) {
            console.error('Speak API error:', error);
            // Return empty blob if voice server fails
            return new Blob();
        }
    },
    // Health checks
    async checkBackendHealth () {
        try {
            const response = await fetchWithTimeout(`${API_BASE_URL.replace('/api', '')}/health`, {
                method: 'GET'
            });
            return response.json();
        } catch (error) {
            throw new APIError('Backend unavailable', 503);
        }
    },
    async checkVoiceServerHealth () {
        try {
            const response = await fetchWithTimeout(`${VOICE_SERVER_URL}/health`, {
                method: 'GET'
            });
            return response.json();
        } catch (error) {
            throw new APIError('Voice server unavailable', 503);
        }
    }
};
;
}),
"[project]/hooks/useDebounce.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
}),
"[project]/components/Controls.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "Controls",
    ()=>Controls
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/state/bmoState.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDebounce.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
function Controls() {
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [textInput, setTextInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [lastResponse, setLastResponse] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const debouncedTextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useDebounce"])(textInput, 500);
    const { setListening, setThinking, setTalking, setIdle, isState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useBMOState"])();
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    const startRecording = async ()=>{
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event)=>{
                audioChunksRef.current.push(event.data);
            };
            mediaRecorder.onstop = async ()=>{
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: 'audio/wav'
                });
                await processAudio(audioBlob);
                stream.getTracks().forEach((track)=>track.stop());
            };
            mediaRecorder.start();
            setIsRecording(true);
            setListening();
        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Please allow microphone access to use voice input');
        }
    };
    const stopRecording = ()=>{
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setThinking();
        }
    };
    const processAudio = async (audioBlob)=>{
        setError('');
        try {
            // Send to backend for STT processing
            const sttResult = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["api"].speechToText(audioBlob);
            const transcribedText = sttResult.text;
            if (!transcribedText) {
                setIdle();
                return;
            }
            console.log('Transcribed text:', transcribedText);
            // Send to LLM for response
            const thinkResult = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["api"].think(transcribedText);
            const responseText = thinkResult.response;
            // Speak the response
            await speakResponse(responseText);
        } catch (error) {
            console.error('Error processing audio:', error);
            setError(error.message || 'Failed to process audio');
            setIdle();
        }
    };
    const speakResponse = async (text)=>{
        setError('');
        try {
            // Call backend TTS endpoint
            const audioBlob = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["api"].speak(text);
            // Check if we got a valid audio blob
            if (audioBlob.size === 0) {
                setError('Voice server unavailable - text response only');
                setLastResponse(text);
                // Show thinking state for 2 seconds then go to idle
                setThinking();
                setTimeout(()=>{
                    setIdle();
                    setLastResponse(''); // Clear response after showing it
                }, 2000);
                return;
            }
            setTalking();
            // Create audio from response blob
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.onended = ()=>{
                URL.revokeObjectURL(audioUrl);
                setIdle();
            };
            audio.onerror = ()=>{
                URL.revokeObjectURL(audioUrl);
                setError('Audio playback failed');
                setIdle();
            };
            await audio.play();
        } catch (error) {
            console.error('Error playing audio:', error);
            setError(error.message || 'Failed to generate speech');
            setIdle();
        }
    };
    const handleTextSubmit = async (e)=>{
        e.preventDefault();
        if (!textInput.trim()) return;
        setError('');
        setIsLoading(true);
        setThinking();
        try {
            // Send text to backend for processing
            const thinkResult = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["api"].think(textInput);
            const responseText = thinkResult.response;
            // Speak the response
            await speakResponse(responseText);
            setTextInput('');
            setIsLoading(false);
        } catch (error) {
            console.error('Error processing text:', error);
            setError(error.message || 'Failed to process text');
            setIdle();
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: isRecording ? stopRecording : startRecording,
                disabled: isLoading,
                style: {
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: isRecording ? '#ef4444' : isLoading ? '#6b7280' : '#10b981',
                    color: 'white',
                    fontSize: '24px',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                },
                children: isRecording ? '🛑' : '🎤'
            }, void 0, false, {
                fileName: "[project]/components/Controls.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                onSubmit: handleTextSubmit,
                style: {
                    display: 'flex',
                    gap: '10px',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '10px',
                    borderRadius: '25px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: textInput,
                        onChange: (e)=>setTextInput(e.target.value),
                        placeholder: "Type a message to BMO...",
                        disabled: isLoading,
                        style: {
                            border: 'none',
                            outline: 'none',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            width: '250px',
                            background: 'transparent'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Controls.jsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading || !textInput.trim(),
                        style: {
                            border: 'none',
                            backgroundColor: isLoading || !textInput.trim() ? '#6b7280' : '#3b82f6',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            cursor: isLoading || !textInput.trim() ? 'not-allowed' : 'pointer',
                            fontSize: '14px'
                        },
                        children: "Send"
                    }, void 0, false, {
                        fileName: "[project]/components/Controls.jsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Controls.jsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            lastResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '14px',
                    color: 'white',
                    background: 'rgba(0,0,0,0.8)',
                    padding: '10px 15px',
                    borderRadius: '15px',
                    maxWidth: '400px',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    fontStyle: 'italic'
                },
                children: [
                    'BMO: "',
                    lastResponse,
                    '"'
                ]
            }, void 0, true, {
                fileName: "[project]/components/Controls.jsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '12px',
                    color: '#ef4444',
                    background: 'rgba(255,255,255,0.9)',
                    padding: '8px 12px',
                    borderRadius: '15px',
                    maxWidth: '300px',
                    textAlign: 'center',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Controls.jsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: '12px',
                    color: 'white',
                    background: 'rgba(0,0,0,0.7)',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                },
                children: isRecording ? '🎙️ Listening...' : isLoading ? '🤔 Thinking...' : '💬 Ready'
            }, void 0, false, {
                fileName: "[project]/components/Controls.jsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Controls.jsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/components/ErrorBoundary.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '20px',
                    borderRadius: '10px',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    zIndex: 1000
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#ef4444',
                            marginBottom: '10px'
                        },
                        children: "Oops! Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.jsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#666',
                            marginBottom: '15px'
                        },
                        children: "BMO encountered an error. Please refresh the page."
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>window.location.reload(),
                        style: {
                            background: '#3b82f6',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        },
                        children: "Refresh Page"
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ErrorBoundary.jsx",
                lineNumber: 20,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
}),
"[project]/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$29$__ = __turbopack_context__.i("[externals]/@react-three/fiber [external] (@react-three/fiber, cjs, [project]/node_modules/@react-three/fiber)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__ = __turbopack_context__.i("[externals]/@react-three/drei [external] (@react-three/drei, cjs, [project]/node_modules/@react-three/drei)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BMOModel.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Controls.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/state/bmoState.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
function Scene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["PerspectiveCamera"], {
                makeDefault: true,
                position: [
                    0,
                    1.5,
                    4
                ],
                fov: 45
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ambientLight", {
                intensity: 0.6
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("directionalLight", {
                position: [
                    5,
                    5,
                    5
                ],
                intensity: 0.8
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -5,
                    5,
                    -5
                ],
                intensity: 0.3
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["BMOModel"], {
                    position: [
                        0,
                        0,
                        0
                    ],
                    scale: 1
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$drei__$5b$external$5d$__$2840$react$2d$three$2f$drei$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$29$__["OrbitControls"], {
                enablePan: false,
                minDistance: 2,
                maxDistance: 8,
                minPolarAngle: Math.PI / 4,
                maxPolarAngle: Math.PI / 2.5
            }, void 0, false, {
                fileName: "[project]/pages/index.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function Home() {
    const currentState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useBMOState"])((state)=>state.state);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: {
                width: '100vw',
                height: '100vh',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$three$2f$fiber__$5b$external$5d$__$2840$react$2d$three$2f$fiber$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$29$__["Canvas"], {
                    shadows: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Scene, {}, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        color: 'white',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '10px',
                        borderRadius: '8px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            "BMO State: ",
                            currentState
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Controls$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Controls"], {}, void 0, false, {
                        fileName: "[project]/pages/index.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/index.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/index.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/index.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3391de3._.js.map