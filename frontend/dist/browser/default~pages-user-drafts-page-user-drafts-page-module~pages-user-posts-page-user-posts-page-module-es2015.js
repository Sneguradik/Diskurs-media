(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"],{

/***/ "H2U2":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-posts-page/user-posts-page-range.const.ts ***!
  \***********************************************************************************/
/*! exports provided: getUserPostsRanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPostsRanges", function() { return getUserPostsRanges; });
/* harmony import */ var _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/schemas/feed/feed-order.enum */ "a47e");
/* harmony import */ var _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/schemas/locale/locale.enum */ "m0tC");


function getUserPostsRanges(translateService) {
    return [
        {
            id: 10,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_DAY'),
            query: {
                order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24,
            },
        },
        {
            id: 6,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_3_DAYS'),
            query: {
                order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 3,
            },
        },
        {
            id: 7,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_WEEK'),
            query: {
                order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 7,
            },
        },
        {
            id: 8,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_MONTH'),
            query: {
                order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30,
            },
        },
        {
            id: 9,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_YEAR'),
            query: {
                order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30 * 12,
            },
        },
        {
            id: 1,
            text: translateService.instant('COMMON.THE_NEWEST_FIRST'),
            query: { order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TIME },
        },
        {
            id: 2,
            text: translateService.instant('COMMON.FROM_A_TO_Z_'),
            query: { order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN, asc: true },
        },
        {
            id: 3,
            text: translateService.instant('COMMON.FROM_Z_TO_A_'),
            query: { order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN },
        },
        {
            id: 4,
            text: translateService.instant('COMMON.FROM_A_TO_Z'),
            query: { order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH, asc: true },
        },
        {
            id: 5,
            text: translateService.instant('COMMON.FROM_Z_TO_A'),
            query: { order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_0__["FeedOrderEnum"].TITLE, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH },
        },
    ];
}


/***/ }),

/***/ "MplY":
/*!*************************************************************************!*\
  !*** ./src/app/shared/functions/fetch-articles-with-topics.function.ts ***!
  \*************************************************************************/
/*! exports provided: fetchArticlesWithTopics$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticlesWithTopics$", function() { return fetchArticlesWithTopics$; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function fetchArticlesWithTopics$(page, topicsService) {
    const topics = [];
    page.content.forEach((article) => {
        if (article.topics.length > 0) {
            topics.push(article.topics[0]);
        }
    });
    return page.content.length > 0 ? topicsService.getMultiple$(topics).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["defaultIfEmpty"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((topicsRet) => {
        const content = [];
        page.content.forEach((article) => {
            if (article.topics.length > 0) {
                content.push([article, topicsRet.find((x) => x.meta.id === article.topics[0])]);
            }
            else {
                content.push([article, null]);
            }
        });
        return Object.assign(Object.assign({}, page), { content });
    })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(Object.assign(Object.assign({}, page), { content: [] }));
}


/***/ }),

/***/ "RO7G":
/*!**********************************************************!*\
  !*** ./src/app/shared/classes/pageable-conetnt.class.ts ***!
  \**********************************************************/
/*! exports provided: NO_CONTENT, PageableContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_CONTENT", function() { return NO_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageableContent", function() { return PageableContent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


const NO_CONTENT = Symbol('NO_CONTENT');
class PageableContent {
    constructor(fetchNextFn$, options = null) {
        this.fetchNextFn$ = fetchNextFn$;
        this.isFetching$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.content = [];
        this.page = -1;
        this.totalPages = 1;
        this.fetchCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](options);
        this.fetchCommand$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((_) => !_)))).subscribe(() => this.fetchNextPage());
    }
    fetch() {
        if (this.page < this.totalPages - 1) {
            this.fetchCommand$.next();
        }
    }
    reset$(hard = true) {
        return this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((it) => !it), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            if (hard) {
                this.content.splice(0, this.content.length);
            }
            this.page = -1;
            this.totalPages = 1;
        }));
    }
    setOptionsWithReset$(options, hard = true) {
        return this.reset$(hard).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => {
            this.options$.next(options);
            this.fetch();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(options));
    }
    fetchNextPage() {
        this.isFetching$.next(true);
        this.fetchNextFn$(this.page + 1, this.options$.value).subscribe((response) => {
            this.page = response.page;
            this.totalPages = response.totalPages;
            this.content$.next(response.content);
            if (this.page >= this.totalPages - 1) {
                this.end$.next();
            }
            this.content.push(...response.content);
            this.isFetching$.next(false);
        }, (error) => {
            this.isFetching$.next(false);
            if (error !== Symbol('NO_CONTENT')) {
                throw error;
            }
        });
    }
}


/***/ }),

/***/ "TzTY":
/*!*************************************************************!*\
  !*** ./src/app/shared/classes/abstract-user-posts.class.ts ***!
  \*************************************************************/
/*! exports provided: AbstractUserPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractUserPosts", function() { return AbstractUserPosts; });
/* harmony import */ var _abstract_component_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/functions/fetch-articles-with-topics.function */ "MplY");
/* harmony import */ var _modules_user_pages_user_posts_page_user_posts_page_range_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/user/pages/user-posts-page/user-posts-page-range.const */ "H2U2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pageable-conetnt.class */ "RO7G");
/* harmony import */ var _shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/utils/id-map.operator */ "KDmQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @api/routes/feed.service */ "R237");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @api/routes/topics.service */ "XmCg");















// tslint:disable-next-line:component-class-suffix
class AbstractUserPosts extends _abstract_component_class__WEBPACK_IMPORTED_MODULE_0__["AbstractComponent"] {
    constructor(activatedRoute, sessionService, feedService, translateService, usersService, topicsService) {
        super();
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.feedService = feedService;
        this.translateService = translateService;
        this.usersService = usersService;
        this.topicsService = topicsService;
        this.pageable = new _pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_6__["PageableContent"](this.fetchContent$.bind(this), null);
        this.ranges = Object(_modules_user_pages_user_posts_page_user_posts_page_range_const__WEBPACK_IMPORTED_MODULE_4__["getUserPostsRanges"])(this.translateService);
        this.articles = [];
        this.pinned = null;
        this.drafts = false;
        this.activeRange = 1;
        this.selectedRange = this.ranges[5];
    }
    ngOnInit() {
        this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe((content) => {
            if (content && content[0] && content[0][0].pinned) {
                this.pinned = content[0];
                content.splice(content.indexOf(content[0]), 1);
            }
            this.articles.push(...content);
        });
        const id$ = this.activatedRoute.paramMap.pipe(Object(_shared_utils_id_map_operator__WEBPACK_IMPORTED_MODULE_7__["idMap"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((id) => this.usersService.getSingle$(id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => user.meta.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.activatedRoute.data, this.sessionService.user$, id$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe((options) => {
            this.articles.splice(0, this.articles.length);
            this.pageable.options$.next(options);
            this.pageable.fetch();
        });
    }
    fetchContent$(page, options) {
        const query = this.selectedRange ? this.selectedRange.query : { query: null };
        let result;
        if (options !== null) {
            if (options[0].query.stage && options[0].query.stage[0] === 'DRAFT') {
                this.drafts = true;
            }
            if (options[0].query.bookmark) {
                options[0].query.bookmarked = options[2];
                result = this.feedService.feedRequest$(Object.assign(Object.assign(Object.assign({}, options[0].query), query), { page })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((_) => Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, this.topicsService)));
            }
            else {
                result = this.feedService.feedRequest$(Object.assign(Object.assign(Object.assign(Object.assign({}, options[0].query), { author: options[2], pinned: true }), query), { page })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((_) => Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, this.topicsService)));
            }
        }
        else {
            result = this.feedService.feedRequest$(Object.assign(Object.assign({}, query), { page })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((_) => Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_3__["fetchArticlesWithTopics$"])(_, this.topicsService)));
        }
        return result;
    }
    rangeEvent(range) {
        this.selectedRange = range;
        this.activeRange = range.id;
        this.articles = [];
        this.pageable.page = -1;
    }
    remove(article) {
        this.articles.splice(this.articles.indexOf(article), 1);
    }
}
AbstractUserPosts.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__, type: AbstractUserPosts, deps: [{ token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"] }, { token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }, { token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"] }, { token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__["TopicsService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵFactoryTarget"].Component });
AbstractUserPosts.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: AbstractUserPosts, selector: "ng-component", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__, template: '', isInline: true });
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_5__, type: AbstractUserPosts, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_10__["FeedService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }, { type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"] }, { type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_13__["TopicsService"] }]; } });


/***/ })

}]);
//# sourceMappingURL=default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module-es2015.js.map