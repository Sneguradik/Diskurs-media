(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-module"], {
    /***/
    "9N29K":
    /*!*********************************************!*\
      !*** ./src/app/modules/user/user.module.ts ***!
      \*********************************************/

    /*! exports provided: UserModule */

    /***/
    function N29K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-routing.module */
      "ByCP");

      var UserModule = /*#__PURE__*/_createClass(function UserModule() {
        _classCallCheck(this, UserModule);
      });

      UserModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserModule,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]]
      });
      UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "ByCP":
    /*!*****************************************************!*\
      !*** ./src/app/modules/user/user-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: UserRoutingModule */

    /***/
    function ByCP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
        return UserRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-user-edit-page-user-edit-page-module */
          "pages-user-edit-page-user-edit-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/user-edit-page/user-edit-page.module */
          "oTXG")).then(function (module) {
            return module.UserEditPageModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts'
      }, {
        path: 'posts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-posts-page-user-posts-page-module */
          [__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-user-posts-page-user-posts-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-posts-page/user-posts-page.module */
          "VUcV")).then(function (module) {
            return module.UserPostsPageModule;
          });
        }
      }, {
        path: 'comments',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-comments-page-user-comments-page-module */
          [__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-comments-page-user-comments-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-comments-page/user-comments-page.module */
          "wPwW")).then(function (module) {
            return module.UserCommentsPageModule;
          });
        }
      }, {
        path: 'drafts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-drafts-page-user-drafts-page-module */
          [__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"), __webpack_require__.e("pages-user-drafts-page-user-drafts-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-drafts-page/user-drafts-page.module */
          "fvRY")).then(function (module) {
            return module.UserDraftsPageModule;
          });
        }
      }, {
        path: 'promoted',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-promoted-page-user-promoted-page-module */
          [__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"), __webpack_require__.e("default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"), __webpack_require__.e("pages-user-promoted-page-user-promoted-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-promoted-page/user-promoted-page.module */
          "GAkG")).then(function (module) {
            return module.UserPromotedPageModule;
          });
        }
      }, {
        path: 'info',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-info-page-user-info-page-module */
          [__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-info-page-user-info-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-info-page/user-info-page.module */
          "FhSU")).then(function (module) {
            return module.UserInfoPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-notifications-page-user-notifications-page-module */
          [__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-notifications-page-user-notifications-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-notifications-page/user-notifications-page.module */
          "oG45")).then(function (module) {
            return module.UserNotificationsPageModule;
          });
        }
      }, {
        path: 'events',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-events-page-user-events-page-module */
          [__webpack_require__.e("default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"), __webpack_require__.e("common"), __webpack_require__.e("pages-user-events-page-user-events-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-events-page/user-events-page.module */
          "Sy3t")).then(function (module) {
            return module.UserEventsPageModule;
          });
        }
      }, {
        path: 'jobs',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-user-jobs-page-user-jobs-page-module */
          [__webpack_require__.e("default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"), __webpack_require__.e("pages-user-jobs-page-user-jobs-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/user-jobs-page/user-jobs-page.module */
          "9W2b")).then(function (module) {
            return module.UserJobsPageModule;
          });
        }
      }];

      var UserRoutingModule = /*#__PURE__*/_createClass(function UserRoutingModule() {
        _classCallCheck(this, UserRoutingModule);
      });

      UserRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserRoutingModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-user-user-module-es5.js.map