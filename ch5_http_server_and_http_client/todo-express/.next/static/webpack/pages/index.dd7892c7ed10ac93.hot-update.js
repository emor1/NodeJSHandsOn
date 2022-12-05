"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ToDo.js":
/*!****************************!*\
  !*** ./components/ToDo.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 各ページに対する情報の定義\nconst pages = {\n    index: {\n        title: \"すべてのToDo\",\n        fetchQuery: \"\"\n    },\n    active: {\n        title: \"未完了のToDo\",\n        fetchQuery: \"?completed=false\"\n    },\n    completed: {\n        title: \"完了したToDo\",\n        fetchQuery: \"?completed=true\"\n    }\n};\n// CSRでページを切り替えるためのリンク\nconst pageLinks = Object.keys(pages).map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(page === \"index\" ? \"\" : page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"\"\n        }, void 0, false, {\n            fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, index, false, {\n        fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n// Reactコンポーネントを実装して、外部のモジュールで使えるようにexportで公開\nfunction ToDos(props) {\n    _s();\n    const { title , fetchQuery  } = pages[props.page];\n    // コンポーネントの初期化とpropsの値に応じた更新\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/todos\".concat(fetchQuery)).then(async (res)=>res.ok ? setTodos(await res.json()) : alert(await res.text()));\n    }, [\n        props.page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((param)=>/*#__PURE__*/ {\n                    let { id , title , completed  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: completed ? {\n                                textDecoration: \"line-through\"\n                            } : {},\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    }, id, false, {\n                        fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: pageLinks\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ToDos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = ToDos;\nvar _c;\n$RefreshReg$(_c, \"ToDos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDaEI7QUFDQTtBQUNIO0FBRXpCLGdCQUFnQjtBQUNoQixNQUFNSSxRQUFRO0lBQ1ZDLE9BQU07UUFBQ0MsT0FBTztRQUFZQyxZQUFZO0lBQUU7SUFDeENDLFFBQVE7UUFBQ0YsT0FBTztRQUFZQyxZQUFZO0lBQWtCO0lBQzFERSxXQUFVO1FBQUNILE9BQU07UUFBWUMsWUFBWTtJQUFrQjtBQUMvRDtBQUVBLHNCQUFzQjtBQUN0QixNQUFNRyxZQUFZQyxPQUFPQyxJQUFJLENBQUNSLE9BQU9TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxzQkFDNUMsOERBQUNILGtEQUFJQTtRQUFDYSxNQUFNLElBQTZCLE9BQXpCRCxTQUFPLFVBQVUsS0FBR0EsSUFBSTtrQkFDcEMsNEVBQUNFO1lBQUVELE1BQUs7Ozs7OztPQURxQ1Y7Ozs7O0FBS3JELDZDQUE2QztBQUM5QixTQUFTWSxNQUFNQyxLQUFLLEVBQUM7O0lBQ2hDLE1BQU0sRUFBQ1osTUFBSyxFQUFFQyxXQUFVLEVBQUMsR0FBR0gsS0FBSyxDQUFDYyxNQUFNSixJQUFJLENBQUM7SUFFN0MsNEJBQTRCO0lBQzVCLE1BQU0sQ0FBQ0ssT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUMsRUFBRTtJQUNyQ0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNWcUIsTUFBTSxhQUF3QixPQUFYZCxhQUNsQmUsSUFBSSxDQUFDLE9BQU1DLE1BQUtBLElBQUlDLEVBQUUsR0FDakJKLFNBQVMsTUFBTUcsSUFBSUUsSUFBSSxNQUN4QkMsTUFBTSxNQUFNSCxJQUFJSSxJQUFJLEdBQUc7SUFFaEMsR0FBRTtRQUFDVCxNQUFNSixJQUFJO0tBQUM7SUFFZCxxQkFDSTs7MEJBQ0ksOERBQUNYLGtEQUFJQTswQkFDRCw0RUFBQ0c7OEJBQU9BOzs7Ozs7Ozs7OzswQkFFWiw4REFBQ3NCOzBCQUFJdEI7Ozs7OzswQkFDTCw4REFBQ3VCOzBCQUNJVixNQUFNTixHQUFHLENBQUMsdUJBQ1A7d0JBRFEsRUFBQ2lCLEdBQUUsRUFBRXhCLE1BQUssRUFBRUcsVUFBUyxFQUFDOzJCQUM5Qiw4REFBQ3NCO2tDQUNHLDRFQUFDQzs0QkFBS0MsT0FBT3hCLFlBQVU7Z0NBQUN5QixnQkFBZ0I7NEJBQWMsSUFBRSxDQUFDLENBQUM7c0NBQ3JENUI7Ozs7Ozt1QkFGQXdCOzs7OztnQkFJTDs7Ozs7OzBCQUdaLDhEQUFDSzswQkFBS3pCOzs7Ozs7OztBQUdsQixDQUFDO0dBL0J1Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub0RvLmpzPzMyMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuXG4vLyDlkITjg5rjg7zjgrjjgavlr77jgZnjgovmg4XloLHjga7lrprnvqlcbmNvbnN0IHBhZ2VzID0ge1xuICAgIGluZGV4Ont0aXRsZTogJ+OBmeOBueOBpuOBrlRvRG8nLCBmZXRjaFF1ZXJ5OiAnJ30sXG4gICAgYWN0aXZlOiB7dGl0bGU6ICfmnKrlrozkuobjga5Ub0RvJywgZmV0Y2hRdWVyeTogJz9jb21wbGV0ZWQ9ZmFsc2UnfSxcbiAgICBjb21wbGV0ZWQ6e3RpdGxlOiflrozkuobjgZfjgZ9Ub0RvJywgZmV0Y2hRdWVyeTogJz9jb21wbGV0ZWQ9dHJ1ZScgfVxufVxuXG4vLyBDU1Ljgafjg5rjg7zjgrjjgpLliIfjgormm7/jgYjjgovjgZ/jgoHjga7jg6rjg7Pjgq9cbmNvbnN0IHBhZ2VMaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKHBhZ2UsIGluZGV4KT0+XG4gICAgPExpbmsgaHJlZj17YC8ke3BhZ2U9PT0naW5kZXgnID8gJyc6cGFnZX1gfSBrZXk9e2luZGV4fT5cbiAgICAgICAgPGEgaHJlZj1cIlwiPjwvYT5cbiAgICA8L0xpbms+XG4pXG5cbi8vIFJlYWN044Kz44Oz44Od44O844ON44Oz44OI44KS5a6f6KOF44GX44Gm44CB5aSW6YOo44Gu44Oi44K444Ol44O844Or44Gn5L2/44GI44KL44KI44GG44GrZXhwb3J044Gn5YWs6ZaLXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0Rvcyhwcm9wcyl7XG4gICAgY29uc3Qge3RpdGxlLCBmZXRjaFF1ZXJ5fSA9IHBhZ2VzW3Byb3BzLnBhZ2VdXG5cbiAgICAvLyDjgrPjg7Pjg53jg7zjg43jg7Pjg4jjga7liJ3mnJ/ljJbjgahwcm9wc+OBruWApOOBq+W/nOOBmOOBn+abtOaWsFxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKGAvYXBpL3RvZG9zJHtmZXRjaFF1ZXJ5fWApXG4gICAgICAgIC50aGVuKGFzeW5jIHJlcz0+cmVzLm9rXG4gICAgICAgICAgICA/IHNldFRvZG9zKGF3YWl0IHJlcy5qc29uKCkpXG4gICAgICAgICAgICA6YWxlcnQoYXdhaXQgcmVzLnRleHQoKSlcbiAgICAgICAgKVxuICAgIH0sW3Byb3BzLnBhZ2VdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHtpZCwgdGl0bGUsIGNvbXBsZXRlZH0pPT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e2NvbXBsZXRlZD97dGV4dERlY29yYXRpb246ICdsaW5lLXRocm91Z2gnfTp7fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdj57cGFnZUxpbmtzfTwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkhlYWQiLCJwYWdlcyIsImluZGV4IiwidGl0bGUiLCJmZXRjaFF1ZXJ5IiwiYWN0aXZlIiwiY29tcGxldGVkIiwicGFnZUxpbmtzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInBhZ2UiLCJocmVmIiwiYSIsIlRvRG9zIiwicHJvcHMiLCJ0b2RvcyIsInNldFRvZG9zIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiYWxlcnQiLCJ0ZXh0IiwiaDEiLCJ1bCIsImlkIiwibGkiLCJzcGFuIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ToDo.js\n"));

/***/ })

});