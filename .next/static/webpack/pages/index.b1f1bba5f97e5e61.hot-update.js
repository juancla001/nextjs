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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list.group\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"list-group-item list-group-item-action d-flex justify-content\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: [\n                                        user.first_name,\n                                        \" \",\n                                        user.last_name,\n                                        \"  \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                                    lineNumber: 10,\n                                    columnNumber: 21\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Correo: \",\n                                        user.email,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                                    lineNumber: 11,\n                                    columnNumber: 21\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar,\n                            alt: user.first_name + user.last_name,\n                            style: {\n                                botderRadius: \"50%\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, _this1)\n                    ]\n                }, user.id, true, {\n                    fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juanc\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\frontend\\\\nextjs\\\\components\\\\Users.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, _this1);\n        })\n    }, void 0, false);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUNBOztBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUk7O0lBQ3BCLHFCQUNJO2tCQUVJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO2lDQUNoQiw4REFBQ0MsSUFBRTtnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQzFCLDRFQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsK0RBQStEOztzQ0FDekUsOERBQUNFLEtBQUc7OzhDQUNKLDhEQUFDQyxJQUFFOzt3Q0FBRUwsSUFBSSxDQUFDTSxVQUFVO3dDQUFDLEdBQUM7d0NBQUNOLElBQUksQ0FBQ08sU0FBUzt3Q0FBQyxJQUFFOzs7Ozs7MENBQUs7OENBQzdDLDhEQUFDQyxHQUFDOzt3Q0FBQyxVQUFRO3dDQUFDUixJQUFJLENBQUNTLEtBQUs7d0NBQUMsR0FBQzs7Ozs7OzBDQUFJOzs7Ozs7a0NBQ3RCO3NDQUNOLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVYLElBQUksQ0FBQ1ksTUFBTTs0QkFDakJDLEdBQUcsRUFBRWIsSUFBSSxDQUFDTSxVQUFVLEdBQUdOLElBQUksQ0FBQ08sU0FBUzs0QkFDckNPLEtBQUssRUFBRTtnQ0FBQ0MsWUFBWSxFQUFFLEtBQUs7NkJBQUM7Ozs7O2tDQUFHOzttQkFQNENmLElBQUksQ0FBQ2dCLEVBQUU7Ozs7MEJBUXJGOzs7OztzQkFDQTtTQUNSLENBQUM7cUJBRUgsQ0FDTjtDQUNKO0FBcEJLcEIsS0FBQUEsS0FBSztBQXNCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnMuanM/ODE5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgVXNlcnMgPSAocHJvcHMpID0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9wcy51c2Vycy5tYXAodXNlciA9PihcclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0Lmdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudFwiIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfSAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Db3JyZW86IHt1c2VyLmVtYWlsfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym90ZGVyUmFkaXVzOiAnNTAlJ319Lz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sIm5hbWVzIjpbIlVzZXJzIiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwiZGl2IiwiaDUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicCIsImVtYWlsIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0Iiwic3R5bGUiLCJib3RkZXJSYWRpdXMiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Users.js\n");

/***/ })

});