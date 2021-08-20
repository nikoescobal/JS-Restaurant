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

eval("const content = document.getElementById('content');\nconst nav = document.createElement('nav');\nnav.className = 'bg-gray-100 border overflow-hidden border-2 border-gray-200';\nnav.innerHTML = `\n<div class='px-12 py-6 flex items-center justify-between text-3xl text-yellow-600 font-great-vibes font-bold italic'>\n  <figure class=\"flex align-items items-center\">\n  <figcaption>Bistro Ferdinand &nbsp</figcaption>\n  <img class=\"w-12 text-center\" src=\"./assets/dish.png\" alt=\"logo\">\n  </figure> \n  <ul class='flex justify-around w-1/4 text-xl'>\n    <li><button class='tablinks p-3 bg-yellow-500 text-white rounded italic font-bold '>Home</button></li>\n    <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Menu</button></li>\n    <li><button class='tablinks p-3 text-yellow-700 rounded italic font-bold '>Contact</button></li>\n  </ul>\n</div>\n`\ncontent.appendChild(nav);\n\nconst home = document.createElement('div');\n\nhome.id = 'home';\n\nhome.style.background = `url('./assets/main-image.jpg') center`;\n\nhome.style.minHeight = '75vh';\n\nhome.style.backgroundSize = 'cover';\n\nconst mainText = document.createElement('h1');\n\nmainText.innerHTML = `\n<div class=\"flex flex-col py-44\">\n  <h2 class=\"flex text-center justify-center font-xs italic text-white\">Bistro Ferdinand, La Liga Hotel, Barcelona</h2>\n  <h1 class=\"flex text-center justify-center font-bold text-8xl font-bold italic text-white\">\n    Eat. Drink. Indulge.\n  </h1>\n</div>\n`\nhome.appendChild(mainText);\ncontent.appendChild(home);\n\nconst menu = document.createElement('div');\n\nmenu.id = 'menu';\n\nmenu.style.background = `url('./assets/wine.jpg') center`;\n\nmenu.style.minHeight = '75vh';\n\nmenu.style.backgroundSize = 'cover';\n\nconst menuText = document.createElement('h2');\n\nmenuText.innerHTML = `\n  <h2 class='flex text-center text-white justify-center space-y-6 py-6 font-bold text-6xl font-bold italic'>Menu</h2>\n    <div class=\"grid grid-cols-3 gap-4 p-4\">\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72\" src=\"./assets/pancakes.jpg\" alt=\"Bluberry Pancakes\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Blueberry Pancakes - $10</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72\" src=\"./assets/steak-fries.jpg\" alt=\"Steak\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Steak & Fries - $10</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72\" src=\"./assets/frutti-di-mare.jpg\" alt=\"Frutti di Mare\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Frutti di Mare - $10</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72 object-cover bg-cover\" src=\"./assets/main-image.jpg\" alt=\"Hearty Pizza\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Hearty Pizza - $10</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72\" src=\"./assets/wine3.jpg\" alt=\"Wine\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Drink of the Day - $10</figcaption>\n        </figure>\n      </div>\n      <div class=\"w-full text-white text-center\">\n        <figure class=\"relative\">\n          <img class=\"w-full max-h-72\" src=\"./assets/coffee-dessert.jpg\" alt=\"Coffee & Dessert of the Day\" />\n          <figcaption class=\"font-bold text-yellow-700 rounded italic p-3 bg-gray-100 absolute bottom-2 right-2\">Coffee & Dessert of the Day - $10</figcaption>\n        </figure>\n      </div>\n  </div>\n`\nmenu.appendChild(menuText);\ncontent.appendChild(menu);\n\nconst contact = document.createElement('div');\n\ncontact.id = 'contact';\n\ncontact.style.background = `url('./assets/cafe3.jpg') center`;\n\ncontact.style.minHeight = '75vh';\n\ncontact.style.backgroundSize = 'cover';\n\nconst contactText = document.createElement('h2');\n\ncontactText.innerHTML = `\n<section class=\"text-gray-600 body-font relative\">\n<div class=\"absolute inset-0 \">\n  <iframe width=\"100%\" height=\"100%\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" title=\"map\" scrolling=\"no\" src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61547933.122664824!2d23.8502446!3d19.6875872!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Spain!5e0!3m2!1sen!2sph!4v1629487793016!5m2!1sen!2sph\" style=\"filter: grayscale(1) contrast(1.2) opacity(0.4);\"></iframe>\n</div>\n<div class=\"container px-5 py-24 mx-auto font-serif flex\">\n  <div class=\"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md\">\n    <h2 class=\"text-gray-900 text-lg mb-1 font-3xl font-bold title-font\">Contact Us</h2>\n    <p class=\"leading-relaxed mb-5 text-gray-600\">Your feedback on our food and service is a crucial factor to improving the experience. </p>\n    <div class=\"relative mb-4\">\n      <label for=\"email\" class=\"leading-7 text-sm text-gray-600\">Email</label>\n      <input type=\"email\" id=\"email\" name=\"email\" class=\"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out\">\n    </div>\n    <div class=\"relative mb-4\">\n      <label for=\"message\" class=\"leading-7 text-sm text-gray-600\">Message</label>\n      <textarea id=\"message\" name=\"message\" class=\"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out\"></textarea>\n    </div>\n    <button class=\"text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg\">Submit</button>\n    <p class=\"text-xs text-gray-500 mt-3\">We, your family from Bistro Ferdinand, La Liga Hotel, Barcelona, look forward to serving you again. Stay safe, friend. Adios! </p>\n\n  </div>\n</div>\n</section>\n`\ncontact.appendChild(contactText);\ncontent.appendChild(contact);\n\n// const footer = document.createElement('footer');\n\n// footer.innerHTML = `\n//   <footer class=\"px-4 py-6 flex items-center absolute bottom-0 justify-center text-blue-500 w-full bg-gray-100 font-sans italic z-50\">\n//     <p class=\"flex space-x-2\">\n//     <p> Copyright &copy; 2020-2021.&nbsp </p>\n//     <p> Made by Shiver Tech&nbsp</p>\n//     <div class='w-3'><img class='w-full h-full' src=\"./assets/logo-1.svg\" alt=\"heart image\"></div>\n\n//   </footer>\n// `\n// content.appendChild(footer);\n\n//# sourceURL=webpack://js-restaurant/./src/index.js?");

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