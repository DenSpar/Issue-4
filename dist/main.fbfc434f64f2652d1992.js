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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \".outerContainer {\\n    width: 100%;\\n\\tbackground-size: cover;\\n}\\n\\n.innerContainer {\\n    margin: 0 auto;\\n\\tpadding: 0 50px;\\n}\\n\\n.headerContainer {\\n    margin: 0;\\n\\theight: 45px;\\n}\\n\\n.headerContainer__appName {\\n    color: white;\\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;    \\n    margin: auto 0;\\n    margin-right: 50px;\\n    font-size: 22px;\\n}\\n\\n.headerContainer__searchBlock {\\n    width: 300px;\\n\\theight: 35px;\\n\\tpadding: 7px;\\n\\tborder-color: #3b50c7;\\n\\toutline: none;\\n\\tcolor: #9E9C9C;\\n    cursor: pointer;\\n    margin: auto 0;\\n}\\n\\n/*\\n.listRepContainer {}\\n.listRepContainer__listRep {}\\n*/\\n\\n.listRepContainer__listRep_itemContainer {\\n    width: 19%;\\n    padding: 10px;\\n    margin: 20px auto;\\n}\\n\\n.repNameContainer {\\n    margin-bottom: 3px;\\n}\\n\\n.repImg {\\n    width: 16px;\\n    min-width: 16px;\\n    height: 16px;\\n    margin-top: 2px;\\n}\\n\\n.repName {\\n    font-size: 16px;\\n    margin: auto 0 auto 3px;\\n}\\n\\n.repStarsContainer {\\n    height: 21px;\\n    margin-top: auto;\\n}\\n\\n.repStarsNum {\\n    font-size: 12px;\\n    margin: 4px 3px;\\n}\\n\\n.lastCommit {\\n    font-size: 12px;\\n    margin: 5px 0;\\n}\\n\\n.repLink {\\n    font-size: 12px;\\n}\\n\\n.listRepContainer__paginator {\\n    width: 100%;\\n}\\n\\n.listRepContainer__paginator_list {\\n    margin: 10px 0 20px;\\n    padding: 0;\\n}\\n\\n.paginatorPage {\\n    list-style: none;\\n    width: 20px;\\n    height: 27px;\\n    padding: 5px;\\n    cursor: pointer;\\n}\\n.paginatorPage:hover {\\n    color: red;\\n    border: 1px solid red;\\n    border-radius: 5px;\\n}\\n\\n.activePage {\\n    color: red;\\n    border: 1px solid red;\\n    border-radius: 5px;\\n}\\n\\n.paginatorPage_num {\\n    font-size: 13px;\\n    margin: auto;\\n}\\n\\n.footer {\\n    color: white;\\n    padding-top: 15px;\\n    margin: 0 auto;\\n}\\n\\n.fontDefault {\\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\\n}\\n\\n.text-decoration_none {\\n    text-decoration: none;\\n}\\n\\n.backgroundColor {\\n    background-color: #4a82ff;\\n}\\n\\n.flex {\\n\\tdisplay: flex;\\n}\\n.flex-direction_column {\\n\\tflex-direction: column;\\n}\\n.justify-content_space-between {\\n    justify-content: space-between;\\n}\\n.justify-content_center {\\n\\tjustify-content: center;\\n}\\n.align-items_center {\\n\\talign-items: center;\\n}\\n.flex-wrap {\\n\\tflex-wrap: wrap;\\n}\\n/*\\n.justify-content_space-around {\\n\\tjustify-content: space-around;\\n}\\n.justify-content_start {\\n\\tjustify-content: flex-start;\\n}\\n.align-items_start {\\n\\talign-items: flex-start;\\n}\\n.align-items_end {\\n\\talign-items: flex-end;\\n}\\n.flex-grow_1 {\\n\\tflex-grow: 1;\\n}\\n*/\\n\\n.border_1px {\\n\\tborder: 1px solid;\\n}\\n\\n.border-radius_4px {\\n\\tborder-radius: 4px;\\n}\\n\\n.border-radius_12px {\\n\\tborder-radius: 12px;\\n}\\n\\n.box-sizing {\\n\\tbox-sizing: border-box;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_searchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/searchInput */ \"./src/js/searchInput.js\");\n/* harmony import */ var _js_inputListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/inputListener */ \"./src/js/inputListener.js\");\n\n\n\n\nObject(_js_inputListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nif (localStorage.getItem('searchName')) {\n    searchInput.value = localStorage.getItem('searchName');\n    Object(_js_searchInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(localStorage.getItem('searchName'), localStorage.getItem('page'));\n} else {\n    Object(_js_searchInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('stars%3A%3E0', 1, true);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/changePage.js":
/*!******************************!*\
  !*** ./src/js/changePage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changePageModule; });\n/* harmony import */ var _js_searchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/searchInput */ \"./src/js/searchInput.js\");\n\r\nlet paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');\r\nfunction changePageModule () {\r\n    //обявляем переменную. Внутри переменной будет объект с активной страницей\r\n    let nowActivePage = paginatorContainer.querySelector('.activePage');\r\n    //объявляем переменную. Внутри переменной будут все страницы\r\n    let allPages = paginatorContainer.querySelectorAll ('.paginatorPage');\r\n\r\n    //создаем функцию для замыкания нужных нам значений\r\n    let addEventListenerHandler = function (page) {\r\n        //создаем обработчик события - клик на страницу\r\n        page.addEventListener ('click', function () {\r\n            // условие, срабатывает только если нажать на неактивную страницу\r\n            if (nowActivePage.childNodes[1].innerHTML !== page.childNodes[1].innerHTML) {\r\n                nowActivePage.classList.remove('activePage');\r\n                console.log('active page was №', nowActivePage.childNodes[1].innerHTML, 'new active page №', page.childNodes[1].innerHTML);\r\n                page.classList.add('activePage');\r\n                nowActivePage = page;\r\n                localStorage.setItem('page', page.childNodes[1].innerHTML.toString());\r\n                Object(_js_searchInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(localStorage.getItem('searchName'), page.childNodes[1].innerHTML.toString());\r\n            };\r\n        });\r\n    };\r\n\r\n    for (let i = 0; i < allPages.length; i++) {\r\n        addEventListenerHandler(allPages[i]);\r\n    };\r\n}\n\n//# sourceURL=webpack:///./src/js/changePage.js?");

/***/ }),

/***/ "./src/js/getRequest.js":
/*!******************************!*\
  !*** ./src/js/getRequest.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getRequestModule; });\nfunction getRequestModule(url) {\n    return fetch(url).then(response => {\n        return response.json()\n    })\n};\n\n//# sourceURL=webpack:///./src/js/getRequest.js?");

/***/ }),

/***/ "./src/js/inputListener.js":
/*!*********************************!*\
  !*** ./src/js/inputListener.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_searchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/searchInput */ \"./src/js/searchInput.js\");\n\r\nlet searchInput = document.querySelector('#searchInput');\r\n\r\nlet inputListenerModule = function() {\r\n    searchInput.addEventListener ('keydown', function (evt) {\r\n        if (evt.keyCode === 13) {\r\n            if (searchInput.value === '') {\r\n                searchInput.placeholder = 'репозиторий не указан :(';\r\n            } else {\r\n                localStorage.setItem('searchName', searchInput.value.toString());\r\n                localStorage.setItem('page', '1');\r\n                Object(_js_searchInput__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchInput.value, 1)\r\n            };\r\n        };\r\n    });\r\n};\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputListenerModule);\n\n//# sourceURL=webpack:///./src/js/inputListener.js?");

/***/ }),

/***/ "./src/js/listRepLoader.js":
/*!*********************************!*\
  !*** ./src/js/listRepLoader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet listRepContainer = document.querySelector('#listRepContainer');\nlet itemTemplateContent = listRepContainer.querySelector('template').content;\nlet itemTemplate = itemTemplateContent.querySelector('.listRepContainer__listRep_itemContainer');\n\nlet listRep = document.createElement('div');\nlistRep.classList.add('listRepContainer__listRep', 'flex', 'justify-content_space-between', 'flex-wrap');\n\nlet makeNewRepCard = function (name, numStars, lastCommit, repLink) {\n    let newCard = itemTemplate.cloneNode(true);\n    let newName = newCard.querySelector('.repName');\n    newName.textContent = name;\n    let newStarsNum = newCard.querySelector('.repStarsNum');\n    newStarsNum.textContent = numStars;\n    let newLastCommit = newCard.querySelector('.lastCommit')\n    newLastCommit.textContent += lastCommit;\n    let newRepLink = newCard.querySelector('.repLink');\n    newRepLink.href = repLink;\n    listRep.append(newCard);\n};\n\nlet listRepModule = function(arr) {\n    listRep.innerHTML = '';\n\n    for (let i = 0; i < arr.length; i++) {\n        makeNewRepCard(arr[i].name, arr[i].numStars, arr[i].lastCommit, arr[i].repLink);\n    };\n\n    listRepContainer.prepend(listRep);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (listRepModule);\n\n//# sourceURL=webpack:///./src/js/listRepLoader.js?");

/***/ }),

/***/ "./src/js/makeItemsList.js":
/*!*********************************!*\
  !*** ./src/js/makeItemsList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_getRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/getRequest */ \"./src/js/getRequest.js\");\n/* harmony import */ var _js_makePromiseArr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/makePromiseArr */ \"./src/js/makePromiseArr.js\");\n\n\n\nlet makeItemsListModule = function(url) {\n    return new Promise((resolve, reject) => {\n        let obj = {\n                listItems: [],\n                listCommits: []\n            };\n        Object(_js_getRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url)\n        .then(function(data) {\n            for (let i = 0; i < data.items.length; i++) {\n                let item = {\n                    name: data.items[i].full_name,\n                    numStars: data.items[i].stargazers_count,                        \n                    repLink: data.items[i].html_url\n                };\n                obj.listItems.push(item);\n                obj.listCommits.push('https://api.github.com/repos/' + data.items[i].full_name + '/commits?per_page=1');\n            };\n            obj.totalCount = data.total_count;\n            obj.listCommits = Object(_js_makePromiseArr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj.listCommits);\n        })\n        .then(() => {\n            Promise.race([\n                Promise.all(obj.listCommits),\n                new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, коммиты не полученны'), 700))\n            ]).then(value => {\n                value.forEach(function(item, i, arr) {\n                    obj.listItems[i].lastCommit = value[i][0].commit.committer.date\n                });\n                delete obj.listCommits\n            }).then(() => resolve(obj))\n            .catch(err => console.log(err));\n        })        \n    })\n    .catch(err => console.log(err));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makeItemsListModule);\n\n//# sourceURL=webpack:///./src/js/makeItemsList.js?");

/***/ }),

/***/ "./src/js/makePromiseArr.js":
/*!**********************************!*\
  !*** ./src/js/makePromiseArr.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makePromiseArrModule; });\n/* harmony import */ var _js_getRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/getRequest */ \"./src/js/getRequest.js\");\n\nfunction makePromiseArrModule(arr) {\n    let promiseArr = arr.map(function(url) {\n        return Object(_js_getRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url)        \n    });\n    return promiseArr\n};\n\n//# sourceURL=webpack:///./src/js/makePromiseArr.js?");

/***/ }),

/***/ "./src/js/makeRepsList.js":
/*!********************************!*\
  !*** ./src/js/makeRepsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return makeRepsListModule; });\n/* harmony import */ var _js_makeItemsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/makeItemsList */ \"./src/js/makeItemsList.js\");\n\nfunction makeRepsListModule(url, timeout) {\n    return Promise.race([\n        Object(_js_makeItemsList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url),\n        new Promise((_, reject) => setTimeout(() => reject('время ожидания вышло, репозитории не полученны'), timeout))\n    ])\n};\n\n//# sourceURL=webpack:///./src/js/makeRepsList.js?");

/***/ }),

/***/ "./src/js/paginatorLoader.js":
/*!***********************************!*\
  !*** ./src/js/paginatorLoader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_changePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/changePage */ \"./src/js/changePage.js\");\n\nlet paginatorContainer = listRepContainer.querySelector('.listRepContainer__paginator');\nlet paginatorPageTemplateContent = paginatorContainer.querySelector('template').content;\nlet paginatorPageTemplate = paginatorPageTemplateContent.querySelector('.paginatorPage');\n\nlet oldPaginatorList = paginatorContainer.querySelector('listRepContainer__paginator_list');\nif (oldPaginatorList) {\n    oldPaginatorList.remove();\n}\n\nlet paginatorList = document.createElement('ul');\npaginatorList.classList.add('listRepContainer__paginator_list', 'flex', 'justify-content_center');\n\nlet makePage = function (num) {\n    let newPage = paginatorPageTemplate.cloneNode(true);\n    let newNum = newPage.querySelector('div');\n    newNum.textContent = num;\n    let activePage = 1;\n    if (localStorage.getItem('page')) {\n        activePage = +localStorage.getItem('page');\n    }\n    if (num === activePage) {\n        newPage.classList.add('activePage');\n    };\n    paginatorList.append(newPage);\n};\n\nlet makePaginatorModule = function(num) {\n    paginatorList.innerHTML = '';\n    let howManyPages = 0;\n    //проверка если найденых репов больше 10, но меньше 100, создаст блок пагинатора до 10 страниц\n    if (num > 10 && num <= 100) {\n        howManyPages = Math.ceil(num/10);        \n    };\n    //если найденых репов больше 100, создаст блок пагинатора на 10 страниц\n    if (num > 100) {\n        howManyPages = 10;\n    };\n\n    for (let j = 1; j <= howManyPages; j++) {\n        makePage(j);\n    };\n    //загрузить блок пагинатора на страницу\n    paginatorContainer.append(paginatorList);\n    console.log('paginator already painted');\n    Object(_js_changePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (makePaginatorModule);\n\n//# sourceURL=webpack:///./src/js/paginatorLoader.js?");

/***/ }),

/***/ "./src/js/searchInput.js":
/*!*******************************!*\
  !*** ./src/js/searchInput.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_listRepLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/listRepLoader */ \"./src/js/listRepLoader.js\");\n/* harmony import */ var _js_makeRepsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/makeRepsList */ \"./src/js/makeRepsList.js\");\n/* harmony import */ var _js_paginatorLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/paginatorLoader */ \"./src/js/paginatorLoader.js\");\n\n\n\n\nlet searchModule = function(searchName, searchPage, isMostPop) { \n    let requestURL = 'https://api.github.com/search/repositories?q=' + searchName + '&sort=stars&order=desc&page=' + searchPage + '&per_page=2';   \n    //заменить количество репов на 10 ^\n    Object(_js_makeRepsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(requestURL, 2000)\n    .then(dataList => {\n        Object(_js_listRepLoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataList.listItems);\n        console.log(dataList.totalCount);\n        if (!isMostPop){\n            Object(_js_paginatorLoader__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dataList.totalCount);\n        };        \n    }).catch(err => console.log(err));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (searchModule);\n\n\n//# sourceURL=webpack:///./src/js/searchInput.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });