"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(204);
;// CONCATENATED MODULE: external "@mui/icons-material/MoveToInbox"
const MoveToInbox_namespaceObject = require("@mui/icons-material/MoveToInbox");
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/FlutterDash"
const FlutterDash_namespaceObject = require("@mui/icons-material/FlutterDash");
var FlutterDash_default = /*#__PURE__*/__webpack_require__.n(FlutterDash_namespaceObject);
;// CONCATENATED MODULE: ./components/navigation/NavBar.tsx







const headerHeight = 64;
const drawerWidth = 240;
const StyledBadge = (0,material_.styled)(material_.Badge)(({ theme  })=>({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""'
            }
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(1)",
                opacity: 1
            },
            "100%": {
                transform: "scale(3)",
                opacity: 0
            }
        }
    })
);
function NavBar(props) {
    const { window  } = props;
    const [mobileOpen, setMobileOpen] = external_react_.useState(false);
    const [userProfileOpen, setUserProfileOpen] = external_react_.useState(false);
    const handleUserProfileToggle = ()=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setUserProfileOpen(!userProfileOpen);
        }
    ;
    const handleSideBarToggle = ()=>{
        setMobileOpen(!mobileOpen);
    };
    const sideBar = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                children: [
                    "Inbox",
                    "Starred",
                    "Send email",
                    "Drafts"
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                        disablePadding: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    primary: text
                                })
                            ]
                        })
                    }, text)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                children: [
                    "All mail",
                    "Trash",
                    "Spam"
                ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                        disablePadding: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                    primary: text
                                })
                            ]
                        })
                    }, text)
                )
            })
        ]
    });
    const container = window !== undefined ? ()=>window().document.body
     : undefined;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                position: "fixed",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                            sx: {
                                width: drawerWidth,
                                height: headerHeight,
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                alignItems: "center",
                                justifyContent: "center",
                                borderRight: "1px solid"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                variant: "h6",
                                noWrap: true,
                                component: "div",
                                sx: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((FlutterDash_default()), {
                                        color: "secondary",
                                        sx: {
                                            marginRight: "10px",
                                            width: "48px",
                                            height: "48px"
                                        }
                                    }),
                                    " Analytics"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                            sx: {
                                height: headerHeight,
                                flexGrow: 1,
                                justifyContent: "space-between"
                            },
                            id: "back-to-top-anchor",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                                    sx: {
                                        width: drawerWidth,
                                        display: {
                                            xs: "flex",
                                            md: "none"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                            color: "inherit",
                                            "aria-label": "open drawer",
                                            edge: "start",
                                            onClick: handleSideBarToggle,
                                            sx: {
                                                display: {
                                                    md: "none"
                                                }
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {})
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                            variant: "h6",
                                            noWrap: true,
                                            component: "div",
                                            sx: {
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((FlutterDash_default()), {
                                                    color: "secondary",
                                                    fontSize: "large",
                                                    sx: {
                                                        marginRight: "10px",
                                                        width: "48px",
                                                        height: "48px"
                                                    }
                                                }),
                                                " Analytics"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "div",
                                    sx: {
                                        display: {
                                            xs: "none",
                                            md: "flex"
                                        },
                                        alignItems: "center"
                                    },
                                    children: "Dashboard"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                    sx: {
                                        flexGrow: 0
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                        onClick: handleUserProfileToggle(),
                                        sx: {
                                            p: 0
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledBadge, {
                                            overlap: "circular",
                                            anchorOrigin: {
                                                vertical: "bottom",
                                                horizontal: "right"
                                            },
                                            variant: "dot",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                                alt: "Remy Sharp",
                                                src: "/static/avatar.jpg"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                component: "nav",
                sx: {
                    width: {
                        md: drawerWidth
                    },
                    flexShrink: {
                        md: 0
                    }
                },
                "aria-label": "mailbox folders",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                        container: container,
                        variant: "temporary",
                        open: mobileOpen,
                        onClose: handleSideBarToggle,
                        ModalProps: {
                            keepMounted: true
                        },
                        sx: {
                            display: {
                                xs: "block",
                                md: "none"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                top: headerHeight
                            }
                        },
                        children: sideBar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                        variant: "permanent",
                        sx: {
                            display: {
                                xs: "none",
                                md: "block"
                            },
                            "& .MuiDrawer-paper": {
                                boxSizing: "border-box",
                                width: drawerWidth,
                                top: headerHeight
                            }
                        },
                        open: true,
                        children: sideBar
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Drawer, {
                anchor: "right",
                open: userProfileOpen,
                onClose: handleUserProfileToggle(),
                onKeyDown: handleUserProfileToggle(),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        width: drawerWidth
                    },
                    role: "presentation",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                            children: [
                                "Profile",
                                "Account",
                                "Dashboard",
                                "Logout"
                            ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                    disablePadding: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                                children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                primary: text
                                            })
                                        ]
                                    })
                                }, text)
                            )
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.List, {
                            children: [
                                "All mail",
                                "Trash",
                                "Spam"
                            ].map((text, index)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.ListItem, {
                                    disablePadding: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ListItemButton, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemIcon, {
                                                children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.ListItemText, {
                                                primary: text
                                            })
                                        ]
                                    })
                                }, text)
                            )
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp(props) {
    const { Component , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dashboard"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                    sx: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [204], () => (__webpack_exec__(453)));
module.exports = __webpack_exports__;

})();