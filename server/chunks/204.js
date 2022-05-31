"use strict";
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(574);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);


// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            main: "#17252A"
        },
        secondary: {
            main: "#ED254EFF"
        },
        error: {
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "15px",
                    lineHeight: "normal",
                    padding: "11px 16px"
                },
                containedPrimary: {
                    backgroundColor: "#17252A",
                    "&:hover": {
                        backgroundColor: "#ED254EFF"
                    }
                },
                containedSecondary: {
                    backgroundColor: "#ED254EFF",
                    "&:hover": {
                        backgroundColor: "#17252A"
                    }
                },
                outlinedPrimary: {
                    padding: "10px 16px",
                    border: "1px solid #17252A",
                    "&:hover": {
                        color: "#ED254EFF",
                        backgroundColor: "#ffffff",
                        border: "1px solid #ED254EFF"
                    }
                },
                outlinedSecondary: {
                    padding: "10px 16px",
                    border: "1px solid #ED254EFF",
                    "&:hover": {
                        color: "#17252A",
                        backgroundColor: "#ffffff",
                        border: "1px solid #17252A"
                    }
                }
            }
        }
    }
});
/*
#1a4a5a
#2e8d8d
#c1e1a8
#efbc75
*/ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;