/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.getElementById('content');\nconst nav = document.createElement('nav');\nnav.className = 'header bg-gray-100 border';\nnav.innerHTML = `\n      <ul class='px-6 flex justify-between w-full'>\n        <li>home</li>\n        <li>menu</li>\n        <li>contact</li>\n      </ul>\n`\ncontent.appendChild(nav);\n\ncontent.style.background = `url('./assets/cookie-cover.jpeg') center`;\n\ncontent.style.minHeight = '100vh';\n\ncontent.style.backgroundSize = 'cover';\n\nconst footer = document.createElement('footer');\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;