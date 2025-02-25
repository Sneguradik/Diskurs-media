(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

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

  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-topic-page-topic-page-module"], {
    /***/
    "/tmj":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/topics/pages/topic-page/topic-page.module.ts ***!
      \**********************************************************************/

    /*! exports provided: TopicPageModule */

    /***/
    function _tmj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicPageModule", function () {
        return TopicPageModule;
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


      var _topic_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topic-page-routing.module */
      "NwK9");
      /* harmony import */


      var _topic_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./topic-page.component */
      "gyok");
      /* harmony import */


      var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/modules/svg/svg.module */
      "F/CY");
      /* harmony import */


      var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_ui_info_header_info_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/ui/info-header/info-header.module */
      "DBZq");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared/modules/feed/feed.module */
      "yiK6");
      /* harmony import */


      var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared/directives/directives.module */
      "yGOH");

      var TopicPageModule = /*#__PURE__*/_createClass(function TopicPageModule() {
        _classCallCheck(this, TopicPageModule);
      });

      TopicPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      TopicPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageModule,
        declarations: [_topic_page_component__WEBPACK_IMPORTED_MODULE_3__["TopicPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _topic_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicPageRoutingModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_4__["SvgModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _shared_ui_info_header_info_header_module__WEBPACK_IMPORTED_MODULE_8__["InfoHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_10__["FeedModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_11__["CommonDirectivesModule"]]
      });
      TopicPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _topic_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicPageRoutingModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_4__["SvgModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _shared_ui_info_header_info_header_module__WEBPACK_IMPORTED_MODULE_8__["InfoHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_10__["FeedModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_11__["CommonDirectivesModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_topic_page_component__WEBPACK_IMPORTED_MODULE_3__["TopicPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _topic_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicPageRoutingModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_4__["SvgModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), _shared_ui_info_header_info_header_module__WEBPACK_IMPORTED_MODULE_8__["InfoHeaderModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_10__["FeedModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_11__["CommonDirectivesModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "F1K0":
    /*!************************************************************!*\
      !*** ./src/app/shared/services/topics-resolver.service.ts ***!
      \************************************************************/

    /*! exports provided: TopicsResolverService */

    /***/
    function F1K0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicsResolverService", function () {
        return TopicsResolverService;
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


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TopicsResolverService = /*#__PURE__*/function () {
        function TopicsResolverService(topicsService, router) {
          _classCallCheck(this, TopicsResolverService);

          this.topicsService = topicsService;
          this.router = router;
        }

        return _createClass(TopicsResolverService, [{
          key: "resolve",
          value: function resolve(route) {
            return this.topicsService.getOne$(route.params.id).pipe(Object(_shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__["notFound"])(this.router));
          }
        }]);
      }();

      TopicsResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicsResolverService,
        deps: [{
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_2__["TopicsService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable
      });
      TopicsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicsResolverService,
        providedIn: 'root'
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicsResolverService,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_2__["TopicsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }
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
    "NwK9":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/topics/pages/topic-page/topic-page-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: TopicPageRoutingModule */

    /***/
    function NwK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicPageRoutingModule", function () {
        return TopicPageRoutingModule;
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


      var _topic_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topic-page.component */
      "gyok");
      /* harmony import */


      var _shared_services_topics_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services/topics-resolver.service */
      "F1K0");
      /* harmony import */


      var _shared_services_feed_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/services/feed-resolver.service */
      "WPeE");

      var routes = [{
        path: '',
        component: _topic_page_component__WEBPACK_IMPORTED_MODULE_2__["TopicPageComponent"],
        resolve: {
          data: _shared_services_topics_resolver_service__WEBPACK_IMPORTED_MODULE_3__["TopicsResolverService"],
          feed: _shared_services_feed_resolver_service__WEBPACK_IMPORTED_MODULE_4__["FeedResolverService"]
        }
      }];

      var TopicPageRoutingModule = /*#__PURE__*/_createClass(function TopicPageRoutingModule() {
        _classCallCheck(this, TopicPageRoutingModule);
      });

      TopicPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      TopicPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      TopicPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageRoutingModule,
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
    "gyok":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/topics/pages/topic-page/topic-page.component.ts ***!
      \*************************************************************************/

    /*! exports provided: TopicPageComponent */

    /***/
    function gyok(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicPageComponent", function () {
        return TopicPageComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/functions/fetch-articles-with-topics.function */
      "MplY");
      /* harmony import */


      var _env__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @env */
      "AytR");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @layout/dynamic-meta-tags/dynamic-meta-tags.service */
      "xAOu");
      /* harmony import */


      var _layout_shared_services_header_stats_sync_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @layout/shared/services/header-stats-sync.service */
      "89RX");
      /* harmony import */


      var _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @shared/services/platform.service */
      "HvqW");
      /* harmony import */


      var _shared_ui_info_header_info_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../shared/ui/info-header/info-header.component */
      "zwVY");
      /* harmony import */


      var _shared_components_action_menu_action_menu_topic_action_menu_topic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../shared/components/action-menu/action-menu-topic/action-menu-topic.component */
      "ZPMy");
      /* harmony import */


      var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../shared/modules/svg/svg/svg.component */
      "ax+O");
      /* harmony import */


      var _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../../shared/modules/feed/feed-article-view/feed-article-view.component */
      "dlPb");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../shared/directives/logged-in.directive */
      "DwHT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var BarItemEnum;

      (function (BarItemEnum) {
        BarItemEnum["PUBLICATIONS"] = "publications";
        BarItemEnum["FAVORITES"] = "favorites";
        BarItemEnum["INFO"] = "info";
      })(BarItemEnum || (BarItemEnum = {}));

      var TopicPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function TopicPageComponent(topicsService, sessionService, activatedRoute, feedService, sidebarWrapperService, dynamicMetaTagsService, router, headerStatsSyncService, platformService) {
          var _this5;

          _classCallCheck(this, TopicPageComponent);

          _this5 = _callSuper(this, TopicPageComponent);
          _this5.topicsService = topicsService;
          _this5.sessionService = sessionService;
          _this5.activatedRoute = activatedRoute;
          _this5.feedService = feedService;
          _this5.sidebarWrapperService = sidebarWrapperService;
          _this5.dynamicMetaTagsService = dynamicMetaTagsService;
          _this5.router = router;
          _this5.headerStatsSyncService = headerStatsSyncService;
          _this5.platformService = platformService;
          _this5.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["PageableContent"](_this5.fetch$.bind(_this5));
          _this5.barItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](BarItemEnum.PUBLICATIONS);
          _this5.barItems = BarItemEnum;
          _this5.id$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          return _this5;
        }

        _inherits(TopicPageComponent, _shared_classes_abstr);

        return _createClass(TopicPageComponent, [{
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
            this.initOptions();
            this.headerStatsSyncService.subEvent$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  type = _ref2[0],
                  id = _ref2[1];

              return type === 'topic' && id === _this6.topic.meta.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 3),
                  status = _ref4[2];

              return _this6.topic.subscribers.you = status;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe();

            if (this.platformService.isServer) {
              this.pageable.content = this.activatedRoute.snapshot.data.feed;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dynamicMetaTagsService.setToDefault();

            _superPropGet(TopicPageComponent, "ngOnDestroy", this, 3)([]);
          }
        }, {
          key: "initOptions",
          value: function initOptions() {
            var _this7 = this;

            this.topic = this.activatedRoute.snapshot.data.data;
            this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_) {
              return _.get('id');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(this.id$);
            this.idNum$ = this.id$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
              return _this7.topicsService.getOne$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
              return _this7.topic = _;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_) {
              return _.meta.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
            this.promotedCount$ = this.idNum$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
              return _this7.feedService.count$({
                list: 'default',
                topic: id
              });
            }));
            var options$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.idNum$, this.sessionService.user$, this.barItem$]);
            options$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (opts) {
              return _this7.pageable.setOptionsWithReset$(opts);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe();
            this.getMainData();
          }
        }, {
          key: "fetch$",
          value: function fetch$(page, options) {
            var _this8 = this;

            return options ? this.feedService.feedRequest$({
              page: page,
              topic: options[0],
              list: options[2] === 'favorites' ? 'default' : undefined
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) {
              return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_5__["fetchArticlesWithTopics$"])(_, _this8.topicsService);
            })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({
              page: -1,
              total: 1,
              totalPages: 1,
              content: []
            });
          }
        }, {
          key: "getMainData",
          value: function getMainData() {
            this.dynamicMetaTagsService.metaInfo$.next({
              title: this.topic.info.name,
              tags: [{
                property: 'og:title',
                content: this.topic.info.name
              }, {
                name: 'description',
                content: this.topic.info.description
              }, {
                property: 'og:description',
                content: this.topic.info.description
              }, {
                property: 'og:image',
                content: this.topic.info.picture
              }, {
                property: 'og:url',
                content: _env__WEBPACK_IMPORTED_MODULE_6__["environment"].url + this.router.url
              }, {
                property: 'og:type',
                content: 'website'
              }, {
                property: 'og:site_name',
                content: 'Diskurs.Media'
              }, {
                name: 'twitter:card',
                content: 'summary'
              }, {
                name: 'twitter:title',
                content: this.topic.info.name
              }, {
                name: 'twitter:description',
                content: this.topic.info.description
              }, {
                name: 'twitter:image',
                content: this.topic.info.picture
              }]
            });
          }
        }, {
          key: "subFunc",
          value: function subFunc(topic) {
            var _this9 = this;

            if (topic.hidden) {
              this.topicsService.hide$(topic.meta.id, true).subscribe();
            }

            this.topicsService.subscribe$(topic.meta.id, topic.subscribers.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              topic.subscribers.you = !topic.subscribers.you;

              _this9.headerStatsSyncService.subEvent$.next(['topic', topic.meta.id, topic.subscribers.you]);
            });
          }
        }, {
          key: "switchBar",
          value: function switchBar(barItem) {
            this.barItem$.next(barItem);
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"]);

      TopicPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageComponent,
        deps: [{
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_11__["SidebarWrapperService"]
        }, {
          token: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_12__["DynamicMetaTagsService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          token: _layout_shared_services_header_stats_sync_service__WEBPACK_IMPORTED_MODULE_13__["HeaderStatsSyncService"]
        }, {
          token: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_14__["PlatformService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      TopicPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: TopicPageComponent,
        selector: "app-topic-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<ng-container *ngIf=\"topic\">\n    <app-ui-info-header\n        style=\"margin-bottom: 20px;\"\n        [bgImage]=\"topic.profile.cover\"\n        [profileImage]=\"topic.info.picture\"\n        [profileText]=\"topic.info.name\"\n        [subscribed]=\"topic.subscribers.you\"\n        (subscribe)=\"subFunc(topic)\">\n        <div class=\"info-header-name\">{{ topic.info.name }}</div>\n        <div class=\"info-header-name-small\">{{ topic.info.name }}</div>\n        <div class=\"info-header-down\">\n            <div class=\"subs flex-item\">\n                <span class=\"fade-1 subtitle-1 font-1\">{{ 'COMMON.SUBSCRIBERS' | translate }}</span>\n                <span class=\"fade-1 subtitle-1 font-1 blue\" style=\"margin-left: 3px\">{{ topic.subscribers.count }}</span>\n            </div>\n            <app-action-menu-topic *appLoggedIn class=\"flex-item\" [data]=\"topic\"></app-action-menu-topic>\n        </div>\n        <div class=\"info-header-down-small\">\n            <div class=\"subs flex-item\">\n                <span class=\"fade-1 subtitle-1 font-1 blue\">\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u044B</span>\n            </div>\n            <div class=\"subs flex-item\">\n                <span class=\"fade-1 subtitle-1 font-1\">{{ 'COMMON.SUBSCRIBERS' | translate }}</span>\n                <span class=\"fade-1 subtitle-1 font-1 blue\" style=\"margin-left: 3px\">{{ topic.subscribers.count }}</span>\n            </div>\n            <app-action-menu-topic *appLoggedIn class=\"flex-item\" [data]=\"topic\"></app-action-menu-topic>\n        </div>\n        <div class=\"info-header-desc\">\n            <span class=\"fade-1 font-2 body-2\">\n                {{ topic.info.description }}\n            </span>\n        </div>\n        <div *ngIf=\"barItem$ | async; let barItem\" class=\"info-header-bar\">\n            <div class=\"flex-item btn\" [ngClass]=\"{ selected: barItem == barItems.PUBLICATIONS }\" (click)=\"switchBar(barItems.PUBLICATIONS)\">\n                <span class=\"font-1 fade-1 h5 button-1\" style=\"margin-bottom: 7px; display: inline-block;\">{{ 'COMMON.PUBLICATIONS_' | translate }}</span>\n                <br />\n                <span class=\"font-1 fade-1 h5 button-1 numbers\" [ngClass]=\"{ blue: barItem == barItems.PUBLICATIONS }\">{{ topic.postCount }}</span>\n            </div>\n                <div class=\"flex-item btn\" [ngClass]=\"{ selected: barItem == barItems.FAVORITES }\" (click)=\"switchBar(barItems.FAVORITES)\">\n                <span class=\"font-1 fade-1 h5 button-1\" style=\"margin-bottom: 7px; display: inline-block;\">{{ 'COMMON.FAVORITES' | translate }}</span>\n                <br />\n                <span class=\"font-1 fade-1 h5 button-1 numbers\" [ngClass]=\"{ blue: barItem == barItems.FAVORITES }\">{{ promotedCount$ | async }}</span>\n            </div>\n            <div class=\"flex-item btn\" [ngClass]=\"{ selected: barItem == barItems.INFO }\" (click)=\"switchBar(barItems.INFO)\">\n                <span class=\"font-1 fade-1 h5 button-1\" style=\"margin-bottom: 6px; display: inline-block;\">{{ 'COMMON.INFORMATION' | translate }}</span>\n                <br>\n                <svg *ngIf=\"!(barItem == barItems.INFO)\" class=\"numbers\" name=\"btn-expand-h\" style=\"width: 20px\"></svg>\n                <svg *ngIf=\"barItem == barItems.INFO\" class=\"numbers\" name=\"btn-expand-v\" style=\"width: 20px\"></svg>\n            </div>\n        </div>\n    </app-ui-info-header>\n    <div style=\"margin-bottom: 45px;\"></div>\n    <ul *ngIf=\"(barItem$ | async) === barItems.PUBLICATIONS || (barItem$ | async) === barItems.FAVORITES\" class=\"block-card item-space-40\">\n        <li *ngFor=\"let article of pageable.content; let i = index\">\n            <app-feed-article-view [data]=\"article[0]\" [topic]=\"article[1]\" [options]=\"{ pictureOn: true, menuOn: true }\"></app-feed-article-view>\n        </li>\n    </ul>\n    <div *ngIf=\"(barItem$ | async) === barItems.INFO\" class=\"block-card\" style=\"width: 100%;\">\n        <span class=\"font-1 fade-1 body-1\" style=\"font-weight: bold;\">{{ 'COMMON.ABOUT_THE_TOPIC' | translate }}</span>\n        <br />\n        <br />\n        <span class=\"fade-1 font-2 body-2\">\n            {{ topic.profile.fullDescription }}\n        </span>\n    </div>\n</ng-container>\n  \n<app-pagination [pageable]=\"pageable\"></app-pagination>\n",
        styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\n.info-header-name {\n  color: white;\n  font-family: Roboto, sans-serif;\n  font-size: 34px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 40px;\n}\n.info-header-name-small {\n  color: rgba(0, 0, 0, 0.7);\n  font-family: Roboto, sans-serif;\n  font-size: 24px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 28px;\n}\n.info-header-down {\n  align-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n}\n.info-header-down .flex-item:not(:first-child) {\n  margin-left: auto;\n}\n.info-header-down .icons {\n  display: flex;\n  flex-direction: row;\n  height: 26px;\n}\n.info-header-down .icons :nth-child(1) {\n  border: solid 1px white;\n  border-radius: 20px;\n  left: 0;\n  position: relative;\n}\n.info-header-down .icons :nth-child(2) {\n  border: solid 1px white;\n  border-radius: 20px;\n  left: -6px;\n  position: relative;\n}\n.info-header-down .icons :nth-child(3) {\n  border: solid 1px white;\n  border-radius: 20px;\n  left: -12px;\n  position: relative;\n}\n.info-header-down .icons :nth-child(4) {\n  border: solid 1px white;\n  border-radius: 20px;\n  left: -18px;\n  position: relative;\n}\n.info-header-down .icons :nth-child(5) {\n  border: solid 1px white;\n  border-radius: 20px;\n  left: -24px;\n  position: relative;\n}\n.info-header-down .subs {\n  display: flex;\n  flex-direction: row;\n}\n.info-header-down .subs .blue {\n  color: #00b7ff !important;\n}\n.info-header-down .subs span {\n  padding-top: 5px;\n}\n.info-header-desc {\n  width: 100%;\n}\n.info-header-bar {\n  align-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n@media (max-width: 766px) {\n  .info-header-bar {\n    width: 660px;\n  }\n}\n.info-header-bar .flex-item {\n  height: 61px;\n  position: relative;\n}\n.info-header-bar .flex-item:not(:first-child) {\n  margin-left: auto;\n}\n.info-header-bar .flex-item .button-1 {\n  line-height: 18px;\n}\n.info-header-bar .flex-item .numbers {\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n}\n.info-header-bar .flex-item .blue {\n  color: #00b7ff !important;\n}\n.info-header-bar .selected {\n  border-bottom: 3px solid #00b7ff;\n}\napp-ui-info-header {\n  margin-bottom: 45px;\n}\n.filter {\n  float: right;\n  margin-bottom: 15px;\n}\n.filter svg {\n  fill: #00b7ff;\n  float: right;\n  padding-left: 2px;\n  padding-top: 9px;\n}\n.info-header-down-small {\n  align-content: center;\n  display: flex;\n  flex-wrap: wrap;\n  height: 100%;\n  width: 100%;\n}\n.info-header-down-small .flex-item:not(:first-child) {\n  margin-left: auto;\n}\n.info-header-down-small .subs {\n  display: flex;\n  flex-direction: row;\n}\n.info-header-down-small .subs .blue {\n  color: #00b7ff !important;\n}\n.info-header-down-small .subs span {\n  padding-top: 5px;\n}\n:host {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi90b3BpYy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUFBO0FDNmlCSTtFRG5pQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUR3aUJJO0VEN2hCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRGtpQkk7RUR2aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FBZkE7RUFDRSxXQUFBO0FBa0JGO0FBZkE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBa0JGO0FBZkE7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWtCRjtBQWZBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBa0JGO0FBZkk7RUFDRSxpQkFBQTtBQWlCTjtBQWJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWVKO0FBYkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FBZU47QUFaSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFjTjtBQVhJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWFOO0FBVkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBWU47QUFUSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFXTjtBQVBFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBU0o7QUFQSTtFQUNFLHlCQUFBO0FBU047QUFOSTtFQUNFLGdCQUFBO0FBUU47QUFIQTtFQUNFLFdBQUE7QUFNRjtBQUhBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFNRjtBRG1jSTtFQzdjSjtJQU1JLFlBQUE7RUFRRjtBQUNGO0FBTkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQU5JO0VBQ0UsaUJBQUE7QUFRTjtBQUxJO0VBQ0UsaUJBQUE7QUFPTjtBQUpJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFNTjtBQUhJO0VBQ0UseUJBQUE7QUFLTjtBQURFO0VBQ0UsZ0NBQUE7QUFHSjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVKO0FBRUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjtBQUVJO0VBQ0UsaUJBQUE7QUFBTjtBQUlFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0FBRk47QUFLSTtFQUNFLGdCQUFBO0FBSE47QUFRQTtFQUNFLHFCQUFBO0FBTEYiLCJmaWxlIjoidG9waWMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2F0LWltcG9ydC1uby1wYXJ0aWFsLWxlYWRpbmctdW5kZXJzY29yZSAqL1xuQGltcG9ydCAnfmluY2x1ZGUtbWVkaWEvZGlzdC9faW5jbHVkZS1tZWRpYSc7XG5cbiRicmVha3BvaW50czogKFxuICB4bGFyZ2U6IDE0MDBweCxcbiAgbGFyZ2U6IDEwNjBweCxcbiAgbWVkaXVtOiA3NjdweCxcbiAgc21hbGw6IDM3NXB4LFxuKTtcblxuLmhpZGUtbHQtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWRlLWdlLW1lZGl1bSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc+PW1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtbHQtbGFyZ2Uge1xuICBAaW5jbHVkZSBtZWRpYSgnPGxhcmdlJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgIGh0dHBzOi8vZWR1YXJkb2JvdWNhcy5naXRodWIuaW8vaW5jbHVkZS1tZWRpYVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBLaXR0eSBHaXJhdWRlbCAoQGtpdHR5Z2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3Jlc3BvbnNpdmUnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5mby1oZWFkZXItbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW5mby1oZWFkZXItbmFtZS1zbWFsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmluZm8taGVhZGVyLWRvd24ge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAuZmxleC1pdGVtIHtcbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogMjZweDtcblxuICAgIDpudGgtY2hpbGQoMSkge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICA6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGxlZnQ6IC02cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOm50aC1jaGlsZCgzKSB7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBsZWZ0OiAtMTJweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICA6bnRoLWNoaWxkKDQpIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGxlZnQ6IC0xOHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIDpudGgtY2hpbGQoNSkge1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbGVmdDogLTI0cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICB9XG5cbiAgLnN1YnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5ibHVlIHtcbiAgICAgIGNvbG9yOiAjMDBiN2ZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uaW5mby1oZWFkZXItZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5mby1oZWFkZXItYmFyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICB3aWR0aDogNjYwcHg7XG4gIH1cblxuICAuZmxleC1pdGVtIHtcbiAgICBoZWlnaHQ6IDYxcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG5cbiAgICAuYnV0dG9uLTEge1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLm51bWJlcnMge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIC5ibHVlIHtcbiAgICAgIGNvbG9yOiAjMDBiN2ZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLnNlbGVjdGVkIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwYjdmZjtcbiAgfVxufVxuXG5hcHAtdWktaW5mby1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuXG4uZmlsdGVyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIHN2ZyB7XG4gICAgZmlsbDogIzAwYjdmZjtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgcGFkZGluZy10b3A6IDlweDtcbiAgfVxufVxuXG4uaW5mby1oZWFkZXItZG93bi1zbWFsbCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5mbGV4LWl0ZW0ge1xuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLnN1YnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5ibHVlIHtcbiAgICAgIGNvbG9yOiAjMDBiN2ZmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbiJdfQ== */"],
        components: [{
          type: _shared_ui_info_header_info_header_component__WEBPACK_IMPORTED_MODULE_15__["InfoHeaderComponent"],
          selector: "app-ui-info-header",
          inputs: ["bgImage", "profileImage", "profileText", "subscribed", "isMe"],
          outputs: ["subscribe", "edit"]
        }, {
          type: _shared_components_action_menu_action_menu_topic_action_menu_topic_component__WEBPACK_IMPORTED_MODULE_16__["ActionMenuTopicComponent"],
          selector: "app-action-menu-topic",
          inputs: ["data"],
          outputs: ["gone"]
        }, {
          type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_17__["SvgComponent"],
          selector: "svg[name]",
          inputs: ["name", "w", "h", "size"]
        }, {
          type: _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_18__["FeedArticleViewComponent"],
          selector: "app-feed-article-view",
          inputs: ["data", "link", "options", "topic", "user"],
          outputs: ["gone", "gonePromote", "pinned", "goneBookmarked"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_19__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_21__["LoggedInDirective"],
          selector: "[appLoggedIn]"
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"],
          selector: "[ngClass]",
          inputs: ["class", "ngClass"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }],
        pipes: {
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__["TranslatePipe"],
          "async": _angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TopicPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-topic-page',
            templateUrl: './topic-page.component.html',
            styleUrls: ['./topic-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_11__["SidebarWrapperService"]
          }, {
            type: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_12__["DynamicMetaTagsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _layout_shared_services_header_stats_sync_service__WEBPACK_IMPORTED_MODULE_13__["HeaderStatsSyncService"]
          }, {
            type: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_14__["PlatformService"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-topic-page-topic-page-module-es5.js.map