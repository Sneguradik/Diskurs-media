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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"], {
    /***/
    "H2U2":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/user/pages/user-posts-page/user-posts-page-range.const.ts ***!
      \***********************************************************************************/

    /*! exports provided: getUserPostsRanges */

    /***/
    function H2U2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserPostsRanges", function () {
        return getUserPostsRanges;
      });
      /* harmony import */


      var _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @api/schemas/feed/feed-order.enum */
      "a47e");
      /* harmony import */


      var _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @api/schemas/locale/locale.enum */
      "m0tC");

      function getUserPostsRanges(translateService) {
        return [{
          id: 10,
          text: translateService.instant('COMMON.SORT_BY_POPULARITY_DAY'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
            'rating-after': Date.now() - 1000 * 60 * 60 * 24
          }
        }, {
          id: 6,
          text: translateService.instant('COMMON.SORT_BY_POPULARITY_3_DAYS'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
            'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 3
          }
        }, {
          id: 7,
          text: translateService.instant('COMMON.SORT_BY_POPULARITY_WEEK'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
            'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 7
          }
        }, {
          id: 8,
          text: translateService.instant('COMMON.SORT_BY_POPULARITY_MONTH'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
            'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30
          }
        }, {
          id: 9,
          text: translateService.instant('COMMON.SORT_BY_POPULARITY_YEAR'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
            'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30 * 12
          }
        }, {
          id: 1,
          text: translateService.instant('COMMON.THE_NEWEST_FIRST'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TIME
          }
        }, {
          id: 2,
          text: translateService.instant('COMMON.FROM_A_TO_Z_'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE,
            locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN,
            asc: true
          }
        }, {
          id: 3,
          text: translateService.instant('COMMON.FROM_Z_TO_A_'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE,
            locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN
          }
        }, {
          id: 4,
          text: translateService.instant('COMMON.FROM_A_TO_Z'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE,
            locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH,
            asc: true
          }
        }, {
          id: 5,
          text: translateService.instant('COMMON.FROM_Z_TO_A'),
          query: {
            order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE,
            locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH
          }
        }];
      }
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
    "TzTY":
    /*!*************************************************************!*\
      !*** ./src/app/shared/classes/abstract-user-posts.class.ts ***!
      \*************************************************************/

    /*! exports provided: AbstractUserPosts */

    /***/
    function TzTY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AbstractUserPosts", function () {
        return AbstractUserPosts;
      });
      /* harmony import */


      var _abstract_component_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/functions/fetch-articles-with-topics.function */
      "MplY");
      /* harmony import */


      var _modules_user_pages_user_posts_page_user_posts_page_range_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/user/pages/user-posts-page/user-posts-page-range.const */
      "H2U2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pageable-conetnt.class */
      "RO7G");
      /* harmony import */


      var _shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/utils/id-map.operator */
      "KDmQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @api/routes/users.service */
      "kCK3");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg"); // tslint:disable-next-line:component-class-suffix


      var AbstractUserPosts = /*#__PURE__*/function (_abstract_component_c) {
        function AbstractUserPosts(activatedRoute, sessionService, feedService, translateService, usersService, topicsService) {
          var _this5;

          _classCallCheck(this, AbstractUserPosts);

          _this5 = _callSuper(this, AbstractUserPosts);
          _this5.activatedRoute = activatedRoute;
          _this5.sessionService = sessionService;
          _this5.feedService = feedService;
          _this5.translateService = translateService;
          _this5.usersService = usersService;
          _this5.topicsService = topicsService;
          _this5.pageable = new _pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_6__["PageableContent"](_this5.fetchContent$.bind(_this5), null);
          _this5.ranges = Object(_modules_user_pages_user_posts_page_user_posts_page_range_const__WEBPACK_IMPORTED_MODULE_4__["getUserPostsRanges"])(_this5.translateService);
          _this5.articles = [];
          _this5.pinned = null;
          _this5.drafts = false;
          _this5.activeRange = 1;
          _this5.selectedRange = _this5.ranges[5];
          return _this5;
        }

        _inherits(AbstractUserPosts, _abstract_component_c);

        return _createClass(AbstractUserPosts, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (content) {
              var _this6$articles;

              if (content && content[0] && content[0][0].pinned) {
                _this6.pinned = content[0];
                content.splice(content.indexOf(content[0]), 1);
              }

              (_this6$articles = _this6.articles).push.apply(_this6$articles, _toConsumableArray(content));
            });
            var id$ = this.activatedRoute.paramMap.pipe(Object(_shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_7__["idMap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (id) {
              return _this6.usersService.getSingle$(id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
              return user.meta.id;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$));
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.activatedRoute.data, this.sessionService.user$, id$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (options) {
              _this6.articles.splice(0, _this6.articles.length);

              _this6.pageable.options$.next(options);

              _this6.pageable.fetch();
            });
          }
        }, {
          key: "fetchContent$",
          value: function fetchContent$(page, options) {
            var _this7 = this;

            var query = this.selectedRange ? this.selectedRange.query : {
              query: null
            };
            var result;

            if (options !== null) {
              if (options[0].query.stage && options[0].query.stage[0] === 'DRAFT') {
                this.drafts = true;
              }

              if (options[0].query.bookmark) {
                options[0].query.bookmarked = options[2];
                result = this.feedService.feedRequest$(Object.assign(Object.assign(Object.assign({}, options[0].query), query), {
                  page: page
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
                  return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, _this7.topicsService);
                }));
              } else {
                result = this.feedService.feedRequest$(Object.assign(Object.assign(Object.assign(Object.assign({}, options[0].query), {
                  author: options[2],
                  pinned: true
                }), query), {
                  page: page
                })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
                  return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, _this7.topicsService);
                }));
              }
            } else {
              result = this.feedService.feedRequest$(Object.assign(Object.assign({}, query), {
                page: page
              })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
                return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, _this7.topicsService);
              }));
            }

            return result;
          }
        }, {
          key: "rangeEvent",
          value: function rangeEvent(range) {
            this.selectedRange = range;
            this.activeRange = range.id;
            this.articles = [];
            this.pageable.page = -1;
          }
        }, {
          key: "remove",
          value: function remove(article) {
            this.articles.splice(this.articles.indexOf(article), 1);
          }
        }]);
      }(_abstract_component_class__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"]);

      AbstractUserPosts.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
        type: AbstractUserPosts,
        deps: [{
          token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
        }, {
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
        }, {
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }, {
          token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]
        }, {
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__["TopicsService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵFactoryTarget"].Component
      });
      AbstractUserPosts.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: AbstractUserPosts,
        selector: "ng-component",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
        template: '',
        isInline: true
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__,
        type: AbstractUserPosts,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
          args: [{
            template: ''
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]
          }, {
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }, {
            type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]
          }, {
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__["TopicsService"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module-es5.js.map