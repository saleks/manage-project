webpackJsonp([4],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(292)
}
var normalizeComponent = __webpack_require__(151)
/* script */
var __vue_script__ = __webpack_require__(294)
/* template */
var __vue_template__ = __webpack_require__(296)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-06a0efc2"
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
Component.options.__file = "resources/assets/js/App/Auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06a0efc2", Component.options)
  } else {
    hotAPI.reload("data-v-06a0efc2", Component.options)
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
var update = __webpack_require__(150)("75dd98f6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06a0efc2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06a0efc2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
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

exports = module.exports = __webpack_require__(149)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(8);
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
    name: "LoginComponent",
    mounted: function mounted() {
        console.log('Component Login mounted.');
    },
    data: function data() {
        return {
            payload: {
                email: '',
                password: '',
                remember: false
            }
        };
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['login', 'setToken']), {
        submit: function submit() {
            var _this = this;

            this.login(this.payload).then(function (response) {
                if (!response.token) {
                    _this.setToken(response.token);
                } else {
                    _this.setToken(response.token);
                    _this.$router.push({ name: 'home' });
                    // this.$router.push({name: 'dashboard'})
                }
            });
        }
    })
});

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-xl-10 col-lg-12 col-md-9" }, [
      _c("div", { staticClass: "card o-hidden border-0 shadow-lg my-5" }, [
        _c("div", { staticClass: "card-body p-0" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", {
              staticClass: "col-lg-6 d-none d-lg-block bg-login-image"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6" }, [
              _c("div", { staticClass: "p-5" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    staticClass: "user",
                    attrs: { method: "post" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submit($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.payload.email,
                            expression: "payload.email"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "email",
                          id: "exampleInputEmail",
                          "aria-describedby": "emailHelp",
                          placeholder: "Enter Email Address..."
                        },
                        domProps: { value: _vm.payload.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.payload, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.payload.password,
                            expression: "payload.password"
                          }
                        ],
                        staticClass: "form-control form-control-user",
                        attrs: {
                          type: "password",
                          id: "exampleInputPassword",
                          placeholder: "Password"
                        },
                        domProps: { value: _vm.payload.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.payload,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-checkbox small" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.payload.remember,
                                expression: "payload.remember"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "checkbox", id: "customCheck" },
                            domProps: {
                              checked: Array.isArray(_vm.payload.remember)
                                ? _vm._i(_vm.payload.remember, null) > -1
                                : _vm.payload.remember
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.payload.remember,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.payload,
                                        "remember",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.payload,
                                        "remember",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.payload, "remember", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "customCheck" }
                            },
                            [_vm._v("Remember Me")]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-user btn-block",
                        attrs: { type: "submit" }
                      },
                      [
                        _vm._v(
                          "\n                                    Login\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2)
                  ]
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small",
                        attrs: { to: { name: "forgot-password" } }
                      },
                      [_vm._v("Forgot Password?")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small",
                        attrs: { to: { name: "register" } }
                      },
                      [_vm._v("Create an Account!")]
                    )
                  ],
                  1
                )
              ])
            ])
          ])
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
    return _c("div", { staticClass: "text-center" }, [
      _c("h1", { staticClass: "h4 text-gray-900 mb-4" }, [
        _vm._v("Welcome Back!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-google btn-user btn-block",
        attrs: { href: "index.html" }
      },
      [
        _c("i", { staticClass: "fab fa-google fa-fw" }),
        _vm._v(" Login with Google\n                                ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-facebook btn-user btn-block",
        attrs: { href: "index.html" }
      },
      [
        _c("i", { staticClass: "fab fa-facebook-f fa-fw" }),
        _vm._v(" Login with Facebook\n                                ")
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06a0efc2", module.exports)
  }
}

/***/ })

});