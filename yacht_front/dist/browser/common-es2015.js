(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "WPeE":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/feed-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: FeedResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedResolverService", function() { return FeedResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/schemas/feed/feed-order.enum */ "a47e");
/* harmony import */ var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/routes/feed.service */ "R237");
/* harmony import */ var _platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./platform.service */ "HvqW");
/* harmony import */ var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/routes/topics.service */ "XmCg");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");









function fetchArticlesWithTopics$(page, topicsService) {
    const topics = [];
    const topicsIds = [];
    page.content.forEach((article) => {
        if (article.topics.length > 0) {
            if (!topicsIds.includes(article.topics[0])) {
                topicsIds.push(article.topics[0]);
                topics.push(topicsService.getOne$(article.topics[0]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null))));
            }
        }
    });
    return page.content.length > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(topics).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((topicsRet) => {
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
    })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(Object.assign(Object.assign({}, page), { content: [] }));
}
class FeedResolverService {
    constructor(feedService, platformService, topicsService, usersService) {
        this.feedService = feedService;
        this.platformService = platformService;
        this.topicsService = topicsService;
        this.usersService = usersService;
    }
    resolve(route) {
        if (this.platformService.isServer) {
            const path = route.pathFromRoot.map((ars) => ars.url.map((segment) => segment.toString()).join('/')).join('/');
            if (path.includes('/all')) {
                return this.feedService.feedRequest$({ order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_3__["FeedOrderEnum"].TIME, page: 0 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((article) => fetchArticlesWithTopics$(article, this.topicsService)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((page) => page.content));
            }
            if (path.includes('/topics/')) {
                return this.feedService.feedRequest$({ order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_3__["FeedOrderEnum"].TIME, topic: route.params['id'], page: 0 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((article) => fetchArticlesWithTopics$(article, this.topicsService)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((page) => page.content));
            }
            if (path.includes('/tags/')) {
                return this.feedService.feedRequest$({ order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_3__["FeedOrderEnum"].TIME, tag: route.params['id'], page: 0 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((article) => fetchArticlesWithTopics$(article, this.topicsService)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((page) => page.content));
            }
            if (path.includes('/company/') || path.includes('/user/')) {
                return this.usersService.getSingle$(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((user) => this.feedService.feedRequest$({ order: _api_schemas_feed_feed_order_enum__WEBPACK_IMPORTED_MODULE_3__["FeedOrderEnum"].TIME, author: user.meta.id, page: 0 })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((article) => fetchArticlesWithTopics$(article, this.topicsService)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((page) => page.content));
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    }
}
FeedResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FeedResolverService, deps: [{ token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] }, { token: _platform_service__WEBPACK_IMPORTED_MODULE_5__["PlatformService"] }, { token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"] }, { token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable });
FeedResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FeedResolverService, providedIn: 'root' });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: FeedResolverService, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] }, { type: _platform_service__WEBPACK_IMPORTED_MODULE_5__["PlatformService"] }, { type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"] }, { type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }]; } });


/***/ }),

/***/ "t08Q":
/*!**********************************************************!*\
  !*** ./src/app/api/schemas/event/event-currency.enum.ts ***!
  \**********************************************************/
/*! exports provided: EventCurrencyEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCurrencyEnum", function() { return EventCurrencyEnum; });
var EventCurrencyEnum;
(function (EventCurrencyEnum) {
    EventCurrencyEnum["FREE"] = "FREE";
    EventCurrencyEnum["RUB"] = "RUB";
    EventCurrencyEnum["USD"] = "USD";
    EventCurrencyEnum["EUR"] = "EUR";
    EventCurrencyEnum["NONE"] = "NONE";
})(EventCurrencyEnum || (EventCurrencyEnum = {}));


/***/ }),

/***/ "x8C0":
/*!*********************************************************!*\
  !*** ./src/app/api/schemas/event/event-filters.enum.ts ***!
  \*********************************************************/
/*! exports provided: EventFiltersEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFiltersEnum", function() { return EventFiltersEnum; });
var EventFiltersEnum;
(function (EventFiltersEnum) {
    EventFiltersEnum["ALL"] = "ALL";
    EventFiltersEnum["OTHER"] = "OTHER";
    EventFiltersEnum["EXHIBITIONS"] = "EXHIBITIONS";
    EventFiltersEnum["TRAINING"] = "TRAINING";
    EventFiltersEnum["REGATTAS"] = "REGATTAS";
    EventFiltersEnum["FLOTILLAS"] = "FLOTILLAS";
    EventFiltersEnum["PRESENTATIONS"] = "PRESENTATIONS";
    EventFiltersEnum["CONFERENCES"] = "CONFERENCES";
    EventFiltersEnum["FORUMS"] = "FORUMS";
})(EventFiltersEnum || (EventFiltersEnum = {}));


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map