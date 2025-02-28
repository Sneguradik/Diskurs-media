(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-posts-page-user-posts-page-module"], {
    /***/
    "+dG+":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-posts-page/user-posts-page.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: UserPostsPageComponent */

    /***/
    function dG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPostsPageComponent", function () {
        return UserPostsPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_classes_abstract_user_posts_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/classes/abstract-user-posts.class */
      "TzTY");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/services/platform.service */
      "HvqW");
      /* harmony import */


      var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../user-header/user-header.component */
      "6n3P");
      /* harmony import */


      var _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../shared/modules/feed/feed-article-view/feed-article-view.component */
      "dlPb");
      /* harmony import */


      var _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/modules/ranges/ranges.component */
      "HThX");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserPostsPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function UserPostsPageComponent(activatedRoute, sessionService, feedService, translateService, usersService, topicsService, sidebarWrapperService, platformService) {
          var _this;

          _classCallCheck(this, UserPostsPageComponent);

          _this = _callSuper(this, UserPostsPageComponent, [activatedRoute, sessionService, feedService, translateService, usersService, topicsService]);
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.platformService = platformService;
          return _this;
        }

        _inherits(UserPostsPageComponent, _shared_classes_abstr);

        return _createClass(UserPostsPageComponent, [{
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

            _superPropGet(UserPostsPageComponent, "ngOnInit", this, 3)([]);

            if (this.platformService.isServer) {
              this.articles = this.activatedRoute.snapshot.data.feed;
            }
          }
        }]);
      }(_shared_classes_abstract_user_posts_class__WEBPACK_IMPORTED_MODULE_1__["AbstractUserPosts"]);

      UserPostsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageComponent,
        deps: [{
          token: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"]
        }, {
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
        }, {
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
        }, {
          token: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_9__["PlatformService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserPostsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserPostsPageComponent,
        selector: "app-user-posts-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-user-header></app-user-header>\n\n<ul *ngIf=\"pinned\" class=\"block-card item-space-20\">\n    <li>\n        <app-feed-article-view [options]=\"{ pinnedMark: true, pictureOn: true, menuOn: !drafts }\" [data]=\"pinned[0]\" [topic]=\"pinned[1]\" (pinned)=\"pinned[0].pinned = false; articles.push(pinned); pinned=$event;\" (gone)=\"remove(pinned)\"></app-feed-article-view>\n    </li>\n</ul>\n<div style=\"margin-bottom: 50px;\"></div>\n\n<app-ranges [ranges]=\"ranges\" [activeRange]=\"activeRange\" (toggleRange)=\"rangeEvent($event)\"></app-ranges>\n<ul class=\"block-card item-space-20\">\n    <li *ngFor=\"let article of articles; let i = index\">\n        <app-feed-article-view [data]=\"article[0]\" [topic]=\"article[1]\" [options]=\"{ pictureOn: true, menuOn: !drafts }\" (gone)=\"remove(article)\" (pinned)=\"pinned=$event; remove(article); pinned[0].pinned = true;\"></app-feed-article-view>\n    </li>\n</ul>\n\n<app-pagination [pageable]=\"pageable\" [fireFirstPage]=\"false\"></app-pagination>\n",
        styles: [":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItcG9zdHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLXBvc3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"],
        components: [{
          type: _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_10__["UserHeaderComponent"],
          selector: "app-user-header"
        }, {
          type: _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_11__["FeedArticleViewComponent"],
          selector: "app-feed-article-view",
          inputs: ["data", "link", "options", "topic", "user"],
          outputs: ["gone", "gonePromote", "pinned", "goneBookmarked"]
        }, {
          type: _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_12__["RangesComponent"],
          selector: "app-ranges",
          inputs: ["ranges", "activeRange"],
          outputs: ["toggleRange"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-posts-page',
            templateUrl: './user-posts-page.component.html',
            styleUrls: ['./user-posts-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
          }, {
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }, {
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }, {
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
          }, {
            type: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_9__["PlatformService"]
          }];
        }
      });
      /***/

    },

    /***/
    "NMDP":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-posts-page/user-posts-page-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: UserPostsPageRoutingModule */

    /***/
    function NMDP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPostsPageRoutingModule", function () {
        return UserPostsPageRoutingModule;
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


      var _user_posts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-posts-page.component */
      "+dG+");
      /* harmony import */


      var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @api/schemas/article/publication-stage.enum */
      "l6fO");
      /* harmony import */


      var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/services/users-resolver.service */
      "5TyJ");
      /* harmony import */


      var _shared_services_feed_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/services/feed-resolver.service */
      "WPeE");

      var routes = [{
        path: '',
        component: _user_posts_page_component__WEBPACK_IMPORTED_MODULE_2__["UserPostsPageComponent"],
        data: {
          query: {
            stage: [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"][_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"].PUBLISHED], _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"][_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"].REVIEWING], _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"][_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"].BLOCKED]]
          }
        },
        resolve: {
          data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UsersResolverService"],
          feed: _shared_services_feed_resolver_service__WEBPACK_IMPORTED_MODULE_5__["FeedResolverService"]
        }
      }];

      var UserPostsPageRoutingModule = /*#__PURE__*/_createClass(function UserPostsPageRoutingModule() {
        _classCallCheck(this, UserPostsPageRoutingModule);
      });

      UserPostsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserPostsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserPostsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageRoutingModule,
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
    "VUcV":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-posts-page/user-posts-page.module.ts ***!
      \******************************************************************************/

    /*! exports provided: UserPostsPageModule */

    /***/
    function VUcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPostsPageModule", function () {
        return UserPostsPageModule;
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


      var _user_posts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-posts-page-routing.module */
      "NMDP");
      /* harmony import */


      var _user_posts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-posts-page.component */
      "+dG+");
      /* harmony import */


      var _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/modules/ranges/ranges.module */
      "iMhr");
      /* harmony import */


      var _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @modules/user/user-header/user-header.module */
      "PMU/");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/modules/feed/feed.module */
      "yiK6");

      var UserPostsPageModule = /*#__PURE__*/_createClass(function UserPostsPageModule() {
        _classCallCheck(this, UserPostsPageModule);
      });

      UserPostsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserPostsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageModule,
        declarations: [_user_posts_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPostsPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_posts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPostsPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]]
      });
      UserPostsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_posts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPostsPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPostsPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_posts_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPostsPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_posts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPostsPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-posts-page-user-posts-page-module-es5.js.map