(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-drafts-page-user-drafts-page-module"],{

/***/ "7m4m":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-drafts-page/user-drafts-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserDraftsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDraftsPageComponent", function() { return UserDraftsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_user_posts_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-user-posts.class */ "TzTY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/routes/feed.service */ "R237");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/topics.service */ "XmCg");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user-header/user-header.component */ "6n3P");
/* harmony import */ var _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/modules/feed/feed-article-view/feed-article-view.component */ "dlPb");
/* harmony import */ var _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/modules/ranges/ranges.component */ "HThX");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















class UserDraftsPageComponent extends _shared_classes_abstract_user_posts_class__WEBPACK_IMPORTED_MODULE_1__["AbstractUserPosts"] {
    constructor(activatedRoute, sessionService, feedService, translateService, usersService, topicsService, sidebarWrapperService) {
        super(activatedRoute, sessionService, feedService, translateService, usersService, topicsService);
        this.sidebarWrapperService = sidebarWrapperService;
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        super.ngOnInit();
    }
}
UserDraftsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageComponent, deps: [{ token: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { token: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] }, { token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { token: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserDraftsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserDraftsPageComponent, selector: "app-user-drafts-page", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-user-header></app-user-header>\n\n<ul *ngIf=\"pinned\" class=\"block-card item-space-20\">\n    <li>\n        <app-feed-article-view [options]=\"{ pinnedMark: true, pictureOn: true, menuOn: !drafts }\" [data]=\"pinned[0]\" [topic]=\"pinned[1]\" (pinned)=\"pinned[0].pinned = false; articles.push(pinned); pinned=$event;\" (gone)=\"remove(pinned)\"></app-feed-article-view>\n    </li>\n</ul>\n<div style=\"margin-bottom: 50px;\"></div>\n\n<app-ranges [ranges]=\"ranges\" [activeRange]=\"activeRange\" (toggleRange)=\"rangeEvent($event)\"></app-ranges>\n<ul class=\"block-card item-space-20\">\n    <li *ngFor=\"let article of articles; let i = index\">\n        <app-feed-article-view [data]=\"article[0]\" [topic]=\"article[1]\" (gone)=\"remove(article)\" [options]=\"{ pictureOn: true, menuOn: !drafts }\" (pinned)=\"pinned=$event; remove(article); pinned[0].pinned = true;\"></app-feed-article-view>\n    </li>\n</ul>\n\n<app-pagination [pageable]=\"pageable\" [fireFirstPage]=\"false\"></app-pagination>\n", styles: [":host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZHJhZnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoidXNlci1kcmFmdHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"], components: [{ type: _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_9__["UserHeaderComponent"], selector: "app-user-header" }, { type: _shared_modules_feed_feed_article_view_feed_article_view_component__WEBPACK_IMPORTED_MODULE_10__["FeedArticleViewComponent"], selector: "app-feed-article-view", inputs: ["data", "link", "options", "topic", "user"], outputs: ["gone", "gonePromote", "pinned", "goneBookmarked"] }, { type: _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_11__["RangesComponent"], selector: "app-ranges", inputs: ["ranges", "activeRange"], outputs: ["toggleRange"] }, { type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"], selector: "app-pagination", inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"], outputs: ["onPage", "onPageAttempt"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-drafts-page',
                    templateUrl: './user-drafts-page.component.html',
                    styleUrls: ['./user-drafts-page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }, { type: _api_routes_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: _api_routes_topics_service__WEBPACK_IMPORTED_MODULE_7__["TopicsService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }]; } });


/***/ }),

/***/ "SEVC":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-drafts-page/user-drafts-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: UserDraftsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDraftsPageRoutingModule", function() { return UserDraftsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_drafts_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-drafts-page.component */ "7m4m");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/users-resolver.service */ "5TyJ");







const routes = [
    {
        path: '',
        component: _user_drafts_page_component__WEBPACK_IMPORTED_MODULE_2__["UserDraftsPageComponent"],
        data: {
            query: {
                stage: [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"][_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_3__["PublicationStageEnum"].DRAFT]],
            },
        },
        resolve: { data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_4__["UsersResolverService"] }
    }
];
class UserDraftsPageRoutingModule {
}
UserDraftsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserDraftsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
UserDraftsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "fvRY":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-drafts-page/user-drafts-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: UserDraftsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDraftsPageModule", function() { return UserDraftsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_drafts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-drafts-page-routing.module */ "SEVC");
/* harmony import */ var _user_drafts_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-drafts-page.component */ "7m4m");
/* harmony import */ var _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/modules/ranges/ranges.module */ "iMhr");
/* harmony import */ var _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/user/user-header/user-header.module */ "PMU/");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/modules/feed/feed.module */ "yiK6");









class UserDraftsPageModule {
}
UserDraftsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserDraftsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageModule, declarations: [_user_drafts_page_component__WEBPACK_IMPORTED_MODULE_3__["UserDraftsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_drafts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDraftsPageRoutingModule"],
        _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"],
        _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
        _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]] });
UserDraftsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_drafts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDraftsPageRoutingModule"],
            _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"],
            _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
            _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserDraftsPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [_user_drafts_page_component__WEBPACK_IMPORTED_MODULE_3__["UserDraftsPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _user_drafts_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDraftsPageRoutingModule"],
                        _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_4__["RangesModule"],
                        _modules_user_user_header_user_header_module__WEBPACK_IMPORTED_MODULE_5__["UserHeaderModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
                        _shared_modules_feed_feed_module__WEBPACK_IMPORTED_MODULE_7__["FeedModule"]
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=pages-user-drafts-page-user-drafts-page-module-es2015.js.map