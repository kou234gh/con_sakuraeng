"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./public/sakuraeng.png
/* harmony default export */ const sakuraeng = ({"src":"/_next/static/media/sakuraeng.6f3adfc0.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mPYzsDAAMSa2xgYDgLxr51AfCwp++DF3kmaQCmI5H4zt3fn23v/n2vp/H9r5Zr/T4+e+P/l+Yt3f3/+0mTYzaBzcK+c+f8LPRN/Pj915v+nJ0+BCo7/fLTvwP+Hu/cdAin4BTT6//GMgv9A4//vAGKQhj2Spv/3Klv9AirQ+gUy9sP9B//vbtzyf5+h8//dDApArAnEar9Abjj45PDR/+9u3/35+so1oKAGEGv/3MNt8H8Ps95BhrlAR17o6n/3aN/B/+c7+/6fa+r4f7q6EWTVu/22PpoM6xgYQFhzC9AkoOCv/Tbev/Zp2x8EugfsTQBfkowlAj7nigAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/Footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mx-auto px-8",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full flex flex-col md:flex-row py-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-1 mb-6 text-black",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            className: "flex h-20 item-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: sakuraeng,
                                    alt: "sakura eng logo",
                                    className: "h-10 w-10"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "self-center text-lg font-semibold whitespace-nowrap",
                                    children: "桜エンジニアリング"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "uppercase text-gray-500 md:mb-6",
                                children: "Links"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-reset mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "FAQ"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Help"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Support"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "uppercase text-gray-500 md:mb-6",
                                children: "Legal"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-reset mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Terms"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Privacy"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "uppercase text-gray-500 md:mb-6",
                                children: "Social"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-reset mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Facebook"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Linkedin"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Twitter"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "uppercase text-gray-500 md:mb-6",
                                children: "Company"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list-reset mb-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "hidden mt-2  mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "Official Blog"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "私たちについて"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "お問い合わせ"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "mt-2 inline-block mr-2 md:block md:mr-0",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                            children: "お見積診断"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "border-gray-200",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "flex h-20 item-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: sakuraeng,
                                alt: "sakura eng logo",
                                className: "h-10 w-10"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "self-center text-lg font-semibold whitespace-nowrap",
                                children: "桜エンジニアリング"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        "data-collapse-toggle": "mobile-menu",
                        type: "button",
                        className: "md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center",
                        "aria-controls": "mobile-menu-2",
                        "aria-expanded": "false",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Open main menu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "w-6 h-6",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "fill-rule": "evenodd",
                                    d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                    "clip-rule": "evenodd"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "hidden w-6 h-6",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    "fill-rule": "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    "clip-rule": "evenodd"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block w-full md:w-auto",
                        id: "mobile-menu",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/about",
                                        className: "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                        children: "私たちについて"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            id: "dropdownNavbarLink",
                                            "data-dropdown-toggle": "dropdownNavbar",
                                            className: "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto",
                                            children: [
                                                "サービス ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    className: "w-4 h-4 ml-1",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        "fill-rule": "evenodd",
                                                        d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                        "clip-rule": "evenodd"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            id: "dropdownNavbar",
                                            className: "hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "py-1",
                                                "aria-labelledby": "dropdownLargeButton",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2",
                                                            children: "ホームページ"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2",
                                                            children: "業務効率化"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0",
                                        children: "お問い合わせ"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
{}
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: ./src/pages/_document.tsx




function Document() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "ja",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_document.Head, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,498], () => (__webpack_exec__(7918)));
module.exports = __webpack_exports__;

})();