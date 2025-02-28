(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-events-page-user-events-page-module"],{

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

/***/ "DIWy":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-events-page/event-filters.function.ts ***!
  \*******************************************************************************/
/*! exports provided: eventFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventFilters", function() { return eventFilters; });
/* harmony import */ var _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/schemas/event/event-filters.enum */ "x8C0");

function eventFilters(translateService) {
    return [
        {
            id: 0,
            text: translateService.instant('COMMON.ALL'),
            data: null,
        },
        {
            id: 1,
            text: translateService.instant('COMMON.EXHIBITS'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].EXHIBITIONS,
        },
        {
            id: 2,
            text: translateService.instant('COMMON.EDUCATION'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].TRAINING,
        },
        {
            id: 3,
            text: translateService.instant('COMMON.REGATTA_'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].REGATTAS,
        },
        {
            id: 4,
            text: translateService.instant('COMMON.FLEET'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].FLOTILLAS,
        },
        {
            id: 5,
            text: translateService.instant('COMMON.PRESENTATIONS'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].PRESENTATIONS,
        },
        {
            id: 6,
            text: translateService.instant('COMMON.PRESS-CONFERENCES'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].CONFERENCES,
        },
        {
            id: 7,
            text: 'Конференции',
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].FORUMS,
        },
        {
            id: 8,
            text: translateService.instant('COMMON.OTHER'),
            data: _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_0__["EventFiltersEnum"].OTHER,
        },
    ];
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

/***/ "Sy3t":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-events-page/user-events-page.module.ts ***!
  \********************************************************************************/
/*! exports provided: UserEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsPageModule", function() { return UserEventsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-events-page-routing.module */ "e7qK");
/* harmony import */ var _user_events_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-events-page.component */ "kMN+");
/* harmony import */ var _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/modules/filters/filters.module */ "nPmw");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/events/event-preview/event-preview.module */ "D6c4");








class UserEventsPageModule {
}
UserEventsPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserEventsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageModule, declarations: [_user_events_page_component__WEBPACK_IMPORTED_MODULE_3__["UserEventsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"],
        _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]] });
UserEventsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"],
            _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [_user_events_page_component__WEBPACK_IMPORTED_MODULE_3__["UserEventsPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _user_events_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageRoutingModule"],
                        _shared_modules_filters_filters_module__WEBPACK_IMPORTED_MODULE_4__["FiltersModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                        _modules_events_event_preview_event_preview_module__WEBPACK_IMPORTED_MODULE_6__["EventPreviewModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"]
                    ]
                }]
        }] });


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

/***/ "e7qK":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-events-page/user-events-page-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: UserEventsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsPageRoutingModule", function() { return UserEventsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_events_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-events-page.component */ "kMN+");
/* harmony import */ var _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/users-resolver.service */ "5TyJ");






const routes = [
    {
        path: '',
        component: _user_events_page_component__WEBPACK_IMPORTED_MODULE_2__["UserEventsPageComponent"],
        resolve: { data: _shared_services_users_resolver_service__WEBPACK_IMPORTED_MODULE_3__["UsersResolverService"] }
    }
];
class UserEventsPageRoutingModule {
}
UserEventsPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserEventsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
UserEventsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "kMN+":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/user/pages/user-events-page/user-events-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserEventsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsPageComponent", function() { return UserEventsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _event_filters_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-filters.function */ "DIWy");
/* harmony import */ var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/classes/pageable-conetnt.class */ "RO7G");
/* harmony import */ var _api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/schemas/event/event-filters.enum */ "x8C0");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @api/routes/companies.service */ "qPE0");
/* harmony import */ var _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/services/permission/permission.service */ "ZG4Y");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/modules/filters/filters.component */ "QEux");
/* harmony import */ var _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../events/event-preview/event-preview.component */ "VreD");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");




















class UserEventsPageComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_5__["AbstractComponent"] {
    constructor(usersService, activatedRoute, sessionService, companiesService, permissionService, translateService, sidebarWrapperService) {
        super();
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.companiesService = companiesService;
        this.permissionService = permissionService;
        this.translateService = translateService;
        this.sidebarWrapperService = sidebarWrapperService;
        this.activeFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.filters = Object(_event_filters_function__WEBPACK_IMPORTED_MODULE_1__["eventFilters"])(this.translateService);
        this.currentEvents = [];
        this.pageable = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__["PageableContent"](this.fetchPageFn$.bind(this), null);
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.id$ = this.activatedRoute.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((paramMap) => {
            const id = paramMap.get('id');
            return /^\d+$/.test(id) ? parseInt(id, 10) : id;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((id) => this.usersService.getSingle$(id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((user) => user.meta.id));
        this.pageable.content$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngOnDestroy$)).subscribe((content) => {
            this.currentEvents.push(...content);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([this.id$, this.sessionService.user$, this.activeFilter$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((options) => {
            this.currentEvents.splice(0, this.currentEvents.length);
            this.pageable.options$.next(options);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => this.pageable.reset$()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
            this.pageable.fetch();
        });
    }
    fetchPageFn$(page, options) {
        if (options === null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(_shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_2__["NO_CONTENT"]);
        }
        const canSeeDrafts = options[1] !== null && (options[1].meta.id === options[0] || this.permissionService.hasAnyRole(options[1], 'EDITOR$'));
        return this.companiesService.events$(options[0], page, {
            stages: canSeeDrafts ? [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].DRAFT, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].REVIEWING,
                _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].PUBLISHED, _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].BLOCKED] : [_api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_7__["PublicationStageEnum"].PUBLISHED],
            types: options[2] ? [_api_schemas_event_event_filters_enum__WEBPACK_IMPORTED_MODULE_3__["EventFiltersEnum"][options[2]]] : [],
        });
    }
    remove(event) {
        this.currentEvents.splice(this.currentEvents.findIndex((it) => it === event), 1);
    }
    filterEvent(filter) {
        this.activeFilter$.next(filter.data);
    }
}
UserEventsPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageComponent, deps: [{ token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }, { token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"] }, { token: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__["PermissionService"] }, { token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserEventsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserEventsPageComponent, selector: "app-user-events-page", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-filters [filters]=\"filters\" (toggleFilter)=\"filterEvent($event)\"></app-filters>\n<ul class=\"block-card item-space-40\">\n    <li *ngFor=\"let event of currentEvents\">\n        <app-event-preview [event]=\"event\" (gone)=\"remove(event)\"></app-event-preview>\n    </li>\n</ul>\n<app-pagination [pageable]=\"pageable\"></app-pagination>\n", styles: [":host {\n  width: 100%;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3VzZXItZXZlbnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJ1c2VyLWV2ZW50cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */"], components: [{ type: _shared_modules_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"], selector: "app-filters", inputs: ["filters", "activeFilter"], outputs: ["toggleFilter"] }, { type: _events_event_preview_event_preview_component__WEBPACK_IMPORTED_MODULE_16__["EventPreviewComponent"], selector: "app-event-preview", inputs: ["event"], outputs: ["gone", "goneBookmarked"] }, { type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_17__["PaginationComponent"], selector: "app-pagination", inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"], outputs: ["onPage", "onPageAttempt"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserEventsPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-events-page',
                    templateUrl: './user-events-page.component.html',
                    styleUrls: ['./user-events-page.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }, { type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"] }, { type: _app_services_permission_permission_service__WEBPACK_IMPORTED_MODULE_12__["PermissionService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_14__["SidebarWrapperService"] }]; } });


/***/ })

}]);
//# sourceMappingURL=pages-user-events-page-user-events-page-module-es2015.js.map