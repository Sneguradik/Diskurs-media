(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tag-list-page-tag-list-page-module"],{

/***/ "8FwF":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TagListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListPageComponent", function() { return TagListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/classes/pageable-conetnt.class */ "RO7G");
/* harmony import */ var _api_schemas_tags_tag_order_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/schemas/tags/tag-order.enum */ "Usf9");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/routes/tags.service */ "nJK0");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navbar/navbar.component */ "j3J1");
/* harmony import */ var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modules/svg/svg/svg.component */ "ax+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/directives/logged-in.directive */ "DwHT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















class TagListPageComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(tagsService, sessionService, sidebarWrapperService) {
        super();
        this.tagsService = tagsService;
        this.sessionService = sessionService;
        this.sidebarWrapperService = sidebarWrapperService;
        this.searchQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.recent = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"]((page) => this.fetch$(page, { seen: true }));
        this.popular = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"]((page) => this.fetch$(page, { order: _api_schemas_tags_tag_order_enum__WEBPACK_IMPORTED_MODULE_4__["TagOrderEnum"].POST_COUNT }));
        this.found = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"]((page, query) => this.fetch$(page, { query }));
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.popular.fetch();
        this.setQueries();
    }
    setQueries() {
        this.hasSearchQuery$ = this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => !!_), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$));
        this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((_) => !!_), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => this.recent.setOptionsWithReset$(user)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
        this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((_) => !!_), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((query) => this.found.setOptionsWithReset$(query)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
        this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((_) => !_), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.found.reset$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
    }
    fetch$(page, query) {
        return this.tagsService.get$(page, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$));
    }
    handleSearch(query) {
        this.searchQuery$.next(query);
    }
}
TagListPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageComponent, deps: [{ token: _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
TagListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: TagListPageComponent, selector: "app-tag-list-page", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-navbar class=\"margin-bottom-44\" activeItem=\"# \u0422\u0435\u0433\u0438\" [searchPlaceholder]=\"'COMMON.SEARCH_BY_TAGS' | translate\" (search)=\"handleSearch($event)\"></app-navbar>\n<ul class=\"block-card tag-list\">\n    <ng-container [ngSwitch]=\"hasSearchQuery$ | async\">\n        <ng-container *ngSwitchCase=\"true\">\n            <h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430</h2>\n            <ul class=\"tags\">\n                <li *ngFor=\"let tag of found.content\">\n                    <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                </li>\n            </ul>\n            <button *ngIf=\"found.page != -1 && found.page < found.totalPages - 1\" class=\"show-more\" (click)=\"found.fetch()\">\n                <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                <svg name=\"chevron/down\"></svg>\n            </button>\n            <p *ngIf=\"found.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_' | translate}}</p>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"false\">\n            <div class=\"tag-popular\">\n                <h2>{{ 'COMMON.POPULAR_TAGS' | translate}}</h2>\n                <ul class=\"tags\">\n                    <li *ngFor=\"let tag of popular.content\">\n                        <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                    </li>\n                </ul>\n                <button *ngIf=\"popular.page < popular.totalPages - 1\" class=\"show-more\" (click)=\"popular.fetch()\">\n                    <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                    <svg name=\"chevron/down\"></svg>\n                </button>\n                <p *ngIf=\"popular.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_POPULAR' | translate}}</p>\n            </div>\n            <div *appLoggedIn class=\"tag-recent\">\n                <h2>{{ 'COMMON.RECENTLY_VIEWED' | translate}}</h2>\n                <ul class=\"tags\">\n                    <li *ngFor=\"let tag of recent.content\">\n                        <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                    </li>\n                </ul>\n                <button *ngIf=\"recent.page < recent.totalPages - 1\" class=\"show-more\" (click)=\"recent.fetch()\">\n                    <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                    <svg name=\"chevron/down\"></svg>\n                </button>\n                <p *ngIf=\"recent.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_RECENT' | translate}}</p>\n            </div>\n        </ng-container>\n    </ng-container>\n</ul>\n", styles: [":host {\n  width: 100%;\n}\n\n.tag-list h2 {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 20px;\n  font-style: normal;\n  line-height: 23px;\n  margin-bottom: 24px;\n}\n\n.tag-list .tag-recent {\n  margin-top: 50px;\n}\n\n.tag-list .show-more {\n  background: white;\n  border: 1px solid #f5f8fa;\n  border-radius: 15px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 7px 14px;\n}\n\n.tag-list .show-more span {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  margin-right: 30px;\n}\n\n.tag-list .show-more svg {\n  fill: #00b7ff;\n}\n\n.tag-list ul.tags {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.tag-list ul.tags li {\n  margin-bottom: 17px;\n}\n\n.tag-list ul.tags li a {\n  color: #00b7ff;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 21px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RhZy1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSko7O0FBTUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUpOOztBQU9JO0VBQ0UsYUFBQTtBQUxOOztBQVNFO0VBQ0UsYUFBQTtFQUVBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVVJO0VBQ0UsbUJBQUE7QUFSTjs7QUFVTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFSUiIsImZpbGUiOiJ0YWctbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnLWxpc3Qge1xuICBoMiB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAudGFnLXJlY2VudCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5zaG93LW1vcmUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY4ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDdweCAxNHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgZmlsbDogIzAwYjdmZjtcbiAgICB9XG4gIH1cblxuICB1bC50YWdzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwYjdmZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], components: [{ type: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], selector: "app-navbar", inputs: ["navItems", "activeItem", "searchPlaceholder"], outputs: ["search"] }, { type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__["SvgComponent"], selector: "svg[name]", inputs: ["name", "w", "h", "size"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_13__["LoggedInDirective"], selector: "[appLoggedIn]" }], pipes: { "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], "async": _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-tag-list-page',
                    templateUrl: './tag-list-page.component.html',
                    styleUrls: ['./tag-list-page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }]; } });


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

/***/ "tbOu":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: TagListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListPageRoutingModule", function() { return TagListPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tag_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-list-page.component */ "8FwF");





const routes = [
    {
        path: '',
        component: _tag_list_page_component__WEBPACK_IMPORTED_MODULE_2__["TagListPageComponent"]
    }
];
class TagListPageRoutingModule {
}
TagListPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
TagListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
TagListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "x0/i":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TagListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagListPageModule", function() { return TagListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-list-page-routing.module */ "tbOu");
/* harmony import */ var _tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-list-page.component */ "8FwF");
/* harmony import */ var _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/content-overview/navbar/navbar.module */ "d0zl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/modules/svg/svg.module */ "F/CY");











class TagListPageModule {
}
TagListPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
TagListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageModule, declarations: [_tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__["TagListPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"],
        _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]] });
TagListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"],
            _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TagListPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [_tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__["TagListPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"],
                        _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                        _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=pages-tag-list-page-tag-list-page-module-es2015.js.map