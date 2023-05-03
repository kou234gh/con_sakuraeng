"use strict";
exports.id = 900;
exports.ids = [900];
exports.modules = {

/***/ 4900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Constact)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Constact = ()=>{
    const [mailerState, setMailerState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        type: "",
        service: "",
        name: "",
        email: "",
        tel: "",
        message: ""
    });
    function handleStateChange(e) {
        setMailerState((prevState)=>({
                ...prevState,
                [e.target.name]: e.target.value
            }));
        console.log("inputed");
    }
    const submitEmail = async (e)=>{
        e.preventDefault();
        console.log({
            mailerState
        });
        console.log("submited Email");
        // const response = await fetch("https://api.sakura-eng.net", {
        // ↑2023/02/21削除代入いらない（？）
        await fetch("/api/send_mail", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(mailerState)
        }).then((response)=>{
            if (!response.ok) {
                // console.error("41行めのエラー")
                console.error("response.ok:", response.ok);
                console.error("esponse.status:", response.status);
                console.error("esponse.statusText:", response.statusText);
                alert("送信に失敗しました。");
                throw new Error(response.statusText);
            }
            alert("メッセージの送信に成功しました");
            response.json();
        }).then(()=>{
            setMailerState({
                type: "",
                service: "",
                name: "",
                email: "",
                tel: "",
                message: ""
            });
        }).catch((error)=>{
            alert("現在通信エラーが発生しております。");
            console.error("通信に失敗しました。これはcatch内のエラー文です。", error);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "contact",
        className: "w-full md:w-2/3 p-5 md:p-10 border-slate-500 border-[1px] rounded-md text-gray-900 dark:text-gray-200",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "ご連絡"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: submitEmail,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                    className: "grid grid-cols-1 gap-6 text-gray-800",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: [
                                        "お問い合わせの種類",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "dark:text-red-400 text-red-700",
                                            children: "（必須）"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "text-sm h-10 w-full max-w-xs p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md",
                                    // placeholder=""
                                    onChange: handleStateChange,
                                    name: "type",
                                    value: mailerState.type,
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "---こちらから選択してください---",
                                            children: "---こちらから選択してください---"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "まずは相談したい",
                                            children: "まずは相談したい"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "申し込みをしたい",
                                            children: "申し込みをしたい"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "その他のお問い合わせ",
                                            children: "その他のお問い合わせ"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: [
                                        "ご希望のサービス",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "dark:text-red-400 text-red-700",
                                            children: "（必須）"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    className: "text-sm h-10 w-full max-w-xs p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md",
                                    // placeholder=""
                                    onChange: handleStateChange,
                                    name: "service",
                                    value: mailerState.service,
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "---こちらから選択してください---",
                                            children: "---こちらから選択してください。---"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "PCやIT周りについて相談したい or 整備を依頼したい",
                                            children: "PCやIT周りについて相談したい or 整備を依頼したい"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "お店のホームページについて相談したい or 依頼したい",
                                            children: "お店のホームページについて相談したい or 依頼したい"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "迷っている・よくわからない",
                                            children: "迷っている・よくわからない"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "その他",
                                            children: "その他"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: [
                                        "お名前 or 会社名",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "dark:text-red-400 text-red-700",
                                            children: "（必須）"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "w-full max-w-xs text-sm h-10 p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md",
                                    placeholder: "例）山田 花子, 株式会社〇〇 山田太郎 ",
                                    onChange: handleStateChange,
                                    name: "name",
                                    value: mailerState.name,
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: [
                                        "お電話番号",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "dark:text-red-400 text-red-700",
                                            children: "（必須）"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "text-sm h-10  md:w-min p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md",
                                    placeholder: "例）00-0000-0000",
                                    onChange: handleStateChange,
                                    name: "tel",
                                    value: mailerState.tel
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: "メールアドレス"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: "text-sm h-10  md:w-min p-2 border-[1px] border-[#999999] bg-[#ffffff] rounded-md",
                                    placeholder: "example@gmail.com",
                                    onChange: handleStateChange,
                                    name: "email",
                                    value: mailerState.email,
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "dark:text-gray-200 text-gray-800 text-base p-2 font-normal",
                                    children: "ご相談内容・ご質問・その他"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "w-full text-sm h-80 p-3 border-[1px] border-[#999999] rounded-md font-light",
                                    placeholder: "こちらに入力してください。",
                                    onChange: handleStateChange,
                                    name: "message",
                                    value: mailerState.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            className: "w-[200px] text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",
                            children: "上記の内容で送信する"
                        })
                    ]
                })
            })
        ]
    });
};


/***/ })

};
;