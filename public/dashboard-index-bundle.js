webpackJsonp([1],{

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

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(338)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(340)
/* template */
var __vue_template__ = __webpack_require__(351)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1ecf0fbb"
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
Component.options.__file = "resources/js/App/Dashboard/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ecf0fbb", Component.options)
  } else {
    hotAPI.reload("data-v-1ecf0fbb", Component.options)
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

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(339);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("61ca484e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ecf0fbb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1ecf0fbb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList__);
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
    name: "index",
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default.a,
        WidgetPanel: __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel___default.a,
        ProjectStatusTracker: __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker___default.a,
        AddProgrammeModal: __WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal___default.a,
        TaskList: __WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList___default.a,
        CommentsList: __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList___default.a

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
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.getDashboardData().then(function () {
            var firstProg = _.first(_this.programmesList);
            _this.selectedProgramme(firstProg.id);
        });
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapActions */])(['saveNewProgramme', 'getDashboardData']), {
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
                this.selectProjectTasks = [];
            }
        },
        selectDefaultTask: function selectDefaultTask() {
            var firstTask = _.first(this.selectProjectTasks);
            if (!_.isEmpty(firstTask)) {
                this.selectedTask(firstTask.id);
            } else {
                this.selectedTaskComments = [];
            }
        },
        selectedProject: function selectedProject(id) {
            this.currentProject = _.find(this.projectList, ['id', id]);
            this.taskFilter(id);
            this.selectDefaultTask();
            // this.currentTask = {};
            this.selectedTaskComments = [];
        },
        taskFilter: function taskFilter(id) {
            this.selectProjectTasks = _.filter(this.tasksList, ['project_id', id]);
        },
        selectedTask: function selectedTask(id) {
            this.currentTask = _.find(this.tasksList, ['id', id]);
            this.commentsFilter(id);
        },
        commentsFilter: function commentsFilter(id) {
            this.selectedTaskComments = _.filter(this.commentsList, ['task_id', id]);
        },
        addProgramme: function addProgramme(programme) {
            var data = {
                type: 'programme',
                entity: programme
            };
            this.saveNewProgramme(data);
            this.showModalProgramme = false;
        },
        getWidget: function getWidget(name) {
            this.widgets[name].count = this.count(this[name + 'List']);
            return this.widgets[name];
        },
        count: function count(array) {
            return _.size(array);
        }
    }),
    data: function data() {
        return {
            showModalProgramme: false,
            currentProg: {},
            currentProject: {},
            currentTask: {},
            // selectProgrammProj: [],
            selectProjectTasks: [],
            selectedTaskComments: [],
            widgets: {
                programmes: { title: 'Programmes', count: this.count(), panelColorType: 'panel-primary', icon: 'fa-life-ring' },
                project: { title: 'Projects', count: this.count(), panelColorType: 'panel-green', icon: 'fa-product-hunt' },
                tasks: { title: 'Tasks', count: this.count(), panelColorType: 'panel-yellow', icon: 'fa-cogs' },
                comments: { title: 'Comments', count: this.count(), panelColorType: 'panel-red', icon: 'fa-comments' }
            }
        };
    }
});

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(342)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(344)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e624b64"
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
Component.options.__file = "resources/js/App/Dashboard/components/WidgetPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e624b64", Component.options)
  } else {
    hotAPI.reload("data-v-1e624b64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(343);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("41c2d2fa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e624b64\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WidgetPanel.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e624b64\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WidgetPanel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 344:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        widget: Object
    },
    name: "widget-panel",
    mounted: function mounted() {
        // console.log('widget', this.widget);
        // this.widgetInfo = this.widget;
    },
    data: function data() {
        return {
            widgetInfo: {
                title: '',
                amount: null,
                panelColorType: '',
                icon: ''
            }
        };
    }
});

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-lg-3 col-md-6" }, [
    _c("div", { staticClass: "panel", class: _vm.widget.panelColorType }, [
      _c("div", { staticClass: "panel-heading" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-3" }, [
            _c("i", { staticClass: "fa fa-5x", class: _vm.widget.icon })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-xs-9 text-right" }, [
            _c("div", { staticClass: "huge" }, [
              _vm._v(_vm._s(_vm.widget.count))
            ]),
            _vm._v(" "),
            _c("div", [_vm._v(_vm._s(_vm.widget.title))])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("div", { staticClass: "panel-footer" }, [
        _c("span", { staticClass: "pull-left" }, [_vm._v("View Details")]),
        _vm._v(" "),
        _c("span", { staticClass: "pull-right" }, [
          _c("i", { staticClass: "fa fa-arrow-circle-right" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e624b64", module.exports)
  }
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(160)
/* script */
var __vue_script__ = __webpack_require__(349)
/* template */
var __vue_template__ = __webpack_require__(350)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41be0dce"
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
Component.options.__file = "resources/js/App/Dashboard/Programs/AddProgrammeModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41be0dce", Component.options)
  } else {
    hotAPI.reload("data-v-41be0dce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(259)("dcd23386", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41be0dce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProgrammeModal.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41be0dce\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProgrammeModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(250)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-41be0dce] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-41be0dce] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-41be0dce] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-41be0dce] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-41be0dce] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-41be0dce] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-41be0dce] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-41be0dce] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-41be0dce],\n.modal-leave-active .modal-container[data-v-41be0dce] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 349:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "add-programme-modal",
    data: function data() {
        return {
            programme: {
                name: ''
            }
        };
    }
});

/***/ }),

/***/ 350:
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
              _c("h4", { staticClass: "modal-title" }, [
                _vm._v("New Programme")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Programme name:")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.programme.name,
                        expression: "programme.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Programme name" },
                    domProps: { value: _vm.programme.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.programme, "name", $event.target.value)
                      }
                    }
                  })
                ])
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
                        return _vm.$emit("saveProgramme", _vm.programme)
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
    require("vue-hot-reload-api")      .rerender("data-v-41be0dce", module.exports)
  }
}

/***/ }),

/***/ 351:
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
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-6", staticStyle: { margin: "20px 0 0 0" } },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-info pull-right btn-lg",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.showModalProgramme = true
                    }
                  }
                },
                [_vm._v("Start New Programme")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "row" },
          [
            _c("widget-panel", {
              attrs: { widget: _vm.getWidget("programmes") }
            }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.getWidget("project") } }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.getWidget("tasks") } }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.getWidget("comments") } })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-8" },
            [
              _c("project-status-tracker", {
                attrs: {
                  currentProg: _vm.currentProg,
                  programmesList: _vm.programmesList,
                  projectList: _vm.selectProgrammProj,
                  tasksList: _vm.tasksList
                },
                on: {
                  selectedProgramme: _vm.selectedProgramme,
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
                  selectTask: _vm.selectedTask
                }
              }),
              _vm._v(" "),
              _c("comments-list", {
                attrs: { comments: _vm.selectedTaskComments }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.showModalProgramme
        ? _c("add-programme-modal", {
            on: {
              close: function($event) {
                _vm.showModalProgramme = false
              },
              saveProgramme: _vm.addProgramme
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6" }, [
      _c("h1", [_vm._v("Dashboard")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ecf0fbb", module.exports)
  }
}

/***/ })

});