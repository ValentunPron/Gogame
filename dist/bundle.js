/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\r\n\tif(document.querySelector('.header__burger')) {\r\n\t\tdocument.querySelector('.header__burger').addEventListener('click', e => {\r\n\t\t\tdocument.querySelector('.header__body').classList.toggle('active');\r\n\t\t\tdocument.body.classList.toggle('lock');\r\n\t\t});\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://gogames/./js/modules/burger.js?");

/***/ }),

/***/ "./js/modules/dialog.js":
/*!******************************!*\
  !*** ./js/modules/dialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dialog = () => {\r\n\tdocument.querySelectorAll('.button').forEach((item) => {\r\n\t\titem.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tdocument.body.classList.add('lock')\r\n\r\n\t\t\tdocument.querySelector('.wrapperDialog').innerHTML = `\r\n\t\t\t\t<div class=\"dialog\">\r\n\t\t\t\t\t<span>This is a demo layout so many features and buttons are not working</span>\r\n\t\t\t\t\t<button class=\"dialog__button button\">OK</button>\r\n\t\t\t\t</div>\r\n\t\t\t`\r\n\t\t\tdocument.querySelector('.dialog__button').addEventListener('click', () => {\r\n\t\t\t\tdocument.querySelector('.wrapperDialog').classList.remove('active');\r\n\t\t\t\tdocument.body.classList.remove('lock');\r\n\t\t\t})\r\n\t\t\tdocument.querySelector('.wrapperDialog').classList.add('active');\r\n\t\t})\r\n\t})\r\n\r\n\tdocument.querySelector('#ruls').addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tdocument.body.classList.add('lock');\r\n\r\n\t\tdocument.querySelector('.wrapperDialog').innerHTML = `\r\n\t\t<div class=\"dialog ruls\">\r\n\t\t\t<ol class=\"dialog__list\">\r\n\t\t\t\t<li class=\"dialog__item\">To start playing, the user must select the type of game (if there are multiple available) as well as game settings, which may include difficulty level, number of players, etc.</li>\r\n\t\t\t\t<li class=\"dialog__item\">Players can make moves or control the device if it is within their capabilities. If the wrong buttons are pressed or actions are taken that are not permitted, the player may receive an error message and skip their turn.</li>\r\n\t\t\t\t<li class=\"dialog__item\">If a mistake is made during the game, players may undo their previous move or use other special features that allow the game to be restored to its previous state.</li>\r\n\t\t\t\t<li class=\"dialog__item\">Players may save their games and other settings for future use and restoration.</li>\r\n\t\t\t\t<li class=\"dialog__item\">The website may provide users with the ability to contact support in case of problems or malfunctions with the devices or games.</li>\r\n\t\t\t\t<li class=\"dialog__item\">Rules for using devices and games should be clear and accessible to all users. The website may provide instructions and reference materials to help users understand the devices and the game.</li>\r\n\t\t\t</ol>\r\n\t\t\t<button class=\"dialog__button button\">OK</button>\r\n\t\t</div>\r\n\t\t`\r\n\r\n\t\tdocument.querySelector('.dialog__button').addEventListener('click', () => {\r\n\t\t\tdocument.querySelector('.wrapperDialog').classList.remove('active');\r\n\t\t\tdocument.body.classList.remove('lock');\r\n\t\t})\r\n\t\tdocument.querySelector('.wrapperDialog').classList.add('active');\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialog);\n\n//# sourceURL=webpack://gogames/./js/modules/dialog.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\tconst smoothLinks = document.querySelectorAll('.header__link');\r\n\tfor (let smoothLink of smoothLinks) {\r\n\t\tsmoothLink.addEventListener('click', function (e) {\r\n\t\t\te.preventDefault();\r\n\t\t\tdocument.body.classList.add('lock')\r\n\t\t\tconst id = smoothLink.getAttribute('href');\r\n\r\n\t\t\tif(document.querySelector('.header__burger')) {\r\n\t\t\t\tdocument.querySelector('.header__body').classList.toggle('active');\r\n\t\t\t\tdocument.body.classList.toggle('lock');\r\n\t\t\t}\r\n\t\t\tdocument.querySelector(id).scrollIntoView({\r\n\t\t\t\tblock: 'start',\r\n\t\t\t\tbehavior: 'smooth'\r\n\t\t\t});\r\n\t\t});\r\n\t};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://gogames/./js/modules/scroll.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./js/modules/burger.js\");\n/* harmony import */ var _modules_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dialog */ \"./js/modules/dialog.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\t(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t(0,_modules_dialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://gogames/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;