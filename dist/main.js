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

eval("const content = document.getElementById('content');\nconst nav = document.createElement('nav');\nnav.className = 'bg-gray-100 border';\nnav.innerHTML = `\n    <div class='px-12 py-8 flex justify-between text-2xl text-blue-500 font-sans font-bold italic'>Tartookie\n      <ul class='flex justify-around w-1/3 text-xl text-blue-500 font-bold'>\n        <li>Home</li>\n        <li>Menu</li>\n        <li>Contact</li>\n      </ul>\n    </div>\n`\ncontent.appendChild(nav);\n\ncontent.style.background = `url('./assets/cookie-cover.jpeg') center`;\n\ncontent.style.minHeight = '100vh';\n\ncontent.style.backgroundSize = 'cover';\n\nconst mainText = document.createElement('h1');\n\nmainText.innerHTML = `\n  <h1 class='flex text-center justify-center font-bold py-40 text-6xl font-bold italic text-white'>Eat. Drink. Indulge.</h1>\n`\ncontent.appendChild(mainText);\n\n\nconst footer = document.createElement('footer');\n\nfooter.innerHTML = `\n  <footer class=\"px-4 py-6 flex items-center absolute bottom-0 justify-center text-blue-500 w-full bg-gray-100 font-sans italic z-50\">\n    <p class=\"flex space-x-2\">\n    <p> Copyright &copy; 2020-2021.&nbsp </p>\n    <p> Made by Shiver Tech&nbsp</p>\n    <div class='w-3'><img class='w-full h-full' src=\"./assets/logo-1.svg\" alt=\"heart image\"></div>\n    \n  </footer>\n`\ncontent.appendChild(footer);\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

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