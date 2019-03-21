webpackJsonp([0],{

/***/ 250:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(352)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(354)
/* template */
var __vue_template__ = __webpack_require__(366)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e563c85"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Programme.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e563c85", Component.options)
  } else {
    hotAPI.reload("data-v-3e563c85", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(260)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 260:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(262)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(264)
/* template */
var __vue_template__ = __webpack_require__(270)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8774195c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/components/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8774195c", Component.options)
  } else {
    hotAPI.reload("data-v-8774195c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("24d7f5e0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8774195c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8774195c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(162);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: "navbar",
    components: {
        Sidebar: __WEBPACK_IMPORTED_MODULE_0__Sidebar___default.a
    },
    props: {
        programmes: Array
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['logout']), {
        selected: function selected(id) {
            this.$emit('selectedProgramme', id);
        },
        exit: function exit() {
            // this.logout()
            //     .then(() => {
            //         this.$router.push('/login');
            // });

            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["d" /* makeLogout */]().then(function (response) {
                console.log('authService.makeLogout', response);
            }).catch(function (error) {
                console.log('authService.makeLogout error', error);
            });
        },
        toggleMenu: function toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }),
    data: function data() {
        return {
            isOpen: false
        };
    }
});

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(266)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(268)
/* template */
var __vue_template__ = __webpack_require__(269)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d90988a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/components/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d90988a", Component.options)
  } else {
    hotAPI.reload("data-v-3d90988a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("c1802e04", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d90988a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d90988a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "sidebar",
    props: {
        programmes: Array
    },
    methods: {
        toggleMenu: function toggleMenu(id) {
            this.sel = id;
        }
    },
    data: function data() {
        return {
            sel: null
        };
    }
});

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "navbar-default sidebar", attrs: { role: "navigation" } },
    [
      _c("div", { staticClass: "sidebar-nav navbar-collapse" }, [
        _c(
          "ul",
          { staticClass: "nav", attrs: { id: "side-menu" } },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("router-link", { attrs: { to: { name: "home" } } }, [
                  _c("i", { staticClass: "fa fa-dashboard fa-fw" }),
                  _vm._v(" Dashboard")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _vm._l(_vm.programmes, function(programme) {
              return [
                _c("li", [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.toggleMenu(programme.id)
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fa fa-life-ring fa-fw" }),
                      _vm._v(" " + _vm._s(programme.name) + " "),
                      _c("span", { staticClass: "fa arrow" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "nav nav-second-level collapse",
                      class: { in: _vm.sel === programme.id }
                    },
                    [
                      _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              class: { active: _vm.sel === programme.id },
                              attrs: {
                                to: {
                                  name: "programme",
                                  params: { id: programme.id }
                                }
                              }
                            },
                            [_vm._v(_vm._s(programme.name))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            class: { active: _vm.sel === programme.id },
                            attrs: { href: "productpp.html" }
                          },
                          [_vm._v(_vm._s(programme.name) + " By Assigned To")]
                        )
                      ])
                    ]
                  )
                ])
              ]
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "sidebar-search" }, [
      _c("div", { staticClass: "input-group custom-search-form" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search..." }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn" }, [
          _c(
            "button",
            { staticClass: "btn btn-default", attrs: { type: "button" } },
            [_c("i", { staticClass: "fa fa-search" })]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d90988a", module.exports)
  }
}

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "navbar navbar-default navbar-static-top",
      staticStyle: { "margin-bottom": "0" },
      attrs: { role: "navigation" }
    },
    [
      _c(
        "div",
        { staticClass: "navbar-header" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: { name: "home" } } },
            [_vm._v("QAdmin")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "nav navbar-top-links navbar-right" }, [
        _c("li", { staticClass: "dropdown", class: { open: _vm.isOpen } }, [
          _c(
            "a",
            {
              staticClass: "dropdown-toggle",
              attrs: { "data-toggle": "dropdown" },
              on: { click: _vm.toggleMenu }
            },
            [
              _c("i", { staticClass: "fa fa-user fa-fw" }),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-caret-down" })
            ]
          ),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu dropdown-user" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("li", { staticClass: "divider" }),
            _vm._v(" "),
            _c("li", [
              _c("a", { on: { click: _vm.exit } }, [
                _c("i", { staticClass: "fa fa-sign-out fa-fw" }),
                _vm._v(" Logout")
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("sidebar", {
        attrs: { programmes: _vm.programmes },
        on: { selectEvent: _vm.selected }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggle",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": ".navbar-collapse"
        }
      },
      [
        _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" }),
        _vm._v(" "),
        _c("span", { staticClass: "icon-bar" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-user fa-fw" }),
        _vm._v(" User Profile")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-gear fa-fw" }),
        _vm._v(" Settings")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8774195c", module.exports)
  }
}

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(272)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(274)
/* template */
var __vue_template__ = __webpack_require__(280)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0b617acb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Projects/ProjectStatusTracker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b617acb", Component.options)
  } else {
    hotAPI.reload("data-v-0b617acb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(273);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("d49faa90", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b617acb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusTracker.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0b617acb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusTracker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ProjectStatusItem: __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem___default.a
    },
    name: "project-status-tracker",
    props: {
        projectList: Array,
        tasksList: Array,
        showModalProject: Boolean,
        currentProg: Object,
        programmesList: Array
    },
    computed: {
        isHomePage: function isHomePage() {
            return this.$route.name === 'home';
        }
    },
    data: function data() {
        return {
            activetab: 1,
            isOpen: false
        };
    },
    mounted: function mounted() {
        // console.log('project-status-tracker this.projectList', this.projectList);
    },

    methods: {
        selectProgrammeEvent: function selectProgrammeEvent(id) {
            this.$emit('selectedProgramme', id);
            this.isOpen = !this.isOpen;
        },
        projectFilter: function projectFilter(status) {
            var _this = this;

            var filtered = [],
                newArr = [];
            filtered = _.filter(this.projectList, ['status_id', status]);
            newArr = _.map(filtered, function (value) {
                var tasks = _.filter(_this.tasksList, ['project_id', value.id]);
                var progSumm = _.sumBy(tasks, function (task) {
                    return task.progress;
                });
                if (_.size(tasks) > 0) {
                    value.progress = _.floor(progSumm / _.size(tasks));
                } else {
                    value.progress = 0;
                }
                return value;
            });
            return newArr;
        },
        selectProjectEvent: function selectProjectEvent(id) {
            this.$emit('selectProject', id);
        }
    }
});

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(279)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8d0a8de0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Projects/ProjectStatusItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8d0a8de0", Component.options)
  } else {
    hotAPI.reload("data-v-8d0a8de0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("fa67097c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d0a8de0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusItem.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8d0a8de0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "project-status-item",
    props: {
        projects: Array
    },
    data: function data() {
        return {
            sel: null
        };
    },

    methods: {
        selected: function selected(id) {
            this.sel = id;
            this.$emit('selectEvent', id);
        },
        colorClass: function colorClass(progress) {
            if (progress > 0 && progress <= 30) {
                return 'progress-bar-success';
            } else if (progress > 30 && progress <= 70) {
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-danger';
            }
        }
    }
});

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "nav nav-tabs nav-stacked" },
    [
      _vm._l(_vm.projects, function(project, index) {
        return [
          _c("li", { class: { "bg-info": _vm.sel === project.id } }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.selected(project.id)
                  }
                }
              },
              [
                _c("div", [
                  _c("p", [
                    _c("strong", [_vm._v(_vm._s(project.name))]),
                    _vm._v(" "),
                    _c("span", { staticClass: "pull-right text-muted" }, [
                      _vm._v(_vm._s(project.progress) + "% Complete")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "progress progress-striped active" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar",
                          class: _vm.colorClass(project.progress),
                          style: "width: " + project.progress + "%",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": project.progress,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v(
                              _vm._s(project.progress) + "% Complete (success)"
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" })
        ]
      }),
      _vm._v(" "),
      _vm.projects.length === 0 ? [_vm._m(0)] : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", { staticClass: "text-center" }, [_vm._v("No project")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8d0a8de0", module.exports)
  }
}

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("i", { staticClass: "fa fa-percent fa-fw" }),
      _vm._v("  Project Status Tracker\n        "),
      _c("div", { staticClass: "pull-right" }, [
        _c(
          "div",
          { staticClass: "btn-group", class: { open: _vm.isOpen } },
          [
            !_vm.isHomePage
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-xs",
                    on: {
                      click: function($event) {
                        return _vm.$emit("showedModalProject")
                      }
                    }
                  },
                  [_vm._v("Add New Project")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isHomePage
              ? [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default btn-xs dropdown-toggle",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.isOpen = !_vm.isOpen
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.currentProg.name) +
                          "\n                        "
                      ),
                      _c("span", { staticClass: "caret" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "dropdown-menu pull-right",
                      attrs: { role: "menu" }
                    },
                    [
                      _vm._l(_vm.programmesList, function(programme) {
                        return [
                          _c("li", [
                            _c(
                              "a",
                              {
                                on: {
                                  click: function($event) {
                                    return _vm.selectProgrammeEvent(
                                      programme.id
                                    )
                                  }
                                }
                              },
                              [_vm._v(_vm._s(programme.name))]
                            )
                          ]),
                          _c("li", { staticClass: "divider" })
                        ]
                      })
                    ],
                    2
                  )
                ]
              : _vm._e()
          ],
          2
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c("ul", { staticClass: "nav nav-tabs" }, [
        _c("li", { class: [_vm.activetab === 1 ? "active" : ""] }, [
          _c(
            "a",
            {
              attrs: { "data-toggle": "tab" },
              on: {
                click: function($event) {
                  _vm.activetab = 1
                }
              }
            },
            [_vm._v("Active")]
          )
        ]),
        _vm._v(" "),
        _c("li", { class: [_vm.activetab === 2 ? "active" : ""] }, [
          _c(
            "a",
            {
              attrs: { "data-toggle": "tab" },
              on: {
                click: function($event) {
                  _vm.activetab = 2
                }
              }
            },
            [_vm._v("Completed")]
          )
        ]),
        _vm._v(" "),
        _c("li", { class: [_vm.activetab === 3 ? "active" : ""] }, [
          _c(
            "a",
            {
              attrs: { "data-toggle": "tab" },
              on: {
                click: function($event) {
                  _vm.activetab = 3
                }
              }
            },
            [_vm._v("Archived")]
          )
        ]),
        _vm._v(" "),
        _c("li", { class: [_vm.activetab === 4 ? "active" : ""] }, [
          _c(
            "a",
            {
              attrs: { "data-toggle": "tab" },
              on: {
                click: function($event) {
                  _vm.activetab = 4
                }
              }
            },
            [_vm._v("Deleted")]
          )
        ]),
        _vm._v(" "),
        _c("li", { class: [_vm.activetab === 5 ? "active" : ""] }, [
          _c(
            "a",
            {
              attrs: { "data-toggle": "tab" },
              on: {
                click: function($event) {
                  _vm.activetab = 5
                }
              }
            },
            [_vm._v("Drafts")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content" }, [
        _vm.activetab === 1
          ? _c(
              "div",
              {
                staticClass: "tab-pane fade ",
                class: [_vm.activetab === 1 ? "in active" : ""]
              },
              [
                _c("project-status-item", {
                  attrs: { projects: _vm.projectFilter(1) },
                  on: { selectEvent: _vm.selectProjectEvent }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === 2
          ? _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: [_vm.activetab === 2 ? "in active" : ""]
              },
              [
                _c("project-status-item", {
                  attrs: { projects: _vm.projectFilter(2) },
                  on: { selectEvent: _vm.selectProjectEvent }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === 3
          ? _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: [_vm.activetab === 3 ? "in active" : ""]
              },
              [
                _c("project-status-item", {
                  attrs: { projects: _vm.projectFilter(3) },
                  on: { selectEvent: _vm.selectProjectEvent }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === 4
          ? _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: [_vm.activetab === 4 ? "in active" : ""]
              },
              [
                _c("project-status-item", {
                  attrs: { projects: _vm.projectFilter(4) },
                  on: { selectEvent: _vm.selectProjectEvent }
                })
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.activetab === 5
          ? _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: [_vm.activetab === 5 ? "in active" : ""]
              },
              [
                _c("project-status-item", {
                  attrs: { projects: _vm.projectFilter(5) },
                  on: { selectEvent: _vm.selectProjectEvent }
                })
              ],
              1
            )
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b617acb", module.exports)
  }
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(282)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(284)
/* template */
var __vue_template__ = __webpack_require__(290)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0c0167ab"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Tasks/TaskList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c0167ab", Component.options)
  } else {
    hotAPI.reload("data-v-0c0167ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(283);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("eac6a5d8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c0167ab\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskList.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0c0167ab\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskItem__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TaskItem__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "task-list",
    components: {
        TaskItem: __WEBPACK_IMPORTED_MODULE_0__TaskItem___default.a
    },
    props: {
        currentProject: Object,
        tasks: Array,
        projectList: Array
    },
    computed: {
        isHomePage: function isHomePage() {
            return this.$route.name === 'home';
        }
    },
    mounted: function mounted() {
        // console.log( 'task-list projectList', this.projectList)
    },

    methods: {
        selectTask: function selectTask(id) {
            this.$emit('selectTask', id);
        },
        selectProjectEvent: function selectProjectEvent(id) {
            this.$emit('selectProject', id);
            this.isOpen = !this.isOpen;
        }
    },
    data: function data() {
        return {
            isOpen: false
        };
    }
});

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(286)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(288)
/* template */
var __vue_template__ = __webpack_require__(289)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-01fbefa0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Tasks/TaskItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-01fbefa0", Component.options)
  } else {
    hotAPI.reload("data-v-01fbefa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(287);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("3ba055f5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01fbefa0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskItem.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-01fbefa0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "task-item",
    props: {
        tasks: Array
    },
    data: function data() {
        return {
            sel: null
        };
    },

    methods: {
        selected: function selected(id) {
            this.sel = id;
            this.$emit('selectEvent', id);
        },
        colorClass: function colorClass(progress) {
            if (progress > 0 && progress <= 30) {
                return 'progress-bar-success';
            } else if (progress > 30 && progress <= 70) {
                return 'progress-bar-warning';
            } else {
                return 'progress-bar-danger';
            }
        }
    }
});

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "nav nav-tabs nav-stacked" },
    [
      _vm._l(_vm.tasks, function(task) {
        return [
          _c("li", { class: { "bg-info": _vm.sel === task.id } }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.selected(task.id)
                  }
                }
              },
              [
                _c("div", [
                  _c("p", [
                    _c("strong", [_vm._v(_vm._s(task.name))]),
                    _vm._v(" "),
                    _c("span", { staticClass: "pull-right text-muted" }, [
                      _vm._v(_vm._s(task.progress) + "% Complete")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "progress progress-striped active",
                      staticStyle: { width: "100%" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "progress-bar",
                          class: _vm.colorClass(task.progress),
                          style: "width: " + task.progress + "%",
                          attrs: {
                            role: "progressbar",
                            "aria-valuenow": task.progress,
                            "aria-valuemin": "0",
                            "aria-valuemax": "100"
                          }
                        },
                        [
                          _c("span", { staticClass: "sr-only" }, [
                            _vm._v(
                              _vm._s(task.progress) + "% Complete (success)"
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" })
        ]
      }),
      _vm._v(" "),
      _vm.tasks.length === 0 ? [_vm._m(0)] : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("p", { staticClass: "text-center" }, [_vm._v("No tasks")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-01fbefa0", module.exports)
  }
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel panel-default" }, [
    _c("div", { staticClass: "panel-heading" }, [
      _c("i", { staticClass: "fa fa-bell fa-fw" }),
      _vm._v("  Tasks\n        "),
      _c("div", { staticClass: "pull-right" }, [
        _c("div", { staticClass: "btn-group", class: { open: _vm.isOpen } }, [
          !_vm.isHomePage
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-xs",
                  on: {
                    click: function($event) {
                      return _vm.$emit("showedModalTask")
                    }
                  }
                },
                [_vm._v("Add New Task")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-default btn-xs dropdown-toggle",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  _vm.isOpen = !_vm.isOpen
                }
              }
            },
            [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.currentProject.name) +
                  "  \n                    "
              ),
              _c("span", { staticClass: "caret" })
            ]
          ),
          _vm._v(" "),
          _c(
            "ul",
            {
              staticClass: "dropdown-menu pull-right",
              attrs: { role: "menu" }
            },
            [
              _vm._l(_vm.projectList, function(project) {
                return [
                  _c("li", [
                    _c(
                      "a",
                      {
                        on: {
                          click: function($event) {
                            return _vm.selectProjectEvent(project.id)
                          }
                        }
                      },
                      [_vm._v(_vm._s(project.name))]
                    )
                  ]),
                  _c("li", { staticClass: "divider" })
                ]
              })
            ],
            2
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "div",
        { staticClass: "panel-body" },
        [
          _c("task-item", {
            attrs: { tasks: _vm.tasks },
            on: { selectEvent: _vm.selectTask }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c0167ab", module.exports)
  }
}

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(295)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60676c76"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Comments/CommentsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60676c76", Component.options)
  } else {
    hotAPI.reload("data-v-60676c76", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(293);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("7b4937cd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60676c76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentsList.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-60676c76\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentsList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "comments-list",
    props: {
        comments: Array
    },
    data: function data() {
        return {
            newComment: {
                body: ''
            }
        };
    },

    computed: {
        isHomePage: function isHomePage() {
            return this.$route.name === 'home';
        }
    },
    methods: {
        submit: function submit() {
            this.$emit('sendEvent', this.newComment);
            this.newComment = {};
        },
        formatDateHuman: function formatDateHuman(date) {
            var minutes = moment().diff(date, 'minutes');
            return moment.duration(minutes, 'minutes').humanize();
        }
    }
});

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "chat-panel panel panel-default" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "ul",
        { staticClass: "chat" },
        [
          _vm._l(_vm.comments, function(comment, index) {
            return [
              !(index % 2)
                ? _c("li", { staticClass: "left clearfix" }, [
                    _vm._m(1, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "chat-body clearfix" }, [
                      _c("div", { staticClass: "header" }, [
                        _c("strong", { staticClass: "primary-font" }, [
                          _vm._v(
                            _vm._s(comment.user.first_name) +
                              " " +
                              _vm._s(comment.user.last_name)
                          )
                        ]),
                        _vm._v(" "),
                        _c("small", { staticClass: "pull-right text-muted" }, [
                          _c("i", { staticClass: "fa fa-clock-o fa-fw" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.formatDateHuman(comment.created_at)) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(comment.body) +
                            "\n                        "
                        )
                      ])
                    ])
                  ])
                : _c("li", { staticClass: "right clearfix" }, [
                    _vm._m(2, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "chat-body clearfix" }, [
                      _c("div", { staticClass: "header" }, [
                        _c("small", { staticClass: " text-muted" }, [
                          _c("i", { staticClass: "fa fa-clock-o fa-fw" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.formatDateHuman(comment.created_at))
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "strong",
                          { staticClass: "pull-right primary-font" },
                          [
                            _vm._v(
                              _vm._s(comment.user.first_name) +
                                " " +
                                _vm._s(comment.user.last_name)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(comment.body) +
                            "\n                        "
                        )
                      ])
                    ])
                  ])
            ]
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-footer" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newComment.body,
              expression: "newComment.body"
            }
          ],
          staticClass: "form-control input-sm",
          attrs: { type: "text", placeholder: "Type your message here..." },
          domProps: { value: _vm.newComment.body },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newComment, "body", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "input-group-btn" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-warning btn-sm",
              class: { disabled: _vm.isHomePage },
              on: { click: _vm.submit }
            },
            [_vm._v("\n                    Send\n                ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("i", { staticClass: "fa fa-comments fa-fw" }),
      _vm._v(" Comments\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "chat-img pull-left" }, [
      _c("img", {
        staticClass: "img-circle",
        attrs: { src: "http://placehold.it/50/55C1E7/fff", alt: "User Avatar" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "chat-img pull-right" }, [
      _c("img", {
        staticClass: "img-circle",
        attrs: { src: "http://placehold.it/50/FA6F57/fff", alt: "User Avatar" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-60676c76", module.exports)
  }
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(353);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("480ffca6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e563c85\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Programme.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e563c85\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Programme.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Projects_ProjectStatusTracker__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Projects_ProjectStatusTracker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Projects_ProjectStatusTracker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tasks_TaskList__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tasks_TaskList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tasks_TaskList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Projects_AddProjectModal__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Projects_AddProjectModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Projects_AddProjectModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_AddTaskModal__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_AddTaskModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Tasks_AddTaskModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(161);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default.a,
        ProjectStatusTracker: __WEBPACK_IMPORTED_MODULE_1__Projects_ProjectStatusTracker___default.a,
        TaskList: __WEBPACK_IMPORTED_MODULE_2__Tasks_TaskList___default.a,
        AddProjectModal: __WEBPACK_IMPORTED_MODULE_3__Projects_AddProjectModal___default.a,
        AddTaskModal: __WEBPACK_IMPORTED_MODULE_4__Tasks_AddTaskModal___default.a,
        CommentsList: __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList___default.a
    },
    name: "Programme",
    watch: {
        '$route': function $route(to, from) {
            // обрабатываем изменение параметров маршрута...
            this.selectedProgramme(to.params.id);
        }
    },
    computed: {
        programmesList: function programmesList() {
            return this.$store.state.Dashboard.programmesList;
        },
        projectList: function projectList() {
            return this.$store.state.Dashboard.projectList;
        },
        tasksList: function tasksList() {
            return this.$store.state.Dashboard.tasksList;
        },
        commentsList: function commentsList() {
            return this.$store.state.Dashboard.commentsList;
        },
        selectProgrammProj: function selectProgrammProj() {
            var projects = _.filter(this.projectList, ['programme_id', parseInt(this.currentProg.id)]);
            return projects;
        },
        selectProjectTasks: function selectProjectTasks() {
            var tasks = _.filter(this.tasksList, ['project_id', this.currentProject.id]);
            return _.isEmpty(tasks) ? [] : tasks;
        },
        selectedTaskComments: function selectedTaskComments() {
            var comments = _.filter(this.commentsList, ['task_id', this.currentTask.id]);
            return _.isEmpty(comments) ? [] : comments;
        }
    },
    mounted: function mounted() {
        var id = this.$route.params['id'];
        this.selectedProgramme(id);
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapActions */])(['saveNewProject', 'saveNewTask', 'saveNewComment']), {
        selectedProgramme: function selectedProgramme(id) {
            this.currentProg = _.find(this.programmesList, ['id', parseInt(id)]);
            this.selectDefaultProject();
            this.selectDefaultTask();
        },
        selectDefaultProject: function selectDefaultProject() {
            var firstProject = _.first(this.selectProgrammProj);
            if (!_.isEmpty(firstProject)) {
                this.selectedProject(firstProject.id);
            } else {
                this.currentProject = {};
            }
        },
        selectDefaultTask: function selectDefaultTask() {
            var firstTask = _.first(this.selectProjectTasks);
            if (!_.isEmpty(firstTask)) {
                this.selectedTask(firstTask.id);
            } else {
                this.currentTask = {};
            }
        },
        selectedProject: function selectedProject(id) {
            this.currentProject = _.find(this.projectList, ['id', id]);
            this.selectDefaultTask();
        },
        selectedTask: function selectedTask(id) {
            this.currentTask = _.find(this.tasksList, ['id', id]);
        },
        showedModalProject: function showedModalProject() {
            if (_.isEmpty(this.currentProg)) {
                return;
            }
            this.showModalProject = true;
        },
        addProject: function addProject(project) {
            var data = {
                type: 'project',
                entity: project,
                programme_id: this.currentProg.id
            };
            this.saveNewProject(data).then(function (response) {
                console.log('resp in component', response);
            });
            this.showModalProject = false;
        },
        showedModalTask: function showedModalTask() {
            if (_.isEmpty(this.currentProject)) {
                return;
            }
            this.showModalTask = true;
        },
        addTask: function addTask(task) {
            var _this = this;

            var data = {
                type: 'task',
                entity: task,
                project_id: this.currentProject.id
            };
            this.saveNewTask(data).then(function () {
                // console.log('addTask then');
                _this.showModalTask = false;
            });
        },
        addComment: function addComment(comment) {
            if (_.isEmpty(this.currentTask)) {
                return;
            }
            var data = {
                type: 'comment',
                entity: comment,
                task_id: this.currentTask.id
            };
            this.saveNewComment(data).then(function (resp) {
                console.log('saveNewComment in component', resp);
            });
        }
    }),
    data: function data() {
        return {
            showModalTask: false,
            showModalProject: false,
            currentTask: {},
            currentProg: {},
            currentProject: {}
            // selectedTaskComments: [],
            // selectProjectTasks: [],
            // selectProgrammProj: []
        };
    }
});

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(356)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(358)
/* template */
var __vue_template__ = __webpack_require__(359)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2113a772"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Projects/AddProjectModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2113a772", Component.options)
  } else {
    hotAPI.reload("data-v-2113a772", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(357);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("3a979fb2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2113a772\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProjectModal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2113a772\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProjectModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-2113a772] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-2113a772] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-2113a772] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-2113a772] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-2113a772] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-2113a772] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-2113a772] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-2113a772] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-2113a772],\n.modal-leave-active .modal-container[data-v-2113a772] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "add-project-modal",
    data: function data() {
        return {
            project: {
                id: null,
                programme_id: null,
                name: '',
                status: 'Active'
            }
        };
    }
});

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [_vm._v("New Project")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Project name:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.project.name,
                        expression: "project.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Project name" },
                    domProps: { value: _vm.project.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.project, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Status:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.project.status,
                        expression: "project.status"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.project,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "Active" } }, [
                      _vm._v("Active")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Completed" } }, [
                      _vm._v("Completed")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Archived" } }, [
                      _vm._v("Archived")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Deleted" } }, [
                      _vm._v("Deleted")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Drafts" } }, [
                      _vm._v("Drafts")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("saveProject", _vm.project)
                      }
                    }
                  },
                  [_vm._v("Create")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    on: {
                      click: function($event) {
                        return _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2113a772", module.exports)
  }
}

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(361)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(363)
/* template */
var __vue_template__ = __webpack_require__(365)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e77ba6f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/App/Dashboard/Tasks/AddTaskModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e77ba6f", Component.options)
  } else {
    hotAPI.reload("data-v-3e77ba6f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(362);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("991eb4b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e77ba6f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddTaskModal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e77ba6f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddTaskModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-3e77ba6f] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-3e77ba6f] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-3e77ba6f] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-3e77ba6f] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-3e77ba6f] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-3e77ba6f] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-3e77ba6f] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-3e77ba6f] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-3e77ba6f],\n.modal-leave-active .modal-container[data-v-3e77ba6f] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n.form-control[disabled][data-v-3e77ba6f], .form-control[readonly][data-v-3e77ba6f], fieldset[disabled] .form-control[data-v-3e77ba6f] {\n    background-color: #fff;\n    opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__ = __webpack_require__(364);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "add-task-modal",
    components: {
        Datepicker: __WEBPACK_IMPORTED_MODULE_0_vuejs_datepicker__["a" /* default */]
    },
    methods: {},
    data: function data() {
        return {
            format: 'dd-MM-yyyy',
            task: {
                id: null,
                project_id: null,
                name: '',
                description: '',
                start_date: new Date(),
                end_date: new Date(),
                progress: null
            }
        };
    }
});

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
 * vuejs-datepicker v1.5.4
 * (c) 2016-2018 Charlie Kassel
 * Released under the MIT License.
 */
var Language = function Language (language, months, monthsAbbr, days) {
  this.language = language;
  this.months = months;
  this.monthsAbbr = monthsAbbr;
  this.days = days;
  this.rtl = false;
  this.ymd = false;
  this.yearSuffix = '';
};

var prototypeAccessors = { language: { configurable: true },months: { configurable: true },monthsAbbr: { configurable: true },days: { configurable: true } };

prototypeAccessors.language.get = function () {
  return this._language
};

prototypeAccessors.language.set = function (language) {
  if (typeof language !== 'string') {
    throw new TypeError('Language must be a string')
  }
  this._language = language;
};

prototypeAccessors.months.get = function () {
  return this._months
};

prototypeAccessors.months.set = function (months) {
  if (months.length !== 12) {
    throw new RangeError(("There must be 12 months for " + (this.language) + " language"))
  }
  this._months = months;
};

prototypeAccessors.monthsAbbr.get = function () {
  return this._monthsAbbr
};

prototypeAccessors.monthsAbbr.set = function (monthsAbbr) {
  if (monthsAbbr.length !== 12) {
    throw new RangeError(("There must be 12 abbreviated months for " + (this.language) + " language"))
  }
  this._monthsAbbr = monthsAbbr;
};

prototypeAccessors.days.get = function () {
  return this._days
};

prototypeAccessors.days.set = function (days) {
  if (days.length !== 7) {
    throw new RangeError(("There must be 7 days for " + (this.language) + " language"))
  }
  this._days = days;
};

Object.defineProperties( Language.prototype, prototypeAccessors );

var en = new Language(
  'English',
  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
)
// eslint-disable-next-line
;

var utils = {
  /**
   * @type {Boolean}
   */
  useUtc: false,
  /**
   * Returns the full year, using UTC or not
   * @param {Date} date
   */
  getFullYear: function getFullYear (date) {
    return this.useUtc ? date.getUTCFullYear() : date.getFullYear()
  },

  /**
   * Returns the month, using UTC or not
   * @param {Date} date
   */
  getMonth: function getMonth (date) {
    return this.useUtc ? date.getUTCMonth() : date.getMonth()
  },

  /**
   * Returns the date, using UTC or not
   * @param {Date} date
   */
  getDate: function getDate (date) {
    return this.useUtc ? date.getUTCDate() : date.getDate()
  },

  /**
   * Returns the day, using UTC or not
   * @param {Date} date
   */
  getDay: function getDay (date) {
    return this.useUtc ? date.getUTCDay() : date.getDay()
  },

  /**
   * Returns the hours, using UTC or not
   * @param {Date} date
   */
  getHours: function getHours (date) {
    return this.useUtc ? date.getUTCHours() : date.getHours()
  },

  /**
   * Returns the minutes, using UTC or not
   * @param {Date} date
   */
  getMinutes: function getMinutes (date) {
    return this.useUtc ? date.getUTCMinutes() : date.getMinutes()
  },

  /**
   * Sets the full year, using UTC or not
   * @param {Date} date
   */
  setFullYear: function setFullYear (date, value, useUtc) {
    return this.useUtc ? date.setUTCFullYear(value) : date.setFullYear(value)
  },

  /**
   * Sets the month, using UTC or not
   * @param {Date} date
   */
  setMonth: function setMonth (date, value, useUtc) {
    return this.useUtc ? date.setUTCMonth(value) : date.setMonth(value)
  },

  /**
   * Sets the date, using UTC or not
   * @param {Date} date
   * @param {Number} value
   */
  setDate: function setDate (date, value, useUtc) {
    return this.useUtc ? date.setUTCDate(value) : date.setDate(value)
  },

  /**
   * Check if date1 is equivalent to date2, without comparing the time
   * @see https://stackoverflow.com/a/6202196/4455925
   * @param {Date} date1
   * @param {Date} date2
   */
  compareDates: function compareDates (date1, date2) {
    var d1 = new Date(date1.getTime());
    var d2 = new Date(date2.getTime());

    if (this.useUtc) {
      d1.setUTCHours(0, 0, 0, 0);
      d2.setUTCHours(0, 0, 0, 0);
    } else {
      d1.setHours(0, 0, 0, 0);
      d2.setHours(0, 0, 0, 0);
    }
    return d1.getTime() === d2.getTime()
  },

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {Boolean}
   */
  isValidDate: function isValidDate (date) {
    if (Object.prototype.toString.call(date) !== '[object Date]') {
      return false
    }
    return !isNaN(date.getTime())
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {String}
   */
  getDayNameAbbr: function getDayNameAbbr (date, days) {
    if (typeof date !== 'object') {
      throw TypeError('Invalid Type')
    }
    return days[this.getDay(date)]
  },

  /**
   * Return name of the month
   * @param {Number|Date}
   * @param {Array}
   * @return {String}
   */
  getMonthName: function getMonthName (month, months) {
    if (!months) {
      throw Error('missing 2nd parameter Months array')
    }
    if (typeof month === 'object') {
      return months[this.getMonth(month)]
    }
    if (typeof month === 'number') {
      return months[month]
    }
    throw TypeError('Invalid type')
  },

  /**
   * Return an abbreviated version of the month
   * @param {Number|Date}
   * @return {String}
   */
  getMonthNameAbbr: function getMonthNameAbbr (month, monthsAbbr) {
    if (!monthsAbbr) {
      throw Error('missing 2nd paramter Months array')
    }
    if (typeof month === 'object') {
      return monthsAbbr[this.getMonth(month)]
    }
    if (typeof month === 'number') {
      return monthsAbbr[month]
    }
    throw TypeError('Invalid type')
  },

  /**
   * Alternative get total number of days in month
   * @param {Number} year
   * @param {Number} m
   * @return {Number}
   */
  daysInMonth: function daysInMonth (year, month) {
    return /8|3|5|10/.test(month) ? 30 : month === 1 ? (!(year % 4) && year % 100) || !(year % 400) ? 29 : 28 : 31
  },

  /**
   * Get nth suffix for date
   * @param {Number} day
   * @return {String}
   */
  getNthSuffix: function getNthSuffix (day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st'
      case 2:
      case 22:
        return 'nd'
      case 3:
      case 23:
        return 'rd'
      default:
        return 'th'
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {String}
   * @param {Object}
   * @return {String}
   */
  formatDate: function formatDate (date, format, translation) {
    translation = (!translation) ? en : translation;
    var year = this.getFullYear(date);
    var month = this.getMonth(date) + 1;
    var day = this.getDate(date);
    var str = format
      .replace(/dd/, ('0' + day).slice(-2))
      .replace(/d/, day)
      .replace(/yyyy/, year)
      .replace(/yy/, String(year).slice(2))
      .replace(/MMMM/, this.getMonthName(this.getMonth(date), translation.months))
      .replace(/MMM/, this.getMonthNameAbbr(this.getMonth(date), translation.monthsAbbr))
      .replace(/MM/, ('0' + month).slice(-2))
      .replace(/M(?!a|ä|e)/, month)
      .replace(/su/, this.getNthSuffix(this.getDate(date)))
      .replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
    return str
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray: function createDateArray (start, end) {
    var this$1 = this;

    var dates = [];
    while (start <= end) {
      dates.push(new Date(start));
      start = this$1.setDate(new Date(start), this$1.getDate(new Date(start)) + 1);
    }
    return dates
  },

  /**
   * method used as a prop validator for input values
   * @param {*} val
   * @return {Boolean}
   */
  validateDateInput: function validateDateInput (val) {
    return val === null || val instanceof Date || typeof val === 'string' || typeof val === 'number'
  }
};

var makeDateUtils = function (useUtc) { return (Object.assign({}, utils, {useUtc: useUtc})); };

var utils$1 = Object.assign({}, utils)
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var DateInput = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'input-group' : _vm.bootstrapStyling}},[(_vm.calendarButton)?_c('span',{staticClass:"vdp-datepicker__calendar-button",class:{'input-group-prepend' : _vm.bootstrapStyling},style:({'cursor:not-allowed;' : _vm.disabled}),on:{"click":_vm.showCalendar}},[_c('span',{class:{'input-group-text' : _vm.bootstrapStyling}},[_c('i',{class:_vm.calendarButtonIcon},[_vm._v(" "+_vm._s(_vm.calendarButtonIconContent)+" "),(!_vm.calendarButtonIcon)?_c('span',[_vm._v("…")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_c('input',{ref:_vm.refName,class:_vm.computedInputClass,attrs:{"type":_vm.inline ? 'hidden' : 'text',"name":_vm.name,"id":_vm.id,"open-date":_vm.openDate,"placeholder":_vm.placeholder,"clear-button":_vm.clearButton,"disabled":_vm.disabled,"required":_vm.required,"readonly":!_vm.typeable,"autocomplete":"off"},domProps:{"value":_vm.formattedValue},on:{"click":_vm.showCalendar,"keyup":_vm.parseTypedDate,"blur":_vm.inputBlurred}}),_vm._v(" "),(_vm.clearButton && _vm.selectedDate)?_c('span',{staticClass:"vdp-datepicker__clear-button",class:{'input-group-append' : _vm.bootstrapStyling},on:{"click":function($event){_vm.clearDate();}}},[_c('span',{class:{'input-group-text' : _vm.bootstrapStyling}},[_c('i',{class:_vm.clearButtonIcon},[(!_vm.clearButtonIcon)?_c('span',[_vm._v("×")]):_vm._e()])])]):_vm._e(),_vm._v(" "),_vm._t("afterDateInput")],2)},staticRenderFns: [],
  props: {
    selectedDate: Date,
    resetTypedDate: [Date],
    format: [String, Function],
    translation: Object,
    inline: Boolean,
    id: String,
    name: String,
    refName: String,
    openDate: Date,
    placeholder: String,
    inputClass: [String, Object, Array],
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    bootstrapStyling: Boolean,
    useUtc: Boolean
  },
  data: function data () {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      input: null,
      typedDate: false,
      utils: constructedDateUtils
    }
  },
  computed: {
    formattedValue: function formattedValue () {
      if (!this.selectedDate) {
        return null
      }
      if (this.typedDate) {
        return this.typedDate
      }
      return typeof this.format === 'function'
        ? this.format(this.selectedDate)
        : this.utils.formatDate(new Date(this.selectedDate), this.format, this.translation)
    },

    computedInputClass: function computedInputClass () {
      if (this.bootstrapStyling) {
        if (typeof this.inputClass === 'string') {
          return [this.inputClass, 'form-control'].join(' ')
        }
        return Object.assign({}, {'form-control': true}, this.inputClass)
      }
      return this.inputClass
    }
  },
  watch: {
    resetTypedDate: function resetTypedDate () {
      this.typedDate = false;
    }
  },
  methods: {
    showCalendar: function showCalendar () {
      this.$emit('showCalendar');
    },
    /**
     * Attempt to parse a typed date
     * @param {Event} event
     */
    parseTypedDate: function parseTypedDate (event) {
      // close calendar if escape or enter are pressed
      if ([
        27, // escape
        13 // enter
      ].includes(event.keyCode)) {
        this.input.blur();
      }

      if (this.typeable) {
        var typedDate = Date.parse(this.input.value);
        if (!isNaN(typedDate)) {
          this.typedDate = this.input.value;
          this.$emit('typedDate', new Date(this.typedDate));
        }
      }
    },
    /**
     * nullify the typed date to defer to regular formatting
     * called once the input is blurred
     */
    inputBlurred: function inputBlurred () {
      if (this.typeable && isNaN(Date.parse(this.input.value))) {
        this.clearDate();
        this.input.value = null;
        this.typedDate = null;
      }

      this.$emit('closeCalendar');
    },
    /**
     * emit a clearDate event
     */
    clearDate: function clearDate () {
      this.$emit('clearDate');
    }
  },
  mounted: function mounted () {
    this.input = this.$el.querySelector('input');
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var PickerDay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDayView),expression:"showDayView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextMonth() : _vm.previousMonth();}}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"day__month_btn",class:_vm.allowedToShowView('month') ? 'up' : '',on:{"click":_vm.showMonthCalendar}},[_vm._v(_vm._s(_vm.isYmd ? _vm.currYearName : _vm.currMonthName)+" "+_vm._s(_vm.isYmd ? _vm.currMonthName : _vm.currYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousMonth() : _vm.nextMonth();}}},[_vm._v(">")])]),_vm._v(" "),_c('div',{class:_vm.isRtl ? 'flex-rtl' : ''},[_vm._l((_vm.daysOfWeek),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day-header"},[_vm._v(_vm._s(d))])}),_vm._v(" "),(_vm.blankDays > 0)?_vm._l((_vm.blankDays),function(d){return _c('span',{key:d.timestamp,staticClass:"cell day blank"})}):_vm._e(),_vm._l((_vm.days),function(day){return _c('span',{key:day.timestamp,staticClass:"cell day",class:_vm.dayClasses(day),domProps:{"innerHTML":_vm._s(_vm.dayCellContent(day))},on:{"click":function($event){_vm.selectDate(day);}}})})],2)],2)},staticRenderFns: [],
  props: {
    showDayView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    fullMonthName: Boolean,
    allowedToShowView: Function,
    dayCellContent: {
      type: Function,
      default: function (day) { return day.date; }
    },
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    mondayFirst: Boolean,
    useUtc: Boolean
  },
  data: function data () {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    }
  },
  computed: {
    /**
     * Returns an array of day names
     * @return {String[]}
     */
    daysOfWeek: function daysOfWeek () {
      if (this.mondayFirst) {
        var tempDays = this.translation.days.slice();
        tempDays.push(tempDays.shift());
        return tempDays
      }
      return this.translation.days
    },
    /**
     * Returns the day number of the week less one for the first of the current month
     * Used to show amount of empty cells before the first in the day calendar layout
     * @return {Number}
     */
    blankDays: function blankDays () {
      var d = this.pageDate;
      var dObj = this.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      if (this.mondayFirst) {
        return this.utils.getDay(dObj) > 0 ? this.utils.getDay(dObj) - 1 : 6
      }
      return this.utils.getDay(dObj)
    },
    /**
     * @return {Object[]}
     */
    days: function days () {
      var this$1 = this;

      var d = this.pageDate;
      var days = [];
      // set up a new date object to the beginning of the current 'page'
      var dObj = this.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1))
        : new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
      var daysInMonth = this.utils.daysInMonth(this.utils.getFullYear(dObj), this.utils.getMonth(dObj));
      for (var i = 0; i < daysInMonth; i++) {
        days.push({
          date: this$1.utils.getDate(dObj),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedDate(dObj),
          isDisabled: this$1.isDisabledDate(dObj),
          isHighlighted: this$1.isHighlightedDate(dObj),
          isHighlightStart: this$1.isHighlightStart(dObj),
          isHighlightEnd: this$1.isHighlightEnd(dObj),
          isToday: this$1.utils.compareDates(dObj, new Date()),
          isWeekend: this$1.utils.getDay(dObj) === 0 || this$1.utils.getDay(dObj) === 6,
          isSaturday: this$1.utils.getDay(dObj) === 6,
          isSunday: this$1.utils.getDay(dObj) === 0
        });
        this$1.utils.setDate(dObj, this$1.utils.getDate(dObj) + 1);
      }
      return days
    },
    /**
     * Gets the name of the month the current page is on
     * @return {String}
     */
    currMonthName: function currMonthName () {
      var monthName = this.fullMonthName ? this.translation.months : this.translation.monthsAbbr;
      return this.utils.getMonthNameAbbr(this.utils.getMonth(this.pageDate), monthName)
    },
    /**
     * Gets the name of the year that current page is on
     * @return {Number}
     */
    currYearName: function currYearName () {
      var yearSuffix = this.translation.yearSuffix;
      return ("" + (this.utils.getFullYear(this.pageDate)) + yearSuffix)
    },
    /**
     * Is this translation using year/month/day format?
     * @return {Boolean}
     */
    isYmd: function isYmd () {
      return this.translation.ymd && this.translation.ymd === true
    },
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled () {
      return this.isRtl
        ? this.isNextMonthDisabled(this.pageTimestamp)
        : this.isPreviousMonthDisabled(this.pageTimestamp)
    },
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled () {
      return this.isRtl
        ? this.isPreviousMonthDisabled(this.pageTimestamp)
        : this.isNextMonthDisabled(this.pageTimestamp)
    }
  },
  methods: {
    selectDate: function selectDate (date) {
      if (date.isDisabled) {
        this.$emit('selectedDisabled', date);
        return false
      }
      this.$emit('selectDate', date);
    },
    /**
     * @return {Number}
     */
    getPageMonth: function getPageMonth () {
      return this.utils.getMonth(this.pageDate)
    },
    /**
     * Emit an event to show the month picker
     */
    showMonthCalendar: function showMonthCalendar () {
      this.$emit('showMonthCalendar');
    },
    /**
     * Change the page month
     * @param {Number} incrementBy
     */
    changeMonth: function changeMonth (incrementBy) {
      var date = this.pageDate;
      this.utils.setMonth(date, this.utils.getMonth(date) + incrementBy);
      this.$emit('changedMonth', date);
    },
    /**
     * Decrement the page month
     */
    previousMonth: function previousMonth () {
      if (!this.isPreviousMonthDisabled()) {
        this.changeMonth(-1);
      }
    },
    /**
     * Is the previous month disabled?
     * @return {Boolean}
     */
    isPreviousMonthDisabled: function isPreviousMonthDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.to) >= this.utils.getMonth(d) &&
        this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(d)
    },
    /**
     * Increment the current page month
     */
    nextMonth: function nextMonth () {
      if (!this.isNextMonthDisabled()) {
        this.changeMonth(+1);
      }
    },
    /**
     * Is the next month disabled?
     * @return {Boolean}
     */
    isNextMonthDisabled: function isNextMonthDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      var d = this.pageDate;
      return this.utils.getMonth(this.disabledDates.from) <= this.utils.getMonth(d) &&
        this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(d)
    },
    /**
     * Whether a day is selected
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedDate: function isSelectedDate (dObj) {
      return this.selectedDate && this.utils.compareDates(this.selectedDate, dObj)
    },
    /**
     * Whether a day is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledDate: function isDisabledDate (date) {
      var this$1 = this;

      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false
      }

      if (typeof this.disabledDates.dates !== 'undefined') {
        this.disabledDates.dates.forEach(function (d) {
          if (this$1.utils.compareDates(date, d)) {
            disabledDates = true;
            return true
          }
        });
      }
      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to && date < this.disabledDates.to) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from && date > this.disabledDates.from) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.ranges !== 'undefined') {
        this.disabledDates.ranges.forEach(function (range) {
          if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
            if (date < range.to && date > range.from) {
              disabledDates = true;
              return true
            }
          }
        });
      }
      if (typeof this.disabledDates.days !== 'undefined' && this.disabledDates.days.indexOf(this.utils.getDay(date)) !== -1) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.daysOfMonth !== 'undefined' && this.disabledDates.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        disabledDates = true;
      }
      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }
      return disabledDates
    },
    /**
     * Whether a day is highlighted (only if it is not disabled already except when highlighted.includeDisabled is true)
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightedDate: function isHighlightedDate (date) {
      var this$1 = this;

      if (!(this.highlighted && this.highlighted.includeDisabled) && this.isDisabledDate(date)) {
        return false
      }

      var highlighted = false;

      if (typeof this.highlighted === 'undefined') {
        return false
      }

      if (typeof this.highlighted.dates !== 'undefined') {
        this.highlighted.dates.forEach(function (d) {
          if (this$1.utils.compareDates(date, d)) {
            highlighted = true;
            return true
          }
        });
      }

      if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
        highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
      }

      if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(this.utils.getDay(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.daysOfMonth !== 'undefined' && this.highlighted.daysOfMonth.indexOf(this.utils.getDate(date)) !== -1) {
        highlighted = true;
      }

      if (typeof this.highlighted.customPredictor === 'function' && this.highlighted.customPredictor(date)) {
        highlighted = true;
      }

      return highlighted
    },
    dayClasses: function dayClasses (day) {
      return {
        'selected': day.isSelected,
        'disabled': day.isDisabled,
        'highlighted': day.isHighlighted,
        'today': day.isToday,
        'weekend': day.isWeekend,
        'sat': day.isSaturday,
        'sun': day.isSunday,
        'highlight-start': day.isHighlightStart,
        'highlight-end': day.isHighlightEnd
      }
    },
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightStart: function isHighlightStart (date) {
      return this.isHighlightedDate(date) &&
        (this.highlighted.from instanceof Date) &&
        (this.utils.getFullYear(this.highlighted.from) === this.utils.getFullYear(date)) &&
        (this.utils.getMonth(this.highlighted.from) === this.utils.getMonth(date)) &&
        (this.utils.getDate(this.highlighted.from) === this.utils.getDate(date))
    },
    /**
     * Whether a day is highlighted and it is the first date
     * in the highlighted range of dates
     * @param {Date}
     * @return {Boolean}
     */
    isHighlightEnd: function isHighlightEnd (date) {
      return this.isHighlightedDate(date) &&
        (this.highlighted.to instanceof Date) &&
        (this.utils.getFullYear(this.highlighted.to) === this.utils.getFullYear(date)) &&
        (this.utils.getMonth(this.highlighted.to) === this.utils.getMonth(date)) &&
        (this.utils.getDate(this.highlighted.to) === this.utils.getDate(date))
    },
    /**
     * Helper
     * @param  {mixed}  prop
     * @return {Boolean}
     */
    isDefined: function isDefined (prop) {
      return typeof prop !== 'undefined' && prop
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var PickerMonth = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMonthView),expression:"showMonthView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextYear() : _vm.previousYear();}}},[_vm._v("<")]),_vm._v(" "),_c('span',{staticClass:"month__year_btn",class:_vm.allowedToShowView('year') ? 'up' : '',on:{"click":_vm.showYearCalendar}},[_vm._v(_vm._s(_vm.pageYearName))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousYear() : _vm.nextYear();}}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.months),function(month){return _c('span',{key:month.timestamp,staticClass:"cell month",class:{'selected': month.isSelected, 'disabled': month.isDisabled},on:{"click":function($event){$event.stopPropagation();_vm.selectMonth(month);}}},[_vm._v(_vm._s(month.month))])})],2)},staticRenderFns: [],
  props: {
    showMonthView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  data: function data () {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    }
  },
  computed: {
    months: function months () {
      var this$1 = this;

      var d = this.pageDate;
      var months = [];
      // set up a new date object to the beginning of the current 'page'
      var dObj = this.useUtc
        ? new Date(Date.UTC(d.getUTCFullYear(), 0, d.getUTCDate()))
        : new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
      for (var i = 0; i < 12; i++) {
        months.push({
          month: this$1.utils.getMonthName(i, this$1.translation.months),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedMonth(dObj),
          isDisabled: this$1.isDisabledMonth(dObj)
        });
        this$1.utils.setMonth(dObj, this$1.utils.getMonth(dObj) + 1);
      }
      return months
    },
    /**
     * Get year name on current page.
     * @return {String}
     */
    pageYearName: function pageYearName () {
      var yearSuffix = this.translation.yearSuffix;
      return ("" + (this.utils.getFullYear(this.pageDate)) + yearSuffix)
    },
    /**
     * Is the left hand navigation disabled
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled () {
      return this.isRtl
        ? this.isNextYearDisabled(this.pageTimestamp)
        : this.isPreviousYearDisabled(this.pageTimestamp)
    },
    /**
     * Is the right hand navigation disabled
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled () {
      return this.isRtl
        ? this.isPreviousYearDisabled(this.pageTimestamp)
        : this.isNextYearDisabled(this.pageTimestamp)
    }
  },
  methods: {
    /**
     * Emits a selectMonth event
     * @param {Object} month
     */
    selectMonth: function selectMonth (month) {
      if (month.isDisabled) {
        return false
      }
      this.$emit('selectMonth', month);
    },
    /**
     * Changes the year up or down
     * @param {Number} incrementBy
     */
    changeYear: function changeYear (incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedYear', date);
    },
    /**
     * Decrements the year
     */
    previousYear: function previousYear () {
      if (!this.isPreviousYearDisabled()) {
        this.changeYear(-1);
      }
    },
    /**
     * Checks if the previous year is disabled or not
     * @return {Boolean}
     */
    isPreviousYearDisabled: function isPreviousYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      return this.utils.getFullYear(this.disabledDates.to) >= this.utils.getFullYear(this.pageDate)
    },
    /**
     * Increments the year
     */
    nextYear: function nextYear () {
      if (!this.isNextYearDisabled()) {
        this.changeYear(1);
      }
    },
    /**
     * Checks if the next year is disabled or not
     * @return {Boolean}
     */
    isNextYearDisabled: function isNextYearDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      return this.utils.getFullYear(this.disabledDates.from) <= this.utils.getFullYear(this.pageDate)
    },
    /**
     * Emits an event that shows the year calendar
     */
    showYearCalendar: function showYearCalendar () {
      this.$emit('showYearCalendar');
    },
    /**
     * Whether the selected date is in this month
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedMonth: function isSelectedMonth (date) {
      return (this.selectedDate &&
        this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date) &&
        this.utils.getMonth(this.selectedDate) === this.utils.getMonth(date))
    },
    /**
     * Whether a month is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledMonth: function isDisabledMonth (date) {
      var disabledDates = false;

      if (typeof this.disabledDates === 'undefined') {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (
          (this.utils.getMonth(date) < this.utils.getMonth(this.disabledDates.to) && this.utils.getFullYear(date) <= this.utils.getFullYear(this.disabledDates.to)) ||
          this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)
        ) {
          disabledDates = true;
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (
          (this.utils.getMonth(date) > this.utils.getMonth(this.disabledDates.from) && this.utils.getFullYear(date) >= this.utils.getFullYear(this.disabledDates.from)) ||
          this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)
        ) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }
      return disabledDates
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var PickerYear = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showYearView),expression:"showYearView"}],class:[_vm.calendarClass, 'vdp-datepicker__calendar'],style:(_vm.calendarStyle),on:{"mousedown":function($event){$event.preventDefault();}}},[_vm._t("beforeCalendarHeader"),_vm._v(" "),_c('header',[_c('span',{staticClass:"prev",class:{'disabled': _vm.isLeftNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.nextDecade() : _vm.previousDecade();}}},[_vm._v("<")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.getPageDecade))]),_vm._v(" "),_c('span',{staticClass:"next",class:{'disabled': _vm.isRightNavDisabled},on:{"click":function($event){_vm.isRtl ? _vm.previousDecade() : _vm.nextDecade();}}},[_vm._v(">")])]),_vm._v(" "),_vm._l((_vm.years),function(year){return _c('span',{key:year.timestamp,staticClass:"cell year",class:{ 'selected': year.isSelected, 'disabled': year.isDisabled },on:{"click":function($event){$event.stopPropagation();_vm.selectYear(year);}}},[_vm._v(_vm._s(year.year))])})],2)},staticRenderFns: [],
  props: {
    showYearView: Boolean,
    selectedDate: Date,
    pageDate: Date,
    pageTimestamp: Number,
    disabledDates: Object,
    highlighted: Object,
    calendarClass: [String, Object, Array],
    calendarStyle: Object,
    translation: Object,
    isRtl: Boolean,
    allowedToShowView: Function,
    useUtc: Boolean
  },
  computed: {
    years: function years () {
      var this$1 = this;

      var d = this.pageDate;
      var years = [];
      // set up a new date object to the beginning of the current 'page'7
      var dObj = this.useUtc
        ? new Date(Date.UTC(Math.floor(d.getUTCFullYear() / 10) * 10, d.getUTCMonth(), d.getUTCDate()))
        : new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
      for (var i = 0; i < 10; i++) {
        years.push({
          year: this$1.utils.getFullYear(dObj),
          timestamp: dObj.getTime(),
          isSelected: this$1.isSelectedYear(dObj),
          isDisabled: this$1.isDisabledYear(dObj)
        });
        this$1.utils.setFullYear(dObj, this$1.utils.getFullYear(dObj) + 1);
      }
      return years
    },
    /**
     * @return {String}
     */
    getPageDecade: function getPageDecade () {
      var decadeStart = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10;
      var decadeEnd = decadeStart + 9;
      var yearSuffix = this.translation.yearSuffix;
      return (decadeStart + " - " + decadeEnd + yearSuffix)
    },
    /**
     * Is the left hand navigation button disabled?
     * @return {Boolean}
     */
    isLeftNavDisabled: function isLeftNavDisabled () {
      return this.isRtl
        ? this.isNextDecadeDisabled(this.pageTimestamp)
        : this.isPreviousDecadeDisabled(this.pageTimestamp)
    },
    /**
     * Is the right hand navigation button disabled?
     * @return {Boolean}
     */
    isRightNavDisabled: function isRightNavDisabled () {
      return this.isRtl
        ? this.isPreviousDecadeDisabled(this.pageTimestamp)
        : this.isNextDecadeDisabled(this.pageTimestamp)
    }
  },
  data: function data () {
    var constructedDateUtils = makeDateUtils(this.useUtc);
    return {
      utils: constructedDateUtils
    }
  },
  methods: {
    selectYear: function selectYear (year) {
      if (year.isDisabled) {
        return false
      }
      this.$emit('selectYear', year);
    },
    changeYear: function changeYear (incrementBy) {
      var date = this.pageDate;
      this.utils.setFullYear(date, this.utils.getFullYear(date) + incrementBy);
      this.$emit('changedDecade', date);
    },
    previousDecade: function previousDecade () {
      if (this.isPreviousDecadeDisabled()) {
        return false
      }
      this.changeYear(-10);
    },
    isPreviousDecadeDisabled: function isPreviousDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.to) {
        return false
      }
      var disabledYear = this.utils.getFullYear(this.disabledDates.to);
      var lastYearInPreviousPage = Math.floor(this.utils.getFullYear(this.pageDate) / 10) * 10 - 1;
      return disabledYear > lastYearInPreviousPage
    },
    nextDecade: function nextDecade () {
      if (this.isNextDecadeDisabled()) {
        return false
      }
      this.changeYear(10);
    },
    isNextDecadeDisabled: function isNextDecadeDisabled () {
      if (!this.disabledDates || !this.disabledDates.from) {
        return false
      }
      var disabledYear = this.utils.getFullYear(this.disabledDates.from);
      var firstYearInNextPage = Math.ceil(this.utils.getFullYear(this.pageDate) / 10) * 10;
      return disabledYear < firstYearInNextPage
    },

    /**
     * Whether the selected date is in this year
     * @param {Date}
     * @return {Boolean}
     */
    isSelectedYear: function isSelectedYear (date) {
      return this.selectedDate && this.utils.getFullYear(this.selectedDate) === this.utils.getFullYear(date)
    },
    /**
     * Whether a year is disabled
     * @param {Date}
     * @return {Boolean}
     */
    isDisabledYear: function isDisabledYear (date) {
      var disabledDates = false;
      if (typeof this.disabledDates === 'undefined' || !this.disabledDates) {
        return false
      }

      if (typeof this.disabledDates.to !== 'undefined' && this.disabledDates.to) {
        if (this.utils.getFullYear(date) < this.utils.getFullYear(this.disabledDates.to)) {
          disabledDates = true;
        }
      }
      if (typeof this.disabledDates.from !== 'undefined' && this.disabledDates.from) {
        if (this.utils.getFullYear(date) > this.utils.getFullYear(this.disabledDates.from)) {
          disabledDates = true;
        }
      }

      if (typeof this.disabledDates.customPredictor === 'function' && this.disabledDates.customPredictor(date)) {
        disabledDates = true;
      }

      return disabledDates
    }
  }
}
// eslint-disable-next-line
;

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".rtl { direction: rtl; } .vdp-datepicker { position: relative; text-align: left; } .vdp-datepicker * { box-sizing: border-box; } .vdp-datepicker__calendar { position: absolute; z-index: 100; background: #fff; width: 300px; border: 1px solid #ccc; } .vdp-datepicker__calendar header { display: block; line-height: 40px; } .vdp-datepicker__calendar header span { display: inline-block; text-align: center; width: 71.42857142857143%; float: left; } .vdp-datepicker__calendar header .prev, .vdp-datepicker__calendar header .next { width: 14.285714285714286%; float: left; text-indent: -10000px; position: relative; } .vdp-datepicker__calendar header .prev:after, .vdp-datepicker__calendar header .next:after { content: ''; position: absolute; left: 50%; top: 50%; -webkit-transform: translateX(-50%) translateY(-50%); transform: translateX(-50%) translateY(-50%); border: 6px solid transparent; } .vdp-datepicker__calendar header .prev:after { border-right: 10px solid #000; margin-left: -5px; } .vdp-datepicker__calendar header .prev.disabled:after { border-right: 10px solid #ddd; } .vdp-datepicker__calendar header .next:after { border-left: 10px solid #000; margin-left: 5px; } .vdp-datepicker__calendar header .next.disabled:after { border-left: 10px solid #ddd; } .vdp-datepicker__calendar header .prev:not(.disabled), .vdp-datepicker__calendar header .next:not(.disabled), .vdp-datepicker__calendar header .up:not(.disabled) { cursor: pointer; } .vdp-datepicker__calendar header .prev:not(.disabled):hover, .vdp-datepicker__calendar header .next:not(.disabled):hover, .vdp-datepicker__calendar header .up:not(.disabled):hover { background: #eee; } .vdp-datepicker__calendar .disabled { color: #ddd; cursor: default; } .vdp-datepicker__calendar .flex-rtl { display: flex; width: inherit; flex-wrap: wrap; } .vdp-datepicker__calendar .cell { display: inline-block; padding: 0 5px; width: 14.285714285714286%; height: 40px; line-height: 40px; text-align: center; vertical-align: middle; border: 1px solid transparent; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year { cursor: pointer; } .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover { border: 1px solid #4bd; } .vdp-datepicker__calendar .cell.selected { background: #4bd; } .vdp-datepicker__calendar .cell.selected:hover { background: #4bd; } .vdp-datepicker__calendar .cell.selected.highlighted { background: #4bd; } .vdp-datepicker__calendar .cell.highlighted { background: #cae5ed; } .vdp-datepicker__calendar .cell.highlighted.disabled { color: #a3a3a3; } .vdp-datepicker__calendar .cell.grey { color: #888; } .vdp-datepicker__calendar .cell.grey:hover { background: inherit; } .vdp-datepicker__calendar .cell.day-header { font-size: 75%; white-space: nowrap; cursor: inherit; } .vdp-datepicker__calendar .cell.day-header:hover { background: inherit; } .vdp-datepicker__calendar .month, .vdp-datepicker__calendar .year { width: 33.333%; } .vdp-datepicker__clear-button, .vdp-datepicker__calendar-button { cursor: pointer; font-style: normal; } .vdp-datepicker__clear-button.disabled, .vdp-datepicker__calendar-button.disabled { color: #999; cursor: default; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();
var Datepicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdp-datepicker",class:[_vm.wrapperClass, _vm.isRtl ? 'rtl' : '']},[_c('date-input',{attrs:{"selectedDate":_vm.selectedDate,"resetTypedDate":_vm.resetTypedDate,"format":_vm.format,"translation":_vm.translation,"inline":_vm.inline,"id":_vm.id,"name":_vm.name,"refName":_vm.refName,"openDate":_vm.openDate,"placeholder":_vm.placeholder,"inputClass":_vm.inputClass,"typeable":_vm.typeable,"clearButton":_vm.clearButton,"clearButtonIcon":_vm.clearButtonIcon,"calendarButton":_vm.calendarButton,"calendarButtonIcon":_vm.calendarButtonIcon,"calendarButtonIconContent":_vm.calendarButtonIconContent,"disabled":_vm.disabled,"required":_vm.required,"bootstrapStyling":_vm.bootstrapStyling,"use-utc":_vm.useUtc},on:{"showCalendar":_vm.showCalendar,"closeCalendar":_vm.close,"typedDate":_vm.setTypedDate,"clearDate":_vm.clearDate}},[_vm._t("afterDateInput",null,{slot:"afterDateInput"})],2),_vm._v(" "),(_vm.allowedToShowView('day'))?_c('picker-day',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showDayView":_vm.showDayView,"fullMonthName":_vm.fullMonthName,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"highlighted":_vm.highlighted,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"pageTimestamp":_vm.pageTimestamp,"isRtl":_vm.isRtl,"mondayFirst":_vm.mondayFirst,"dayCellContent":_vm.dayCellContent,"use-utc":_vm.useUtc},on:{"changedMonth":_vm.handleChangedMonthFromDayPicker,"selectDate":_vm.selectDate,"showMonthCalendar":_vm.showMonthCalendar,"selectedDisabled":_vm.selectDisabledDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('month'))?_c('picker-month',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showMonthView":_vm.showMonthView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"isRtl":_vm.isRtl,"use-utc":_vm.useUtc},on:{"selectMonth":_vm.selectMonth,"showYearCalendar":_vm.showYearCalendar,"changedYear":_vm.setPageDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e(),_vm._v(" "),(_vm.allowedToShowView('year'))?_c('picker-year',{attrs:{"pageDate":_vm.pageDate,"selectedDate":_vm.selectedDate,"showYearView":_vm.showYearView,"allowedToShowView":_vm.allowedToShowView,"disabledDates":_vm.disabledDates,"calendarClass":_vm.calendarClass,"calendarStyle":_vm.calendarStyle,"translation":_vm.translation,"isRtl":_vm.isRtl,"use-utc":_vm.useUtc},on:{"selectYear":_vm.selectYear,"changedDecade":_vm.setPageDate}},[_vm._t("beforeCalendarHeader",null,{slot:"beforeCalendarHeader"})],2):_vm._e()],1)},staticRenderFns: [],
  components: {
    DateInput: DateInput,
    PickerDay: PickerDay,
    PickerMonth: PickerMonth,
    PickerYear: PickerYear
  },
  props: {
    value: {
      validator: function (val) { return utils$1.validateDateInput(val); }
    },
    name: String,
    refName: String,
    id: String,
    format: {
      type: [String, Function],
      default: 'dd MMM yyyy'
    },
    language: {
      type: Object,
      default: function () { return en; }
    },
    openDate: {
      validator: function (val) { return utils$1.validateDateInput(val); }
    },
    dayCellContent: Function,
    fullMonthName: Boolean,
    disabledDates: Object,
    highlighted: Object,
    placeholder: String,
    inline: Boolean,
    calendarClass: [String, Object, Array],
    inputClass: [String, Object, Array],
    wrapperClass: [String, Object, Array],
    mondayFirst: Boolean,
    clearButton: Boolean,
    clearButtonIcon: String,
    calendarButton: Boolean,
    calendarButtonIcon: String,
    calendarButtonIconContent: String,
    bootstrapStyling: Boolean,
    initialView: String,
    disabled: Boolean,
    required: Boolean,
    typeable: Boolean,
    useUtc: Boolean,
    minimumView: {
      type: String,
      default: 'day'
    },
    maximumView: {
      type: String,
      default: 'year'
    }
  },
  data: function data () {
    var startDate = this.openDate ? new Date(this.openDate) : new Date();
    var constructedDateUtils = makeDateUtils(this.useUtc);
    var pageTimestamp = constructedDateUtils.setDate(startDate, 1);
    return {
      /*
       * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
       * This represents the first day of the current viewing month
       * {Number}
       */
      pageTimestamp: pageTimestamp,
      /*
       * Selected Date
       * {Date}
       */
      selectedDate: null,
      /*
       * Flags to show calendar views
       * {Boolean}
       */
      showDayView: false,
      showMonthView: false,
      showYearView: false,
      /*
       * Positioning
       */
      calendarHeight: 0,
      resetTypedDate: new Date(),
      utils: constructedDateUtils
    }
  },
  watch: {
    value: function value (value$1) {
      this.setValue(value$1);
    },
    openDate: function openDate () {
      this.setPageDate();
    },
    initialView: function initialView () {
      this.setInitialView();
    }
  },
  computed: {
    computedInitialView: function computedInitialView () {
      if (!this.initialView) {
        return this.minimumView
      }

      return this.initialView
    },
    pageDate: function pageDate () {
      return new Date(this.pageTimestamp)
    },

    translation: function translation () {
      return this.language
    },

    calendarStyle: function calendarStyle () {
      return {
        position: this.isInline ? 'static' : undefined
      }
    },
    isOpen: function isOpen () {
      return this.showDayView || this.showMonthView || this.showYearView
    },
    isInline: function isInline () {
      return !!this.inline
    },
    isRtl: function isRtl () {
      return this.translation.rtl === true
    }
  },
  methods: {
    /**
     * Called in the event that the user navigates to date pages and
     * closes the picker without selecting a date.
     */
    resetDefaultPageDate: function resetDefaultPageDate () {
      if (this.selectedDate === null) {
        this.setPageDate();
        return
      }
      this.setPageDate(this.selectedDate);
    },
    /**
     * Effectively a toggle to show/hide the calendar
     * @return {mixed}
     */
    showCalendar: function showCalendar () {
      if (this.disabled || this.isInline) {
        return false
      }
      if (this.isOpen) {
        return this.close(true)
      }
      this.setInitialView();
    },
    /**
     * Sets the initial picker page view: day, month or year
     */
    setInitialView: function setInitialView () {
      var initialView = this.computedInitialView;
      if (!this.allowedToShowView(initialView)) {
        throw new Error(("initialView '" + (this.initialView) + "' cannot be rendered based on minimum '" + (this.minimumView) + "' and maximum '" + (this.maximumView) + "'"))
      }
      switch (initialView) {
        case 'year':
          this.showYearCalendar();
          break
        case 'month':
          this.showMonthCalendar();
          break
        default:
          this.showDayCalendar();
          break
      }
    },
    /**
     * Are we allowed to show a specific picker view?
     * @param {String} view
     * @return {Boolean}
     */
    allowedToShowView: function allowedToShowView (view) {
      var views = ['day', 'month', 'year'];
      var minimumViewIndex = views.indexOf(this.minimumView);
      var maximumViewIndex = views.indexOf(this.maximumView);
      var viewIndex = views.indexOf(view);

      return viewIndex >= minimumViewIndex && viewIndex <= maximumViewIndex
    },
    /**
     * Show the day picker
     * @return {Boolean}
     */
    showDayCalendar: function showDayCalendar () {
      if (!this.allowedToShowView('day')) {
        return false
      }
      this.close();
      this.showDayView = true;
      return true
    },
    /**
     * Show the month picker
     * @return {Boolean}
     */
    showMonthCalendar: function showMonthCalendar () {
      if (!this.allowedToShowView('month')) {
        return false
      }
      this.close();
      this.showMonthView = true;
      return true
    },
    /**
     * Show the year picker
     * @return {Boolean}
     */
    showYearCalendar: function showYearCalendar () {
      if (!this.allowedToShowView('year')) {
        return false
      }
      this.close();
      this.showYearView = true;
      return true
    },
    /**
     * Set the selected date
     * @param {Number} timestamp
     */
    setDate: function setDate (timestamp) {
      var date = new Date(timestamp);
      this.selectedDate = date;
      this.setPageDate(date);
      this.$emit('selected', date);
      this.$emit('input', date);
    },
    /**
     * Clear the selected date
     */
    clearDate: function clearDate () {
      this.selectedDate = null;
      this.setPageDate();
      this.$emit('selected', null);
      this.$emit('input', null);
      this.$emit('cleared');
    },
    /**
     * @param {Object} date
     */
    selectDate: function selectDate (date) {
      this.setDate(date.timestamp);
      if (!this.isInline) {
        this.close(true);
      }
      this.resetTypedDate = new Date();
    },
    /**
     * @param {Object} date
     */
    selectDisabledDate: function selectDisabledDate (date) {
      this.$emit('selectedDisabled', date);
    },
    /**
     * @param {Object} month
     */
    selectMonth: function selectMonth (month) {
      var date = new Date(month.timestamp);
      if (this.allowedToShowView('day')) {
        this.setPageDate(date);
        this.$emit('changedMonth', month);
        this.showDayCalendar();
      } else {
        this.selectDate(month);
      }
    },
    /**
     * @param {Object} year
     */
    selectYear: function selectYear (year) {
      var date = new Date(year.timestamp);
      if (this.allowedToShowView('month')) {
        this.setPageDate(date);
        this.$emit('changedYear', year);
        this.showMonthCalendar();
      } else {
        this.selectDate(year);
      }
    },
    /**
     * Set the datepicker value
     * @param {Date|String|Number|null} date
     */
    setValue: function setValue (date) {
      if (typeof date === 'string' || typeof date === 'number') {
        var parsed = new Date(date);
        date = isNaN(parsed.valueOf()) ? null : parsed;
      }
      if (!date) {
        this.setPageDate();
        this.selectedDate = null;
        return
      }
      this.selectedDate = date;
      this.setPageDate(date);
    },
    /**
     * Sets the date that the calendar should open on
     */
    setPageDate: function setPageDate (date) {
      if (!date) {
        if (this.openDate) {
          date = new Date(this.openDate);
        } else {
          date = new Date();
        }
      }
      this.pageTimestamp = this.utils.setDate(new Date(date), 1);
    },
    /**
     * Handles a month change from the day picker
     */
    handleChangedMonthFromDayPicker: function handleChangedMonthFromDayPicker (date) {
      this.setPageDate(date);
      this.$emit('changedMonth', date);
    },
    /**
     * Set the date from a typedDate event
     */
    setTypedDate: function setTypedDate (date) {
      this.setDate(date.getTime());
    },
    /**
     * Close all calendar layers
     * @param {Boolean} emitEvent - emit close event
     */
    close: function close (emitEvent) {
      this.showDayView = this.showMonthView = this.showYearView = false;
      if (!this.isInline) {
        if (emitEvent) {
          this.$emit('closed');
        }
        document.removeEventListener('click', this.clickOutside, false);
      }
    },
    /**
     * Initiate the component
     */
    init: function init () {
      if (this.value) {
        this.setValue(this.value);
      }
      if (this.isInline) {
        this.setInitialView();
      }
    }
  },
  mounted: function mounted () {
    this.init();
  }
}
// eslint-disable-next-line
;

/* harmony default export */ __webpack_exports__["a"] = (Datepicker);


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "button",
                {
                  staticClass: "close",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close")
                    }
                  }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [_vm._v("New Task")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-6" },
                  [
                    _c("label", [_vm._v("Start Date")]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        "input-class": "form-control"
                      },
                      model: {
                        value: _vm.task.start_date,
                        callback: function($$v) {
                          _vm.$set(_vm.task, "start_date", $$v)
                        },
                        expression: "task.start_date"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group col-md-6" },
                  [
                    _c("label", [_vm._v("End Date")]),
                    _vm._v(" "),
                    _c("datepicker", {
                      attrs: {
                        format: _vm.format,
                        "input-class": "form-control"
                      },
                      model: {
                        value: _vm.task.end_date,
                        callback: function($$v) {
                          _vm.$set(_vm.task, "end_date", $$v)
                        },
                        expression: "task.end_date"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Task name:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.task.name,
                        expression: "task.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Task name" },
                    domProps: { value: _vm.task.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.task, "name", $event.target.value)
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Description:")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.task.description,
                      expression: "task.description"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { rows: "3" },
                  domProps: { value: _vm.task.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.task, "description", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Progress:")]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.task.progress,
                        expression: "task.progress"
                      }
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.task,
                          "progress",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [_vm._v("0%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "10" } }, [_vm._v("10%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "20" } }, [_vm._v("20%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "30" } }, [_vm._v("30%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "40" } }, [_vm._v("40%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "50" } }, [_vm._v("50%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "60" } }, [_vm._v("60%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "70" } }, [_vm._v("70%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "80" } }, [_vm._v("80%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "90" } }, [_vm._v("90%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "100" } }, [_vm._v("100%")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.$emit("saveTask", _vm.task)
                      }
                    }
                  },
                  [_vm._v("Create")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-default",
                    on: {
                      click: function($event) {
                        return _vm.$emit("close")
                      }
                    }
                  },
                  [_vm._v("Close")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e77ba6f", module.exports)
  }
}

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("navbar", { attrs: { programmes: _vm.programmesList } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "page-wrapper" } }, [
        _c("div", { staticClass: "page-header row" }, [
          _c("div", { staticClass: "col-lg-6" }, [
            _c("h1", [
              _vm._v('Programme: "' + _vm._s(_vm.currentProg.name) + '"')
            ])
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "col-lg-6",
            staticStyle: { margin: "20px 0 0 0" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-8" },
            [
              _c("project-status-tracker", {
                attrs: {
                  currentProg: _vm.currentProg,
                  projectList: _vm.selectProgrammProj,
                  tasksList: _vm.tasksList
                },
                on: {
                  showedModalProject: _vm.showedModalProject,
                  selectProject: _vm.selectedProject
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-4" },
            [
              _c("task-list", {
                attrs: {
                  tasks: _vm.selectProjectTasks,
                  currentProject: _vm.currentProject,
                  projectList: _vm.selectProgrammProj
                },
                on: {
                  selectProject: _vm.selectedProject,
                  selectTask: _vm.selectedTask,
                  showedModalTask: _vm.showedModalTask
                }
              }),
              _vm._v(" "),
              _c("comments-list", {
                attrs: { comments: _vm.selectedTaskComments },
                on: { sendEvent: _vm.addComment }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.showModalProject
        ? _c("add-project-modal", {
            on: {
              close: function($event) {
                _vm.showModalProject = false
              },
              saveProject: _vm.addProject
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showModalTask
        ? _c("add-task-modal", {
            on: {
              close: function($event) {
                _vm.showModalTask = false
              },
              saveTask: _vm.addTask
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e563c85", module.exports)
  }
}

/***/ })

});