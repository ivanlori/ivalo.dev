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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/icomoon.eot?iiwnxd */ \"./src/assets/icomoon.eot?iiwnxd\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../assets/icomoon.ttf?iiwnxd */ \"./src/assets/icomoon.ttf?iiwnxd\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../assets/icomoon.woff?iiwnxd */ \"./src/assets/icomoon.woff?iiwnxd\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../assets/icomoon.svg?iiwnxd */ \"./src/assets/icomoon.svg?iiwnxd\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: \"#icomoon\" });\n// Module\nexports.push([module.i, \"/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in\\n *    IE on Windows Phone and in iOS.\\n */\\nhtml {\\n  line-height: 1.15;\\n  /* 1 */\\n  -ms-text-size-adjust: 100%;\\n  /* 2 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */ }\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers (opinionated).\\n */\\nbody {\\n  margin: 0; }\\n\\n/**\\n * Add the correct display in IE 9-.\\n */\\narticle,\\naside,\\nfooter,\\nheader,\\nnav,\\nsection {\\n  display: block; }\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 9-.\\n * 1. Add the correct display in IE.\\n */\\nfigcaption,\\nfigure,\\nmain {\\n  /* 1 */\\n  display: block; }\\n\\n/**\\n * Add the correct margin in IE 8.\\n */\\nfigure {\\n  margin: 1em 40px; }\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */ }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * 1. Remove the gray background on active links in IE 10.\\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\\n */\\na {\\n  background-color: transparent;\\n  /* 1 */\\n  -webkit-text-decoration-skip: objects;\\n  /* 2 */ }\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  text-decoration: underline dotted;\\n  /* 2 */ }\\n\\n/**\\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\\n */\\nb,\\nstrong {\\n  font-weight: inherit; }\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder; }\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/**\\n * Add the correct font style in Android 4.3-.\\n */\\ndfn {\\n  font-style: italic; }\\n\\n/**\\n * Add the correct background and color in IE 9-.\\n */\\nmark {\\n  background-color: #ff0;\\n  color: #000; }\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nsup {\\n  top: -0.5em; }\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 9-.\\n */\\naudio,\\nvideo {\\n  display: inline-block; }\\n\\n/**\\n * Add the correct display in iOS 4-7.\\n */\\naudio:not([controls]) {\\n  display: none;\\n  height: 0; }\\n\\n/**\\n * Remove the border on images inside links in IE 10-.\\n */\\nimg {\\n  border-style: none; }\\n\\n/**\\n * Hide the overflow in IE.\\n */\\nsvg:not(:root) {\\n  overflow: hidden; }\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers (opinionated).\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: sans-serif;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */ }\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible; }\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none; }\\n\\n/**\\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\\n *    controls in Android 4.\\n * 2. Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\nhtml [type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n  /* 2 */ }\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0; }\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText; }\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */ }\\n\\n/**\\n * 1. Add the correct display in IE 9-.\\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  display: inline-block;\\n  /* 1 */\\n  vertical-align: baseline;\\n  /* 2 */ }\\n\\n/**\\n * Remove the default vertical scrollbar in IE.\\n */\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\n * 1. Add the correct box sizing in IE 10-.\\n * 2. Remove the padding in IE 10-.\\n */\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */ }\\n\\n/**\\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\\n */\\n[type=\\\"search\\\"]::-webkit-search-cancel-button,\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */ }\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in IE 9-.\\n * 1. Add the correct display in Edge, IE, and Firefox.\\n */\\ndetails,\\nmenu {\\n  display: block; }\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item; }\\n\\n/* Scripting\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 9-.\\n */\\ncanvas {\\n  display: inline-block; }\\n\\n/**\\n * Add the correct display in IE.\\n */\\ntemplate {\\n  display: none; }\\n\\n/* Hidden\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10-.\\n */\\n[hidden] {\\n  display: none; }\\n\\nhtml,\\nbody {\\n  height: 100%;\\n  font-size: 18px;\\n  font-family: \\\"Lato\\\"; }\\n\\na {\\n  color: #969696;\\n  font-size: 1.2rem;\\n  transition: ease-in 0.2s;\\n  text-decoration: none;\\n  cursor: pointer; }\\n  a:hover {\\n    color: #ffffff; }\\n\\nbody {\\n  background-color: #1f1a1a;\\n  color: #ffffff; }\\n\\n::selection {\\n  background-color: #c7a5a5; }\\n\\nmain {\\n  font-size: 1.4rem;\\n  line-height: 1.8rem;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n  padding-top: 10%; }\\n  main .home .social {\\n    margin-top: 30%; }\\n  main .home ul {\\n    display: flex;\\n    justify-content: center;\\n    list-style-type: none; }\\n    main .home ul li {\\n      margin: 15px; }\\n\\n.dot {\\n  width: 5px;\\n  height: 5px;\\n  border-radius: 50%;\\n  background-color: #969696;\\n  display: inline-block;\\n  margin: 4px; }\\n\\nhr {\\n  width: 10%;\\n  margin: 20px 0; }\\n\\nsection {\\n  max-width: 60%; }\\n  section.projects {\\n    margin-bottom: 10%; }\\n\\n.close-wrapper {\\n  position: fixed;\\n  top: 35px;\\n  right: 35px;\\n  cursor: pointer;\\n  font-size: 3rem; }\\n\\n@font-face {\\n  font-family: \\\"icomoon\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"embedded-opentype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"truetype\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"svg\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n  font-display: block; }\\n\\n[class^=\\\"icon-\\\"],\\n[class*=\\\" icon-\\\"] {\\n  /* use !important to prevent issues with browser extensions that change fonts */\\n  font-family: \\\"icomoon\\\" !important;\\n  speak: none;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  /* Better Font Rendering =========== */\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale; }\\n\\n.icon-github:before {\\n  content: \\\"\\\\eab0\\\"; }\\n\\n.icon-linkedin:before {\\n  content: \\\"\\\\eac9\\\"; }\\n\\nfooter {\\n  background-color: #292323;\\n  color: #ffffff;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-evenly; }\\n  footer p,\\n  footer a {\\n    font-size: 0.8rem; }\\n  footer a {\\n    color: #ffffff;\\n    text-decoration: underline; }\\n\\n@-webkit-keyframes fadeIn {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0; }\\n  to {\\n    opacity: 1; } }\\n\\n.fadeIn {\\n  animation-duration: 0.6s;\\n  animation-fill-mode: both;\\n  -webkit-animation-name: fadeIn;\\n  animation-name: fadeIn; }\\n\\n@media only screen and (max-width: 640px) {\\n  h1 {\\n    font-size: 1.7rem; }\\n  h3 {\\n    font-size: 1.5rem; }\\n  p {\\n    font-size: 1.2rem; }\\n  .links {\\n    display: flex;\\n    flex-direction: column; }\\n  .dot {\\n    display: none; }\\n  footer {\\n    flex-direction: column;\\n    align-items: center; }\\n    footer p {\\n      margin: 5px; }\\n  section.projects,\\n  section.aboutme {\\n    margin-bottom: 25%; } }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/assets/icomoon.eot?iiwnxd":
/*!***************************************!*\
  !*** ./src/assets/icomoon.eot?iiwnxd ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"760a1cc8d9d0a66e8b1d2188ef20aa01.eot\");\n\n//# sourceURL=webpack:///./src/assets/icomoon.eot?");

/***/ }),

/***/ "./src/assets/icomoon.svg?iiwnxd":
/*!***************************************!*\
  !*** ./src/assets/icomoon.svg?iiwnxd ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d403a9abef02920e039a4ed52d7dbed9.svg\");\n\n//# sourceURL=webpack:///./src/assets/icomoon.svg?");

/***/ }),

/***/ "./src/assets/icomoon.ttf?iiwnxd":
/*!***************************************!*\
  !*** ./src/assets/icomoon.ttf?iiwnxd ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9e6bb9ea6183efbd34b59f63737b84df.ttf\");\n\n//# sourceURL=webpack:///./src/assets/icomoon.ttf?");

/***/ }),

/***/ "./src/assets/icomoon.woff?iiwnxd":
/*!****************************************!*\
  !*** ./src/assets/icomoon.woff?iiwnxd ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ffe8deb5c45e1725dc2bb227ff8fcf92.woff\");\n\n//# sourceURL=webpack:///./src/assets/icomoon.woff?");

/***/ }),

/***/ "./src/components/AboutMeSection.ts":
/*!******************************************!*\
  !*** ./src/components/AboutMeSection.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst CloseBtn_1 = __importDefault(__webpack_require__(/*! ./CloseBtn */ \"./src/components/CloseBtn.ts\"));\nconst urlCV = \"https://drive.google.com/file/d/1w8JMjAedc5EVaWx-IzmsOY0RzeM_RFNo/view?usp=sharing\";\nconst description = `\n  I like making great products translating my ideas in real things.<br>\n  In my free time I read books, trying constantly to improve myself\n  both human and professional way.<br>\n  I love hearing about different points of views and experiences on topics and...<br>\n  of course videogames!<br><br>\n  Do you want to hear more? Let's get in touch!\n`;\nconst AboutMeSection = `\n<section class=\"aboutme fadeIn\">\n  ${CloseBtn_1.default}\n  <div>\n    <h2>About me...</h2>\n    <p>\n      ${description}\n    </p>\n    <hr>\n    <div class=\"links\">\n      <a href=\"mailto:ivan.lori@protonmail.com\">Contact me</a> <span class=\"dot\"></span>\n      <a target=\"_blank\" rel=\"noopener\" href=\"${urlCV}\">View my CV</a>\n    </div>\n  </div>\n</section>`;\nexports.default = AboutMeSection;\n\n\n//# sourceURL=webpack:///./src/components/AboutMeSection.ts?");

/***/ }),

/***/ "./src/components/CloseBtn.ts":
/*!************************************!*\
  !*** ./src/components/CloseBtn.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst closeBtn = `\n  <div class=\"close-wrapper\">\n    <span id=\"js-close\">✕</span>\n  </div>\n`;\nexports.default = closeBtn;\n\n\n//# sourceURL=webpack:///./src/components/CloseBtn.ts?");

/***/ }),

/***/ "./src/components/HomeSection.ts":
/*!***************************************!*\
  !*** ./src/components/HomeSection.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.githubProfileUrl = \"https://github.com/ivanlori\";\nconst description = `\nA passionate Frontend Developer who care about details.<br />\nI'm currently working in Milan.\n`;\nconst HomeSection = `\n<section class=\"home fadeIn\">\n  <div>\n    <h1>Hi, I am Ivan</h1>\n    <p>\n      ${description}\n    </p>\n    <hr>\n    <div class=\"links\">\n      <a id=\"js-about-link\">About me</a> <span class=\"dot\"></span>\n      <a id=\"js-projects-link\">My latest projects</a>\n    </div>\n  </div>\n  <div class=\"social\">\n    <ul>\n      <li>\n        <a target=\"_blank\" rel=\"noopener\" href=\"${exports.githubProfileUrl}\">\n          <span class=\"icon-github\"></span>\n        </a>\n      </li>\n      <li>\n        <a target=\"_blank\" rel=\"noopener\" href=\"https://www.linkedin.com/in/ivanlori\">\n          <span class=\"icon-linkedin\"></span>\n        </a>\n      </li>\n    <ul>\n  </div>\n</section>`;\nexports.default = HomeSection;\n\n\n//# sourceURL=webpack:///./src/components/HomeSection.ts?");

/***/ }),

/***/ "./src/components/ProjectsSection.ts":
/*!*******************************************!*\
  !*** ./src/components/ProjectsSection.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst CloseBtn_1 = __importDefault(__webpack_require__(/*! ./CloseBtn */ \"./src/components/CloseBtn.ts\"));\nconst HomeSection_1 = __webpack_require__(/*! ./HomeSection */ \"./src/components/HomeSection.ts\");\nconst urlDemoEstimate = \"https://ivanlori.github.io/EstimateOnline/\";\nconst urlDemoVuemmerce = \"https://vuemmerce-git-master.ivanlori.now.sh/\";\nconst ProjectsSection = `\n<section class=\"projects fadeIn\">\n  ${CloseBtn_1.default}\n  <div>\n    <h1>My latest projects</h1>\n    <p>All my projects are experiments hosted on Github.<br>\n      I enjoy making new things and happy to see people who learn from them.\n    </p>\n    <div>\n      <h3>Vuemmerce | E-commerce template</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vue.js</li>\n        <li>Nuxt.js</li>\n        <li>Vuex</li>\n        <li>Bulma framework</li>\n      </ul>\n      <hr>\n      <div class=\"links\">\n        <a target=\"_blank\" rel=\"noopener\" href=\"${HomeSection_1.githubProfileUrl}/Vuemmerce\">Source code</a> <span class=\"dot\"></span>\n        <a target=\"_blank\" rel=\"noopener\" href=\"${urlDemoVuemmerce}\">Demo</a>\n      </div>\n    </div>\n    <div>\n      <h3>Estimate of costs</h3>\n      <p>Technologies used:</p>\n      <ul>\n        <li>Vanilla JS</li>\n        <li>Grid CSS</li>\n      </ul>\n      <hr>\n      <div class=\"links\">\n        <a target=\"_blank\" rel=\"noopener\" href=\"${HomeSection_1.githubProfileUrl}/EstimateOnline\">Source code</a> <span class=\"dot\"></span>\n        <a target=\"_blank\" rel=\"noopener\" href=\"${urlDemoEstimate}\">Demo</a>\n      </div>\n    </div>\n  </div>\n</section>`;\nexports.default = ProjectsSection;\n\n\n//# sourceURL=webpack:///./src/components/ProjectsSection.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\nconst HomeSection_1 = __importDefault(__webpack_require__(/*! ./components/HomeSection */ \"./src/components/HomeSection.ts\"));\nconst ProjectsSection_1 = __importDefault(__webpack_require__(/*! ./components/ProjectsSection */ \"./src/components/ProjectsSection.ts\"));\nconst AboutMeSection_1 = __importDefault(__webpack_require__(/*! ./components/AboutMeSection */ \"./src/components/AboutMeSection.ts\"));\n(() => {\n    const App = document.getElementById(\"app\");\n    App.innerHTML = HomeSection_1.default;\n    document.body.addEventListener(\"click\", (e) => {\n        switch (e.target.id) {\n            case \"js-close\":\n                App.innerHTML = HomeSection_1.default;\n                break;\n            case \"js-about-link\":\n                App.innerHTML = AboutMeSection_1.default;\n                break;\n            case \"js-projects-link\":\n                App.innerHTML = ProjectsSection_1.default;\n                break;\n            default:\n                break;\n        }\n    });\n})();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });