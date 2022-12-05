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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// 各ページに対する情報の定義\nconst pages = {\n    index: {\n        title: \"すべてのToDo\",\n        fetchQuery: \"\"\n    },\n    active: {\n        title: \"未完了のToDo\",\n        fetchQuery: \"?completed=false\"\n    },\n    completed: {\n        title: \"完了したToDo\",\n        fetchQuery: \"?completed=true\"\n    }\n};\n// CSRでページを切り替えるためのリンク\nconst pageLinks = Object.keys(pages).map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        href: \"/\".concat(page === \"index\" ? \"\" : page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            style: {\n                marginRight: 10\n            },\n            children: pages[page].title\n        }, void 0, false, {\n            fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined)\n    }, index, false, {\n        fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n// Reactコンポーネントを実装して、外部のモジュールで使えるようにexportで公開\nfunction ToDos(props) {\n    _s();\n    const { title , fetchQuery  } = pages[props.page];\n    // コンポーネントの初期化とpropsの値に応じた更新\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/todos\".concat(fetchQuery)).then(async (res)=>res.ok ? setTodos(await res.json()) : alert(await res.text()));\n    }, [\n        props.page\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((param)=>/*#__PURE__*/ {\n                    let { id , title , completed  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: completed ? {\n                                textDecoration: \"line-through\"\n                            } : {},\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                            lineNumber: 43,\n                            columnNumber: 25\n                        }, this)\n                    }, id, false, {\n                        fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: pageLinks\n            }, void 0, false, {\n                fileName: \"/Users/emori/Documents/nodejs_playground/NodeJSHandsOn/ch5_http_server_and_http_client/todo-express/components/ToDo.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ToDos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n_c = ToDos;\nvar _c;\n$RefreshReg$(_c, \"ToDos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvRG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDaEI7QUFDQTtBQUNIO0FBRXpCLGdCQUFnQjtBQUNoQixNQUFNSSxRQUFRO0lBQ1ZDLE9BQU07UUFBQ0MsT0FBTztRQUFZQyxZQUFZO0lBQUU7SUFDeENDLFFBQVE7UUFBQ0YsT0FBTztRQUFZQyxZQUFZO0lBQWtCO0lBQzFERSxXQUFVO1FBQUNILE9BQU07UUFBWUMsWUFBWTtJQUFrQjtBQUMvRDtBQUVBLHNCQUFzQjtBQUN0QixNQUFNRyxZQUFZQyxPQUFPQyxJQUFJLENBQUNSLE9BQU9TLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVCxzQkFDNUMsOERBQUNVO1FBQUtDLE1BQU0sSUFBNkIsT0FBekJGLFNBQU8sVUFBVSxLQUFHQSxJQUFJO2tCQUNwQyw0RUFBQ0c7WUFBRUMsT0FBTztnQkFBQ0MsYUFBWTtZQUFFO3NCQUFJZixLQUFLLENBQUNVLEtBQUssQ0FBQ1IsS0FBSzs7Ozs7O09BREREOzs7OztBQUtyRCw2Q0FBNkM7QUFDOUIsU0FBU2UsTUFBTUMsS0FBSyxFQUFDOztJQUNoQyxNQUFNLEVBQUNmLE1BQUssRUFBRUMsV0FBVSxFQUFDLEdBQUdILEtBQUssQ0FBQ2lCLE1BQU1QLElBQUksQ0FBQztJQUU3Qyw0QkFBNEI7SUFDNUIsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUd0QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1Z3QixNQUFNLGFBQXdCLE9BQVhqQixhQUNsQmtCLElBQUksQ0FBQyxPQUFNQyxNQUFLQSxJQUFJQyxFQUFFLEdBQ2pCSixTQUFTLE1BQU1HLElBQUlFLElBQUksTUFDeEJDLE1BQU0sTUFBTUgsSUFBSUksSUFBSSxHQUFHO0lBRWhDLEdBQUU7UUFBQ1QsTUFBTVAsSUFBSTtLQUFDO0lBRWQscUJBQ0k7OzBCQUNJLDhEQUFDWCxrREFBSUE7MEJBQ0QsNEVBQUNHOzhCQUFPQTs7Ozs7Ozs7Ozs7MEJBRVosOERBQUN5QjswQkFBSXpCOzs7Ozs7MEJBQ0wsOERBQUMwQjswQkFDSVYsTUFBTVQsR0FBRyxDQUFDLHVCQUNQO3dCQURRLEVBQUNvQixHQUFFLEVBQUUzQixNQUFLLEVBQUVHLFVBQVMsRUFBQzsyQkFDOUIsOERBQUN5QjtrQ0FDRyw0RUFBQ0M7NEJBQUtqQixPQUFPVCxZQUFVO2dDQUFDMkIsZ0JBQWdCOzRCQUFjLElBQUUsQ0FBQyxDQUFDO3NDQUNyRDlCOzs7Ozs7dUJBRkEyQjs7Ozs7Z0JBSUw7Ozs7OzswQkFHWiw4REFBQ0k7MEJBQUszQjs7Ozs7Ozs7QUFHbEIsQ0FBQztHQS9CdUJVO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9Eby5qcz8zMjI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcblxuLy8g5ZCE44Oa44O844K444Gr5a++44GZ44KL5oOF5aCx44Gu5a6a576pXG5jb25zdCBwYWdlcyA9IHtcbiAgICBpbmRleDp7dGl0bGU6ICfjgZnjgbnjgabjga5Ub0RvJywgZmV0Y2hRdWVyeTogJyd9LFxuICAgIGFjdGl2ZToge3RpdGxlOiAn5pyq5a6M5LqG44GuVG9EbycsIGZldGNoUXVlcnk6ICc/Y29tcGxldGVkPWZhbHNlJ30sXG4gICAgY29tcGxldGVkOnt0aXRsZTon5a6M5LqG44GX44GfVG9EbycsIGZldGNoUXVlcnk6ICc/Y29tcGxldGVkPXRydWUnIH1cbn1cblxuLy8gQ1NS44Gn44Oa44O844K444KS5YiH44KK5pu/44GI44KL44Gf44KB44Gu44Oq44Oz44KvXG5jb25zdCBwYWdlTGlua3MgPSBPYmplY3Qua2V5cyhwYWdlcykubWFwKChwYWdlLCBpbmRleCk9PlxuICAgIDxsaW5rIGhyZWY9e2AvJHtwYWdlPT09J2luZGV4JyA/ICcnOnBhZ2V9YH0ga2V5PXtpbmRleH0+XG4gICAgICAgIDxhIHN0eWxlPXt7bWFyZ2luUmlnaHQ6MTB9fT57cGFnZXNbcGFnZV0udGl0bGV9PC9hPlxuICAgIDwvbGluaz5cbilcblxuLy8gUmVhY3TjgrPjg7Pjg53jg7zjg43jg7Pjg4jjgpLlrp/oo4XjgZfjgabjgIHlpJbpg6jjga7jg6Ljgrjjg6Xjg7zjg6vjgafkvb/jgYjjgovjgojjgYbjgatleHBvcnTjgaflhazplotcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9zKHByb3BzKXtcbiAgICBjb25zdCB7dGl0bGUsIGZldGNoUXVlcnl9ID0gcGFnZXNbcHJvcHMucGFnZV1cblxuICAgIC8vIOOCs+ODs+ODneODvOODjeODs+ODiOOBruWIneacn+WMluOBqHByb3Bz44Gu5YCk44Gr5b+c44GY44Gf5pu05pawXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgZmV0Y2goYC9hcGkvdG9kb3Mke2ZldGNoUXVlcnl9YClcbiAgICAgICAgLnRoZW4oYXN5bmMgcmVzPT5yZXMub2tcbiAgICAgICAgICAgID8gc2V0VG9kb3MoYXdhaXQgcmVzLmpzb24oKSlcbiAgICAgICAgICAgIDphbGVydChhd2FpdCByZXMudGV4dCgpKVxuICAgICAgICApXG4gICAgfSxbcHJvcHMucGFnZV0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3RvZG9zLm1hcCgoe2lkLCB0aXRsZSwgY29tcGxldGVkfSk9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17Y29tcGxldGVkP3t0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCd9Ont9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2PntwYWdlTGlua3N9PC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSGVhZCIsInBhZ2VzIiwiaW5kZXgiLCJ0aXRsZSIsImZldGNoUXVlcnkiLCJhY3RpdmUiLCJjb21wbGV0ZWQiLCJwYWdlTGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFnZSIsImxpbmsiLCJocmVmIiwiYSIsInN0eWxlIiwibWFyZ2luUmlnaHQiLCJUb0RvcyIsInByb3BzIiwidG9kb3MiLCJzZXRUb2RvcyIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImFsZXJ0IiwidGV4dCIsImgxIiwidWwiLCJpZCIsImxpIiwic3BhbiIsInRleHREZWNvcmF0aW9uIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ToDo.js\n"));

/***/ })

});