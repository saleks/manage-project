webpackJsonp([5],{

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(151)
/* script */
var __vue_script__ = __webpack_require__(299)
/* template */
var __vue_template__ = __webpack_require__(350)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/js/App/Auth/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20adf9da", Component.options)
  } else {
    hotAPI.reload("data-v-20adf9da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 299:
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "RegisterComponent",
    mounted: function mounted() {
        console.log('Load Register Component');
    }
});

/***/ }),

/***/ 350:
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
              staticClass: "col-lg-5 d-none d-lg-block bg-register-image"
            }),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-7" }, [
              _c("div", { staticClass: "p-5" }, [
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
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
                        attrs: { to: { name: "login" } }
                      },
                      [_vm._v("Already have an account? Login!")]
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
        _vm._v("Create an Account!")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "user" }, [
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
          _c("input", {
            staticClass: "form-control form-control-user",
            attrs: {
              type: "text",
              id: "exampleFirstName",
              placeholder: "First Name"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("input", {
            staticClass: "form-control form-control-user",
            attrs: {
              type: "text",
              id: "exampleLastName",
              placeholder: "Last Name"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c("input", {
          staticClass: "form-control form-control-user",
          attrs: {
            type: "email",
            id: "exampleInputEmail",
            placeholder: "Email Address"
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-sm-6 mb-3 mb-sm-0" }, [
          _c("input", {
            staticClass: "form-control form-control-user",
            attrs: {
              type: "password",
              id: "exampleInputPassword",
              placeholder: "Password"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-6" }, [
          _c("input", {
            staticClass: "form-control form-control-user",
            attrs: {
              type: "password",
              id: "exampleRepeatPassword",
              placeholder: "Repeat Password"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-primary btn-user btn-block",
          attrs: { href: "login.html" }
        },
        [
          _vm._v(
            "\n                            Register Account\n                        "
          )
        ]
      ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-google btn-user btn-block",
          attrs: { href: "index.html" }
        },
        [
          _c("i", { staticClass: "fab fa-google fa-fw" }),
          _vm._v(" Register with Google\n                        ")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-facebook btn-user btn-block",
          attrs: { href: "index.html" }
        },
        [
          _c("i", { staticClass: "fab fa-facebook-f fa-fw" }),
          _vm._v(" Register with Facebook\n                        ")
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-20adf9da", module.exports)
  }
}

/***/ })

});