(function () {
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

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-comments-page-user-comments-page-module"], {
    /***/
    "7FWU":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-comments-page/user-comments-page.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: UserCommentsPageComponent */

    /***/
    function FWU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCommentsPageComponent", function () {
        return UserCommentsPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_enums_comments_range_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/enums/comments-range.enum */
      "unJf");
      /* harmony import */


      var _shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/functions/extract-query.function */
      "atHU");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../user-header/user-header.component */
      "6n3P");
      /* harmony import */


      var _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../shared/modules/ranges/ranges.component */
      "HThX");
      /* harmony import */


      var _shared_components_comment_section_comment_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/components/comment-section/comment/comment.component */
      "UvFg");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserCommentsPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function UserCommentsPageComponent(usersService, activatedRoute, sidebarWrapperService, translateService, router) {
          var _this;

          _classCallCheck(this, UserCommentsPageComponent);

          _this = _callSuper(this, UserCommentsPageComponent);
          _this.usersService = usersService;
          _this.activatedRoute = activatedRoute;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.translateService = translateService;
          _this.router = router;
          _this.onFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          _this.ranges = [{
            id: 0,
            text: _this.translateService.instant('COMMON.BY_ORDER'),
            query: function query() {
              return {
                order: _shared_enums_comments_range_enum__WEBPACK_IMPORTED_MODULE_4__["ECommentsRange"].CREATED
              };
            }
          }, {
            id: 1,
            text: _this.translateService.instant('COMMON.POPULAR_FIRST'),
            query: function query() {
              return {
                order: _shared_enums_comments_range_enum__WEBPACK_IMPORTED_MODULE_4__["ECommentsRange"].RATING
              };
            }
          }];
          _this.activeRange = 0;
          _this.selectedRange = _this.ranges[0];
          _this.userComments = [];
          _this.maxPages = 0;
          _this.page = 0;
          _this.isLoadingNextPage = false;
          return _this;
        }

        _inherits(UserCommentsPageComponent, _shared_classes_abstr);

        return _createClass(UserCommentsPageComponent, [{
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
            this.onFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              return _this2.reset();
            });
            var idOrName$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (paramMap) {
              var id = paramMap.get('id');
              return /^\d+$/.test(id) ? parseInt(id, 10) : id;
            }));
            this.user$ = idOrName$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) {
              return _this2.usersService.getSingle$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
              return _this2.user = user;
            }));
            this.id$ = this.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
              return user.meta.id;
            }));
          }
        }, {
          key: "appendPage",
          value: function appendPage(page) {
            var _this3 = this;

            if (!this.isLoadingNextPage) {
              this.isLoadingNextPage = true;
              this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (author) {
                return _this3.usersService.comments$(page, author, Object.assign({}, Object(_shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_5__["extractQuery"])(_this3.selectedRange)));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (response) {
                var _this3$userComments;

                _this3.isLoadingNextPage = false;
                _this3.page = response.page;
                _this3.maxPages = response.totalPages;

                (_this3$userComments = _this3.userComments).push.apply(_this3$userComments, _toConsumableArray(response.content.filter(function (comment) {
                  return !comment.meta.deletedAt;
                })));
              });
            }
          }
        }, {
          key: "rangeEvent",
          value: function rangeEvent(range) {
            this.selectedRange = range;
            this.activeRange = range === null || range === void 0 ? void 0 : range.id;
            this.onFilter$.next(0);
          }
        }, {
          key: "reset",
          value: function reset() {
            this.page = 0;
            this.maxPages = 1;
            this.userComments = [];
            this.appendPage(this.page);
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]);

      UserCommentsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageComponent,
        deps: [{
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
        }, {
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserCommentsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserCommentsPageComponent,
        selector: "app-user-comments-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-user-header></app-user-header>\n\n<app-ranges [ranges]=\"ranges\"\n            [activeRange]=\"activeRange\"\n            (toggleRange)=\"rangeEvent($event)\"\n></app-ranges>\n\n<ul class=\"block-card item-space-20\">\n    <li *ngFor=\"let comment of userComments\">\n        <a class=\"font-1 h5 button-1\"\n           style=\"color: #000000;\"\n           [routerLink]=\"['/news', comment.context.meta.id]\"\n           [fragment]=\"'comment-' + comment.meta.id\"\n        >{{ comment.context.title }}</a>\n        <app-comment [attr.data-id]=\"comment.meta.id\"\n                     [comment]=\"comment\"\n                     [author]=\"user\"\n                     [depth]=\"3\"\n                     [parent]=\"comment.parent\"\n                     [extraStyle]=\"true\"\n                     (reply)=\"this.router.navigate(['/news', comment.context.meta.id])\"\n        ></app-comment>\n    </li>\n</ul>\n\n<app-pagination [page]=\"page\"\n                [maxPages]=\"maxPages\"\n                [enabled]=\"!isLoadingNextPage\"\n                (onPage)=\"appendPage($event)\"\n></app-pagination>\n",
        styles: [":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItY29tbWVudHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWNvbW1lbnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"],
        components: [{
          type: _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__["UserHeaderComponent"],
          selector: "app-user-header"
        }, {
          type: _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_11__["RangesComponent"],
          selector: "app-ranges",
          inputs: ["ranges", "activeRange"],
          outputs: ["toggleRange"]
        }, {
          type: _shared_components_comment_section_comment_comment_component__WEBPACK_IMPORTED_MODULE_12__["CommentComponent"],
          selector: "app-comment",
          inputs: ["comment", "author", "parent", "parentAuthor", "depth", "context", "extraStyle", "ownID", "isLogged"],
          outputs: ["reply", "vote", "gone", "watchEmit", "deleteComment"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"],
          selector: "a[routerLink],area[routerLink]",
          inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-comments-page',
            templateUrl: './user-comments-page.component.html',
            styleUrls: ['./user-comments-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }
      });
      /***/

    },

    /***/
    "atHU":
    /*!************************************************************!*\
      !*** ./src/app/shared/functions/extract-query.function.ts ***!
      \************************************************************/

    /*! exports provided: extractQuery */

    /***/
    function atHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractQuery", function () {
        return extractQuery;
      });

      function extractQuery(item) {
        var result;

        if (!item || !item.query) {
          result = {};
        } else if (item.query instanceof Function) {
          result = item.query();
        } else {
          result = item.query;
        }

        return result;
      }
      /***/

    },

    /***/
    "lCCK":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-comments-page/user-comments-page-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: UserCommentsPageRoutingModule */

    /***/
    function lCCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCommentsPageRoutingModule", function () {
        return UserCommentsPageRoutingModule;
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


      var _user_comments_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-comments-page.component */
      "7FWU");
      /* harmony import */


      var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/users-resolver.service */
      "5TyJ");

      var routes = [{
        path: '',
        component: _user_comments_page_component__WEBPACK_IMPORTED_MODULE_2__["UserCommentsPageComponent"],
        resolve: {
          data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"]
        }
      }];

      var UserCommentsPageRoutingModule = /*#__PURE__*/_createClass(function UserCommentsPageRoutingModule() {
        _classCallCheck(this, UserCommentsPageRoutingModule);
      });

      UserCommentsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserCommentsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserCommentsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageRoutingModule,
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
    "unJf":
    /*!*****************************************************!*\
      !*** ./src/app/shared/enums/comments-range.enum.ts ***!
      \*****************************************************/

    /*! exports provided: ECommentsRange */

    /***/
    function unJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ECommentsRange", function () {
        return ECommentsRange;
      });

      var ECommentsRange;

      (function (ECommentsRange) {
        ECommentsRange["RATING"] = "RATING";
        ECommentsRange["CREATED"] = "CREATED";
      })(ECommentsRange || (ECommentsRange = {}));
      /***/

    },

    /***/
    "wPwW":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-comments-page/user-comments-page.module.ts ***!
      \************************************************************************************/

    /*! exports provided: UserCommentsPageModule */

    /***/
    function wPwW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserCommentsPageModule", function () {
        return UserCommentsPageModule;
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


      var _user_comments_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-comments-page-routing.module */
      "lCCK");
      /* harmony import */


      var _user_comments_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-comments-page.component */
      "7FWU");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/user/user-header/user-header.module */
      "PMU/");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/modules/ranges/ranges.module */
      "iMhr");

      var UserCommentsPageModule = /*#__PURE__*/_createClass(function UserCommentsPageModule() {
        _classCallCheck(this, UserCommentsPageModule);
      });

      UserCommentsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserCommentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageModule,
        declarations: [_user_comments_page_component__WEBPACK_IMPORTED_MODULE_3__["UserCommentsPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_comments_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCommentsPageRoutingModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"]]
      });
      UserCommentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_comments_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCommentsPageRoutingModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserCommentsPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_comments_page_component__WEBPACK_IMPORTED_MODULE_3__["UserCommentsPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_comments_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserCommentsPageRoutingModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_8__["RangesModule"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-comments-page-user-comments-page-module-es5.js.map