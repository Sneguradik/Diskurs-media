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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-jobs-page-user-jobs-page-module"], {
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
    "7Qfs":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: UserJobsPageRoutingModule */

    /***/
    function Qfs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserJobsPageRoutingModule", function () {
        return UserJobsPageRoutingModule;
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


      var _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-jobs-page.component */
      "TUUO");
      /* harmony import */


      var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/users-resolver.service */
      "5TyJ");

      var routes = [{
        path: '',
        component: _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageComponent"],
        resolve: {
          data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"]
        }
      }];

      var UserJobsPageRoutingModule = /*#__PURE__*/_createClass(function UserJobsPageRoutingModule() {
        _classCallCheck(this, UserJobsPageRoutingModule);
      });

      UserJobsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserJobsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserJobsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageRoutingModule,
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
    "9W2b":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page.module.ts ***!
      \****************************************************************************/

    /*! exports provided: UserJobsPageModule */

    /***/
    function W2b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserJobsPageModule", function () {
        return UserJobsPageModule;
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


      var _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-jobs-page-routing.module */
      "7Qfs");
      /* harmony import */


      var _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-jobs-page.component */
      "TUUO");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/jobs/job-preview/job-preview.module */
      "WCHF");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");

      var UserJobsPageModule = /*#__PURE__*/_createClass(function UserJobsPageModule() {
        _classCallCheck(this, UserJobsPageModule);
      });

      UserJobsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserJobsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageModule,
        declarations: [_user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__["UserJobsPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]
      });
      UserJobsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__["UserJobsPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "Ozdm":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/modules/user-info/user-info.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserInfoComponent */

    /***/
    function Ozdm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
        return UserInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../ui/icon/icon.component */
      "9qJ4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/account-url.pipe */
      "uo9K");
      /* harmony import */


      var _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/person-name.pipe */
      "uJSW");

      var UserInfoComponent = /*#__PURE__*/_createClass(function UserInfoComponent() {
        _classCallCheck(this, UserInfoComponent);
      });

      UserInfoComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserInfoComponent,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserInfoComponent,
        selector: "app-user-info",
        inputs: {
          user: "user"
        },
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<div class=\"v-center\">\n    <a [routerLink]=\"user ? (user | accountUrl) : ''\" class=\"v-center\">\n        <app-ui-icon class=\"margin-right-10\" [src]=\"user?.info.picture\" [textAlternative]=\"user ? (user.info | personName) : ''\"></app-ui-icon>\n        <span class=\"subtitle-1\">{{ user ? (user.info | personName) : '' }}</span>\n    </a>\n</div>\n",
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"],
        components: [{
          type: _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"],
          selector: "app-ui-icon",
          inputs: ["src", "textAlternative", "size"]
        }],
        directives: [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"],
          selector: "a[routerLink],area[routerLink]",
          inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"]
        }],
        pipes: {
          "accountUrl": _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__["AccountUrlPipe"],
          "personName": _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__["PersonNamePipe"]
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserInfoComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-info',
            templateUrl: './user-info.component.html',
            styleUrls: ['./user-info.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }],
        propDecorators: {
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        }
      });
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
    "TUUO":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: UserJobsPageComponent */

    /***/
    function TUUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserJobsPageComponent", function () {
        return UserJobsPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/classes/pageable-conetnt.class */
      "RO7G");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @api/schemas/article/publication-stage.enum */
      "l6fO");
      /* harmony import */


      var _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/schemas/job/job-order.enum */
      "wUCb");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @api/routes/companies.service */
      "qPE0");
      /* harmony import */


      var _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @app/services/permission/permission.service */
      "ZG4Y");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../jobs/job-preview/job-preview.component */
      "WuGY");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserJobsPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function UserJobsPageComponent(usersService, activatedRoute, sessionService, companiesService, permissionService, sidebarWrapperService) {
          var _this5;

          _classCallCheck(this, UserJobsPageComponent);

          _this5 = _callSuper(this, UserJobsPageComponent);
          _this5.usersService = usersService;
          _this5.activatedRoute = activatedRoute;
          _this5.sessionService = sessionService;
          _this5.companiesService = companiesService;
          _this5.permissionService = permissionService;
          _this5.sidebarWrapperService = sidebarWrapperService;
          _this5.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["PageableContent"](_this5.fetchPageFn$.bind(_this5), null);
          _this5.jobs = [];
          return _this5;
        }

        _inherits(UserJobsPageComponent, _shared_classes_abstr);

        return _createClass(UserJobsPageComponent, [{
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
            this.id$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (paramMap) {
              var id = paramMap.get('id');
              return /^\d+$/.test(id) ? parseInt(id, 10) : id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
              return _this6.usersService.getSingle$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              return user.meta.id;
            }));
            this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (content) {
              var _this6$jobs;

              (_this6$jobs = _this6.jobs).push.apply(_this6$jobs, _toConsumableArray(content));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.id$, this.sessionService.user$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (options) {
              _this6.jobs.splice(0, _this6.jobs.length);

              _this6.pageable.options$.next(options);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
              return _this6.pageable.reset$();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              _this6.pageable.fetch();
            });
          }
        }, {
          key: "fetchPageFn$",
          value: function fetchPageFn$(page, options) {
            if (options === null) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(_shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["NO_CONTENT"]);
            }

            var canSeeDrafts = options[1] !== null && (options[1].meta.id === options[0] || this.permissionService.hasAnyRole(options[1], 'EDITOR$'));
            return this.companiesService.jobs$(options[0], page, {
              order: _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_6__["JobOrderEnum"].LAST_POST_TIME,
              stages: canSeeDrafts ? [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].DRAFT, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].REVIEWING, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].PUBLISHED, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].BLOCKED] : [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].PUBLISHED]
            });
          }
        }, {
          key: "remove",
          value: function remove(job) {
            this.jobs.splice(this.jobs.findIndex(function (it) {
              return it === job;
            }), 1);
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]);

      UserJobsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageComponent,
        deps: [{
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__["CompaniesService"]
        }, {
          token: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__["PermissionService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserJobsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserJobsPageComponent,
        selector: "app-user-jobs-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<ul class=\"block-card item-space-40\">\n    <li *ngFor=\"let job of jobs\">\n        <app-job-preview [job]=\"job\" (gone)=\"remove(job)\"></app-job-preview>\n    </li>\n</ul>\n<app-pagination [pageable]=\"pageable\"></app-pagination>\n",
        styles: [":host {\n  width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItam9icy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREYiLCJmaWxlIjoidXNlci1qb2JzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"],
        components: [{
          type: _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_13__["JobPreviewComponent"],
          selector: "app-job-preview",
          inputs: ["job", "isOwner"],
          outputs: ["gone", "goneBookmarked"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserJobsPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-jobs-page',
            templateUrl: './user-jobs-page.component.html',
            styleUrls: ['./user-jobs-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
          }, {
            type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__["CompaniesService"]
          }, {
            type: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__["PermissionService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    },

    /***/
    "tu4A":
    /*!**************************************************************!*\
      !*** ./src/app/shared/modules/user-info/user-info.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserInfoModule */

    /***/
    function tu4A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInfoModule", function () {
        return UserInfoModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-info.component */
      "Ozdm");

      var UserInfoModule = /*#__PURE__*/_createClass(function UserInfoModule() {
        _classCallCheck(this, UserInfoModule);
      });

      UserInfoModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
      });
      UserInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
        exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]]
      });
      UserInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
            exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "wUCb":
    /*!***************************************************!*\
      !*** ./src/app/api/schemas/job/job-order.enum.ts ***!
      \***************************************************/

    /*! exports provided: JobOrderEnum */

    /***/
    function wUCb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JobOrderEnum", function () {
        return JobOrderEnum;
      });

      var JobOrderEnum;

      (function (JobOrderEnum) {
        JobOrderEnum["NAME"] = "NAME";
        JobOrderEnum["LAST_POST_TIME"] = "LAST_POST_TIME";
        JobOrderEnum["VIEWS"] = "VIEWS";
        JobOrderEnum["BOOKMARKS"] = "BOOKMARKS";
      })(JobOrderEnum || (JobOrderEnum = {}));
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-jobs-page-user-jobs-page-module-es5.js.map