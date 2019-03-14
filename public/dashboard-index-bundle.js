webpackJsonp([0],Array(83).concat([
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(133)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(135)
/* template */
var __vue_template__ = __webpack_require__(171)
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
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(134);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("888a9f10", content, false, {});
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
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_WidgetPanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Projects_ProjectStatusTracker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tasks_TaskList__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tasks_TaskList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tasks_TaskList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Programs_AddProgrammeModal__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Programs_AddProgrammeModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Programs_AddProgrammeModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Projects_AddProjectModal__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Projects_AddProjectModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Projects_AddProjectModal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tasks_AddTaskModal__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tasks_AddTaskModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Tasks_AddTaskModal__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        TaskList: __WEBPACK_IMPORTED_MODULE_3__Tasks_TaskList___default.a,
        AddProgrammeModal: __WEBPACK_IMPORTED_MODULE_4__Programs_AddProgrammeModal___default.a,
        AddProjectModal: __WEBPACK_IMPORTED_MODULE_5__Projects_AddProjectModal___default.a,
        AddTaskModal: __WEBPACK_IMPORTED_MODULE_6__Tasks_AddTaskModal___default.a
    },
    computed: {
        computedProject: function computedProject() {}
    },
    methods: {
        selectedProgramme: function selectedProgramme(id) {
            this.currentProg = _.find(this.programmesList, ['id', id]);
            this.projectFilter(id);
        },
        projectFilter: function projectFilter(id) {
            this.selectProgrammProj = _.filter(this.projectList, ['programme_id', id]);
        },
        selectedProject: function selectedProject(id) {
            this.currentProject = _.find(this.projectList, ['id', id]);
            this.taskFilter(id);
        },
        taskFilter: function taskFilter(id) {
            this.selectProjectTasks = _.filter(this.tasksList, ['project_id', id]);
        },
        addProgramme: function addProgramme(programme) {
            var maxId = this.programmesList.reduce(function (prev, curr) {
                return prev.id > curr.id ? prev.id : curr.id;
            });
            programme.id = ++maxId;
            this.programmesList.push(programme);
            this.showModalProgramme = false;
        },
        showedModalProject: function showedModalProject() {
            if (this.isEmpty(this.currentProg)) {
                return;
            }
            this.showModalProject = true;
        },
        addProject: function addProject(project) {
            var maxId = this.projectList.reduce(function (prev, curr) {
                return prev.id > curr.id ? prev.id : curr.id;
            });
            project.id = ++maxId;
            project.programme_id = this.currentProg.id;
            this.projectList.push(project);
            this.showModalProject = false;
            this.projectFilter(this.currentProg.id);
        },
        showedModalTask: function showedModalTask() {
            if (this.isEmpty(this.currentProject)) {
                return;
            }
            this.showModalTask = true;
        },
        addTask: function addTask(task) {
            var maxId = this.tasksList.reduce(function (prev, curr) {
                return prev.id > curr.id ? prev.id : curr.id;
            });
            task.id = ++maxId;
            task.project_id = this.currentProject.id;
            task.progress = Math.floor(task.progress);
            this.tasksList.push(task);
            this.showModalTask = false;
            this.taskFilter(this.currentProject.id);
        },
        isEmpty: function isEmpty(object) {
            return JSON.stringify(object) == "{}";
        }
    },
    data: function data() {
        return {
            showModalTask: false,
            showModalProject: false,
            showModalProgramme: false,
            currentProject: {},
            selectProjectTasks: [],
            currentProg: {},
            selectProgrammProj: [],
            widgets: {
                programmes: { title: 'Programmes', amount: 3, panelColorType: 'panel-primary', icon: 'fa-life-ring' },
                projects: { title: 'Projects', amount: 63, panelColorType: 'panel-green', icon: 'fa-product-hunt' },
                tasks: { title: 'Tasks', amount: 133, panelColorType: 'panel-yellow', icon: 'fa-cogs' },
                comments: { title: 'Comments', amount: 313, panelColorType: 'panel-red', icon: 'fa-comments' }
            },
            programmesList: [{ id: 1, name: 'Programme 1' }, { id: 2, name: 'Programme 2' }, { id: 3, name: 'Programme 3' }],
            projectList: [{ id: 1, programme_id: 1, name: 'PS001', status: 'Active' }, { id: 2, programme_id: 1, name: 'PS002', status: 'Active' }, { id: 3, programme_id: 1, name: 'PS003', status: 'Completed' }, { id: 4, programme_id: 1, name: 'PS004', status: 'Active' }, { id: 5, programme_id: 1, name: 'PS005', status: 'Archived' }, { id: 6, programme_id: 2, name: 'PS006', status: 'Active' }, { id: 7, programme_id: 1, name: 'PS007', status: 'Deleted' }, { id: 8, programme_id: 3, name: 'PS008', status: 'Active' }, { id: 9, programme_id: 1, name: 'PS009', status: 'Drafts' }],
            tasksList: [{ id: 1, project_id: 1, name: 'Sprint 0 - Analysis', progress: 100 }, { id: 2, project_id: 1, name: 'Sprint 0 - Scoping', progress: 80 }, { id: 3, project_id: 1, name: 'Sprint 1 - Development', progress: 70 }, { id: 4, project_id: 1, name: 'Sprint 1 - Showcasing', progress: 50 }, { id: 5, project_id: 2, name: 'Sprint 2 - Analysis2', progress: 30 }, { id: 6, project_id: 2, name: 'Sprint 2 - Scoping2', progress: 35 }, { id: 7, project_id: 2, name: 'Sprint 2 - Scoping3', progress: 30 }]
        };
    }
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(139)
/* template */
var __vue_template__ = __webpack_require__(145)
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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("e42f52a6", content, false, {});
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
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    methods: {
        selected: function selected(id) {
            this.$emit('selectedProgramme', id);
        }
    }
});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(143)
/* template */
var __vue_template__ = __webpack_require__(144)
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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("2ef9f177", content, false, {});
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 143 */
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
    name: "sidebar",
    props: {
        programmes: Array
    },
    methods: {
        selected: function selected(id) {
            console.log('id', id);
            this.$emit('selectEvent', id);
        }
    }
});

/***/ }),
/* 144 */
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
        _c("ul", { staticClass: "nav", attrs: { id: "side-menu" } }, [
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
          _c("li", [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "nav nav-second-level" },
              _vm._l(_vm.programmes, function(programme) {
                return _c("li", [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          $event.stopPropagation()
                          return _vm.selected(programme.id)
                        }
                      }
                    },
                    [_vm._v(_vm._s(programme.name))]
                  )
                ])
              }),
              0
            )
          ])
        ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "#" } }, [
      _c("i", { staticClass: "fa fa-life-ring fa-fw" }),
      _vm._v(" Programmes "),
      _c("span", { staticClass: "fa arrow" })
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
/* 145 */
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
      _vm._m(1),
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
    return _c("ul", { staticClass: "nav navbar-top-links navbar-right" }, [
      _c("li", { staticClass: "dropdown" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "fa fa-envelope fa-fw" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-down" })
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dropdown-menu dropdown-messages" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("strong", [_vm._v("John Smith")]),
                _vm._v(" "),
                _c("span", { staticClass: "pull-right text-muted" }, [
                  _c("em", [_vm._v("Yesterday")])
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("strong", [_vm._v("John Smith")]),
                _vm._v(" "),
                _c("span", { staticClass: "pull-right text-muted" }, [
                  _c("em", [_vm._v("Yesterday")])
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("strong", [_vm._v("John Smith")]),
                _vm._v(" "),
                _c("span", { staticClass: "pull-right text-muted" }, [
                  _c("em", [_vm._v("Yesterday")])
                ])
              ]),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend..."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "text-center", attrs: { href: "#" } }, [
              _c("strong", [_vm._v("Read All Messages")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-angle-right" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "dropdown" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "fa fa-tasks fa-fw" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-down" })
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dropdown-menu dropdown-tasks" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("p", [
                  _c("strong", [_vm._v("Task 1")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "pull-right text-muted" }, [
                    _vm._v("40% Complete")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress progress-striped active" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-success",
                      staticStyle: { width: "40%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "40",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("40% Complete (success)")
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("p", [
                  _c("strong", [_vm._v("Task 2")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "pull-right text-muted" }, [
                    _vm._v("20% Complete")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress progress-striped active" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-info",
                      staticStyle: { width: "20%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "20",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("20% Complete")
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("p", [
                  _c("strong", [_vm._v("Task 3")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "pull-right text-muted" }, [
                    _vm._v("60% Complete")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress progress-striped active" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-warning",
                      staticStyle: { width: "60%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "60",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("60% Complete (warning)")
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("p", [
                  _c("strong", [_vm._v("Task 4")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "pull-right text-muted" }, [
                    _vm._v("80% Complete")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progress progress-striped active" }, [
                  _c(
                    "div",
                    {
                      staticClass: "progress-bar progress-bar-danger",
                      staticStyle: { width: "80%" },
                      attrs: {
                        role: "progressbar",
                        "aria-valuenow": "80",
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }
                    },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("80% Complete (danger)")
                      ])
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "text-center", attrs: { href: "#" } }, [
              _c("strong", [_vm._v("See All Tasks")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-angle-right" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "dropdown" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "fa fa-bell fa-fw" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-down" })
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dropdown-menu dropdown-alerts" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("i", { staticClass: "fa fa-comment fa-fw" }),
                _vm._v(" New Comment\n                            "),
                _c("span", { staticClass: "pull-right text-muted small" }, [
                  _vm._v("4 minutes ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("i", { staticClass: "fa fa-twitter fa-fw" }),
                _vm._v(" 3 New Followers\n                            "),
                _c("span", { staticClass: "pull-right text-muted small" }, [
                  _vm._v("12 minutes ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("i", { staticClass: "fa fa-envelope fa-fw" }),
                _vm._v(" Message Sent\n                            "),
                _c("span", { staticClass: "pull-right text-muted small" }, [
                  _vm._v("4 minutes ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("i", { staticClass: "fa fa-tasks fa-fw" }),
                _vm._v(" New Task\n                            "),
                _c("span", { staticClass: "pull-right text-muted small" }, [
                  _vm._v("4 minutes ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("div", [
                _c("i", { staticClass: "fa fa-upload fa-fw" }),
                _vm._v(" Server Rebooted\n                            "),
                _c("span", { staticClass: "pull-right text-muted small" }, [
                  _vm._v("4 minutes ago")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { staticClass: "text-center", attrs: { href: "#" } }, [
              _c("strong", [_vm._v("See All Alerts")]),
              _vm._v(" "),
              _c("i", { staticClass: "fa fa-angle-right" })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "dropdown" }, [
        _c(
          "a",
          {
            staticClass: "dropdown-toggle",
            attrs: { "data-toggle": "dropdown", href: "#" }
          },
          [
            _c("i", { staticClass: "fa fa-user fa-fw" }),
            _vm._v(" "),
            _c("i", { staticClass: "fa fa-caret-down" })
          ]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "dropdown-menu dropdown-user" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-user fa-fw" }),
              _vm._v(" User Profile")
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "fa fa-gear fa-fw" }),
              _vm._v(" Settings")
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "divider" }),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "login.html" } }, [
              _c("i", { staticClass: "fa fa-sign-out fa-fw" }),
              _vm._v(" Logout")
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1feff5c4", module.exports)
  }
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(149)
/* template */
var __vue_template__ = __webpack_require__(150)
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("817e195a", content, false, {});
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 149 */
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
/* 150 */
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
              _vm._v(_vm._s(_vm.widget.amount))
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(152)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(154)
/* template */
var __vue_template__ = __webpack_require__(160)
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("2ea12581", content, false, {});
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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem__ = __webpack_require__(155);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        ProjectStatusItem: __WEBPACK_IMPORTED_MODULE_0__ProjectStatusItem___default.a
    },
    name: "project-status-tracker",
    props: {
        projectList: Array,
        tasksList: Array,
        showModalProject: Boolean
    },
    data: function data() {
        return {
            activetab: 1
        };
    },

    methods: {
        projectFilter: function projectFilter(status) {
            var _this = this;

            var filtered = [],
                newArr = [];
            filtered = _.filter(this.projectList, ['status', status]);
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
        selectProject: function selectProject(id) {
            this.$emit('selectProject', id);
        }
    }
});

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(156)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(158)
/* template */
var __vue_template__ = __webpack_require__(159)
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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(157);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("66a688fa", content, false, {});
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 158 */
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
/* 159 */
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
/* 160 */
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
                  attrs: { projects: _vm.projectFilter("Active") },
                  on: { selectEvent: _vm.selectProject }
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
                  attrs: { projects: _vm.projectFilter("Completed") },
                  on: { selectEvent: _vm.selectProject }
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
                  attrs: { projects: _vm.projectFilter("Archived") },
                  on: { selectEvent: _vm.selectProject }
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
                  attrs: { projects: _vm.projectFilter("Deleted") },
                  on: { selectEvent: _vm.selectProject }
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
                  attrs: { projects: _vm.projectFilter("Drafts") },
                  on: { selectEvent: _vm.selectProject }
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(164)
/* template */
var __vue_template__ = __webpack_require__(170)
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("074d9b02", content, false, {});
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskItem__ = __webpack_require__(165);
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
        tasks: Array
    }
});

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(166)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(168)
/* template */
var __vue_template__ = __webpack_require__(169)
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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("e39e490a", content, false, {});
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 168 */
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
    methods: {
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
/* 169 */
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
          _c("li", [
            _c("a", { attrs: { href: "project.html" } }, [
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
                          _vm._v(_vm._s(task.progress) + "% Complete (success)")
                        ])
                      ]
                    )
                  ]
                )
              ])
            ])
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
/* 170 */
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
        _c("div", { staticClass: "btn-group" }, [
          _c(
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
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c(
        "div",
        { staticClass: "panel-body" },
        [_c("task-item", { attrs: { tasks: _vm.tasks } })],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-default btn-xs dropdown-toggle",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [
        _vm._v("\n                    PS001  \n                    "),
        _c("span", { staticClass: "caret" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      { staticClass: "dropdown-menu pull-right", attrs: { role: "menu" } },
      [
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Plant Support")])
        ]),
        _c("li", { staticClass: "divider" }),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "#" } }, [_vm._v("Product Performance")])
        ]),
        _c("li", { staticClass: "divider" }),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Engineering")])]),
        _vm._v(" "),
        _c("li", { staticClass: "divider" }),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("OPs/QA")])]),
        _vm._v(" "),
        _c("li", { staticClass: "divider" }),
        _vm._v(" "),
        _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Raw Materials")])])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-84dced42", module.exports)
  }
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "wrapper" } },
    [
      _c("navbar", {
        attrs: { programmes: _vm.programmesList },
        on: { selectedProgramme: _vm.selectedProgramme }
      }),
      _vm._v(" "),
      _c("div", { attrs: { id: "page-wrapper" } }, [
        _c("div", { staticClass: "page-header row" }, [
          _c(
            "div",
            { staticClass: "col-lg-6" },
            [
              _vm.selectProgrammProj.length === 0
                ? [_c("h1", [_vm._v("Dashboard")])]
                : [
                    _c("h1", [
                      _vm._v(
                        'Programme: "' + _vm._s(_vm.currentProg.name) + '" '
                      )
                    ])
                  ]
            ],
            2
          ),
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
            _c("widget-panel", { attrs: { widget: _vm.widgets.programmes } }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.widgets.projects } }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.widgets.tasks } }),
            _vm._v(" "),
            _c("widget-panel", { attrs: { widget: _vm.widgets.comments } })
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
                attrs: { tasks: _vm.selectProjectTasks },
                on: { showedModalTask: _vm.showedModalTask }
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
        : _vm._e(),
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
    require("vue-hot-reload-api")      .rerender("data-v-23b718f2", module.exports)
  }
}

/***/ }),
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(181)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(183)
/* template */
var __vue_template__ = __webpack_require__(184)
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
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("49ce4cd8", content, false, {});
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
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-50a82ccd] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-50a82ccd] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-50a82ccd] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-50a82ccd] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-50a82ccd] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-50a82ccd] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-50a82ccd] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-50a82ccd] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-50a82ccd],\n.modal-leave-active .modal-container[data-v-50a82ccd] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),
/* 183 */
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
                id: null,
                name: ''
            }
        };
    }
});

/***/ }),
/* 184 */
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
                  attrs: { type: "button", "data-dismiss": "modal" }
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(188)
/* template */
var __vue_template__ = __webpack_require__(189)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18debcfb"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Projects/AddProjectModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18debcfb", Component.options)
  } else {
    hotAPI.reload("data-v-18debcfb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(187);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("558ea81e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18debcfb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProjectModal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18debcfb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddProjectModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-18debcfb] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-18debcfb] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-18debcfb] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-18debcfb] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-18debcfb] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-18debcfb] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-18debcfb] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-18debcfb] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-18debcfb],\n.modal-leave-active .modal-container[data-v-18debcfb] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),
/* 188 */
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
/* 189 */
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
                  attrs: { type: "button", "data-dismiss": "modal" }
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
    require("vue-hot-reload-api")      .rerender("data-v-18debcfb", module.exports)
  }
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(191)
}
var normalizeComponent = __webpack_require__(19)
/* script */
var __vue_script__ = __webpack_require__(193)
/* template */
var __vue_template__ = __webpack_require__(194)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fa103bba"
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
Component.options.__file = "resources/assets/js/App/Dashboard/Tasks/AddTaskModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fa103bba", Component.options)
  } else {
    hotAPI.reload("data-v-fa103bba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(18)("f82cef62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa103bba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddTaskModal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fa103bba\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddTaskModal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-fa103bba] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-fa103bba] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-fa103bba] {\n    width: 300px;\n    margin: 0px auto;\n    padding: 20px 30px;\n    background-color: #fff;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-fa103bba] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-fa103bba] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-fa103bba] {\n    float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-fa103bba] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-fa103bba] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-fa103bba],\n.modal-leave-active .modal-container[data-v-fa103bba] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),
/* 193 */
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "add-task-modal",
    data: function data() {
        return {
            task: {
                id: null,
                project_id: null,
                name: '',
                description: '',
                start_date: '',
                end_date: '',
                progress: null
            }
        };
    }
});

/***/ }),
/* 194 */
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
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("×")]
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "modal-title" }, [_vm._v("New Task")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
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
                    _c("option", { attrs: { value: "20" } }, [_vm._v("20%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "40" } }, [_vm._v("40%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "60" } }, [_vm._v("60%")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "80" } }, [_vm._v("80%")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-fa103bba", module.exports)
  }
}

/***/ })
]));