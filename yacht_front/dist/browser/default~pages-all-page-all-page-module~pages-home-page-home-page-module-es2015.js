(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-all-page-all-page-module~pages-home-page-home-page-module"],{

/***/ "J8cK":
/*!********************************************************!*\
  !*** ./src/app/shared/classes/feed-component.class.ts ***!
  \********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component.class */ "5Gpq");
/* harmony import */ var _shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/functions/fetch-articles-with-topics.function */ "MplY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/schemas/advertisement/banner-place.enum */ "jXUv");
/* harmony import */ var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/routes/feed.service */ "R237");
/* harmony import */ var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/routes/topics.service */ "XmCg");
/* harmony import */ var _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/administration.service */ "5IOP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @api/routes/advertisement.service */ "HqUP");
/* harmony import */ var _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/platform.service */ "HvqW");












class FeedComponent extends _abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(feedService, topicsService, administrationService, activatedRoute, advertisementService, platformService) {
        super();
        this.feedService = feedService;
        this.topicsService = topicsService;
        this.administrationService = administrationService;
        this.activatedRoute = activatedRoute;
        this.advertisementService = advertisementService;
        this.platformService = platformService;
        this.adNums = [0, 0, 0];
        this.adViewedProps = [false, false, false];
        this.feed = false;
        this.publications = false;
        this.ads = [
            {
                content: [],
                currentPage: 0,
                totalPages: 1,
                contentLoading: false,
            },
            {
                content: [],
                currentPage: 0,
                totalPages: 1,
                contentLoading: false,
            },
            {
                content: [],
                currentPage: 0,
                totalPages: 1,
                contentLoading: false,
            },
        ];
    }
    onScroll() {
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
    ngOnInit() {
        this.administrationService.getEventsJobs$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe((_) => {
            this.eventsJobs = _;
        });
        this.activatedRoute.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe((_) => {
            if (_.toString() === '') {
                this.feed = true;
            }
            else if (_.toString() === 'all') {
                this.publications = true;
            }
        });
        if (this.platformService.isBrowser) {
            this.getAd();
        }
    }
    fetch$(page, options) {
        return this.feedService.feedRequest$(Object.assign(Object.assign({}, options), { page }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((article) => Object(_shared_functions_fetch_articles_with_topics_function__WEBPACK_IMPORTED_MODULE_2__["fetchArticlesWithTopics$"])(article, this.topicsService)));
    }
    getAd() {
        this.fetchAd(0);
        this.fetchAd(1);
        this.fetchAd(2);
    }
    fetchAd(elem) {
        if ((this.ads[elem].content === [] || this.ads[elem].currentPage + 1 <= this.ads[elem].totalPages)
            && !this.ads[elem].contentLoading) {
            this.ads[elem].contentLoading = true;
            this.advertisementService.get$(this.ads[elem].currentPage, elem === 0 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED1 : elem === 1 ? _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED2 : _api_schemas_advertisement_banner_place_enum__WEBPACK_IMPORTED_MODULE_4__["BannerPlaceEnum"].FEED3).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$)).subscribe((_) => {
                this.ads[elem].content.push(..._.content);
                this.ads[elem].totalPages = _.totalPages;
                this.ads[elem].currentPage++;
                this.ads[elem].contentLoading = false;
                if (this.ads[elem].currentPage + 1 <= this.ads[elem].totalPages) {
                    this.getAd();
                }
                else {
                    if (this.ads[elem].content[0]) {
                        if (!localStorage.getItem('ad-feed' + elem)) {
                            localStorage.setItem('ad-feed' + elem, '1');
                            this.adNums[elem] = 0;
                        }
                        else {
                            this.adNums[elem] = Number(localStorage.getItem('ad-feed' + elem)) - 1;
                            if (this.adNums[elem] + 1 < this.ads[elem].content.length) {
                                this.adNums[elem]++;
                            }
                            else {
                                this.adNums[elem] = 0;
                            }
                            localStorage.setItem('ad-feed' + elem, this.adNums[elem] + 1 + '');
                        }
                    }
                }
            });
        }
    }
    adViewed(elem) {
        let rect;
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
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        if (!(rect.bottom < 0 || rect.top - viewHeight >= 0) && !this.adViewedProps[elem]) {
            this.advertisementService.view$(this.ads[elem].content[this.adNums[elem]].id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$))
                .subscribe();
            this.adViewedProps[elem] = true;
        }
    }
    adClicked(elem) {
        this.advertisementService.click$(this.ads[elem].content[this.adNums[elem]].id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.ngOnDestroy$))
            .subscribe(() => {
            window.open(this.ads[elem].content[this.adNums[elem]].url, '_blank');
        });
    }
}
FeedComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__, type: FeedComponent, deps: [{ token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }, { token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"] }, { token: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__["AdministrationService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { token: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__["AdvertisementService"] }, { token: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵFactoryTarget"].Component });
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: FeedComponent, selector: "ng-component", host: { listeners: { "window:scroll": "onScroll($event)" } }, viewQueries: [{ propertyName: "adElem1", first: true, predicate: ["adElem1"], descendants: true }, { propertyName: "adElem2", first: true, predicate: ["adElem2"], descendants: true }, { propertyName: "adElem3", first: true, predicate: ["adElem3"], descendants: true }], usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__, template: '', isInline: true });
_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_3__, type: FeedComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }, { type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_6__["TopicsService"] }, { type: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_7__["AdministrationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _api_routes_advertisement_service__WEBPACK_IMPORTED_MODULE_9__["AdvertisementService"] }, { type: _shared_services_platform_service__WEBPACK_IMPORTED_MODULE_10__["PlatformService"] }]; }, propDecorators: { adElem1: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
                args: ['adElem1', { static: false }]
            }], adElem2: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
                args: ['adElem2', { static: false }]
            }], adElem3: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
                args: ['adElem3', { static: false }]
            }], onScroll: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
                args: ['window:scroll', ['$event']]
            }] } });


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


/***/ })

}]);
//# sourceMappingURL=default~pages-all-page-all-page-module~pages-home-page-home-page-module-es2015.js.map