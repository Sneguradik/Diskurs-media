(function () {
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-events-page-user-events-page-module"], {
    /***/
    "5TyJ":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/users-resolver.service.ts ***!
      \***********************************************************/

    /*! exports provided: UsersResolverService */

    /***/
    function TyJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersResolverService", function () {
        return UsersResolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/utils/not-found.operator */
      "TNbK");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var UsersResolverService = /*#__PURE__*/function () {
        function UsersResolverService(usersService, router) {
          _classCallCheck(this, UsersResolverService);

          this.usersService = usersService;
          this.router = router;
        }

        return _createClass(UsersResolverService, [{
          key: "resolve",
          value: function resolve(route) {
            return this.usersService.getSingle$(route.params.id).pipe(Object(_shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__["notFound"])(this.router));
          }
        }]);
      }();

      UsersResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UsersResolverService,
        deps: [{
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable
      });
      UsersResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UsersResolverService,
        providedIn: 'root'
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UsersResolverService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }
      });
      /***/

    },

    /***/
    "DIWy":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-events-page/event-filters.function.ts ***!
      \*******************************************************************************/

    /*! exports provided: eventFilters */

    /***/
    function DIWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "eventFilters", function () {
        return eventFilters;
      });
      /* harmony import */


      var _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @api/schemas/event/event-filters.enum */
      "x8C0");

      function eventFilters(translateService) {
        return [{
          id: 0,
          text: translateService.instant('COMMON.ALL'),
          data: null
        }, {
          id: 1,
          text: translateService.instant('COMMON.EXHIBITS'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].EXHIBITIONS
        }, {
          id: 2,
          text: translateService.instant('COMMON.EDUCATION'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].TRAINING
        }, {
          id: 3,
          text: translateService.instant('COMMON.REGATTA_'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].REGATTAS
        }, {
          id: 4,
          text: translateService.instant('COMMON.FLEET'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].FLOTILLAS
        }, {
          id: 5,
          text: translateService.instant('COMMON.PRESENTATIONS'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].PRESENTATIONS
        }, {
          id: 6,
          text: translateService.instant('COMMON.PRESS-CONFERENCES'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].CONFERENCES
        }, {
          id: 7,
          text: 'Конференции',
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].FORUMS
        }, {
          id: 8,
          text: translateService.instant('COMMON.OTHER'),
          data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].OTHER
        }];
      }
      /***/

    },

    /***/
    "RO7G":
    /*!**********************************************************!*\
      !*** ./src/app/shared/classes/pageable-conetnt.class.ts ***!
      \**********************************************************/

    /*! exports provided: NO_CONTENT, PageableContent */

    /***/
    function RO7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_CONTENT", function () {
        return NO_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageableContent", function () {
        return PageableContent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NO_CONTENT = Symbol('NO_CONTENT');

      var PageableContent = /*#__PURE__*/function () {
        function PageableContent(fetchNextFn$) {
          var _this = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, PageableContent);

          this.fetchNextFn$ = fetchNextFn$;
          this.isFetching$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.content = [];
          this.page = -1;
          this.totalPages = 1;
          this.fetchCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](options);
          this.fetchCommand$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
            return _this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_) {
              return !_;
            }));
          })).subscribe(function () {
            return _this.fetchNextPage();
          });
        }

        return _createClass(PageableContent, [{
          key: "fetch",
          value: function fetch() {
            if (this.page < this.totalPages - 1) {
              this.fetchCommand$.next();
            }
          }
        }, {
          key: "reset$",
          value: function reset$() {
            var _this2 = this;

            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (it) {
              return !it;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              if (hard) {
                _this2.content.splice(0, _this2.content.length);
              }

              _this2.page = -1;
              _this2.totalPages = 1;
            }));
          }
        }, {
          key: "setOptionsWithReset$",
          value: function setOptionsWithReset$(options) {
            var _this3 = this;

            var hard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.reset$(hard).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              _this3.options$.next(options);

              _this3.fetch();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(options));
          }
        }, {
          key: "fetchNextPage",
          value: function fetchNextPage() {
            var _this4 = this;

            this.isFetching$.next(true);
            this.fetchNextFn$(this.page + 1, this.options$.value).subscribe(function (response) {
              var _this4$content;

              _this4.page = response.page;
              _this4.totalPages = response.totalPages;

              _this4.content$.next(response.content);

              if (_this4.page >= _this4.totalPages - 1) {
                _this4.end$.next();
              }

              (_this4$content = _this4.content).push.apply(_this4$content, _toConsumableArray(response.content));

              _this4.isFetching$.next(false);
            }, function (error) {
              _this4.isFetching$.next(false);

              if (error !== Symbol('NO_CONTENT')) {
                throw error;
              }
            });
          }
        }]);
      }();
      /***/

    },

    /***/
    "Sy3t":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-events-page/user-events-page.module.ts ***!
      \********************************************************************************/

    /*! exports provided: UserEventsPageModule */

    /***/
    function Sy3t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEventsPageModule", function () {
        return UserEventsPageModule;
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


      var _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-events-page-routing.module */
      "e7qK");
      /* harmony import */


      var _user_events_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-events-page.component */
      "kMN+");
      /* harmony import */


      var _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/modules/filters/filters.module */
      "nPmw");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @modules/events/event-preview/event-preview.module */
      "D6c4");

      var UserEventsPageModule = /*#__PURE__*/_createClass(function UserEventsPageModule() {
        _classCallCheck(this, UserEventsPageModule);
      });

      UserEventsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserEventsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageModule,
        declarations: [_user_events_page_component__WEBPACK_IMPORTED_MODULE_3__["UserEventsPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]
      });
      UserEventsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_events_page_component__WEBPACK_IMPORTED_MODULE_3__["UserEventsPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"], _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "TNbK":
    /*!****************************************************!*\
      !*** ./src/app/shared/utils/not-found.operator.ts ***!
      \****************************************************/

    /*! exports provided: notFound */

    /***/
    function TNbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notFound", function () {
        return notFound;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function notFound(router) {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
          if (error.status === 404 || error.status === 422) {
            router.navigateByUrl('/404');
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        });
      }
      /***/

    },

    /***/
    "e7qK":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-events-page/user-events-page-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: UserEventsPageRoutingModule */

    /***/
    function e7qK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEventsPageRoutingModule", function () {
        return UserEventsPageRoutingModule;
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


      var _user_events_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-events-page.component */
      "kMN+");
      /* harmony import */


      var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/users-resolver.service */
      "5TyJ");

      var routes = [{
        path: '',
        component: _user_events_page_component__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageComponent"],
        resolve: {
          data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"]
        }
      }];

      var UserEventsPageRoutingModule = /*#__PURE__*/_createClass(function UserEventsPageRoutingModule() {
        _classCallCheck(this, UserEventsPageRoutingModule);
      });

      UserEventsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserEventsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserEventsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageRoutingModule,
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
    "kMN+":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-events-page/user-events-page.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: UserEventsPageComponent */

    /***/
    function kMN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEventsPageComponent", function () {
        return UserEventsPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _event_filters_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./event-filters.function */
      "DIWy");
      /* harmony import */


      var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/classes/pageable-conetnt.class */
      "RO7G");
      /* harmony import */


      var _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @api/schemas/event/event-filters.enum */
      "x8C0");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/schemas/article/publication-stage.enum */
      "l6fO");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @api/routes/companies.service */
      "qPE0");
      /* harmony import */


      var _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @app/services/permission/permission.service */
      "ZG4Y");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/modules/filters/filters.component */
      "QEux");
      /* harmony import */


      var _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../events/event-preview/event-preview.component */
      "VreD");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserEventsPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function UserEventsPageComponent(usersService, activatedRoute, sessionService, companiesService, permissionService, translateService, sidebarWrapperService) {
          var _this5;

          _classCallCheck(this, UserEventsPageComponent);

          _this5 = _callSuper(this, UserEventsPageComponent);
          _this5.usersService = usersService;
          _this5.activatedRoute = activatedRoute;
          _this5.sessionService = sessionService;
          _this5.companiesService = companiesService;
          _this5.permissionService = permissionService;
          _this5.translateService = translateService;
          _this5.sidebarWrapperService = sidebarWrapperService;
          _this5.activeFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          _this5.filters = Object(_event_filters_function__WEBPACK_IMPORTED_MODULE_1__["eventFilters"])(_this5.translateService);
          _this5.currentEvents = [];
          _this5.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__["PageableContent"](_this5.fetchPageFn$.bind(_this5), null);
          return _this5;
        }

        _inherits(UserEventsPageComponent, _shared_classes_abstr);

        return _createClass(UserEventsPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setTimeout(function () {
              _this6.sidebarWrapperService.params$.next({
                article: false,
                trending: true,
                navigation: true,
                live: false,
                showSidebar: true
              });
            });
            this.id$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (paramMap) {
              var id = paramMap.get('id');
              return /^\d+$/.test(id) ? parseInt(id, 10) : id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (id) {
              return _this6.usersService.getSingle$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
              return user.meta.id;
            }));
            this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (content) {
              var _this6$currentEvents;

              (_this6$currentEvents = _this6.currentEvents).push.apply(_this6$currentEvents, _toConsumableArray(content));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.id$, this.sessionService.user$, this.activeFilter$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (options) {
              _this6.currentEvents.splice(0, _this6.currentEvents.length);

              _this6.pageable.options$.next(options);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
              return _this6.pageable.reset$();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              _this6.pageable.fetch();
            });
          }
        }, {
          key: "fetchPageFn$",
          value: function fetchPageFn$(page, options) {
            if (options === null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__["NO_CONTENT"]);
            }

            var canSeeDrafts = options[1] !== null && (options[1].meta.id === options[0] || this.permissionService.hasAnyRole(options[1], 'EDITOR$'));
            return this.companiesService.events$(options[0], page, {
              stages: canSeeDrafts ? [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].DRAFT, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].REVIEWING, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].PUBLISHED, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].BLOCKED] : [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].PUBLISHED],
              types: options[2] ? [_api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_3__["EventFiltersEnum"][options[2]]] : []
            });
          }
        }, {
          key: "remove",
          value: function remove(event) {
            this.currentEvents.splice(this.currentEvents.findIndex(function (it) {
              return it === event;
            }), 1);
          }
        }, {
          key: "filterEvent",
          value: function filterEvent(filter) {
            this.activeFilter$.next(filter.data);
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"]);

      UserEventsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageComponent,
        deps: [{
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
        }, {
          token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"]
        }, {
          token: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__["PermissionService"]
        }, {
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserEventsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserEventsPageComponent,
        selector: "app-user-events-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-filters [filters]=\"filters\" (toggleFilter)=\"filterEvent($event)\"></app-filters>\n<ul class=\"block-card item-space-40\">\n    <li *ngFor=\"let event of currentEvents\">\n        <app-event-preview [event]=\"event\" (gone)=\"remove(event)\"></app-event-preview>\n    </li>\n</ul>\n<app-pagination [pageable]=\"pageable\"></app-pagination>\n",
        styles: [":host {\n  width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZXZlbnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJ1c2VyLWV2ZW50cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"],
        components: [{
          type: _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"],
          selector: "app-filters",
          inputs: ["filters", "activeFilter"],
          outputs: ["toggleFilter"]
        }, {
          type: _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_16__["EventPreviewComponent"],
          selector: "app-event-preview",
          inputs: ["event"],
          outputs: ["gone", "goneBookmarked"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserEventsPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-events-page',
            templateUrl: './user-events-page.component.html',
            styleUrls: ['./user-events-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]
          }, {
            type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"]
          }, {
            type: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__["PermissionService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-events-page-user-events-page-module-es5.js.map