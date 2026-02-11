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
(()=>{
    const e = new Error("Cannot find module '../components/Controls.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/state/bmoState.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BMOModel$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$state$2f$bmoState$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Controls, {}, void 0, false, {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__b4ee7e15._.js.map