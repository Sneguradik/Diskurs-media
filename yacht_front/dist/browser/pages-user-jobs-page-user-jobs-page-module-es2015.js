(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-jobs-page-user-jobs-page-module"],{

/***/ "5TyJ":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/users-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: UsersResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersResolverService", function() { return UsersResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/not-found.operator */ "TNbK");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class UsersResolverService {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    resolve(route) {
        return this.usersService.getSingle$(route.params.id).pipe(Object(_shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__["notFound"])(this.router));
    }
}
UsersResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UsersResolverService, deps: [{ token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable });
UsersResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UsersResolverService, providedIn: 'root' });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UsersResolverService, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; } });


/***/ }),

/***/ "7Qfs":
/*!************************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: UserJobsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJobsPageRoutingModule", function() { return UserJobsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-jobs-page.component */ "TUUO");
/* harmony import */ var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/users-resolver.service */ "5TyJ");






const routes = [
    {
        path: '',
        component: _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageComponent"],
        resolve: { data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"] }
    }
];
class UserJobsPageRoutingModule {
}
UserJobsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserJobsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
UserJobsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "9W2b":
/*!****************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page.module.ts ***!
  \****************************************************************************/
/*! exports provided: UserJobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJobsPageModule", function() { return UserJobsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-jobs-page-routing.module */ "7Qfs");
/* harmony import */ var _user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-jobs-page.component */ "TUUO");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/jobs/job-preview/job-preview.module */ "WCHF");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");








class UserJobsPageModule {
}
UserJobsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserJobsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageModule, declarations: [_user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__["UserJobsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
        _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]] });
UserJobsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
            _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [_user_jobs_page_component__WEBPACK_IMPORTED_MODULE_3__["UserJobsPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _user_jobs_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserJobsPageRoutingModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
                        _modules_jobs_job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_5__["JobPreviewModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"]
                    ]
                }]
        }] });


/***/ }),

/***/ "Ozdm":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/user-info/user-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "9qJ4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/account-url.pipe */ "uo9K");
/* harmony import */ var _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/person-name.pipe */ "uJSW");






class UserInfoComponent {
}
UserInfoComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserInfoComponent, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserInfoComponent, selector: "app-user-info", inputs: { user: "user" }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<div class=\"v-center\">\n    <a [routerLink]=\"user ? (user | accountUrl) : ''\" class=\"v-center\">\n        <app-ui-icon class=\"margin-right-10\" [src]=\"user?.info.picture\" [textAlternative]=\"user ? (user.info | personName) : ''\"></app-ui-icon>\n        <span class=\"subtitle-1\">{{ user ? (user.info | personName) : '' }}</span>\n    </a>\n</div>\n", styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"], components: [{ type: _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"], selector: "app-ui-icon", inputs: ["src", "textAlternative", "size"] }], directives: [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "accountUrl": _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__["AccountUrlPipe"], "personName": _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__["PersonNamePipe"] }, changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserInfoComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-info',
                    templateUrl: './user-info.component.html',
                    styleUrls: ['./user-info.component.scss'],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                }]
        }], propDecorators: { user: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }] } });


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

/***/ "TNbK":
/*!****************************************************!*\
  !*** ./src/app/shared/utils/not-found.operator.ts ***!
  \****************************************************/
/*! exports provided: notFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFound", function() { return notFound; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function notFound(router) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
        if (error.status === 404 || error.status === 422) {
            router.navigateByUrl('/404');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    });
}


/***/ }),

/***/ "TUUO":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-jobs-page/user-jobs-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserJobsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJobsPageComponent", function() { return UserJobsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/pageable-conetnt.class */ "RO7G");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/schemas/job/job-order.enum */ "wUCb");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @api/routes/companies.service */ "qPE0");
/* harmony import */ var _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/services/permission/permission.service */ "ZG4Y");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../jobs/job-preview/job-preview.component */ "WuGY");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");

















class UserJobsPageComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(usersService, activatedRoute, sessionService, companiesService, permissionService, sidebarWrapperService) {
        super();
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.companiesService = companiesService;
        this.permissionService = permissionService;
        this.sidebarWrapperService = sidebarWrapperService;
        this.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["PageableContent"](this.fetchPageFn$.bind(this), null);
        this.jobs = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.id$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((paramMap) => {
            const id = paramMap.get('id');
            return /^\d+$/.test(id) ? parseInt(id, 10) : id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((id) => this.usersService.getSingle$(id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => user.meta.id));
        this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe((content) => {
            this.jobs.push(...content);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.id$, this.sessionService.user$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((options) => {
            this.jobs.splice(0, this.jobs.length);
            this.pageable.options$.next(options);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.pageable.reset$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
            this.pageable.fetch();
        });
    }
    fetchPageFn$(page, options) {
        if (options === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(_shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_1__["NO_CONTENT"]);
        }
        const canSeeDrafts = options[1] !== null && (options[1].meta.id === options[0] || this.permissionService.hasAnyRole(options[1], 'EDITOR$'));
        return this.companiesService.jobs$(options[0], page, {
            order: _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_6__["JobOrderEnum"].LAST_POST_TIME,
            stages: canSeeDrafts
                ? [
                    _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].DRAFT,
                    _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].REVIEWING,
                    _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].PUBLISHED,
                    _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].BLOCKED
                ]
                : [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].PUBLISHED],
        });
    }
    remove(job) {
        this.jobs.splice(this.jobs.findIndex((it) => it === job), 1);
    }
}
UserJobsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageComponent, deps: [{ token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__["CompaniesService"] }, { token: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__["PermissionService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserJobsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserJobsPageComponent, selector: "app-user-jobs-page", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<ul class=\"block-card item-space-40\">\n    <li *ngFor=\"let job of jobs\">\n        <app-job-preview [job]=\"job\" (gone)=\"remove(job)\"></app-job-preview>\n    </li>\n</ul>\n<app-pagination [pageable]=\"pageable\"></app-pagination>\n", styles: [":host {\n  width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItam9icy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBREYiLCJmaWxlIjoidXNlci1qb2JzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIl19 */"], components: [{ type: _jobs_job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_13__["JobPreviewComponent"], selector: "app-job-preview", inputs: ["job", "isOwner"], outputs: ["gone", "goneBookmarked"] }, { type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"], selector: "app-pagination", inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"], outputs: ["onPage", "onPageAttempt"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserJobsPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-jobs-page',
                    templateUrl: './user-jobs-page.component.html',
                    styleUrls: ['./user-jobs-page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_10__["CompaniesService"] }, { type: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_11__["PermissionService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_12__["SidebarWrapperService"] }]; } });


/***/ }),

/***/ "tu4A":
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/user-info/user-info.module.ts ***!
  \**************************************************************/
/*! exports provided: UserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info.component */ "Ozdm");







class UserInfoModule {
}
UserInfoModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
UserInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]], exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]] });
UserInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
                    exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
                }]
        }] });


/***/ }),

/***/ "wUCb":
/*!***************************************************!*\
  !*** ./src/app/api/schemas/job/job-order.enum.ts ***!
  \***************************************************/
/*! exports provided: JobOrderEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobOrderEnum", function() { return JobOrderEnum; });
var JobOrderEnum;
(function (JobOrderEnum) {
    JobOrderEnum["NAME"] = "NAME";
    JobOrderEnum["LAST_POST_TIME"] = "LAST_POST_TIME";
    JobOrderEnum["VIEWS"] = "VIEWS";
    JobOrderEnum["BOOKMARKS"] = "BOOKMARKS";
})(JobOrderEnum || (JobOrderEnum = {}));


/***/ })

}]);
//# sourceMappingURL=pages-user-jobs-page-user-jobs-page-module-es2015.js.map