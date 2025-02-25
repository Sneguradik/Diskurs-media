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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-all-page-all-page-module~pages-home-page-home-page-module"], {
    /***/
    "J8cK":
    /*!********************************************************!*\
      !*** ./src/app/shared/classes/feed-component.class.ts ***!
      \********************************************************/

    /*! exports provided: FeedComponent */

    /***/
    function J8cK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedComponent", function () {
        return FeedComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./abstract-component.class */
      "5Gpq");
      /* harmony import */


      var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/functions/fetch-articles-with-topics.function */
      "MplY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @api/schemas/advertisement/banner-place.enum */
      "jXUv");
      /* harmony import */


      var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @api/routes/feed.service */
      "R237");
      /* harmony import */


      var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/routes/topics.service */
      "XmCg");
      /* harmony import */


      var _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/routes/administration.service */
      "5IOP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @api/routes/advertisement.service */
      "HqUP");
      /* harmony import */


      var _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared/services/platform.service */
      "HvqW");

      var FeedComponent = /*#__PURE__*/function (_abstract_component_c) {
        function FeedComponent(feedService, topicsService, administrationService, activatedRoute, advertisementService, platformService) {
          var _this;

          _classCallCheck(this, FeedComponent);

          _this = _callSuper(this, FeedComponent);
          _this.feedService = feedService;
          _this.topicsService = topicsService;
          _this.administrationService = administrationService;
          _this.activatedRoute = activatedRoute;
          _this.advertisementService = advertisementService;
          _this.platformService = platformService;
          _this.adNums = [0, 0, 0];
          _this.adViewedProps = [false, false, false];
          _this.feed = false;
          _this.publications = false;
          _this.ads = [{
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
          return _this;
        }

        _inherits(FeedComponent, _abstract_component_c);

        return _createClass(FeedComponent, [{
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
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.administrationService.getEventsJobs$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_) {
              _this2.eventsJobs = _;
            });
            this.activatedRoute.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_) {
              if (_.toString() === '') {
                _this2.feed = true;
              } else if (_.toString() === 'all') {
                _this2.publications = true;
              }
            });

            if (this.platformService.isBrowser) {
              this.getAd();
            }
          }
        }, {
          key: "fetch$",
          value: function fetch$(page, options) {
            var _this3 = this;

            return this.feedService.feedRequest$(Object.assign(Object.assign({}, options), {
              page: page
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (article) {
              return Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_2__["fetchArticlesWithTopics$"])(article, _this3.topicsService);
            }));
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
            var _this4 = this;

            if ((this.ads[elem].content === [] || this.ads[elem].currentPage + 1 <= this.ads[elem].totalPages) && !this.ads[elem].contentLoading) {
              this.ads[elem].contentLoading = true;
              this.advertisementService.get$(this.ads[elem].currentPage, elem === 0 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED1 : elem === 1 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED2 : _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (_) {
                var _this4$ads$elem$conte;

                (_this4$ads$elem$conte = _this4.ads[elem].content).push.apply(_this4$ads$elem$conte, _toConsumableArray(_.content));

                _this4.ads[elem].totalPages = _.totalPages;
                _this4.ads[elem].currentPage++;
                _this4.ads[elem].contentLoading = false;

                if (_this4.ads[elem].currentPage + 1 <= _this4.ads[elem].totalPages) {
                  _this4.getAd();
                } else {
                  if (_this4.ads[elem].content[0]) {
                    if (!localStorage.getItem('ad-feed' + elem)) {
                      localStorage.setItem('ad-feed' + elem, '1');
                      _this4.adNums[elem] = 0;
                    } else {
                      _this4.adNums[elem] = Number(localStorage.getItem('ad-feed' + elem)) - 1;

                      if (_this4.adNums[elem] + 1 < _this4.ads[elem].content.length) {
                        _this4.adNums[elem]++;
                      } else {
                        _this4.adNums[elem] = 0;
                      }

                      localStorage.setItem('ad-feed' + elem, _this4.adNums[elem] + 1 + '');
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
              this.advertisementService.view$(this.ads[elem].content[this.adNums[elem]].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe();
              this.adViewedProps[elem] = true;
            }
          }
        }, {
          key: "adClicked",
          value: function adClicked(elem) {
            var _this5 = this;

            this.advertisementService.click$(this.ads[elem].content[this.adNums[elem]].id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              window.open(_this5.ads[elem].content[_this5.adNums[elem]].url, '_blank');
            });
          }
        }]);
      }(_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]);

      FeedComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__,
        type: FeedComponent,
        deps: [{
          token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]
        }, {
          token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"]
        }, {
          token: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__["AdministrationService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          token: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__["AdvertisementService"]
        }, {
          token: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵFactoryTarget"].Component
      });
      FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: FeedComponent,
        selector: "ng-component",
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
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__,
        template: '',
        isInline: true
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__,
        type: FeedComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            template: ''
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]
          }, {
            type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"]
          }, {
            type: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__["AdministrationService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__["AdvertisementService"]
          }, {
            type: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"]
          }];
        },
        propDecorators: {
          adElem1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['adElem1', {
              "static": false
            }]
          }],
          adElem2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['adElem2', {
              "static": false
            }]
          }],
          adElem3: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['adElem3', {
              "static": false
            }]
          }],
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['window:scroll', ['$event']]
          }]
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
          var _this6 = this;

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
            return _this6.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_) {
              return !_;
            }));
          })).subscribe(function () {
            return _this6.fetchNextPage();
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
            var _this7 = this;

            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (it) {
              return !it;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              if (hard) {
                _this7.content.splice(0, _this7.content.length);
              }

              _this7.page = -1;
              _this7.totalPages = 1;
            }));
          }
        }, {
          key: "setOptionsWithReset$",
          value: function setOptionsWithReset$(options) {
            var _this8 = this;

            var hard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.reset$(hard).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              _this8.options$.next(options);

              _this8.fetch();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(options));
          }
        }, {
          key: "fetchNextPage",
          value: function fetchNextPage() {
            var _this9 = this;

            this.isFetching$.next(true);
            this.fetchNextFn$(this.page + 1, this.options$.value).subscribe(function (response) {
              var _this9$content;

              _this9.page = response.page;
              _this9.totalPages = response.totalPages;

              _this9.content$.next(response.content);

              if (_this9.page >= _this9.totalPages - 1) {
                _this9.end$.next();
              }

              (_this9$content = _this9.content).push.apply(_this9$content, _toConsumableArray(response.content));

              _this9.isFetching$.next(false);
            }, function (error) {
              _this9.isFetching$.next(false);

              if (error !== Symbol('NO_CONTENT')) {
                throw error;
              }
            });
          }
        }]);
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-all-page-all-page-module~pages-home-page-home-page-module-es5.js.map