(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/assets/styles/base.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/assets/styles/base.scss ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Base | Styles\n ******************************************/\n@font-face {\n  font-family: countdown;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/countdown.ttf */ "./src/assets/fonts/countdown.ttf")) + "); }\n\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Reboot | Styles\n ******************************************/\ndl,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nol,\np,\npre,\nul {\n  margin-top: 0; }\n\naddress,\ndl,\nol,\np,\npre,\nul {\n  margin-bottom: 1rem; }\n\nbody,\ncaption {\n  text-align: left; }\n\nbutton,\nhr,\ninput {\n  overflow: visible; }\n\npre,\ntextarea {\n  overflow: auto; }\n\ndiv {\n  display: flex; }\n\narticle,\naside,\ndialog,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nlegend,\nmain,\nnav,\nsection {\n  display: block; }\n\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nlabel,\nlegend {\n  margin-bottom: 0; }\n\naddress,\nlegend {\n  line-height: inherit; }\n\nprogress,\nsub,\nsup {\n  vertical-align: baseline; }\n\nlabel,\noutput {\n  display: inline-block; }\n\n*,\n::after,\n::before {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\n@-ms-viewport {\n  width: device-width; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff; }\n\n[tabindex='-1']:focus {\n  outline: 0 !important; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\nabbr[data-original-title],\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\n\naddress {\n  font-style: normal; }\n\nol ol,\nol ul,\nul ol,\nul ul {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-left: 0; }\n\nblockquote,\nfigure {\n  margin: 0 0 1rem; }\n\ndfn {\n  font-style: italic; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\na {\n  color: #222222;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\n\na:hover {\n  text-decoration: none; }\n\na:not([href]):not([tabindex]),\na:not([href]):not([tabindex]):focus,\na:not([href]):not([tabindex]):hover {\n  text-decoration: none; }\n\na:not([href]):not([tabindex]):focus {\n  outline: 0; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\npre {\n  -ms-overflow-style: scrollbar; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\n[role='button'],\na,\narea,\nbutton,\ninput:not([type='range']),\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #868e96;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nbutton {\n  border-radius: 0; }\n\nbutton:focus {\n  outline: dotted 1px;\n  outline: -webkit-focus-ring-color auto 5px; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\nselect {\n  text-transform: none; }\n\n[type='reset'],\n[type='submit'],\nbutton,\nhtml [type='button'] {\n  -webkit-appearance: button; }\n\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type='radio'],\ninput[type='checkbox'] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type='date'],\ninput[type='time'],\ninput[type='datetime-local'],\ninput[type='month'] {\n  -webkit-appearance: listbox; }\n\ntextarea {\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  font-size: 1.5rem;\n  color: inherit;\n  white-space: normal; }\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto; }\n\n[type='search'] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n\n[type='search']::-webkit-search-cancel-button,\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\nsummary {\n  display: list-item; }\n\ntemplate {\n  display: none; }\n\n[hidden] {\n  display: none !important; }\n\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Body | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\nbody {\n  margin: 0;\n  background-color: #ffffff; }\n\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Wildcard | Styles\n ******************************************/\n* {\n  letter-spacing: none;\n  color: #222;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch;\n  font-family: 'M PLUS Rounded 1c', sans-serif; }\n\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Buttons | Styles\n ******************************************/\nbutton {\n  cursor: pointer; }\n  button:hover {\n    opacity: 0.8; }\n\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Notification | Styles\n ******************************************/\n.notification__wrapper {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100vw;\n  min-height: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between; }\n\n.notification__message-wrapper {\n  padding: 1rem;\n  text-align: center;\n  width: calc(100% - 50px); }\n\n.notification__button-wrapper {\n  width: 50px;\n  text-align: center; }\n\n.notification__button {\n  font-size: 1.3rem;\n  height: 50px;\n  width: 50px;\n  background: none;\n  border: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Bubble/styles/Bubble.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Bubble/styles/Bubble.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Bubble | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.bubble {\n  flex-direction: column;\n  padding: 0.2rem;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  margin: 0.25rem 0;\n  max-width: 75%;\n  flex: 1 0 55px; }\n  .bubble .bubble__message {\n    font-weight: 900;\n    font-size: 14px; }\n  .bubble .bubble__timestamp {\n    font-size: 10px;\n    color: #444444; }\n  .bubble.received {\n    background: #8860d0;\n    align-self: flex-start; }\n    .bubble.received .bubble__message {\n      color: #ffffff; }\n    .bubble.received .bubble__timestamp {\n      align-self: flex-start;\n      color: #444444; }\n  .bubble.sent {\n    background: #c1c8e4;\n    align-self: flex-end;\n    color: #222222; }\n    .bubble.sent .bubble__timestamp {\n      align-self: flex-end; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Button/styles/Button.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Button/styles/Button.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Button | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.button {\n  height: 30px;\n  flex: 0 0 30px;\n  background: #7550c3;\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center; }\n  .button__icon {\n    height: 15px;\n    margin-right: -2px;\n    margin-bottom: -2px;\n    fill: #ffffff; }\n  .button:focus {\n    box-shadow: 0 0 0 1px #8860d0;\n    outline: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Countdown/styles/Countdown.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Countdown/styles/Countdown.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Countdown | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.countdown {\n  font-family: countdown;\n  font-size: 20px;\n  width: 131px;\n  font-weight: 500; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Input/styles/Input.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Input/styles/Input.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Input | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.input {\n  border: 1px solid #c1c1c1;\n  border-radius: 25px;\n  height: 30px;\n  line-height: 30px;\n  font-size: 15px;\n  padding: 0 1rem;\n  flex: 1 0 200px;\n  margin-right: 1rem; }\n  .input::-webkit-input-placeholder {\n    color: #c1c1c1; }\n  .input::-ms-input-placeholder {\n    color: #c1c1c1; }\n  .input::placeholder {\n    color: #c1c1c1; }\n  .input:focus {\n    box-shadow: 0 0 0 1px #8860d0;\n    outline: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Spinner/styles/Spinner.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Spinner/styles/Spinner.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Spinner | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\nsvg.spinner {\n  width: 40px;\n  height: 40px;\n  x: 0px;\n  y: 0px;\n  viewbox: 0 0 40 40; }\n  svg.spinner circle {\n    fill: transparent;\n    stroke: #ffffff;\n    stroke-width: 4;\n    stroke-linecap: round;\n    stroke-dasharray: 125.6;\n    -webkit-transform-origin: 20px 20px 0;\n    transform-origin: 20px 20px 0;\n    -webkit-animation: spinner 2s linear infinite;\n    animation: spinner 2s linear infinite; }\n\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    stroke-dashoffset: 26.4; }\n  50% {\n    -webkit-transform: rotate(720deg);\n    stroke-dashoffset: 125.6; }\n  100% {\n    -webkit-transform: rotate(1080deg);\n    stroke-dashoffset: 26.4; } }\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    stroke-dashoffset: 26.4; }\n  50% {\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n    stroke-dashoffset: 125.6; }\n  100% {\n    -webkit-transform: rotate(1080deg);\n            transform: rotate(1080deg);\n    stroke-dashoffset: 26.4; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Header/styles/Header.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Header/styles/Header.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Header | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.header {\n  width: 100vw;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.85);\n  border-bottom: 1px solid #c1c8e4;\n  border-top: 4px solid #8860d0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  padding: 0 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .header__logo {\n    height: 20px;\n    margin-top: -4px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageConversation/styles/MessageConversation.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageConversation/styles/MessageConversation.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * MessageConversation | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.messageconversation {\n  padding: 60px 1rem 60px 1rem;\n  flex-direction: column;\n  overflow: scroll; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageInput/styles/MessageInput.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageInput/styles/MessageInput.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * MessageInput | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.messageinput {\n  width: 100%;\n  height: 50px;\n  border-top: 1px solid #c1c1c1;\n  background: rgba(255, 255, 255, 0.85);\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n  position: fixed;\n  bottom: 0;\n  left: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Profile/styles/Profile.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Profile/styles/Profile.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Profile | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.profile {\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #ffffff;\n  padding: 2rem; }\n  .profile__picture {\n    width: 30%;\n    border-radius: 50%; }\n  .profile__name {\n    margin: 1rem 0; }\n  .profile__bio {\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Swiper/styles/Swiper.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Swiper/styles/Swiper.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Swiper | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.swiper {\n  display: block;\n  height: 100vh;\n  width: 100vw;\n  overflow-x: scroll; }\n  .swiper__wrapper {\n    width: 300%;\n    height: 100%; }\n    .swiper__wrapper > div {\n      width: calc(100% / 3); }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Home/styles/Home.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Home/styles/Home.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Home | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.home {\n  background: #eae6ed; }\n  .home .message-center {\n    flex-direction: column;\n    position: relative; }\n    .home .message-center > *:nth-child(2) {\n      flex: 1 0 50%; }\n    .home .message-center > *:last-child {\n      flex: 0 0 50px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Login/styles/Login.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Login/styles/Login.scss ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*******************************************\n * © 2018 Charlie Hay\n * ---------------------\n * Login | Styles\n ******************************************/\n/*******************************************\n * © 2019 Charlie Hay\n * ---------------------\n * Variable | Styles\n ******************************************/\n/* Shades */\n/* Purple */\n/* Blue */\n/* Media Width */\n.login {\n  height: 100vh;\n  width: 100vw;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: url(" + escape(__webpack_require__(/*! ../../../../assets/images/wallpaper.jpg */ "./src/assets/images/wallpaper.jpg")) + ") no-repeat center;\n  background-size: 100%; }\n  .login__logo {\n    width: 80%;\n    max-width: 300px;\n    margin-bottom: 1rem; }\n  .login .firebaseui-container {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center; }\n", ""]);

// exports


/***/ }),

/***/ "./src/assets/fonts/countdown.ttf":
/*!****************************************!*\
  !*** ./src/assets/fonts/countdown.ttf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/countdown.1e670d88.ttf";

/***/ }),

/***/ "./src/assets/images/charlie.png":
/*!***************************************!*\
  !*** ./src/assets/images/charlie.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/charlie.bc7d5e43.png";

/***/ }),

/***/ "./src/assets/images/logo-black.png":
/*!******************************************!*\
  !*** ./src/assets/images/logo-black.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/phillip.png":
/*!***************************************!*\
  !*** ./src/assets/images/phillip.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/phillip.ef404bfe.png";

/***/ }),

/***/ "./src/assets/images/wallpaper.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/wallpaper.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wallpaper.c937c18b.jpg";

/***/ }),

/***/ "./src/assets/styles/base.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/assets/styles/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/assets/styles/base.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/assets/styles/base.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/Bubble/Bubble.js":
/*!***********************************************!*\
  !*** ./src/components/atoms/Bubble/Bubble.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Bubble_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Bubble.scss */ "./src/components/atoms/Bubble/styles/Bubble.scss");
/* harmony import */ var _styles_Bubble_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Bubble_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/atoms/Bubble/Bubble.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Bubble | Component
 ******************************************/



function Bubble(_ref) {
  var type = _ref.type,
      time = _ref.time,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bubble ".concat(type),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bubble__message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bubble__timestamp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, time));
}

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

/***/ }),

/***/ "./src/components/atoms/Bubble/styles/Bubble.scss":
/*!********************************************************!*\
  !*** ./src/components/atoms/Bubble/styles/Bubble.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Bubble.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Bubble/styles/Bubble.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Bubble.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Bubble/styles/Bubble.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Bubble.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Bubble/styles/Bubble.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/Button/Button.js":
/*!***********************************************!*\
  !*** ./src/components/atoms/Button/Button.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.mjs");
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Button.scss */ "./src/components/atoms/Button/styles/Button.scss");
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/atoms/Button/Button.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Button | Component
 ******************************************/




function Button(_ref) {
  var onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdSend"], {
    className: "button__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/atoms/Button/styles/Button.scss":
/*!********************************************************!*\
  !*** ./src/components/atoms/Button/styles/Button.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Button/styles/Button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Button/styles/Button.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Button.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Button/styles/Button.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/Countdown/Countdown.js":
/*!*****************************************************!*\
  !*** ./src/components/atoms/Countdown/Countdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Countdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Countdown.scss */ "./src/components/atoms/Countdown/styles/Countdown.scss");
/* harmony import */ var _styles_Countdown_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Countdown_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/atoms/Countdown/Countdown.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Countdown | Component
 ******************************************/




function Countdown(_ref) {
  var endTime = _ref.endTime;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(endTime),
      _useState2 = Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      timeLeft = _useState2[0],
      setTimeLeft = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setTimeLeft(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(timeLeft - new Date().getTime(), 'hh:mm:ss'));
    var interval = setInterval(function () {
      var now = new Date().getTime();
      setTimeLeft(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(timeLeft - now, 'hh:mm:ss'));
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "countdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Expires: ", timeLeft);
}

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./src/components/atoms/Countdown/styles/Countdown.scss":
/*!**************************************************************!*\
  !*** ./src/components/atoms/Countdown/styles/Countdown.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Countdown.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Countdown/styles/Countdown.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Countdown.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Countdown/styles/Countdown.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Countdown.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Countdown/styles/Countdown.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/Input/Input.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/Input/Input.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Input_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Input.scss */ "./src/components/atoms/Input/styles/Input.scss");
/* harmony import */ var _styles_Input_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Input_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/atoms/Input/Input.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Input | Component
 ******************************************/


var Input = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (_ref, ref) {
  var onKeyPress = _ref.onKeyPress;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var handleEnter = function handleEnter(e) {
    if (e.key === 'Enter') {
      return onKeyPress();
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "input",
    placeholder: "Say Something..",
    ref: ref,
    value: text,
    onChange: function onChange() {
      return setText(ref.current.value);
    },
    onKeyPress: handleEnter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/atoms/Input/styles/Input.scss":
/*!******************************************************!*\
  !*** ./src/components/atoms/Input/styles/Input.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Input.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Input/styles/Input.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Input.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Input/styles/Input.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Input.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Input/styles/Input.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/atoms/Spinner/Spinner.js":
/*!*************************************************!*\
  !*** ./src/components/atoms/Spinner/Spinner.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Spinner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/Spinner.scss */ "./src/components/atoms/Spinner/styles/Spinner.scss");
/* harmony import */ var _styles_Spinner_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Spinner_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/atoms/Spinner/Spinner.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Spinner | Component
 ******************************************/



function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "spinner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "18",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/components/atoms/Spinner/styles/Spinner.scss":
/*!**********************************************************!*\
  !*** ./src/components/atoms/Spinner/styles/Spinner.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Spinner.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Spinner/styles/Spinner.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Spinner.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Spinner/styles/Spinner.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Spinner.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/atoms/Spinner/styles/Spinner.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/elements/Header/Header.js":
/*!**************************************************!*\
  !*** ./src/components/elements/Header/Header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.mjs");
/* harmony import */ var _assets_images_logo_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/logo-black.png */ "./src/assets/images/logo-black.png");
/* harmony import */ var _assets_images_logo_black_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_black_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Countdown/Countdown */ "./src/components/atoms/Countdown/Countdown.js");
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Header.scss */ "./src/components/elements/Header/styles/Header.scss");
/* harmony import */ var _styles_Header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/elements/Header/Header.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Header | Component
 ******************************************/






function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "header__logo",
    alt: "fotd logo",
    src: _assets_images_logo_black_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Countdown_Countdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    endTime: "1523071729543",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/elements/Header/styles/Header.scss":
/*!***********************************************************!*\
  !*** ./src/components/elements/Header/styles/Header.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Header.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Header/styles/Header.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Header.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Header/styles/Header.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Header.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Header/styles/Header.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/elements/MessageConversation/MessageConversation.js":
/*!****************************************************************************!*\
  !*** ./src/components/elements/MessageConversation/MessageConversation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_Bubble_Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms/Bubble/Bubble */ "./src/components/atoms/Bubble/Bubble.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_MessageConversation_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/MessageConversation.scss */ "./src/components/elements/MessageConversation/styles/MessageConversation.scss");
/* harmony import */ var _styles_MessageConversation_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_MessageConversation_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/elements/MessageConversation/MessageConversation.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageConversation | Component
 ******************************************/






function MessageConversation(_ref) {
  var user = _ref.user,
      messages = _ref.messages;
  var convoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    convoRef.current.scroll(0, convoRef.current.scrollHeight);
  }, [messages]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "messageconversation",
    ref: convoRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, messages.map(function (message, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Bubble_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      type: message.sid === user.uid ? 'sent' : 'received',
      time: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(message.timestamp, 'h:mm A'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, message.text);
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.messages,
    user: state.user
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MessageConversation));

/***/ }),

/***/ "./src/components/elements/MessageConversation/styles/MessageConversation.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/elements/MessageConversation/styles/MessageConversation.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageConversation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageConversation/styles/MessageConversation.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageConversation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageConversation/styles/MessageConversation.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageConversation.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageConversation/styles/MessageConversation.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/elements/MessageInput/MessageInput.js":
/*!**************************************************************!*\
  !*** ./src/components/elements/MessageInput/MessageInput.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button/Button */ "./src/components/atoms/Button/Button.js");
/* harmony import */ var _atoms_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Input/Input */ "./src/components/atoms/Input/Input.js");
/* harmony import */ var _lib_Redux_Redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lib/Redux/Redux */ "./src/lib/Redux/Redux.js");
/* harmony import */ var _styles_MessageInput_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/MessageInput.scss */ "./src/components/elements/MessageInput/styles/MessageInput.scss");
/* harmony import */ var _styles_MessageInput_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MessageInput_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/elements/MessageInput/MessageInput.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * MessageInput | Component
 ******************************************/







function MessageInput(_ref) {
  var uid = _ref.user.uid,
      setMessage = _ref.setMessage;
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

  var addMessageToRedux = function addMessageToRedux() {
    var value = inputRef.current.value;

    if (value !== '') {
      setMessage({
        sid: uid,
        timestamp: new Date().getTime(),
        text: value
      });
      inputRef.current.value = '';
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "messageinput",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: inputRef,
    onKeyPress: addMessageToRedux,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: addMessageToRedux,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {
  setMessage: _lib_Redux_Redux__WEBPACK_IMPORTED_MODULE_4__["setMessage"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MessageInput));

/***/ }),

/***/ "./src/components/elements/MessageInput/styles/MessageInput.scss":
/*!***********************************************************************!*\
  !*** ./src/components/elements/MessageInput/styles/MessageInput.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageInput.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageInput/styles/MessageInput.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageInput.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageInput/styles/MessageInput.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./MessageInput.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/MessageInput/styles/MessageInput.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/elements/Profile/Profile.js":
/*!****************************************************!*\
  !*** ./src/components/elements/Profile/Profile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _assets_images_charlie_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/charlie.png */ "./src/assets/images/charlie.png");
/* harmony import */ var _assets_images_charlie_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_charlie_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_phillip_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/phillip.png */ "./src/assets/images/phillip.png");
/* harmony import */ var _assets_images_phillip_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_phillip_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Profile_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Profile.scss */ "./src/components/elements/Profile/styles/Profile.scss");
/* harmony import */ var _styles_Profile_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Profile_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/elements/Profile/Profile.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Profile | Component
 ******************************************/






function Profile(_ref) {
  var user = _ref.user,
      partner = _ref.partner,
      type = _ref.type;

  var _ref2 = type === 'user' ? user : partner,
      uid = _ref2.uid,
      name = _ref2.name,
      picture = _ref2.picture,
      bio = _ref2.bio;

  picture = type === 'user' ? _assets_images_charlie_png__WEBPACK_IMPORTED_MODULE_2___default.a : _assets_images_phillip_png__WEBPACK_IMPORTED_MODULE_3___default.a;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "profile__picture",
    alt: "profile picture",
    src: picture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "profile__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "profile__bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, bio));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    partner: state.partner
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Profile));

/***/ }),

/***/ "./src/components/elements/Profile/styles/Profile.scss":
/*!*************************************************************!*\
  !*** ./src/components/elements/Profile/styles/Profile.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Profile.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Profile/styles/Profile.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Profile.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Profile/styles/Profile.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Profile.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Profile/styles/Profile.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/elements/Swiper/Swiper.js":
/*!**************************************************!*\
  !*** ./src/components/elements/Swiper/Swiper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_StickyScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/StickyScroll */ "./src/helpers/StickyScroll/index.js");
/* harmony import */ var _styles_Swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Swiper.scss */ "./src/components/elements/Swiper/styles/Swiper.scss");
/* harmony import */ var _styles_Swiper_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Swiper_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/elements/Swiper/Swiper.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Swiper | Component
 ******************************************/




function Swiper(_ref) {
  var children = _ref.children;
  var swiperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = swiperRef.current;
    Object(_helpers_StickyScroll__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
    return function () {
      return el.removeEventListener('scroll', function () {
        return console.log('removed event');
      });
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "swiper",
    ref: swiperRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "swiper__wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./src/components/elements/Swiper/styles/Swiper.scss":
/*!***********************************************************!*\
  !*** ./src/components/elements/Swiper/styles/Swiper.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Swiper.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Swiper/styles/Swiper.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Swiper.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Swiper/styles/Swiper.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Swiper.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/elements/Swiper/styles/Swiper.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/pages/Home/Home.js":
/*!*******************************************!*\
  !*** ./src/components/pages/Home/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/Swiper/Swiper */ "./src/components/elements/Swiper/Swiper.js");
/* harmony import */ var _elements_MessageInput_MessageInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/MessageInput/MessageInput */ "./src/components/elements/MessageInput/MessageInput.js");
/* harmony import */ var _elements_MessageConversation_MessageConversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/MessageConversation/MessageConversation */ "./src/components/elements/MessageConversation/MessageConversation.js");
/* harmony import */ var _elements_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/Header/Header */ "./src/components/elements/Header/Header.js");
/* harmony import */ var _elements_Profile_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/Profile/Profile */ "./src/components/elements/Profile/Profile.js");
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Home.scss */ "./src/components/pages/Home/styles/Home.scss");
/* harmony import */ var _styles_Home_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/pages/Home/Home.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Home | Component
 ******************************************/








function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Swiper_Swiper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "their-profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Profile_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "partner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_MessageConversation_MessageConversation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_MessageInput_MessageInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements_Profile_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/pages/Home/styles/Home.scss":
/*!****************************************************!*\
  !*** ./src/components/pages/Home/styles/Home.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Home/styles/Home.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Home/styles/Home.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Home.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Home/styles/Home.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/pages/Login/Login.js":
/*!*********************************************!*\
  !*** ./src/components/pages/Login/Login.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_firebaseui_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-firebaseui/FirebaseAuth */ "./node_modules/react-firebaseui/FirebaseAuth.js");
/* harmony import */ var react_firebaseui_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/Firebase/Firebase */ "./src/lib/Firebase/Firebase.js");
/* harmony import */ var _atoms_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Spinner/Spinner */ "./src/components/atoms/Spinner/Spinner.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Login.scss */ "./src/components/pages/Login/styles/Login.scss");
/* harmony import */ var _styles_Login_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/components/pages/Login/Login.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Login | Component
 ******************************************/







function Login(_ref) {
  var auth = _ref.auth;
  var switchSpinnerAuthPane = auth === 'spinner' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_firebaseui_FirebaseAuth__WEBPACK_IMPORTED_MODULE_1___default.a, {
    uiConfig: _lib_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__["uiConfig"],
    firebaseAuth: _lib_Firebase_Firebase__WEBPACK_IMPORTED_MODULE_2__["firebase"].auth(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "login__logo",
    alt: "fotd logo",
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), switchSpinnerAuthPane);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/pages/Login/styles/Login.scss":
/*!******************************************************!*\
  !*** ./src/components/pages/Login/styles/Login.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Login.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Login/styles/Login.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Login.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Login/styles/Login.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-oneOf-5-1!../../../../../node_modules/postcss-loader/src??postcss!../../../../../node_modules/sass-loader/lib/loader.js!./Login.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/components/pages/Login/styles/Login.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/config/routes.json":
/*!********************************!*\
  !*** ./src/config/routes.json ***!
  \********************************/
/*! exports provided: HOME, default */
/***/ (function(module) {

module.exports = {"HOME":"/"};

/***/ }),

/***/ "./src/helpers/Notification/Notification.js":
/*!**************************************************!*\
  !*** ./src/helpers/Notification/Notification.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Notification | Persistant Info Boxes
 ******************************************/
var Notification = function Notification() {
  var _this = this;

  Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Notification);

  this.show = function (color, text) {
    _this.color = _this.colorCode(color);

    _this.appendChildren(_this.color, text);

    _this.toggleVisibility();

    _this.createButtonListener();
  };

  this.hide = function () {
    clearTimeout(_this.timeout);
    _this.listening && _this.button.removeEventListener('click', function () {});

    _this.toggleVisibility();

    _this.element.innerHTML = '';
  };

  this.createButtonListener = function () {
    _this.button = document.querySelector('.notification__button');

    _this.button.addEventListener('click', function () {
      return _this.hide();
    });

    _this.listening = true;
  };

  this.colorCode = function (color) {
    switch (color) {
      case 'green':
        return '#15cd72;';

      case 'yellow':
        return '#ede04d;';

      case 'red':
        return '#e1636f';

      default:
        return '#49b8c3;';
    }
  };

  this.toggleVisibility = function () {
    var classes = _this.element.classList;
    return classes.contains('visible') ? classes.remove('visible') : classes.add('visible');
  };

  this.appendChildren = function (color, text) {
    _this.element.innerHTML = "\n    <div class=\"notification__wrapper\" style=\"background-color: ".concat(color, "\">\n      <div class=\"notification__message-wrapper\">").concat(text, "</div>\n      <div class=\"notification__button-wrapper\">\n        <button class=\"notification__button\">&times;</button>\n      </div>\n    </div>");
  };

  this.element = document.querySelector('.notification');
  this.listening = false;
};

window.notification = new Notification();

/***/ }),

/***/ "./src/helpers/StickyScroll/helpers/detectBrowser.js":
/*!***********************************************************!*\
  !*** ./src/helpers/StickyScroll/helpers/detectBrowser.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! detect-browser */ "./node_modules/detect-browser/index.js");
/* harmony import */ var detect_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(detect_browser__WEBPACK_IMPORTED_MODULE_0__);


function detectBroswer() {
  var information = Object(detect_browser__WEBPACK_IMPORTED_MODULE_0__["detect"])();

  var getOS = function getOS() {
    var os = information.os;

    switch (os) {
      case 'Mac OS':
        return 'macos';

      default:
        return undefined;
    }
  };

  var getBrowser = function getBrowser() {
    var browser = information.name;

    switch (browser) {
      case 'chrome':
        return 'chrome';

      default:
        return undefined;
    }
  };

  var init = function init() {
    var os = getOS();
    var browser = getBrowser();

    if (browser && os) {
      console.log("Browser: ".concat(os, "-").concat(browser));
      return "".concat(os, "-").concat(browser);
    }
  };

  if (information && information.os) {
    return init();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (detectBroswer);

/***/ }),

/***/ "./src/helpers/StickyScroll/index.js":
/*!*******************************************!*\
  !*** ./src/helpers/StickyScroll/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_detectBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/detectBrowser */ "./src/helpers/StickyScroll/helpers/detectBrowser.js");

var browser = Object(_helpers_detectBrowser__WEBPACK_IMPORTED_MODULE_0__["default"])();
var library = {
  default: function _default() {
    return alert('STICKY SCROLL: BROWSER NOT SUPPORTED');
  }
};
if (browser === 'macos-chrome') library = __webpack_require__(/*! ./lib/macos/chrome */ "./src/helpers/StickyScroll/lib/macos/chrome/index.js");
/* harmony default export */ __webpack_exports__["default"] = (function (element) {
  return library.default(element);
});

/***/ }),

/***/ "./src/helpers/StickyScroll/lib/macos/chrome/index.js":
/*!************************************************************!*\
  !*** ./src/helpers/StickyScroll/lib/macos/chrome/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function macOsChrome(element) {
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };
  var paused = false;
  var anchor = null;

  var init = function init() {
    windowResize();
    initialPosition();
    createScrollListener();
  };

  var windowResize = function windowResize() {
    window.addEventListener('resize', function () {
      anchor = element.offsetWidth;
      initialPosition();
    });
  };

  var initialPosition = function initialPosition() {
    return element.scroll(element.offsetWidth, 0);
  };

  var createScrollListener = function createScrollListener() {
    anchor = element.scrollLeft;
    element.addEventListener('scroll', function (e) {
      return scrollEvent();
    });
  };

  var scrollEvent = function scrollEvent() {
    if (element.scrollLeft !== anchor && !paused) {
      paused = true;
      anchor = element.scrollLeft < anchor ? anchor - element.offsetWidth : anchor + element.offsetWidth;
      disableScroll(scrollToAnchor);
    }
  };

  var preventDefault = function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  };

  var preventDefaultForScrollKeys = function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  var disableScroll = function disableScroll(callback) {
    if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard

      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

      window.ontouchmove = preventDefault; // mobile

      document.onkeydown = preventDefaultForScrollKeys;
      callback();
    }
  };

  var enableScroll = function enableScroll() {
    if (window.removeEventListener) {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    }
  };

  var scrollToAnchor = function scrollToAnchor() {
    element.scroll({
      top: 0,
      left: anchor,
      behavior: 'smooth'
    });
    resetListener();
  };

  var resetListener = function resetListener() {
    setTimeout(function () {
      paused = false;
      enableScroll();
    }, 1500);
  };

  init();
}

/* harmony default export */ __webpack_exports__["default"] = (macOsChrome);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _lib_Redux_Redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/Redux/Redux */ "./src/lib/Redux/Redux.js");
/* harmony import */ var _lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/Routes/Routes */ "./src/lib/Routes/Routes.js");
/* harmony import */ var _helpers_Notification_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/Notification/Notification */ "./src/helpers/Notification/Notification.js");
/* harmony import */ var _assets_styles_base_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/styles/base.scss */ "./src/assets/styles/base.scss");
/* harmony import */ var _assets_styles_base_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_base_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/index.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Index | React Application
 ******************************************/








react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _lib_Redux_Redux__WEBPACK_IMPORTED_MODULE_4__["store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_Routes_Routes__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), document.getElementById('root'));

/***/ }),

/***/ "./src/lib/Firebase/Firebase.js":
/*!**************************************!*\
  !*** ./src/lib/Firebase/Firebase.js ***!
  \**************************************/
/*! exports provided: firebase, uiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiConfig", function() { return uiConfig; });
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _config_routes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/routes.json */ "./src/config/routes.json");
var _config_routes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config/routes.json */ "./src/config/routes.json", 1);


/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Firebase | Dynamic Routing
 ******************************************/




var Firebase = function Firebase() {
  Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Firebase);

  this.config = {
    apiKey: "AIzaSyBnX6lcPlzVINrPYOZ5Wt9YQa_G-PYbhOU",
    authDomain: "friendoftheday-com.firebaseapp.com",
    databaseURL: "https://friendoftheday-com.firebaseio.com",
    projectId: "friendoftheday-com",
    storageBucket: "",
    messagingSenderId: "261195287331"
  };
  this.uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: "".concat(_config_routes_json__WEBPACK_IMPORTED_MODULE_3__.MESSENGER),
    signInOptions: [firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth.GoogleAuthProvider.PROVIDER_ID, firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.auth.FacebookAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: function signInSuccessWithAuthResult() {
        return false;
      }
    }
  };
  this.firebase = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a;
  this.firebase.initializeApp(this.config);
};

var _ref = new Firebase(),
    firebase = _ref.firebase,
    uiConfig = _ref.uiConfig;



/***/ }),

/***/ "./src/lib/Redux/Redux.js":
/*!********************************!*\
  !*** ./src/lib/Redux/Redux.js ***!
  \********************************/
/*! exports provided: setMessage, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMessage", function() { return setMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaultMessages_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultMessages.json */ "./src/lib/Redux/defaultMessages.json");
var _defaultMessages_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaultMessages.json */ "./src/lib/Redux/defaultMessages.json", 1);



/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Redux | Global State
/******************************************/




var Redux = function Redux() {
  var _this = this;

  Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Redux);

  this.initialState = function () {
    return {
      user: {
        uid: '01',
        name: 'Charlie Hay',
        picture: '../../assets/images/charlie.png',
        bio: 'Born in London, Ontario, Canada. Living in Toronto where I work as a Software Developer.'
      },
      partner: {
        uid: '02',
        name: 'Phillip Duby',
        picture: '../../assets/images/charlie.png',
        bio: 'Born in London, Ontario, Canada. Living in Toronto where I work as a Software Developer.'
      },
      messages: _defaultMessages_json__WEBPACK_IMPORTED_MODULE_4__
    };
  };

  this.types = {
    SET_MESSAGE: 'SET_MESSAGE'
  };

  this.setMessage = function (message) {
    return {
      type: _this.types.SET_MESSAGE,
      message: message
    };
  };

  this.reducers = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case _this.types.SET_MESSAGE:
        var newArray = state.messages.slice();
        newArray.splice(newArray.length, 0, action.message);
        return Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          messages: newArray
        });

      default:
        return state;
    }
  };

  this.state = this.initialState();
};

var redux = new Redux();
var reducers = redux.reducers,
    state = redux.state;
var setMessage = redux.setMessage;

var store = Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducers, state, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])());

/***/ }),

/***/ "./src/lib/Redux/defaultMessages.json":
/*!********************************************!*\
  !*** ./src/lib/Redux/defaultMessages.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"sid":"01","timestamp":1545607994433,"text":"Hey Jill, how are you doing?"},{"sid":"02","timestamp":1545607994433,"text":"Hi Richard! I've been pretty good - super busy with work."},{"sid":"01","timestamp":1545607994433,"text":"ahh that's good, you know what they say, work hard play hard."},{"sid":"01","timestamp":1545607994433,"text":"I was wondering if you still had that cottage up in the muskokas?"},{"sid":"02","timestamp":1545607994433,"text":"Yeah I do, my family was going to head up there this weekend for a little getaway, but if you're looking to rent it out from us, we could find a time in august."},{"sid":"01","timestamp":1545607994433,"text":"what's up?!"},{"sid":"01","timestamp":1545607994433,"text":"Hey!"},{"sid":"02","timestamp":1545607994433,"text":"Hey!"},{"sid":"01","timestamp":1545607994433,"text":"what's up?!"},{"sid":"01","timestamp":1545607994433,"text":"Hey!"},{"sid":"02","timestamp":1545607994433,"text":"Hey!"},{"sid":"01","timestamp":1545607994433,"text":"what's up?!"}];

/***/ }),

/***/ "./src/lib/Routes/Routes.js":
/*!**********************************!*\
  !*** ./src/lib/Routes/Routes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Firebase/Firebase */ "./src/lib/Firebase/Firebase.js");
/* harmony import */ var _components_pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/pages/Home/Home */ "./src/components/pages/Home/Home.js");
/* harmony import */ var _components_pages_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/pages/Login/Login */ "./src/components/pages/Login/Login.js");
/* harmony import */ var _config_routes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/routes.json */ "./src/config/routes.json");
var _config_routes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../config/routes.json */ "./src/config/routes.json", 1);

var _jsxFileName = "/Users/haytrix/Documents/github/quickmern/client/src/lib/Routes/Routes.js";

/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * Routes | Dynamic Routing
 ******************************************/







function Routes(_ref) {
  var pathname = _ref.location.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('spinner'),
      _useState2 = Object(_Users_haytrix_Documents_github_quickmern_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      auth = _useState2[0],
      changeAuth = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // firebase.auth().signOut()
    var observer = _Firebase_Firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(function (user) {
      return changeAuth(!!user);
    });
    return function () {
      return observer();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.notification.listening && window.notification.hide();
  }, [pathname]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _config_routes_json__WEBPACK_IMPORTED_MODULE_6__.HOME,
    render: function render(props) {
      return auth === true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pages_Home_Home__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_pages_Login_Login__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
        auth: auth,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Routes));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/haytrix/Documents/github/quickmern/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/haytrix/Documents/github/quickmern/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map