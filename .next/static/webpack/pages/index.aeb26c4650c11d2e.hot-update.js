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

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list.group\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"list-group-item list-group-item-action d-flex justify-content-between align-items-center\",\n                    onClick: function(e) {\n                        return next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.Router.push(\"/users/[id]\", \"/users\");\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: [\n                                        user.first_name,\n                                        \" \",\n                                        user.last_name,\n                                        \"  \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                                    lineNumber: 12,\n                                    columnNumber: 21\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Correo: \",\n                                        user.email,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 21\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: user.first_name + user.last_name,\n                            style: {\n                                borderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, _this1)\n                    ]\n                }, user.id, true, {\n                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                lineNumber: 8,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlEO0FBRWpELElBQU1DLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUk7O0lBQ3BCLHFCQUNJO2tCQUVJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO2lDQUNoQiw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQzFCLDRFQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsMEZBQTBGO29CQUN0RkUsT0FBTyxFQUFFQyxTQUFBQSxDQUFDOytCQUFHVixnRUFBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7cUJBQUE7O3NDQUMvRCw4REFBQ1ksS0FBRzs7OENBQ0osOERBQUNDLElBQUU7O3dDQUFFUixJQUFJLENBQUNTLFVBQVU7d0NBQUMsR0FBQzt3Q0FBQ1QsSUFBSSxDQUFDVSxTQUFTO3dDQUFDLElBQUU7Ozs7OzswQ0FBSzs4Q0FDN0MsOERBQUNDLEdBQUM7O3dDQUFDLFVBQVE7d0NBQUNYLElBQUksQ0FBQ1ksS0FBSzt3Q0FBQyxHQUFDOzs7Ozs7MENBQUk7Ozs7OztrQ0FDdEI7c0NBQ04sOERBQUNDLEtBQUc7NEJBQUNDLEdBQUcsRUFBRWQsSUFBSSxDQUFDZSxNQUFNOzRCQUNqQkMsR0FBRyxFQUFFaEIsSUFBSSxDQUFDUyxVQUFVLEdBQUdULElBQUksQ0FBQ1UsU0FBUzs0QkFDckNPLEtBQUssRUFBRTtnQ0FBQ0MsWUFBWSxFQUFFLEtBQUs7NkJBQUM7Ozs7O2tDQUFHOzttQkFQOUJsQixJQUFJLENBQUNtQixFQUFFOzs7OzBCQVFYOzs7OztzQkFDQTtTQUNSLENBQUM7cUJBRUgsQ0FDTjtDQUNKO0FBckJLdkIsS0FBQUEsS0FBSztBQXVCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanM/ODE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcHMudXNlcnMubWFwKHVzZXIgPT4oXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC5ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e3VzZXIuaWR9IG9uQ2xpY2s9e2U9PiBSb3V0ZXIucHVzaCgnL3VzZXJzL1tpZF0nLCAnL3VzZXJzJykgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfSAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Db3JyZW86IHt1c2VyLmVtYWlsfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sIm5hbWVzIjpbIlJvdXRlciIsIlVzZXJzIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwib25DbGljayIsImUiLCJwdXNoIiwiZGl2IiwiaDUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicCIsImVtYWlsIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0Iiwic3R5bGUiLCJib3JkZXJSYWRpdXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.js\n");

/***/ })

});