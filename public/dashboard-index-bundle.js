webpackJsonp([1],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(299)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(301)
/* template */
var __vue_template__ = __webpack_require__(312)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23b718f2"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23b718f2", Component.options)
  } else {
    hotAPI.reload("data-v-23b718f2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(225)
/* template */
var __vue_template__ = __webpack_require__(231)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1feff5c4"
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
Component.options.__file = "resources/assets/js/App/Dashboard/components/Navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1feff5c4", Component.options)
  } else {
    hotAPI.reload("data-v-1feff5c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(224);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("e42f52a6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1feff5c4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1feff5c4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(8);
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
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['logout']), {
        selected: function selected(id) {
            this.$emit('selectedProgramme', id);
        },
        exit: function exit() {
            var _this = this;

            this.logout().then(function () {
                _this.$router.push('/login');
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

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(227)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(229)
/* template */
var __vue_template__ = __webpack_require__(230)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fbde7f84"
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
Component.options.__file = "resources/assets/js/App/Dashboard/components/Sidebar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fbde7f84", Component.options)
  } else {
    hotAPI.reload("data-v-fbde7f84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(228);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("2ef9f177", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbde7f84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbde7f84\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 229:
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

/***/ 230:
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
    require("vue-hot-reload-api")      .rerender("data-v-fbde7f84", module.exports)
  }
}

/***/ }),

/***/ 231:
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
    require("vue-hot-reload-api")      .rerender("data-v-1feff5c4", module.exports)
  }
}

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(233)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(235)
/* template */
var __vue_template__ = __webpack_require__(241)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ffb3a97"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Projects/ProjectStatusTracker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ffb3a97", Component.options)
  } else {
    hotAPI.reload("data-v-6ffb3a97", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("2ea12581", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ffb3a97\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusTracker.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6ffb3a97\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusTracker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem__ = __webpack_require__(236);
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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(237)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(239)
/* template */
var __vue_template__ = __webpack_require__(240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b01ecc4"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Projects/ProjectStatusItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b01ecc4", Component.options)
  } else {
    hotAPI.reload("data-v-2b01ecc4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("66a688fa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b01ecc4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusItem.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b01ecc4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProjectStatusItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 239:
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

/***/ 240:
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
    require("vue-hot-reload-api")      .rerender("data-v-2b01ecc4", module.exports)
  }
}

/***/ }),

/***/ 241:
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
    require("vue-hot-reload-api")      .rerender("data-v-6ffb3a97", module.exports)
  }
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(245)
/* template */
var __vue_template__ = __webpack_require__(251)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-84dced42"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Tasks/TaskList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-84dced42", Component.options)
  } else {
    hotAPI.reload("data-v-84dced42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(244);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("074d9b02", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84dced42\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskList.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-84dced42\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskItem__ = __webpack_require__(246);
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

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(247)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(249)
/* template */
var __vue_template__ = __webpack_require__(250)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-98e7dd58"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Tasks/TaskItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98e7dd58", Component.options)
  } else {
    hotAPI.reload("data-v-98e7dd58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("e39e490a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98e7dd58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskItem.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-98e7dd58\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TaskItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 249:
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

/***/ 250:
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
    require("vue-hot-reload-api")      .rerender("data-v-98e7dd58", module.exports)
  }
}

/***/ }),

/***/ 251:
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
    require("vue-hot-reload-api")      .rerender("data-v-84dced42", module.exports)
  }
}

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(253)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(255)
/* template */
var __vue_template__ = __webpack_require__(256)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44188f7c"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Comments/CommentsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-44188f7c", Component.options)
  } else {
    hotAPI.reload("data-v-44188f7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(254);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("741fbba8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44188f7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentsList.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-44188f7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CommentsList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 255:
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

/***/ 256:
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
    require("vue-hot-reload-api")      .rerender("data-v-44188f7c", module.exports)
  }
}

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("888a9f10", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23b718f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-23b718f2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Programs_AddProgrammeModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Tasks_TaskList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Comments_CommentsList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(8);
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

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_6_vuex__["mapActions"])(['saveNewProgramme', 'getDashboardData']), {
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

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(303)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(305)
/* template */
var __vue_template__ = __webpack_require__(306)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24cc0802"
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
Component.options.__file = "resources/assets/js/App/Dashboard/components/WidgetPanel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24cc0802", Component.options)
  } else {
    hotAPI.reload("data-v-24cc0802", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(304);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("817e195a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24cc0802\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WidgetPanel.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24cc0802\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WidgetPanel.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 305:
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

/***/ 306:
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
    require("vue-hot-reload-api")      .rerender("data-v-24cc0802", module.exports)
  }
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(308)
}
var normalizeComponent = __webpack_require__(152)
/* script */
var __vue_script__ = __webpack_require__(310)
/* template */
var __vue_template__ = __webpack_require__(311)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50a82ccd"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Programs/AddProgrammeModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50a82ccd", Component.options)
  } else {
    hotAPI.reload("data-v-50a82ccd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(309);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(153)("49ce4cd8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50a82ccd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProgrammeModal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50a82ccd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProgrammeModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(151)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-50a82ccd] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-50a82ccd] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-50a82ccd] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-50a82ccd] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-50a82ccd] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-50a82ccd] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-50a82ccd] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-50a82ccd] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-50a82ccd],\n.modal-leave-active .modal-container[data-v-50a82ccd] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 310:
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

/***/ 311:
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
    require("vue-hot-reload-api")      .rerender("data-v-50a82ccd", module.exports)
  }
}

/***/ }),

/***/ 312:
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
    require("vue-hot-reload-api")      .rerender("data-v-23b718f2", module.exports)
  }
}

/***/ })

});