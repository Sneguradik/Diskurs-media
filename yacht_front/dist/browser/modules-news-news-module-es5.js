(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"], {
    /***/
    "Q/4p":
    /*!*********************************************!*\
      !*** ./src/app/modules/news/news.module.ts ***!
      \*********************************************/

    /*! exports provided: NewsModule */

    /***/
    function Q_4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
        return NewsModule;
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


      var _news_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./news-routing.module */
      "wZUk");

      var NewsModule = /*#__PURE__*/_createClass(function NewsModule() {
        _classCallCheck(this, NewsModule);
      });

      NewsModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      NewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsModule,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"]]
      });
      NewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "wZUk":
    /*!*****************************************************!*\
      !*** ./src/app/modules/news/news-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: NewsRoutingModule */

    /***/
    function wZUk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function () {
        return NewsRoutingModule;
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
        path: ':id/edit',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-news-edit-page-news-edit-page-module */
          "pages-news-edit-page-news-edit-page-module").then(__webpack_require__.bind(null,
          /*! ./pages/news-edit-page/news-edit-page.module */
          "/Jra")).then(function (module) {
            return module.NewsEditPageModule;
          });
        }
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-news-page-news-page-module */
          [__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~dcd1f135"), __webpack_require__.e("pages-news-page-news-page-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/news-page/news-page.module */
          "DZ7t")).then(function (module) {
            return module.NewsPageModule;
          });
        }
      }];

      var NewsRoutingModule = /*#__PURE__*/_createClass(function NewsRoutingModule() {
        _classCallCheck(this, NewsRoutingModule);
      });

      NewsRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      NewsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      NewsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: NewsRoutingModule,
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
//# sourceMappingURL=modules-news-news-module-es5.js.map