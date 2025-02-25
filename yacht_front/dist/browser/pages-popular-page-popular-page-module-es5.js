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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-popular-page-popular-page-module"], {
    /***/
    "8PEb":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/homepage/pages/popular-page/popular-page-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: PopularPageRoutingModule */

    /***/
    function PEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularPageRoutingModule", function () {
        return PopularPageRoutingModule;
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


      var _popular_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popular-page.component */
      "nbNg");

      var routes = [{
        path: '',
        redirectTo: 'day'
      }, {
        path: ':when',
        component: _popular_page_component__WEBPACK_IMPORTED_MODULE_2__["PopularPageComponent"]
      }];

      var PopularPageRoutingModule = /*#__PURE__*/_createClass(function PopularPageRoutingModule() {
        _classCallCheck(this, PopularPageRoutingModule);
      });

      PopularPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      PopularPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      PopularPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageRoutingModule,
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
    "B/Hh":
    /*!****************************************************************************!*\
      !*** ./src/app/modules/homepage/pages/popular-page/popular-page.module.ts ***!
      \****************************************************************************/

    /*! exports provided: PopularPageModule */

    /***/
    function B_Hh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularPageModule", function () {
        return PopularPageModule;
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


      var _popular_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./popular-page-routing.module */
      "8PEb");
      /* harmony import */


      var _popular_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./popular-page.component */
      "nbNg");
      /* harmony import */


      var _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/modules/feed/feed.module */
      "yiK6");
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


      var _shared_modules_short_job_list_short_job_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/modules/short-job-list/short-job-list.module */
      "pyfP");
      /* harmony import */


      var _shared_modules_short_event_list_short_event_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/modules/short-event-list/short-event-list.module */
      "THOy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var PopularPageModule = /*#__PURE__*/_createClass(function PopularPageModule() {
        _classCallCheck(this, PopularPageModule);
      });

      PopularPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      PopularPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageModule,
        declarations: [_popular_page_component__WEBPACK_IMPORTED_MODULE_3__["PopularPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popular_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PopularPageRoutingModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_short_job_list_short_job_list_module__WEBPACK_IMPORTED_MODULE_8__["ShortJobListModule"], _shared_modules_short_event_list_short_event_list_module__WEBPACK_IMPORTED_MODULE_9__["ShortEventListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      });
      PopularPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popular_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PopularPageRoutingModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_short_job_list_short_job_list_module__WEBPACK_IMPORTED_MODULE_8__["ShortJobListModule"], _shared_modules_short_event_list_short_event_list_module__WEBPACK_IMPORTED_MODULE_9__["ShortEventListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_popular_page_component__WEBPACK_IMPORTED_MODULE_3__["PopularPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _popular_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["PopularPageRoutingModule"], _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_4__["FeedModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_5__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_7__["SvgModule"], _shared_modules_short_job_list_short_job_list_module__WEBPACK_IMPORTED_MODULE_8__["ShortJobListModule"], _shared_modules_short_event_list_short_event_list_module__WEBPACK_IMPORTED_MODULE_9__["ShortEventListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
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
    "VvQG":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/homepage/pages/popular-page/popular-feed-item.class.ts ***!
      \********************************************************************************/

    /*! exports provided: PopularFeedItem */

    /***/
    function VvQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularFeedItem", function () {
        return PopularFeedItem;
      });

      var PopularFeedItem = /*#__PURE__*/function () {
        function PopularFeedItem() {
          var articleView = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var empty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          var realIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;

          _classCallCheck(this, PopularFeedItem);

          this.articleView = articleView;
          this.range = range;
          this.empty = empty;
          this.realIndex = realIndex;
        }

        return _createClass(PopularFeedItem, [{
          key: "isArticle",
          value: function isArticle() {
            return this.articleView !== null;
          }
        }, {
          key: "isRange",
          value: function isRange() {
            return this.range !== null;
          }
        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this.empty;
          }
        }]);
      }();
      /***/

    },

    /***/
    "nbNg":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/homepage/pages/popular-page/popular-page.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PopularPageComponent */

    /***/
    function nbNg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularPageComponent", function () {
        return PopularPageComponent;
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


      var _shared_enums_feed_source_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/enums/feed-source.enum */
      "u2Vy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _popular_feed_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./popular-feed-item.class */
      "VvQG");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/schemas/feed/feed-order.enum */
      "a47e");
      /* harmony import */


      var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/functions/fetch-articles-with-topics.function */
      "MplY");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @api/schemas/advertisement/banner-place.enum */
      "jXUv");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @api/routes/advertisement.service */
      "HqUP");
      /* harmony import */


      var _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @shared/services/platform.service */
      "HvqW");
      /* harmony import */


      var _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @api/routes/administration.service */
      "5IOP");
      /* harmony import */


      var _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @shared/services/homepage.service */
      "FruQ");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @app/services/responsive.service */
      "SKFc");
      /* harmony import */


      var _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../../../shared/modules/feed/feed-article-view/feed-article-view.component */
      "dlPb");
      /* harmony import */


      var _shared_modules_short_event_list_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../shared/modules/short-event-list/events.component */
      "hZur");
      /* harmony import */


      var _shared_modules_short_job_list_jobs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../../../shared/modules/short-job-list/jobs.component */
      "x3MU");
      /* harmony import */


      var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../../../shared/components/pagination/pagination.component */
      "NhFE");
      /* harmony import */


      var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../../../shared/modules/svg/svg/svg.component */
      "ax+O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../../../shared/pipes/custom-date.pipe */
      "cUwi");

      var PopularPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function PopularPageComponent(feedService, topicsService, advertisementService, platformService, administrationService, homepageService, sidebarWrapperService, activatedRoute, router, responsive) {
          var _this5;

          _classCallCheck(this, PopularPageComponent);

          _this5 = _callSuper(this, PopularPageComponent);
          _this5.feedService = feedService;
          _this5.topicsService = topicsService;
          _this5.advertisementService = advertisementService;
          _this5.platformService = platformService;
          _this5.administrationService = administrationService;
          _this5.homepageService = homepageService;
          _this5.sidebarWrapperService = sidebarWrapperService;
          _this5.activatedRoute = activatedRoute;
          _this5.router = router;
          _this5.responsive = responsive;
          _this5.count = 0;
          _this5.choice = false;
          _this5.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["PageableContent"](_this5.fetch$.bind(_this5));
          _this5.pageAttempt$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          _this5.adNums = [0, 0, 0];
          _this5.adViewedProps = [false, false, false];
          _this5.ads = [{
            content: [],
            currentPage: 0,
            totalPages: 1,
            contentLoading: false
          }, {
            content: [],
            currentPage: 0,
            totalPages: 1,
            contentLoading: false
          }, {
            content: [],
            currentPage: 0,
            totalPages: 1,
            contentLoading: false
          }];
          return _this5;
        }

        _inherits(PopularPageComponent, _shared_classes_abstr);

        return _createClass(PopularPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setTimeout(function () {
              _this6.sidebarWrapperService.params$.next({
                article: false,
                trending: true,
                navigation: true,
                live: true,
                showSidebar: true
              });
            });
            this.administrationService.getEventsJobs$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_) {
              _this6.eventsJobs = _;
            });
            this.homepageService.feedSource$.next(_shared_enums_feed_source_enum__WEBPACK_IMPORTED_MODULE_2__["FeedSourceEnum"].POPULAR);
            this.setRange();

            if (this.platformService.isBrowser) {
              this.getAd();
            }
          }
        }, {
          key: "onScroll",
          value: function onScroll() {
            if (!this.adViewedProps[0] && this.ads[0].content[0] && this.adElem1) {
              this.adViewed(0);
            }

            if (!this.adViewedProps[1] && this.ads[1].content[0] && this.adElem2) {
              this.adViewed(1);
            }

            if (!this.adViewedProps[2] && this.ads[2].content[0] && this.adElem3) {
              this.adViewed(2);
            }
          }
        }, {
          key: "setRange",
          value: function setRange() {
            var _this7 = this;

            this.range$ = this.activatedRoute.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (url) {
              _this7.choice = url[0].path === 'editorschoice';
              return url[0] ? _this7.getRange(url[0].path) : null;
            }));
            this.before$ = this.range$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (range) {
              return _this7.findRange$(Date.now(), range).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (start) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(start), _this7.pageAttempt$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinct"])(function () {
                  return 1;
                }, _this7.pageable.end$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeScan"])(function (acc) {
                  return _this7.choice ? null : _this7.feedService.count$({
                    before: acc - range
                  }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (count) {
                    return count === 0 ? rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"] : _this7.findRange$(acc - range, range);
                  }));
                }, start)));
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchAll"])());
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.before$, this.range$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounce"])(function () {
              return _this7.before$;
            }))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  a = _ref2[0],
                  b = _ref2[1];

              _this7.homepageService.feedSource$.next(_shared_enums_feed_source_enum__WEBPACK_IMPORTED_MODULE_2__["FeedSourceEnum"].POPULAR);

              return _this7.pageable.setOptionsWithReset$(b, !a || !a[1] || a[1] !== b[1]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.homepageService.feedSource$.next(_shared_enums_feed_source_enum__WEBPACK_IMPORTED_MODULE_2__["FeedSourceEnum"].NONE);

            _superPropGet(PopularPageComponent, "ngOnDestroy", this, 3)([]);
          }
        }, {
          key: "findRange$",
          value: function findRange$(before, range) {
            var _this8 = this;

            return this.feedService.count$({
              before: before,
              after: before - range
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (count) {
              return count === 0 && range && range > 0 ? _this8.findRange$(before - range, range) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(before);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$));
          }
        }, {
          key: "getRange",
          value: function getRange(name) {
            var DAY = 1000 * 60 * 60 * 24;

            switch (name) {
              case 'year':
                return DAY * 365;

              case 'month':
                return DAY * 30;

              case 'week':
                return DAY * 7;

              case 'three-days':
                return DAY * 3;

              case 'day':
                return DAY;

              default:
                return null;
            }
          }
        }, {
          key: "fetch$",
          value: function fetch$(page, options) {
            var _this9 = this;

            var result;

            if (options) {
              var _options = _slicedToArray(options, 2),
                  before = _options[0],
                  range = _options[1];

              var after = Number.isFinite(range) ? before - range : undefined;
              result = this.feedService.feedRequest$({
                page: page,
                before: before,
                after: after,
                order: !this.choice ? _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_6__["FeedOrderEnum"].RATING : undefined,
                list: this.choice ? 'default' : undefined
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (aPage) {
                return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_7__["fetchArticlesWithTopics$"])(aPage, _this9.topicsService);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                var prefix = response.page === 0 && after ? [new _popular_feed_item_class__WEBPACK_IMPORTED_MODULE_4__["PopularFeedItem"](null, {
                  before: before,
                  after: after
                })] : [];
                return response.page === 0 && response.total === 0 ? Object.assign(Object.assign({}, response), {
                  content: [].concat(prefix, [new _popular_feed_item_class__WEBPACK_IMPORTED_MODULE_4__["PopularFeedItem"](null, null, true)])
                }) : Object.assign(Object.assign({}, response), {
                  content: prefix.concat(response.content.map(function (c) {
                    return new _popular_feed_item_class__WEBPACK_IMPORTED_MODULE_4__["PopularFeedItem"](c, null, null, _this9.counter());
                  }))
                });
              }));
            } else {
              result = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(Symbol('NO_CONTENT'));
            }

            return result;
          }
        }, {
          key: "getAd",
          value: function getAd() {
            this.fetchAd(0);
            this.fetchAd(1);
            this.fetchAd(2);
          }
        }, {
          key: "fetchAd",
          value: function fetchAd(elem) {
            var _this10 = this;

            if ((this.ads[elem].content === [] || this.ads[elem].currentPage + 1 <= this.ads[elem].totalPages) && !this.ads[elem].contentLoading) {
              this.ads[elem].contentLoading = true;
              this.advertisementService.get$(this.ads[elem].currentPage, elem === 0 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_9__["BannerPlaceEnum"].FEED1 : elem === 1 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_9__["BannerPlaceEnum"].FEED2 : _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_9__["BannerPlaceEnum"].FEED3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_) {
                var _this10$ads$elem$cont;

                (_this10$ads$elem$cont = _this10.ads[elem].content).push.apply(_this10$ads$elem$cont, _toConsumableArray(_.content));

                _this10.ads[elem].totalPages = _.totalPages;
                _this10.ads[elem].currentPage++;
                _this10.ads[elem].contentLoading = false;

                if (_this10.ads[elem].currentPage + 1 <= _this10.ads[elem].totalPages) {
                  _this10.getAd();
                } else {
                  if (_this10.ads[elem].content[0]) {
                    if (!localStorage.getItem('ad-feed' + elem)) {
                      localStorage.setItem('ad-feed' + elem, '1');
                      _this10.adNums[elem] = 0;
                    } else {
                      _this10.adNums[elem] = Number(localStorage.getItem('ad-feed' + elem)) - 1;

                      if (_this10.adNums[elem] + 1 < _this10.ads[elem].content.length) {
                        _this10.adNums[elem]++;
                      } else {
                        _this10.adNums[elem] = 0;
                      }

                      localStorage.setItem('ad-feed' + elem, _this10.adNums[elem] + 1 + '');
                    }
                  }
                }
              });
            }
          }
        }, {
          key: "adViewed",
          value: function adViewed(elem) {
            var rect;

            switch (elem) {
              case 0:
                rect = this.adElem1.nativeElement.getBoundingClientRect();
                break;

              case 1:
                rect = this.adElem2.nativeElement.getBoundingClientRect();
                break;

              case 2:
                rect = this.adElem3.nativeElement.getBoundingClientRect();
                break;
            }

            var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

            if (!(rect.bottom < 0 || rect.top - viewHeight >= 0) && !this.adViewedProps[elem]) {
              this.advertisementService.view$(this.ads[elem].content[this.adNums[elem]].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
              this.adViewedProps[elem] = true;
            }
          }
        }, {
          key: "adClicked",
          value: function adClicked(elem) {
            var _this11 = this;

            this.advertisementService.click$(this.ads[elem].content[this.adNums[elem]].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              window.open(_this11.ads[elem].content[_this11.adNums[elem]].url, '_blank');
            });
          }
        }, {
          key: "counter",
          value: function counter() {
            return this.count++;
          }
        }, {
          key: "onHide",
          value: function onHide(article, promote) {
            if (promote && this.router.url.includes('editorschoice') || !promote) {
              this.pageable.content.splice(this.pageable.content.findIndex(function (item) {
                return item.isArticle() && item.articleView[0].meta.id === article.meta.id;
              }), 1);
            }
          }
        }, {
          key: "findIndex",
          value: function findIndex(item) {
            if (item.isArticle()) {
              return this.pageable.content.filter(function (iter) {
                return iter.isArticle();
              }).findIndex(function (iter) {
                return iter.articleView[0].meta.id === item.articleView[0].meta.id;
              }) + 1;
            }

            return -1;
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_8__["AbstractComponent"]);

      PopularPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageComponent,
        deps: [{
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
        }, {
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__["TopicsService"]
        }, {
          token: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_12__["AdvertisementService"]
        }, {
          token: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"]
        }, {
          token: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_14__["AdministrationService"]
        }, {
          token: _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_15__["HomepageService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_16__["SidebarWrapperService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]
        }, {
          token: _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_18__["ResponsiveService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      PopularPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: PopularPageComponent,
        selector: "app-popular-page",
        host: {
          listeners: {
            "window:scroll": "onScroll($event)"
          }
        },
        viewQueries: [{
          propertyName: "adElem1",
          first: true,
          predicate: ["adElem1"],
          descendants: true
        }, {
          propertyName: "adElem2",
          first: true,
          predicate: ["adElem2"],
          descendants: true
        }, {
          propertyName: "adElem3",
          first: true,
          predicate: ["adElem3"],
          descendants: true
        }],
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<ul class=\"block-card item-space-20 no-empty\">\n    <li *ngFor=\"let item of pageable.content; let i = index\">\n        <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"item.isArticle()\">\n                <app-feed-article-view [data]=\"item.articleView[0]\" [topic]=\"item.articleView[1]\" [options]=\"{ pictureOn: true, menuOn: true }\" (gone)=\"onHide($event)\" (gonePromote)=\"onHide($event, true)\"></app-feed-article-view>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"item.isRange()\">\n                <div class=\"caption fade-2 text-center\">{{'COMMON.PUBLICATIONS_PERIOD' | translate}} {{ item.range.after | customDate:true }} - {{ item.range.before | customDate:true }}</div>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"item.isEmpty()\">\n                <div class=\"subtitle-2 fade-3 text-center\">\u041D\u0435\u0442 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0439</div>\n            </ng-container>\n        </ng-container>\n        <div #adElem1 (click)=\"adClicked(0)\" class=\"ad\" *ngIf=\"(ads && ads[0].content && ads[0].content[0]) && ads[0].content[adNums[0]].afterPublication - 1 === (i + 1)\">\n            <ng-container [ngTemplateOutlet]=\"addContainer\" [ngTemplateOutletContext]=\"{ src: ads[0].content[adNums[0]].picture, text: ads[0].content[adNums[0]].text }\"></ng-container>\n        </div>\n        <div #adElem2 (click)=\"adClicked(1)\" class=\"ad\" *ngIf=\"(ads && ads[1].content && ads[1].content[0]) && ads[1].content[adNums[1]].afterPublication - 1 === (i + 1)\">\n            <ng-container [ngTemplateOutlet]=\"addContainer\" [ngTemplateOutletContext]=\"{ src: ads[1].content[adNums[1]].picture, text: ads[1].content[adNums[1]].text }\"></ng-container>\n        </div>\n        <div #adElem3 (click)=\"adClicked(2)\" class=\"ad\" *ngIf=\"(ads && ads[2].content && ads[2].content[0]) && ads[2].content[adNums[2]].afterPublication - 1 === (i + 1)\">\n            <ng-container [ngTemplateOutlet]=\"addContainer\" [ngTemplateOutletContext]=\"{ src: ads[2].content[adNums[2]].picture, text: ads[2].content[adNums[2]].text }\"></ng-container>\n        </div>\n        <app-events *ngIf=\"(i + 1) === eventsJobs.firstView.events && eventsJobs.popular.events\" [page]=\"0\" [blueClass]=\"'blue-events'\"></app-events>\n        <app-events *ngIf=\"(i + 1) === eventsJobs.secondView.events && eventsJobs.popular.events\" [page]=\"1\" [blueClass]=\"'blue-events'\"></app-events>\n        <app-events *ngIf=\"(i + 1) === eventsJobs.thirdView.events && eventsJobs.popular.events\" [page]=\"2\" [blueClass]=\"'blue-events'\"></app-events>\n        <app-jobs *ngIf=\"(i + 1) === eventsJobs.firstView.jobs && eventsJobs.popular.jobs\" [page]=\"0\"></app-jobs>\n        <app-jobs *ngIf=\"(i + 1) === eventsJobs.secondView.jobs && eventsJobs.popular.jobs\" [page]=\"1\"></app-jobs>\n        <app-jobs *ngIf=\"(i + 1) === eventsJobs.thirdView.jobs && eventsJobs.popular.jobs\" [page]=\"2\"></app-jobs>\n    </li>\n</ul>\n\n<app-pagination [pageable]=\"pageable\" (onPageAttempt)=\"pageAttempt$.next()\"></app-pagination>\n\n<ng-template #addContainer let-src=\"src\" let-text=\"text\">\n    <img [src]=\"src\" alt=\"\">\n    <div class=\"ad-container\">\n        <div class=\"ad-btn\" *ngIf=\"!(responsive.lt.medium | async)\">\n            <span>{{ text }}</span>\n            <svg name=\"chevron/right\" size=\"25\" fill=\"#92929D\"></svg>\n        </div>\n    </div>\n</ng-template>\n",
        styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\n.ad {\n  width: 100%;\n  max-width: 1440px !important;\n  position: relative;\n  text-align: center;\n  margin-bottom: 15px;\n  min-height: 58px;\n  background-color: #F5F8FA;\n}\n@media (max-width: 766px) {\n  .ad {\n    min-height: unset;\n  }\n}\n.ad img {\n  max-width: 100%;\n  display: block;\n}\n.ad .ad-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  display: flex;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 47px;\n}\n@media (max-width: 766px) {\n  .ad .ad-container {\n    font-size: 20px;\n    line-height: 24px;\n  }\n}\n.ad .ad-container span {\n  margin-left: 20px;\n  max-height: 47px;\n}\n.ad .ad-container .ad-btn {\n  margin-left: auto;\n  display: flex;\n  width: 160px;\n  height: 26px;\n  background: #fff;\n  border: 1px solid #F5F8FA;\n  border-radius: 12px;\n  align-items: center;\n  margin-right: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.ad .ad-container .ad-btn span {\n  margin-left: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 21px;\n  color: #00B9FA;\n}\n.ad .ad-container .ad-btn svg {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9wb3B1bGFyLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQUE7QUM2aUJJO0VEbmlCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRHdpQkk7RUQ3aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FEa2lCSTtFRHZoQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUFmQTtFQUNJLFdBQUE7QUFrQko7QUFmQTtFQUNJLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFrQko7QUQ4Z0JJO0VDdmlCSjtJQVVRLGlCQUFBO0VBbUJOO0FBQ0Y7QUFqQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQW1CUjtBQWhCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaUJSO0FEd2ZJO0VDcmhCQTtJQWVRLGVBQUE7SUFDQSxpQkFBQTtFQWtCVjtBQUNGO0FBaEJRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQWtCWjtBQWZRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBaUJaO0FBZlk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWlCaEI7QUFkWTtFQUNJLFNBQUE7QUFnQmhCIiwiZmlsZSI6InBvcHVsYXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2F0LWltcG9ydC1uby1wYXJ0aWFsLWxlYWRpbmctdW5kZXJzY29yZSAqL1xuQGltcG9ydCAnfmluY2x1ZGUtbWVkaWEvZGlzdC9faW5jbHVkZS1tZWRpYSc7XG5cbiRicmVha3BvaW50czogKFxuICB4bGFyZ2U6IDE0MDBweCxcbiAgbGFyZ2U6IDEwNjBweCxcbiAgbWVkaXVtOiA3NjdweCxcbiAgc21hbGw6IDM3NXB4LFxuKTtcblxuLmhpZGUtbHQtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWRlLWdlLW1lZGl1bSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc+PW1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtbHQtbGFyZ2Uge1xuICBAaW5jbHVkZSBtZWRpYSgnPGxhcmdlJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgIGh0dHBzOi8vZWR1YXJkb2JvdWNhcy5naXRodWIuaW8vaW5jbHVkZS1tZWRpYVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBLaXR0eSBHaXJhdWRlbCAoQGtpdHR5Z2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3Jlc3BvbnNpdmUnO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxNDQwcHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWluLWhlaWdodDogNThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGOEZBO1xuXG4gICAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmFkLWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKCc8bWVkaXVtJykge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNUY4RkE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBCOUZBO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"],
        components: [{
          type: _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_19__["FeedArticleViewComponent"],
          selector: "app-feed-article-view",
          inputs: ["data", "link", "options", "topic", "user"],
          outputs: ["gone", "gonePromote", "pinned", "goneBookmarked"]
        }, {
          type: _shared_modules_short_event_list_events_component__WEBPACK_IMPORTED_MODULE_20__["EventsComponent"],
          selector: "app-events",
          inputs: ["blueClass", "feedEvents", "page"]
        }, {
          type: _shared_modules_short_job_list_jobs_component__WEBPACK_IMPORTED_MODULE_21__["JobsComponent"],
          selector: "app-jobs",
          inputs: ["page", "offBG"]
        }, {
          type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_22__["PaginationComponent"],
          selector: "app-pagination",
          inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"],
          outputs: ["onPage", "onPageAttempt"]
        }, {
          type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_23__["SvgComponent"],
          selector: "svg[name]",
          inputs: ["name", "w", "h", "size"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitch"],
          selector: "[ngSwitch]",
          inputs: ["ngSwitch"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgSwitchCase"],
          selector: "[ngSwitchCase]",
          inputs: ["ngSwitchCase"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgTemplateOutlet"],
          selector: "[ngTemplateOutlet]",
          inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"]
        }],
        pipes: {
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__["TranslatePipe"],
          "customDate": _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_26__["CustomDatePipe"],
          "async": _angular_common__WEBPACK_IMPORTED_MODULE_24__["AsyncPipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: PopularPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-popular-page',
            templateUrl: './popular-page.component.html',
            styleUrls: ['./popular-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
          }, {
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_11__["TopicsService"]
          }, {
            type: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_12__["AdvertisementService"]
          }, {
            type: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_13__["PlatformService"]
          }, {
            type: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_14__["AdministrationService"]
          }, {
            type: _shared_services_homepage_service__WEBPACK_IMPORTED_MODULE_15__["HomepageService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_16__["SidebarWrapperService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]
          }, {
            type: _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_18__["ResponsiveService"]
          }];
        },
        propDecorators: {
          adElem1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['adElem1', {
              "static": false
            }]
          }],
          adElem2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['adElem2', {
              "static": false
            }]
          }],
          adElem3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['adElem3', {
              "static": false
            }]
          }],
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
          }]
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-popular-page-popular-page-module-es5.js.map