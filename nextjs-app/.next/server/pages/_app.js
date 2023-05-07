(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/sakuraeng.6f3adfc0.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mPYzsDAAMSa2xgYDgLxr51AfCwp++DF3kmaQCmI5H4zt3fn23v/n2vp/H9r5Zr/T4+e+P/l+Yt3f3/+0mTYzaBzcK+c+f8LPRN/Pj915v+nJ0+BCo7/fLTvwP+Hu/cdAin4BTT6//GMgv9A4//vAGKQhj2Spv/3Klv9AirQ+gUy9sP9B//vbtzyf5+h8//dDApArAnEar9Abjj45PDR/+9u3/35+so1oKAGEGv/3MNt8H8Ps95BhrlAR17o6n/3aN/B/+c7+/6fa+r4f7q6EWTVu/22PpoM6xgYQFhzC9AkoOCv/Tbev/Zp2x8EugfsTQBfkowlAj7nigAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _public_sakuraeng_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9663);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// import { useDimensions } from "./useDimention";

// const staggerMenuItems = stagger( 0.1, { startDelay: 0.15 } );
// 
// function useMenuAnimation ( isOpen: boolean ) {
//   const [ scope, animate ] = useAnimate();
// 
//   useEffect( () => {
//     // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
// 
//     animate(
//       "ul",
//       {
//         clipPath: isOpen
//           ? "inset(0% 0% 0% 0% round 10px)"
//           : "inset(10% 50% 90% 50% round 10px)"
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.5
//       }
//     );
// 
//     animate(
//       "li",
//       isOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isOpen ? staggerMenuItems : 0
//       }
//     );
//   }, [ isOpen ] );
// 
//   return scope;
// }
const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.path, {
        // fill="#fff"
        strokeWidth: "3",
        // stroke="rgb(255 255 255)"
        className: "dark:fill-white dark:stroke-gray-100",
        strokeLinecap: "round",
        ...props
    });
const sidebar = {
    open: (height = 1000)=>({
            clipPath: `circle(${height * 2 + 200}px at calc( 100% - 30px ) 40px)`,
            height: "100vh",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
    closed: {
        // clipPath: "circle(30px at 40px 40px)",
        clipPath: "circle(23px at calc( 100% - 28px ) 32px)",
        height: "0vh",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const variants2 = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};
const colors = (/* unused pure expression or super */ null && ([
    "#FF008C",
    "#D309E1",
    "#9C1AFF",
    "#7700FF",
    "#4400FF"
]));
const Header = ()=>{
    // 
    //   const [ isOpen, setIsOpen ] = useState( false );
    //   const scope = useMenuAnimation( isOpen );
    // 
    const [isToggleOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useCycle)(false, true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed flex flex-row items-start justify-between overflow-visible opacity-80 border-gray-200 px-[8vw] mx-auto w-full dark:bg-black bg-white h-14 z-40",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/",
                className: "h-auto pt-2 grid grid-flow-col gap-2 items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_sakuraeng_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                        alt: "sakura eng logo",
                        className: "h-10 w-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hidden md:block text-black text-lg font-semibold whitespace-nowrap dark:text-white",
                        children: "桜エンジニアリング"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.nav, {
                initial: false,
                className: "md:hidden fixed top-0 right-0 bottom-0 opacity-100 w-[70vw] h-screen z-50",
                animate: isToggleOpen ? "open" : "closed",
                variants: sidebar,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                        className: "background h-screen w-[70vw] bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-gray-100 opacity-100",
                        variants: sidebar,
                        animate: isToggleOpen ? "open" : "closed"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.ul, {
                        variants: variants2,
                        className: "fixed top-20 pl-8",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/about",
                                    className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                                    children: "私たちについて"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "grid gap-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/services",
                                    className: "block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-gray-400 text-gray-800",
                                    children: "サービス"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/blog",
                                    className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                                    children: "ブログ"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/contact",
                                    className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                                    children: "お問い合わせ"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>toggleOpen(),
                        className: "fixed top-5 right-4 ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            className: "",
                            width: "23",
                            height: "23",
                            viewBox: "0 0 21 19",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                                    variants: {
                                        closed: {
                                            d: "M 2 2.5 L 20 2.5"
                                        },
                                        open: {
                                            d: "M 3 16.5 L 17 2.5"
                                        }
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                                    d: "M 2 9.423 L 20 9.423",
                                    variants: {
                                        closed: {
                                            opacity: 1
                                        },
                                        open: {
                                            opacity: 0
                                        }
                                    },
                                    transition: {
                                        duration: 0.1
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                                    variants: {
                                        closed: {
                                            d: "M 2 16.346 L 20 16.346"
                                        },
                                        open: {
                                            d: "M 3 2.5 L 17 16.346"
                                        }
                                    }
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "hidden md:grid grid-flow-row md:grid-flow-col pt-4 gap-2 md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/aboutus",
                            className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                            children: "無料お見積もり"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "grid gap-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/services",
                            children: "サービス"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/blog",
                            className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                            children: "ブログ"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/contact",
                            className: "text-gray-900 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white",
                            children: "お問い合わせ"
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/sakuraeng.png
var sakuraeng = __webpack_require__(9663);
;// CONCATENATED MODULE: ./src/components/always/footer/faq/index.tsx

const Faq_homepage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "無料ホームページ作成サイトでホームページを作る際にどのような注意点がありますか？"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "無料ホームページ作成ツールは初めてホームページを作成する方にとって手軽な選択肢ですが、注意が必要です。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "まず、機能の制限がある場合があります。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "無料版では追加機能や独自ドメインを使えない場合があり、商用利用には向いていないこともあります。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "また、無料ツールはセキュリティの問題があることもあります。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "さらに、無料版から有料版へのアップグレードが必要な場合や、機能追加の際に無料だと制限がかかるなど"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "長期的に潜在的なコストがかかることもあります。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "一方、カスタムでホームページを作成することには知識が要するものの複数のメリットがあります。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "まず、自分たちのブランドイメージに合ったデザインを自由に選ぶことができます。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "また、機能やページ数も自由にカスタマイズできます。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "さらに、独自ドメインを使用することで、ブランド認知度を高めることができます。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "そして、セキュリティも自分たちで管理することができます。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "すべての要素を自分たちでコントロールできるため、"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "自分たちのビジネスに最適なホームページを作成することができます。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "カスタムで作成する上で注意することは、"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "長期的なコストを抑えた上で"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "運用者が使いやすい環境を構築することだと考えております。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "What does the free version include?"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: [
                            "The ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline",
                                children: "free version"
                            }),
                            " of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "You can use this version for any purposes, because it is open-source under the MIT license."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "What is the difference between Windster and Tailwind UI?"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "Can I use Windster in open-source projects?"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "With that being said, feel free to use this design kit for your open-source projects."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: [
                            "Find out more information by ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline",
                                children: "reading the license"
                            }),
                            "."
                        ]
                    })
                ]
            })
        ]
    });
};
const Faq_adsns = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {});
};
const Faq_dataanalytics = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "ウェブサイトやSNSのデータ分析にはどのようなメリットがありますか？またその結果の効果的な使い方はなんですか？"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "１：ユーザーの行動分析が可能になる：ウェブサイトやSNSのアクセス数や滞在時間、閲覧ページ、クリック数などのデータを収集・分析することで、ユーザーの行動や嗜好を分析することができます。これにより、どのようなコンテンツが人気なのか、どのような商品が売れているのかなど、貴重な情報を得ることができます。"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "２：ターゲットユーザーの把握が容易になる：データ分析によって、自社のウェブサイトやSNSを訪れるユーザーの属性や行動パターン、嗜好などを分析することができます。これにより、ターゲットユーザーを明確に把握することができます。"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "３：マーケティング施策の改善に役立つ：データ分析の結果を元に、自社のマーケティング施策を改善することができます。例えば、どのようなコンテンツが人気があるのか、どのようなキャンペーンが効果的であるのかなどを把握し、より効果的な施策を展開することができます。"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "Google Analytics4を使うメリットは何ですか？"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Google Analytics4は、データをより詳細かつ網羅的に分析できるようになっており、さまざまなデータソースを統合して分析することができます。また、AIによる自動分析機能や、カスタムデータ分析、予測モデルの作成など、より高度な分析が可能です。"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "インスタグラムの分析はどのように行えますか？"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Google Analytics4では、インスタグラムの分析が可能です。まず、インスタグラムの公式APIを使って、インスタグラムアカウントのアクセストークンを取得します。その後、Google Analytics4の管理画面で、取得したアクセストークンを使ってインスタグラムアカウントを連携させます。これにより、インスタグラムのフォロワー数や投稿数、エンゲージメント率などのデータを分析することができます。"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                        className: "flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                className: "flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400",
                                fill: "currentColor",
                                viewBox: "0 0 20 20",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                    clipRule: "evenodd"
                                })
                            }),
                            "Google Analytics4ではどのようなデータを取得することができますか？"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Google Analytics4で取得できるデータは、ウェブサイトやSNSのアクセス数、セッション数、ページビュー数、ユーザー属性、コンバージョン率、各種イベントの発生数、ページの流入元など、様々なデータがあります。また、Google Analytics4では、AIによる自動分析機能もあり、自動的にトレンドや予測を表示することができます。"
                    })
                ]
            })
        ]
    });
};
const Faq = ()=>{
    {}
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-white dark:bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white",
                    children: "よくある質問"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Faq_dataanalytics, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Faq_homepage, {})
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/components/pages_c/contact/index.tsx
var contact = __webpack_require__(3143);
;// CONCATENATED MODULE: ./src/components/always/footer/index.tsx






const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Faq, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ jsx_runtime_.jsx(contact/* Constact */.v, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "p-[10vw] bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full flex flex-col md:flex-row py-6 items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-1 items-start mb-6 text-black",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/",
                                className: "flex h-min items-end",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: sakuraeng/* default */.Z,
                                        alt: "sakura eng logo",
                                        className: "h-10 w-10"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-lg font-semibold whitespace-nowrap",
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
                                                href: "/blog",
                                                className: "no-underline hover:underline text-gray-800 hover:text-pink-500",
                                                children: "ブログ"
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
        ]
    });
};


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_always_Header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7806);
/* harmony import */ var _components_always_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7122);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_always_Header_index__WEBPACK_IMPORTED_MODULE_2__]);
_components_always_Header_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function App({ Component , pageProps  }) {
    return(// 以下はid="__next"のディブタグにまとめられる
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_always_Header_index__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .h, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_always_footer_index__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [488,664,760,636,675,143], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();