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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactContainer = () => {\n  const contact = document.createElement('div');\n  contact.id = 'contact';\n  contact.style.background = `url('./assets/cafe3.jpg') center`;\n  contact.style.minHeight = '100vh';\n  contact.style.backgroundSize = 'cover';\n  const contactText = document.createElement('h2');\n\n  contactText.innerHTML = `\n<section class=\"text-gray-600 body-font relative\">\n<div class=\"absolute inset-0 \">\n  <iframe width=\"100%\" height=\"100%\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" title=\"map\" scrolling=\"no\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61547933.122664824!2d23.8502446!3d19.6875872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sph!4v1629487793016!5m2!1sen!2sph\" style=\"filter: grayscale(1) contrast(1.2) opacity(0.4);\"></iframe>\n</div>\n<div class=\"container px-5 py-24 mx-auto font-serif flex\">\n  <div class=\"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\">\n    <h2 class=\"text-gray-900 text-lg mb-1 font-3xl font-bold title-font\">Contact Us</h2>\n    <p class=\"leading-relaxed mb-5 text-gray-600\">Your feedback on our food and service is a crucial factor to improving the experience. </p>\n    <div class=\"relative mb-4\">\n      <label for=\"email\" class=\"leading-7 text-sm text-gray-600\">Email</label>\n      <input type=\"email\" id=\"email\" name=\"email\" class=\"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\">\n    </div>\n    <div class=\"relative mb-4\">\n      <label for=\"message\" class=\"leading-7 text-sm text-gray-600\">Message</label>\n      <textarea id=\"message\" name=\"message\" class=\"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"></textarea>\n    </div>\n    <button class=\"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg\">Submit</button>\n    <p class=\"text-xs text-gray-500 mt-3\">We, your family from Bistro Ferdinand, La Liga Hotel, Barcelona, look forward to serving you again. Stay safe, friend. Adios! </p>\n\n  </div>\n</div>\n</section>\n`\n  contact.appendChild(contactText);\n  return contact;\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContainer);\n\n//# sourceURL=webpack://js-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footerContainer = () => {\n  const footer = document.createElement('footer');\n\n  footer.innerHTML = `\n  <footer class=\"px-4 py-6 flex items-center justify-center text-blue-500 w-full bg-gray-100 font-sans italic z-50\">\n    <p class=\"flex space-x-2\">\n    <p> Copyright &copy; 2020-2021.&nbsp </p>\n    <p> Made by Shiver Tech&nbsp</p>\n    <div class='w-3'><img class='w-full h-full' src=\"./assets/logo-1.svg\" alt=\"heart image\"></div>\n  </footer>\n`\n  content.appendChild(footer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerContainer);\n\n//# sourceURL=webpack://js-restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeContainer = () => {\n\n  const home = document.createElement('div');\n  home.id = 'home';\n  home.style.background = `url('./assets/main-image.jpg') center`;\n  home.classList.add('bg-light-blue-600', 'opacity-100');\n  home.style.minHeight = '90vh';\n  home.style.backgroundSize = 'cover';\n  const mainText = document.createElement('h1');\n\n  mainText.innerHTML = `\n  <div class=\"flex flex-col py-44\">\n    <h1 class=\"flex mx-auto rounded p-2 text-center justify-center font-bold text-8xl font-bold italic text-white bg-gradient-to-b from-transparent to-yellow-500 bg-opacity-30 hover:bg-opacity-70\">\n      Eat. Drink. Indulge.\n    </h1>\n    <h2 class=\"flex mx-auto rounded p-2 text-center justify-center text-2xl space-y-4 italic text-white bg-gradient-to-b from-transparent to-yellow-800 bg-opacity-30 hover:bg-opacity-70\">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>\n\n  </div>\n  `\n  home.appendChild(mainText);\n  return home;\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContainer);\n\n//# sourceURL=webpack://js-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\n\nconst content = document.getElementById('content');\n(0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst container = document.createElement('section');\ncontainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\ncontent.appendChild(container);\n\nconst tablinks = document.querySelectorAll('.tablink');\ntablinks.forEach(tablink => {\n  tablink.addEventListener('click', () => {\n    let text = tablink.innerHTML + '';\n    container.innerHTML = ''\n    switch (text) {\n      case 'Home':\n        console.log(container)\n        container.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)())\n        break;\n      case 'Menu':\n        console.log(container)\n        container.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)())\n        break;\n      case 'Contact':\n        console.log(container)\n        container.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)())\n        break;\n      default:\n        break;\n    }\n  });\n})\n\n;(0,_footer__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuContainer = () => {\n  const menu = document.createElement('div');\n\n  menu.id = 'menu';\n  menu.style.background = `url('./assets/wine.jpg') center`;\n  menu.style.minHeight = '100vh';\n  menu.style.backgroundSize = 'cover';\n  const menuText = document.createElement('h2');\n\n  menuText.innerHTML = `\n  <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>\n    <div class=\"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 p-3 lg:p-4\">\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96\" src=\"./assets/pancakes.jpg\" alt=\"Bluberry Pancakes\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Blueberry Pancakes - $16.00</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96 object-cover bg-cover\" src=\"./assets/steak-fries.jpg\" alt=\"Steak\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Steak & Fries - $149.99</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96 object-cover bg-cover\" src=\"./assets/frutti-di-mare.jpg\" alt=\"Frutti di Mare\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Frutti di Mare - $79.99</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96 object-cover bg-cover\" src=\"./assets/main-image.jpg\" alt=\"Hearty Pizza\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Hearty Pizza - $60.00</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96 object-cover bg-cover\" src=\"./assets/wine3.jpg\" alt=\"Wine\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Drink of the Day - $22.99</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-white text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-96 object-cover bg-cover\" src=\"./assets/coffee-dessert.jpg\" alt=\"Coffee & Dessert of the Day\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Coffee & Dessert of the Day - $18.99</figcaption>\n        </figure>\n      </div>\n  </div>\n`\n  menu.appendChild(menuText);\n  return menu;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContainer);\n\n//# sourceURL=webpack://js-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navContainer = () => {\n  const nav = document.createElement('nav');\n  nav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';\n  nav.innerHTML = `\n<div class='px-8 lg:px-12 py-6 flex items-center justify-between text-lg  md:text-2xl lg:text-3xl text-yellow-600 font-great-vibes font-bold italic'>\n  <figure class=\"flex align-items items-center\">\n  <figcaption>Bistro Ferdinand &nbsp</figcaption>\n  <img class=\"w-8 lg:w-12 text-center\" src=\"./assets/dish.png\" alt=\"logo\">\n  </figure> \n  <ul class='flex justify-around w-1/4 text-xs md:text-lg lg:text-xl'>\n    <li><button class='tablink p-3 bg-yellow-500 text-white rounded italic font-bold '>Home</button></li>\n    <li><button class='tablink p-3 text-yellow-700 rounded italic font-bold '>Menu</button></li>\n    <li><button class='tablink p-3 text-yellow-700 rounded italic font-bold '>Contact</button></li>\n  </ul>\n</div>\n`\n\n  content.appendChild(nav);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navContainer);\n\n//# sourceURL=webpack://js-restaurant/./src/nav.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;