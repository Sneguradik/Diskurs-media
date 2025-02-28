(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-promoted-page-user-promoted-page-module"], {
    /***/
    "GAkG":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-promoted-page/user-promoted-page.module.ts ***!
      \************************************************************************************/

    /*! exports provided: UserPromotedPageModule */

    /***/
    function GAkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPromotedPageModule", function () {
        return UserPromotedPageModule;
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


      var _user_promoted_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-promoted-page-routing.module */
      "T1WL");
      /* harmony import */


      var _user_promoted_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-promoted-page.component */
      "yDcV");
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
      /* harmony import */


      var _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @modules/events/event-preview/event-preview.module */
      "D6c4");
      /* harmony import */


      var _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @modules/jobs/job-preview/job-preview.module */
      "WCHF");

      var UserPromotedPageModule = /*#__PURE__*/_createClass(function UserPromotedPageModule() {
        _classCallCheck(this, UserPromotedPageModule);
      });

      UserPromotedPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserPromotedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageModule,
        declarations: [_user_promoted_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPromotedPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_promoted_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPromotedPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_8__["EventPreviewModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_9__["JobPreviewModule"]]
      });
      UserPromotedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_promoted_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPromotedPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_8__["EventPreviewModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_9__["JobPreviewModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_promoted_page_component__WEBPACK_IMPORTED_MODULE_3__["UserPromotedPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_promoted_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserPromotedPageRoutingModule"], _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"], _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"], _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_8__["EventPreviewModule"], _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_9__["JobPreviewModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "MplY":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/functions/fetch-articles-with-topics.function.ts ***!
      \*************************************************************************/

    /*! exports provided: fetchArticlesWithTopics$ */

    /***/
    function MplY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fetchArticlesWithTopics$", function () {
        return fetchArticlesWithTopics$;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function fetchArticlesWithTopics$(page, topicsService) {
        var topics = [];
        page.content.forEach(function (article) {
          if (article.topics.length > 0) {
            topics.push(article.topics[0]);
          }
        });
        return page.content.length > 0 ? topicsService.getMultiple$(topics).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["defaultIfEmpty"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (topicsRet) {
          var content = [];
          page.content.forEach(function (article) {
            if (article.topics.length > 0) {
              content.push([article, topicsRet.find(function (x) {
                return x.meta.id === article.topics[0];
              })]);
            } else {
              content.push([article, null]);
            }
          });
          return Object.assign(Object.assign({}, page), {
            content: content
          });
        })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object.assign(Object.assign({}, page), {
          content: []
        }));
      }
      /***/

    },

    /***/
    "T1WL":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-promoted-page/user-promoted-page-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: UserPromotedPageRoutingModule */

    /***/
    function T1WL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPromotedPageRoutingModule", function () {
        return UserPromotedPageRoutingModule;
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


      var _user_promoted_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-promoted-page.component */
      "yDcV");
      /* harmony import */


      var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/users-resolver.service */
      "5TyJ");

      var routes = [{
        path: '',
        component: _user_promoted_page_component__WEBPACK_IMPORTED_MODULE_2__["UserPromotedPageComponent"],
        data: {
          query: {
            bookmark: true
          }
        },
        resolve: {
          data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"]
        }
      }];

      var UserPromotedPageRoutingModule = /*#__PURE__*/_createClass(function UserPromotedPageRoutingModule() {
        _classCallCheck(this, UserPromotedPageRoutingModule);
      });

      UserPromotedPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      UserPromotedPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      UserPromotedPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageRoutingModule,
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
    "gOHZ":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-promoted-page/promoted-view-item-type.enum.ts ***!
      \***************************************************************************************/

    /*! exports provided: PromotedViewItemTypeEnum */

    /***/
    function gOHZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromotedViewItemTypeEnum", function () {
        return PromotedViewItemTypeEnum;
      });

      var PromotedViewItemTypeEnum;

      (function (PromotedViewItemTypeEnum) {
        PromotedViewItemTypeEnum["EVENT"] = "EVENT";
        PromotedViewItemTypeEnum["JOB"] = "JOB";
        PromotedViewItemTypeEnum["ARTICLE"] = "ARTICLE";
      })(PromotedViewItemTypeEnum || (PromotedViewItemTypeEnum = {}));
      /***/

    },

    /***/
    "yDcV":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-promoted-page/user-promoted-page.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: UserPromotedPageComponent */

    /***/
    function yDcV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPromotedPageComponent", function () {
        return UserPromotedPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/utils/id-map.operator */
      "KDmQ");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/functions/fetch-articles-with-topics.function */
      "MplY");
      /* harmony import */


      var _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./promoted-view-item-type.enum */
      "gOHZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @api/routes/events.service */
      "3Gor");
      /* harmony import */


      var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @api/routes/jobs.service */
      "YWUd");
      /* harmony import */


      var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../user-header/user-header.component */
      "6n3P");
      /* harmony import */


      var _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/modules/feed/feed-article-view/feed-article-view.component */
      "dlPb");
      /* harmony import */


      var _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../events/event-preview/event-preview.component */
      "VreD");
      /* harmony import */


      var _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../jobs/job-preview/job-preview.component */
      "WuGY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var UserPromotedPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function UserPromotedPageComponent(activatedRoute, sessionService, feedService, usersService, topicsService, sidebarWrapperService, eventsService, jobsService) {
          var _this;

          _classCallCheck(this, UserPromotedPageComponent);

          _this = _callSuper(this, UserPromotedPageComponent);
          _this.activatedRoute = activatedRoute;
          _this.sessionService = sessionService;
          _this.feedService = feedService;
          _this.usersService = usersService;
          _this.topicsService = topicsService;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.eventsService = eventsService;
          _this.jobsService = jobsService;
          _this.promotedViewItemTypeEnum = _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"];
          _this.pinned = null;
          _this.items = [];
          _this.data = {
            articles: null,
            events: null,
            jobs: null
          };
          _this.page = 0;
          _this.isFetching = false;
          return _this;
        }

        _inherits(UserPromotedPageComponent, _shared_classes_abstr);

        return _createClass(UserPromotedPageComponent, [{
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
            var id$ = this.activatedRoute.paramMap.pipe(Object(_shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_3__["idMap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
              return _this2.usersService.getSingle$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              return user.meta.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (id) {
              return _this2.id = id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([id$, this.sessionService.userId$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  currentId = _ref2[0],
                  sessionId = _ref2[1];

              _this2.isMe = currentId === sessionId;
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.activatedRoute.data, this.sessionService.user$, id$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (options) {
              _this2.items = [];
              _this2.options = options;
              _this2.options[0].query.bookmarked = _this2.options[2];

              _this2.fetchContent();
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll() {
            if (window.innerHeight + window.scrollY + 20 >= document.body.offsetHeight) {
              this.fetchContent();
            }
          }
        }, {
          key: "fetchContent",
          value: function fetchContent() {
            var _this3 = this;

            var _a, _b, _c, _d, _e, _f;

            if (!this.isFetching) {
              this.isFetching = true;
              var fetch = [];

              if (this.page === 0 || ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.articles) === null || _b === void 0 ? void 0 : _b.totalPages) > this.page) {
                fetch.push(this.feedService.feedRequest$(Object.assign(Object.assign({}, this.options[0].query), {
                  page: this.page
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (res) {
                  return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_5__["fetchArticlesWithTopics$"])(res, _this3.topicsService);
                })));
              } else {
                fetch.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null));
              }

              if (this.page === 0 || ((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.events) === null || _d === void 0 ? void 0 : _d.totalPages) > this.page) {
                fetch.push(this.eventsService.getBookmarked$(this.id, this.page));
              } else {
                fetch.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null));
              }

              if (this.page === 0 || ((_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.jobs) === null || _f === void 0 ? void 0 : _f.totalPages) > this.page) {
                fetch.push(this.jobsService.getBookmarked$(this.id, this.page));
              } else {
                fetch.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null));
              }

              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(fetch).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 3),
                    articles = _ref4[0],
                    events = _ref4[1],
                    jobs = _ref4[2];

                if (articles) {
                  _this3.assignPageable('articles', articles);
                }

                if (events) {
                  _this3.assignPageable('events', events);
                }

                if (jobs) {
                  _this3.assignPageable('jobs', jobs);
                }

                if (jobs || events || articles) {
                  _this3.updateItems();
                }

                _this3.page++;
                _this3.isFetching = false;
              });
            }
          }
        }, {
          key: "sortItems",
          value: function sortItems(items) {
            // tslint:disable:max-line-length
            return items.sort(function (a, b) {
              if ((a.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE ? a.item[0].status.publishedAt : a.item.info.publishedAt) < (b.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE ? b.item[0].status.publishedAt : b.item.info.publishedAt)) {
                return 1;
              }

              if ((a.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE ? a.item[0].status.publishedAt : a.item.info.publishedAt) > (b.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE ? b.item[0].status.publishedAt : b.item.info.publishedAt)) {
                return -1;
              }

              return 0;
            }); // tslint:enable:max-line-length
          }
        }, {
          key: "assignPageable",
          value: function assignPageable(key, data) {
            if (this.data[key]) {
              var _this$data$key$conten;

              (_this$data$key$conten = this.data[key].content).push.apply(_this$data$key$conten, _toConsumableArray(data.content));

              this.data[key].page = data.page;
              this.data[key].total = data.total;
              this.data[key].totalPages = data.totalPages;
            } else {
              this.data[key] = data;
            }
          }
        }, {
          key: "updateItems",
          value: function updateItems() {
            var items = [];

            if (this.data.articles.content[0] && this.data.articles.content[0][0].pinned) {
              this.pinned = this.data.articles.content[0];
              this.data.articles.content.splice(this.data.articles.content.indexOf(this.data.articles.content[0]), 1);
            }

            this.data.articles.content.forEach(function (element) {
              items.push({
                item: element,
                type: _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE
              });
            });
            this.data.events.content.forEach(function (element) {
              items.push({
                item: element,
                type: _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].EVENT
              });
            });
            this.data.jobs.content.forEach(function (element) {
              items.push({
                item: element,
                type: _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].JOB
              });
            });
            items = this.sortItems(items);
            this.items = items;
          }
        }, {
          key: "remove",
          value: function remove(item, type) {
            this.data[type].content.splice(this.data[type].content.indexOf(item), 1);
            this.updateItems();
          }
        }, {
          key: "removeBookmarked",
          value: function removeBookmarked(item, type) {
            if (this.isMe) {
              if (type === 'article') {
                this.items.splice(this.items.findIndex(function (itemIter) {
                  return itemIter.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].ARTICLE && itemIter.item[0].meta.id === item.meta.id;
                }), 1);
              }

              if (type === 'job') {
                this.items.splice(this.items.findIndex(function (itemIter) {
                  return itemIter.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].JOB && itemIter.item.meta.id === item.meta.id;
                }), 1);
              }

              if (type === 'event') {
                this.items.splice(this.items.findIndex(function (itemIter) {
                  return itemIter.type === _promoted_view_item_type_enum__WEBPACK_IMPORTED_MODULE_6__["PromotedViewItemTypeEnum"].EVENT && itemIter.item.meta.id === item.meta.id;
                }), 1);
              }
            }
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]);

      UserPromotedPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageComponent,
        deps: [{
          token: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"]
        }, {
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]
        }, {
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__["TopicsService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"]
        }, {
          token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_13__["EventsService"]
        }, {
          token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_14__["JobsService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserPromotedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserPromotedPageComponent,
        selector: "app-user-promoted-page",
        host: {
          listeners: {
            "window:scroll": "onScroll()"
          }
        },
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-user-header></app-user-header>\n\n<ul *ngIf=\"pinned\" class=\"block-card item-space-20\">\n    <li>\n        <app-feed-article-view [options]=\"{ pinnedMark: true, pictureOn: true, menuOn: true }\" \n                               [data]=\"pinned[0]\" \n                               [topic]=\"pinned[1]\" \n                               (pinned)=\"pinned[0].pinned = false; data.articles.content.push(pinned); updateItems(); pinned=$event;\">\n        </app-feed-article-view>\n    </li>\n</ul>\n<div style=\"margin-bottom: 50px;\"></div>\n\n<ul class=\"block-card item-space-20\">\n    <li *ngFor=\"let item of items; let i = index\" [ngSwitch]=\"item.type\">\n        <app-feed-article-view *ngSwitchCase=\"promotedViewItemTypeEnum.ARTICLE\"\n                               [data]=\"item.item[0]\"\n                               [topic]=\"item.item[1]\"\n                               [options]=\"{ pictureOn: true, menuOn: true }\"\n                               (pinned)=\"pinned=$event; remove(item.item, 'articles'); pinned[0].pinned = true;\"\n                               (goneBookmarked)=\"removeBookmarked($event[0], $event[1])\"\n                               (gone)=\"remove(item.item, 'articles')\">\n        </app-feed-article-view>\n        <app-event-preview *ngSwitchCase=\"promotedViewItemTypeEnum.EVENT\"\n                           [event]=\"item.item\"\n                           (goneBookmarked)=\"removeBookmarked($event[0], $event[1])\"\n                           (gone)=\"remove(item.item, 'events')\">\n        </app-event-preview>\n        <app-job-preview *ngSwitchCase=\"promotedViewItemTypeEnum.JOB\"\n                         [job]=\"item.item\"\n                         (goneBookmarked)=\"removeBookmarked($event[0], $event[1])\"\n                         (gone)=\"remove(item.item, 'jobs')\">\n        </app-job-preview>\n    </li>\n</ul>\n",
        styles: [":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItcHJvbW90ZWQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLXByb21vdGVkLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"],
        components: [{
          type: _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_15__["UserHeaderComponent"],
          selector: "app-user-header"
        }, {
          type: _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_16__["FeedArticleViewComponent"],
          selector: "app-feed-article-view",
          inputs: ["data", "link", "options", "topic", "user"],
          outputs: ["gone", "gonePromote", "pinned", "goneBookmarked"]
        }, {
          type: _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_17__["EventPreviewComponent"],
          selector: "app-event-preview",
          inputs: ["event"],
          outputs: ["gone", "goneBookmarked"]
        }, {
          type: _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_18__["JobPreviewComponent"],
          selector: "app-job-preview",
          inputs: ["job", "isOwner"],
          outputs: ["gone", "goneBookmarked"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitch"],
          selector: "[ngSwitch]",
          inputs: ["ngSwitch"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgSwitchCase"],
          selector: "[ngSwitchCase]",
          inputs: ["ngSwitchCase"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserPromotedPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-promoted-page',
            templateUrl: './user-promoted-page.component.html',
            styleUrls: ['./user-promoted-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
          }, {
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"]
          }, {
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]
          }, {
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__["TopicsService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"]
          }, {
            type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_13__["EventsService"]
          }, {
            type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_14__["JobsService"]
          }];
        },
        propDecorators: {
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
          }]
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-user-promoted-page-user-promoted-page-module-es5.js.map