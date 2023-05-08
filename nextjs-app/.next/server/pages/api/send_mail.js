"use strict";
(() => {
var exports = {};
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
// interface Data {
//   type: string;
//   service: string;
//   name: string;
//   email: string;
//   tel: string;
//   message: string;
// }
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    console.log("---api/send_mail.ts----------------------------");
    const type = req.body.type;
    const service = req.body.service;
    const name = req.body.name;
    const email = req.body.email;
    const tel = req.body.tel;
    const message = req.body.message;
    // console.log( `${ type }, ${ service }, ${ name }, ${ email }, ${ tel }, ${ message }` )
    const nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.contact_g_adress,
            pass: process.env.contact_g_password
        },
        secure: true
    });
    const mailData = {
        from: process.env.contact_g_adress,
        to: process.env.contact_g_adress,
        subject: `${name}様からのお問い合わせ。`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}${service}${tel}</div><p>Sent from:
    ${email}</p>`
    };
    console.log(mailData);
    transporter.sendMail(mailData, function(err, info) {
        if (err) {
            console.log("errです");
            console.log(err);
            res.status(404).json({
                error: `Connection refused at ${err.address}`
            });
        } else {
            console.log("infoです");
            console.log(info);
            res.status(200).json({
                success: `Message delivered to ${info.accepted}`
            });
        }
    });
    // res.status( 200 )
    console.log("---api/send_mail.ts----------------------------");
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7777));
module.exports = __webpack_exports__;

})();