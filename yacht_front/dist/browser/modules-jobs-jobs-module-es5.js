(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-jobs-jobs-module"], {
    /***/
    "KTZ5":
    /*!*****************************************************!*\
      !*** ./src/app/modules/jobs/jobs-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: JobsRoutingModule */

    /***/
    function KTZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsRoutingModule", function () {
        return JobsRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/guards/master.guard */
      "jJpQ");
      /* harmony import */


      var _shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/guards/guards */
      "AME3");

      var routes = [{
        path: 'create',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | job-edit-job-edit-module */
          "job-edit-job-edit-module").then(__webpack_require__.bind(null,
          /*! ./job-edit/job-edit.module */
          "yGjU")).then(function (module) {
            return module.JobEditModule;
          });
        },
        canActivate: [_shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_2__["MasterGuard"]],
        data: {
          guards: [_shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__["JobCreateGuard"]],
          guardsRelation: 'AND'
        }
      }, {
        path: ':id/edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | job-edit-job-edit-module */
          "job-edit-job-edit-module").then(__webpack_require__.bind(null,
          /*! ./job-edit/job-edit.module */
          "yGjU")).then(function (module) {
            return module.JobEditModule;
          });
        },
        canActivate: [_shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_2__["MasterGuard"]],
        data: {
          guards: [_shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__["SuperUserGuard"], _shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__["EditorGuard"], _shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__["CompanyGuard"]],
          guardsRelation: 'OR',
          alternativeRoute: '/'
        }
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | job-page-job-page-module */
          "job-page-job-page-module").then(__webpack_require__.bind(null,
          /*! ./job-page/job-page.module */
          "KEfy")).then(function (module) {
            return module.JobPageModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | all-jobs-all-jobs-module */
          [__webpack_require__.e("default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"), __webpack_require__.e("all-jobs-all-jobs-module")]).then(__webpack_require__.bind(null,
          /*! ./all-jobs/all-jobs.module */
          "xEVO")).then(function (module) {
            return module.AllJobsModule;
          });
        }
      }];

      var JobsRoutingModule = /*#__PURE__*/_createClass(function JobsRoutingModule() {
        _classCallCheck(this, JobsRoutingModule);
      });

      JobsRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: JobsRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      JobsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: JobsRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      JobsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: JobsRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: JobsRoutingModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "h9fq":
    /*!*********************************************!*\
      !*** ./src/app/modules/jobs/jobs.module.ts ***!
      \*********************************************/

    /*! exports provided: JobsModule */

    /***/
    function h9fq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobsModule", function () {
        return JobsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./jobs-routing.module */
      "KTZ5");

      var JobsModule = /*#__PURE__*/_createClass(function JobsModule() {
        _classCallCheck(this, JobsModule);
      });

      JobsModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: JobsModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
      });
      JobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: JobsModule,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"]]
      });
      JobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: JobsModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: JobsModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _jobs_routing_module__WEBPACK_IMPORTED_MODULE_2__["JobsRoutingModule"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-jobs-jobs-module-es5.js.map