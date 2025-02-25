(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }

  function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }

  function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-author-list-page-author-list-page-module"], {
    /***/
    "6K8a":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/author-list-page/author-list-page.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: AuthorListPageModule */

    /***/
    function K8a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorListPageModule", function () {
        return AuthorListPageModule;
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


      var _author_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-list-page-routing.module */
      "RwGh");
      /* harmony import */


      var _author_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./author-list-page.component */
      "jXrO");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/modules/svg/svg.module */
      "F/CY");
      /* harmony import */


      var _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/modules/ranges/ranges.module */
      "iMhr");
      /* harmony import */


      var _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @modules/content-overview/navbar/navbar.module */
      "d0zl");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_modules_user_view_user_view_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared/modules/user-view/user-view.module */
      "/2vj");
      /* harmony import */


      var _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared/modules/filters/filters.module */
      "nPmw");

      var AuthorListPageModule = /*#__PURE__*/_createClass(function AuthorListPageModule() {
        _classCallCheck(this, AuthorListPageModule);
      });

      AuthorListPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      AuthorListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageModule,
        declarations: [_author_list_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _author_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthorListPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _shared_modules_user_view_user_view_module__WEBPACK_IMPORTED_MODULE_11__["UserViewModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_12__["FiltersModule"]]
      });
      AuthorListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _author_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthorListPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(), _shared_modules_user_view_user_view_module__WEBPACK_IMPORTED_MODULE_11__["UserViewModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_12__["FiltersModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_author_list_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthorListPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _author_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthorListPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_9__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(), _shared_modules_user_view_user_view_module__WEBPACK_IMPORTED_MODULE_11__["UserViewModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_12__["FiltersModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "RwGh":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/author-list-page/author-list-page-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AuthorListPageRoutingModule */

    /***/
    function RwGh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorListPageRoutingModule", function () {
        return AuthorListPageRoutingModule;
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


      var _author_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./author-list-page.component */
      "jXrO");

      var routes = [{
        path: '',
        component: _author_list_page_component__WEBPACK_IMPORTED_MODULE_2__["AuthorListPageComponent"]
      }];

      var AuthorListPageRoutingModule = /*#__PURE__*/_createClass(function AuthorListPageRoutingModule() {
        _classCallCheck(this, AuthorListPageRoutingModule);
      });

      AuthorListPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      AuthorListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      AuthorListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageRoutingModule,
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
    "jXrO":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/author-list-page/author-list-page.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AuthorListPageComponent */

    /***/
    function jXrO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthorListPageComponent", function () {
        return AuthorListPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/functions/extract-query.function */
      "atHU");
      /* harmony import */


      var _shared_classes_abstract_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/classes/abstract-user-list-component */
      "FX5X");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../navbar/navbar.component */
      "j3J1");
      /* harmony import */


      var _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../shared/modules/filters/filters.component */
      "QEux");
      /* harmony import */


      var _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/modules/ranges/ranges.component */
      "HThX");
      /* harmony import */


      var _shared_modules_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../shared/modules/user-view/user-view.component */
      "hqzr");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_pipes_big_numbers_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/pipes/big-numbers.pipes */
      "9SnU");

      var AuthorListPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function AuthorListPageComponent(translateService, usersService, sessionService, sidebarWrapperService) {
          var _this;

          _classCallCheck(this, AuthorListPageComponent);

          _this = _callSuper(this, AuthorListPageComponent, [translateService]);
          _this.translateService = translateService;
          _this.usersService = usersService;
          _this.sessionService = sessionService;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.authors = [];
          return _this;
        }

        _inherits(AuthorListPageComponent, _shared_classes_abstr);

        return _createClass(AuthorListPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.sidebarWrapperService.params$.next({
                article: false,
                trending: true,
                navigation: true,
                live: false,
                showSidebar: true
              });
            });

            _superPropGet(AuthorListPageComponent, "ngOnInit", this, 3)([]);
          }
        }, {
          key: "fetchNextPage",
          value: function fetchNextPage() {
            var _this3 = this;

            if (!this.isLoading && this.currentPage < this.totalPages - 1) {
              this.isLoading$.next(true);
              this.currentPage += 1;
              var params = Object.assign(Object.assign({}, Object(_shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_1__["extractQuery"])(this.selectedRange)), Object(_shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_1__["extractQuery"])(this.selectedFilter));

              if (this.query) {
                params.query = this.query;
              }

              this.usersService.get$(this.currentPage, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (response) {
                var _this3$authors;

                var handledItems = response.content.filter(function (item) {
                  return item.meta.id !== _this3.sessionService.userId;
                });

                (_this3$authors = _this3.authors).push.apply(_this3$authors, _toConsumableArray(handledItems));

                _this3.currentPage = response.page;
                _this3.totalPages = response.totalPages;

                _this3.isLoading$.next(false);
              });
            }
          }
        }, {
          key: "remove",
          value: function remove(id) {
            this.authors = this.authors.filter(function (author) {
              return author.meta.id !== id;
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.currentPage = -1;
            this.totalPages = 1;
            this.authors = [];
            this.fetchNextPage();
          }
        }]);
      }(_shared_classes_abstract_user_list_component__WEBPACK_IMPORTED_MODULE_2__["AbstractUserListComponent"]);

      AuthorListPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageComponent,
        deps: [{
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      AuthorListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: AuthorListPageComponent,
        selector: "app-author-list-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-navbar [searchPlaceholder]=\"'COMMON.SEARCH_BY_AUTHOR' | translate\"\n            [activeItem]=\"'COMMON.AUTHORS' | translate\"\n            (search)=\"handleSearch($event)\"\n></app-navbar>\n<app-filters [filters]=\"filters\"\n             [activeFilter]=\"activeFilter\"\n             (toggleFilter)=\"filterEvent($event)\"\n></app-filters>\n<app-ranges [ranges]=\"ranges\"\n            [activeRange]=\"activeRange\"\n            (toggleRange)=\"rangeEvent($event)\"\n></app-ranges>\n\n<ul class=\"block-card item-space-20\">\n    <app-user-view\n        *ngFor=\"let author of authors\"\n        [data]=\"author\"\n        (gone)=\"remove($event)\">\n        <div class=\"row margin-bottom-6\">\n            <p class=\"stats-item\">\n                {{ 'COMMON.AUTHORS_RATING' | translate}}\n                <span class=\"stats-item__value\">{{ author.rating > 0 ? '+' : '' }}{{ author.rating }}</span>\n            </p>\n            <p class=\"stats-item\">\n                {{ 'COMMON.PUBLICATIONS_' | translate}}\n                <span class=\"stats-item__value\">{{ author.postCount | bigNumbers }}</span>\n            </p>\n            <aside class=\"subscribers\">\n                <p class=\"stats-item\">\n                    {{ 'COMMON.SUBSCRIBERS' | translate}}\n                    <span class=\"stats-item__value\">{{ author.subscribers.count | bigNumbers }}</span>\n                </p>\n            </aside>\n        </div>\n    </app-user-view>\n</ul>\n\n<app-pagination [page]=\"currentPage\" [maxPages]=\"totalPages\" [enabled]=\"!isLoading\" (onPage)=\"fetchNextPage()\"></app-pagination>\n",
        styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\n.subscribers {\n  align-items: center;\n  display: flex;\n}\n.avatars {\n  align-items: center;\n  display: inline-flex;\n  list-style: none;\n  margin: 0 8px 0 0;\n  padding: 0;\n}\n.avatars__item {\n  border: 1px solid white;\n  border-radius: 50%;\n}\n.avatars__item:not(:first-child) {\n  margin-left: -9px;\n}\n.stats-item {\n  align-items: center;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n}\n.stats-item__value {\n  color: #00b7ff;\n  padding-left: 6px;\n}\n.row {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 20px;\n  width: 100%;\n}\n@media only screen and (max-width: 500px) {\n  .row {\n    flex-wrap: wrap;\n    margin-bottom: 14px;\n  }\n  .row > .subscribers, .row > .stats-item {\n    line-height: 1.2;\n    width: 50%;\n    margin: 6px 0;\n  }\n  .row > .subscribers .stats-item, .row > .stats-item .stats-item {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9hdXRob3ItbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUFBO0FDNmlCSTtFRG5pQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUR3aUJJO0VEN2hCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRGtpQkk7RUR2aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FBZEE7RUFDRSxXQUFBO0FBaUJGO0FBVkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFhRjtBQVZBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBYUY7QUFYRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFhSjtBQVhJO0VBQ0UsaUJBQUE7QUFhTjtBQVJBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFXRjtBQVRFO0VBQ0UsY0M1Q007RUQ2Q04saUJBQUE7QUFXSjtBQVBBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFVRjtBQVRFO0VBTkY7SUFPSSxlQUFBO0lBQ0EsbUJBQUE7RUFZRjtFQVhFO0lBRUUsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtFQVlKO0VBWEk7SUFDRSxTQUFBO0VBYU47QUFDRiIsImZpbGUiOiJhdXRob3ItbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvYXQtaW1wb3J0LW5vLXBhcnRpYWwtbGVhZGluZy11bmRlcnNjb3JlICovXG5AaW1wb3J0ICd+aW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gIHhsYXJnZTogMTQwMHB4LFxuICBsYXJnZTogMTA2MHB4LFxuICBtZWRpdW06IDc2N3B4LFxuICBzbWFsbDogMzc1cHgsXG4pO1xuXG4uaGlkZS1sdC1tZWRpdW0ge1xuICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtZ2UtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJz49bWVkaXVtJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaGlkZS1sdC1sYXJnZSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc8bGFyZ2UnKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgaHR0cHM6Ly9lZHVhcmRvYm91Y2FzLmdpdGh1Yi5pby9pbmNsdWRlLW1lZGlhXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEtpdHR5IEdpcmF1ZGVsIChAa2l0dHlnaXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1uYXZiYXIge1xuICAvLyBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc3Vic2NyaWJlcnMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYXZhdGFycyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgcGFkZGluZzogMDtcblxuICAmX19pdGVtIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgIH1cbiAgfVxufVxuXG4uc3RhdHMtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcblxuICAmX192YWx1ZSB7XG4gICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICB9XG59XG5cbi5yb3cge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1MDBweCl7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgJiA+IC5zdWJzY3JpYmVycyxcbiAgICAmID4gLnN0YXRzLWl0ZW17XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1hcmdpbjogNnB4IDA7XG4gICAgICAuc3RhdHMtaXRlbXtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIG1lZGlhKCc8bWVkaXVtJykgeyAgXG4gICAgLy8gLnN1YnNjcmliZXJze1xuICAgIC8vICAgZGlzcGxheTogbm9uZTtcbiAgICAvLyB9XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiAjMDBiN2ZmO1xuJGNhcHRpb246ICM5Nzk3OTc7XG4kaWNvbjogIzkyOTI5ZDtcbiRncmF5OiAjOTI5MjlkO1xuJGlucHV0OiAjNjk2OTc0O1xuJGVycm9yOiAjZmY1YjM2O1xuJGxhYmVsOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiRsaWdodGVzdC1ncmF5OiAjZjFmMWY1O1xuJGxpZ2h0ZXItZ3JheTogI2UyZTJlYTtcbiRsaWdodC1ncmF5OiAjZDVkNWRjO1xuXG4kbGlnaHQtYmx1ZTogcmdiYSgwLCAxODMsIDI1NSwgMC4zKTtcbiJdfQ== */"],
        components: [{
          type: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
          selector: "app-navbar",
          inputs: ["navItems", "activeItem", "searchPlaceholder"],
          outputs: ["search"]
        }, {
          type: _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"],
          selector: "app-filters",
          inputs: ["filters", "activeFilter"],
          outputs: ["toggleFilter"]
        }, {
          type: _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_10__["RangesComponent"],
          selector: "app-ranges",
          inputs: ["ranges", "activeRange"],
          outputs: ["toggleRange"]
        }, {
          type: _shared_modules_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_11__["UserViewComponent"],
          selector: "app-user-view",
          inputs: ["data"],
          outputs: ["gone"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }],
        pipes: {
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"],
          "bigNumbers": _shared_pipes_big_numbers_pipes__WEBPACK_IMPORTED_MODULE_14__["BigNumbersPipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: AuthorListPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-author-list-page',
            templateUrl: './author-list-page.component.html',
            styleUrls: ['./author-list-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }, {
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_7__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-author-list-page-author-list-page-module-es5.js.map