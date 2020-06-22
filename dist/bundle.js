/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_listRepLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/listRepLoader */ \"./src/js/listRepLoader.js\");\n/* harmony import */ var _js_mostPopReps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mostPopReps */ \"./src/js/mostPopReps.js\");\n/* harmony import */ var _js_paginatorLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/paginatorLoader */ \"./src/js/paginatorLoader.js\");\n/* harmony import */ var _js_searchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/searchInput */ \"./src/js/searchInput.js\");\n\r\nObject(_js_listRepLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nObject(_js_mostPopReps__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nObject(_js_paginatorLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\nObject(_js_searchInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/listRepLoader.js":
/*!*********************************!*\
  !*** ./src/js/listRepLoader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//тестовый массив - удалить\nlet repTestArr = [\n    {name: 'jakesgordon/javascript-tetris', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: 'LoveDaisy/tetris_game', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '3listRepContainer', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '4TemplateContent', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '5repStarsNum fontDefault', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '6Name', numStars: '354', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '7document.cr', numStars: '1111', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '8rep StarsNum', numStars: '9999', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '9fontDefault', numStars: '78', lastCommit: '5 Feb', repLink: 'http://github.com'},\n    {name: '10numStars', numStars: '5.1', lastCommit: '5 Feb', repLink: 'http://github.com'},\n];\n\nlet listRepModule = function() {\n    let listRepContainer = document.querySelector('#listRepContainer');\n    let itemTemplateContent = listRepContainer.querySelector('template').content;\n    let itemTemplate = itemTemplateContent.querySelector('.listRepContainer__listRep_itemContainer');\n\n    let listRep = document.createElement('div');\n    listRep.classList.add('listRepContainer__listRep', 'flex', 'justify-content_space-between', 'flex-wrap');\n\n    let makeNewRepCard = function (name, numStars, lastCommit, repLink) {\n        let newCard = itemTemplate.cloneNode(true);\n        let newName = newCard.querySelector('.repName');\n        newName.textContent = name;\n        let newStarsNum = newCard.querySelector('.repStarsNum');\n        newStarsNum.textContent = numStars;\n        let newLastCommit = newCard.querySelector('.lastCommit')\n        newLastCommit.textContent += lastCommit;\n        let newRepLink = newCard.querySelector('.repLink');\n        newRepLink.href = repLink;\n        listRep.append(newCard);\n    };\n\n    //создать карточки в списке репозиториев - переделать на ответы от запросов API\n    for (let i = 0; i < repTestArr.length; i++) {\n        makeNewRepCard(repTestArr[i].name, repTestArr[i].numStars, repTestArr[i].lastCommit, repTestArr[i].repLink);\n    };\n\n    //загрузить список на страницу - так и останется\n    listRepContainer.prepend(listRep);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listRepModule);\n\n//# sourceURL=webpack:///./src/js/listRepLoader.js?");

/***/ }),

/***/ "./src/js/mostPopReps.js":
/*!*******************************!*\
  !*** ./src/js/mostPopReps.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet getMostPopRepsModule = function() {\n    let requestURL = 'https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1&per_page=10';\n\n    function sendRequest(method, url) {\n        return fetch(url).then(response => {\n            return response.json()\n        })\n    };\n\n    sendRequest('GET', requestURL)\n    .then(data => console.log(data))\n    .catch(err => console.log(err));\n\n    let arr = sendRequest('GET', requestURL).then(function(data) {\n        var items = data.items;\n        var count = data.total_count;\n        console.log('items:');\n        console.log(data.items);\n        console.log('totalCount:');\n        console.log(data.total_count);\n\n        let i=0;\n        console.log('test_first:');\n        console.log('name: ' + data.items[i].full_name);\n        console.log('numStars: ' + data.items[i].stargazers_count);\n        sendRequest('GET', 'https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1')\n        .then(commit => console.log('lastCommit: ' + commit[0].commit.committer.date))\n        .catch(err => console.log(err));\n        console.log('repLink: ' + data.items[i].html_url);    \n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getMostPopRepsModule);\n\n//# sourceURL=webpack:///./src/js/mostPopReps.js?");

/***/ }),

/***/ "./src/js/paginatorLoader.js":
/*!***********************************!*\
  !*** ./src/js/paginatorLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//тестовый массив для пагинатора - заменить на счетчик найденых репов\nlet makeTestArr = function (num) {\n    let arr = [];\n    for (let i = 0; i < num; i++) {\n        arr.push(i);\n    };\n    return arr\n};\nlet paginatorModule = function() {\n    let paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');\n    let paginatorPageTemplateContent = paginatorContainer.querySelector('template').content;\n    let paginatorPageTemplate = paginatorPageTemplateContent.querySelector('.paginatorPage');\n\n    let paginatorList = document.createElement('ul');\n    paginatorList.classList.add('listRepContainer__paginator_list', 'flex', 'justify-content_center');\n\n    let makePages = function (num) {\n        let newPage = paginatorPageTemplate.cloneNode(true);\n        let newNum = newPage.querySelector('a');\n        newNum.textContent = num;\n        if (num === 1) {\n            newPage.classList.add('activePage');\n        };\n        paginatorList.append(newPage);\n    };\n\n    let testArr = makeTestArr(100);\n    //проверка если найденых репов больше 10, создаст блок пагинатора - заменить на функцию и импорт\n    if (testArr.length > 10) {\n        let howManyPages = Math.ceil(testArr.length/10);\n        for (let j = 1; j <= howManyPages; j++) {\n            makePages(j);\n        };\n        //загрузить блок пагинатора на страницу\n        listRepContainer.append(paginatorList);\n    };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (paginatorModule);\n\n\n\n\n//# sourceURL=webpack:///./src/js/paginatorLoader.js?");

/***/ }),

/***/ "./src/js/searchInput.js":
/*!*******************************!*\
  !*** ./src/js/searchInput.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet searchModule = function() {\n    let searchInput = document.querySelector('#searchInput');\n\n    //создаем событие для ввода запроса\n    searchInput.addEventListener ('keydown', function (evt) {\n        if (evt.keyCode === 13) {\n            if (searchInput.value === '') {\n                searchInput.placeholder = 'пустой запрос :(';\n            } else {  \n                requestURL = 'https://api.github.com/search/repositories?q=' + searchInput.value + '&sort=stars&page=1&per_page=10';\n                console.log(requestURL);\n                sendRequest('GET', requestURL)\n                .then(data => console.log(data))\n                .catch(err => console.log(err));\n            };\n        };\n    });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchModule);\n\n\n//# sourceURL=webpack:///./src/js/searchInput.js?");

/***/ })

/******/ });