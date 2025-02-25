(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-module"],{

/***/ "/2vj":
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/user-view/user-view.module.ts ***!
  \**************************************************************/
/*! exports provided: UserViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewModule", function() { return UserViewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-view.component */ "hqzr");
/* harmony import */ var _svg_svg_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/svg.module */ "F/CY");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");












class UserViewModule {
}
UserViewModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserViewModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
UserViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserViewModule, declarations: [_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _svg_svg_module__WEBPACK_IMPORTED_MODULE_5__["SvgModule"],
        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"]], exports: [_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]] });
UserViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserViewModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _svg_svg_module__WEBPACK_IMPORTED_MODULE_5__["SvgModule"],
            _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserViewModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _svg_svg_module__WEBPACK_IMPORTED_MODULE_5__["SvgModule"],
                        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_6__["SharedPipesModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"]
                    ],
                    exports: [_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"]],
                }]
        }] });


/***/ }),

/***/ "Eoso":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/content-overview/pages/author-list-page/ranges-authors.function.ts ***!
  \********************************************************************************************/
/*! exports provided: rangesAuthors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangesAuthors", function() { return rangesAuthors; });
/* harmony import */ var _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/schemas/user/user-order.enum */ "PZ9v");
/* harmony import */ var _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/schemas/locale/locale.enum */ "m0tC");


function rangesAuthors(translateService) {
    return [
        {
            id: 10,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_DAY'),
            query: () => ({
                order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24,
            }),
        },
        {
            id: 6,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_3_DAYS'),
            query: () => ({
                order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 3,
            }),
        },
        {
            id: 7,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_WEEK'),
            query: () => ({
                order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 7,
            }),
        },
        {
            id: 8,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_MONTH'),
            query: () => ({
                order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30,
            }),
        },
        {
            id: 9,
            text: translateService.instant('COMMON.SORT_BY_POPULARITY_YEAR'),
            query: () => ({
                order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING,
                'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 30 * 12,
            }),
        },
        {
            id: 0,
            text: translateService.instant('COMMON.SORT_BY_NUMBER_OF_SUNSCRIBERS'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].SUB_COUNT },
        },
        {
            id: 1,
            text: translateService.instant('COMMON.SORT_BY_NUMBER_OF_PUBLICATIONS'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].POST_COUNT },
        },
        {
            id: 2,
            text: translateService.instant('COMMON.FROM_A_TO_Z_'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].NAME, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN, asc: true },
        },
        {
            id: 3,
            text: translateService.instant('COMMON.FROM_Z_TO_A_'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].NAME, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].RUSSIAN },
        },
        {
            id: 4,
            text: translateService.instant('COMMON.FROM_A_TO_Z'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].NAME, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH, asc: true },
        },
        {
            id: 5,
            text: translateService.instant('COMMON.FROM_Z_TO_A'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].NAME, locale: _api_schemas_locale_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ENGLISH },
        },
    ];
}


/***/ }),

/***/ "FX5X":
/*!****************************************************************!*\
  !*** ./src/app/shared/classes/abstract-user-list-component.ts ***!
  \****************************************************************/
/*! exports provided: AbstractUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractUserListComponent", function() { return AbstractUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _modules_content_overview_pages_author_list_page_filters_authors_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/content-overview/pages/author-list-page/filters-authors.function */ "k0rm");
/* harmony import */ var _modules_content_overview_pages_author_list_page_ranges_authors_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/content-overview/pages/author-list-page/ranges-authors.function */ "Eoso");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








class AbstractUserListComponent extends _abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(translateService) {
        super();
        this.translateService = translateService;
        this.onRangeOrFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.activeFilter = null;
        this.filters = Object(_modules_content_overview_pages_author_list_page_filters_authors_function__WEBPACK_IMPORTED_MODULE_3__["filtersAuthors"])(this.translateService);
        this.ranges = Object(_modules_content_overview_pages_author_list_page_ranges_authors_function__WEBPACK_IMPORTED_MODULE_4__["rangesAuthors"])(this.translateService);
        this.selectedRange = this.ranges[5];
        this.activeRange = this.selectedRange.id;
        this.currentPage = -1;
        this.totalPages = 1;
        this.isLoading = false;
    }
    ngOnInit() {
        this.onRangeOrFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => this.reset());
        this.isLoading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe((_) => this.isLoading = _);
    }
    handleSearch(query) {
        this.query = query;
        if (!this.isLoading) {
            this.reset();
        }
    }
    filterEvent(filterItem) {
        this.selectedFilter = filterItem;
        this.activeFilter = filterItem === null || filterItem === void 0 ? void 0 : filterItem.id;
        this.selectedRange = null;
        this.activeRange = null;
        this.onRangeOrFilter$.next(0);
    }
    rangeEvent(range) {
        this.selectedRange = range;
        this.activeRange = range === null || range === void 0 ? void 0 : range.id;
        this.selectedFilter = null;
        this.activeFilter = null;
        this.onRangeOrFilter$.next(0);
    }
}
AbstractUserListComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractUserListComponent, deps: [{ token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
AbstractUserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: AbstractUserListComponent, selector: "ng-component", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: '', isInline: true });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AbstractUserListComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    template: ''
                }]
        }], ctorParameters: function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; } });


/***/ }),

/***/ "atHU":
/*!************************************************************!*\
  !*** ./src/app/shared/functions/extract-query.function.ts ***!
  \************************************************************/
/*! exports provided: extractQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractQuery", function() { return extractQuery; });
function extractQuery(item) {
    let result;
    if (!item || !item.query) {
        result = {};
    }
    else if (item.query instanceof Function) {
        result = item.query();
    }
    else {
        result = item.query;
    }
    return result;
}


/***/ }),

/***/ "hqzr":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/user-view/user-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_routes_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/routes/users.service */ "kCK3");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layout/shared/services/user-dropdown.service */ "6cGZ");
/* harmony import */ var _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/responsive.service */ "SKFc");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "9qJ4");
/* harmony import */ var _svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../svg/svg/svg.component */ "ax+O");
/* harmony import */ var _components_action_menu_action_menu_user_action_menu_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/action-menu/action-menu-user/action-menu-user.component */ "YNL8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../directives/logged-in.directive */ "DwHT");
/* harmony import */ var _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/account-url.pipe */ "uo9K");
/* harmony import */ var _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/person-name.pipe */ "uJSW");
/* harmony import */ var _pipes_trunk_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/trunk.pipe */ "G/9y");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















class UserViewComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(usersService, sessionService, userDropdownService, responsive) {
        super();
        this.usersService = usersService;
        this.sessionService = sessionService;
        this.userDropdownService = userDropdownService;
        this.responsive = responsive;
        this.gone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    toggleSubscribe() {
        if (this.sessionService.loggedIn$.value) {
            this.usersService.subscribe$(this.data.meta.id, this.data.subscribers.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
                this.data.subscribers.you = !this.data.subscribers.you;
            });
        }
        else {
            this.userDropdownService.setShowDropdown(true);
        }
    }
    delete() {
        this.usersService.delete$(this.data.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe();
    }
}
UserViewComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserViewComponent, deps: [{ token: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { token: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["UserDropdownService"] }, { token: _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_6__["ResponsiveService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserViewComponent, selector: "app-user-view", inputs: { data: "data" }, outputs: { gone: "gone" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<li class=\"user-view\">\n    <header class=\"user-view__header\">\n        <a class=\"title\" [routerLink]=\"data | accountUrl\">\n            <app-ui-icon class=\"margin-right-20\" size=\"{{ (responsive.lt.medium | async) ? 'medium' : 'large' }}\" [src]=\"this.data.info.picture\" [textAlternative]=\"this.data.info | personName\"></app-ui-icon>\n            <div class=\"tname\" style=\"min-width: 150px;\">\n                <p class=\"name\">{{ this.data.info | personName | trunk:22 }}</p>\n                <p *ngIf=\"this.data.info.username\" class=\"username\">@{{ this.data.info.username }}</p>\n            </div>\n        </a>\n        <aside>\n            <div *ngIf=\"!this.data.subscribers.you\" class=\"button-1 margin-right-10 btn\" (click)=\"toggleSubscribe()\">\n                <span *ngIf=\"!(responsive.lt.medium | async)\" class=\"margin-right-10\">{{ 'COMMON.SUBSCRIBE' | translate }}</span>\n                <svg name=\"plus\" size=\"18\"></svg>\n            </div>\n            <div *ngIf=\"this.data.subscribers.you\" class=\"button-1 margin-right-10 btn only-icon-click\">\n                <span *ngIf=\"!(responsive.lt.medium | async)\" class=\"margin-right-10\" style=\"color: #92929D;\">{{ 'COMMON.YOU_ARE_ALREADY' | translate }}</span>\n                <svg name=\"tick\" size=\"18\" (click)=\"toggleSubscribe()\"></svg>\n            </div>\n            <app-action-menu-user *appLoggedIn [data]=\"this.data\" (gone)=\"this.gone.next(data.meta.id)\"></app-action-menu-user>\n        </aside>\n    </header>\n    <footer class=\"user-view__footer\">\n        <ng-content></ng-content>\n    </footer>\n</li>\n", styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  display: block;\n}\n.user-view {\n  border-bottom: 1px solid #f6f6f6;\n}\n@media (max-width: 766px) {\n  .user-view {\n    position: relative;\n  }\n  .user-view app-action-menu-user {\n    position: absolute;\n    bottom: 14px;\n    right: 0;\n  }\n}\n.user-view__header {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  outline: none;\n}\n.user-view__header app-ui-icon {\n  width: 60px;\n  height: 60px;\n  margin-right: 16px !important;\n}\n.user-view__header .title {\n  align-items: center;\n  display: inline-flex;\n  outline: none;\n}\n@media (max-width: 766px) {\n  .user-view__header .title {\n    max-width: calc(100% - 70px);\n  }\n}\n@media (max-width: 766px) {\n  .user-view__header .title .tname {\n    max-width: calc(100% - 90px);\n  }\n}\n.user-view__header .title .name {\n  color: rgba(0, 0, 0, 0.7);\n  font-family: Roboto, sans-serif;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 33px;\n  margin: 0 0 5px;\n}\n@media (max-width: 766px) {\n  .user-view__header .title .name {\n    font-size: 20px;\n    line-height: 23px;\n    font-weight: 500;\n    margin-bottom: 10px;\n  }\n}\n.user-view__header .title .username {\n  color: rgba(0, 0, 0, 0.7);\n  font-family: Roboto, sans-serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 21px;\n  margin: 0;\n}\n@media (max-width: 766px) {\n  .user-view__header .title .username {\n    font-size: 15px;\n    line-height: 17px;\n  }\n}\n.user-view__header aside {\n  align-items: center;\n  display: inline-flex;\n}\n.user-view__header aside .btn {\n  align-items: center;\n  color: #00b7ff;\n  display: inline-flex;\n  margin-right: 20px !important;\n}\n.user-view__header aside .btn.only-icon-click {\n  cursor: default !important;\n}\n.user-view__header aside .btn.only-icon-click svg {\n  cursor: pointer;\n}\n.user-view__header aside .btn svg {\n  fill: #00b7ff;\n}\n@media (max-width: 766px) {\n  .user-view__header aside .btn {\n    margin-right: 0 !important;\n    width: 35px;\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: 1px solid #F0F0F0;\n  }\n  .user-view__header aside .btn svg {\n    display: block;\n    font-size: 0;\n    width: 18px;\n    height: 18px;\n  }\n}\n.user-view__header aside app-ui-dots-menu {\n  cursor: pointer;\n}\n.user-view__footer {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n.stats-item {\n  align-items: center;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n}\n.stats-item__value {\n  color: #00b7ff;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi91c2VyLXZpZXcuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQUE7QUM2aUJJO0VEbmlCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRHdpQkk7RUQ3aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FEa2lCSTtFRHZoQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUFkQTtFQUNFLGNBQUE7QUFpQkY7QUFkQTtFQUNFLGdDQUFBO0FBaUJGO0FEb2hCSTtFQ3RpQko7SUFJSSxrQkFBQTtFQWtCRjtFQWhCRTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7RUFrQko7QUFDRjtBQWRFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFnQko7QUFkSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFnQk47QUFiSTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBZU47QUR5Zkk7RUMzZ0JBO0lBTUksNEJBQUE7RUFnQk47QUFDRjtBRG9mSTtFQ2xnQkU7SUFFSSw0QkFBQTtFQWdCUjtBQUNGO0FBYk07RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFlUjtBRHNlSTtFQzVmRTtJQVVJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFnQlI7QUFDRjtBQWJNO0VBQ0UseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBZVI7QURxZEk7RUMzZUU7SUFVSSxlQUFBO0lBQ0EsaUJBQUE7RUFnQlI7QUFDRjtBQVpJO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQWNOO0FBWk07RUFDRSxtQkFBQTtFQUNBLGNDeEZFO0VEeUZGLG9CQUFBO0VBQ0EsNkJBQUE7QUFjUjtBQVpRO0VBQ0UsMEJBQUE7QUFjVjtBQVpVO0VBQ0UsZUFBQTtBQWNaO0FBVlE7RUFDRSxhQ3JHQTtBRGlIVjtBRDRiSTtFQ3ZkRTtJQW1CSSwwQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VBWVI7RUFYUTtJQUNFLGNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFhVjtBQUNGO0FBVE07RUFDRSxlQUFBO0FBV1I7QUFMRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBT0o7QUFGQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0Y7QUFIRTtFQUNFLGNDcEpNO0VEcUpOLGlCQUFBO0FBS0oiLCJmaWxlIjoidXNlci12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvYXQtaW1wb3J0LW5vLXBhcnRpYWwtbGVhZGluZy11bmRlcnNjb3JlICovXG5AaW1wb3J0ICd+aW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gIHhsYXJnZTogMTQwMHB4LFxuICBsYXJnZTogMTA2MHB4LFxuICBtZWRpdW06IDc2N3B4LFxuICBzbWFsbDogMzc1cHgsXG4pO1xuXG4uaGlkZS1sdC1tZWRpdW0ge1xuICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtZ2UtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJz49bWVkaXVtJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaGlkZS1sdC1sYXJnZSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc8bGFyZ2UnKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgaHR0cHM6Ly9lZHVhcmRvYm91Y2FzLmdpdGh1Yi5pby9pbmNsdWRlLW1lZGlhXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEtpdHR5IEdpcmF1ZGVsIChAa2l0dHlnaXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51c2VyLXZpZXcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y2ZjZmNjtcblxuICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBhcHAtYWN0aW9uLW1lbnUtdXNlcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTRweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICB9XG5cbiAgJl9faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgIGFwcC11aS1pY29ue1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgICB9XG5cbiAgICAgIC50bmFtZSB7XG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKCc8bWVkaXVtJykge1xuICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLm5hbWUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbjogMCAwIDVweDtcblxuICAgICAgICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7ICAgICAgICAgIFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudXNlcm5hbWUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXNpZGUge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJi5vbmx5LWljb24tY2xpY2sge1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzdmcge1xuICAgICAgICAgIGZpbGw6ICRwcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKXtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBGMEYwO1xuICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFwcC11aS1kb3RzLW1lbnUge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8vbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19mb290ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICB9ICBcbiAgXG59XG5cbi5zdGF0cy1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuXG4gICZfX3ZhbHVlIHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIH1cbn1cbiIsIiRwcmltYXJ5OiAjMDBiN2ZmO1xuJGNhcHRpb246ICM5Nzk3OTc7XG4kaWNvbjogIzkyOTI5ZDtcbiRncmF5OiAjOTI5MjlkO1xuJGlucHV0OiAjNjk2OTc0O1xuJGVycm9yOiAjZmY1YjM2O1xuJGxhYmVsOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cbiRsaWdodGVzdC1ncmF5OiAjZjFmMWY1O1xuJGxpZ2h0ZXItZ3JheTogI2UyZTJlYTtcbiRsaWdodC1ncmF5OiAjZDVkNWRjO1xuXG4kbGlnaHQtYmx1ZTogcmdiYSgwLCAxODMsIDI1NSwgMC4zKTtcbiJdfQ== */"], components: [{ type: _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], selector: "app-ui-icon", inputs: ["src", "textAlternative", "size"] }, { type: _svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_8__["SvgComponent"], selector: "svg[name]", inputs: ["name", "w", "h", "size"] }, { type: _components_action_menu_action_menu_user_action_menu_user_component__WEBPACK_IMPORTED_MODULE_9__["ActionMenuUserComponent"], selector: "app-action-menu-user", inputs: ["data"], outputs: ["gone"] }], directives: [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_12__["LoggedInDirective"], selector: "[appLoggedIn]" }], pipes: { "accountUrl": _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_13__["AccountUrlPipe"], "async": _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], "personName": _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_14__["PersonNamePipe"], "trunk": _pipes_trunk_pipe__WEBPACK_IMPORTED_MODULE_15__["TrunkPipe"], "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserViewComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-view',
                    templateUrl: './user-view.component.html',
                    styleUrls: ['./user-view.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }, { type: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["UserDropdownService"] }, { type: _app_services_responsive_service__WEBPACK_IMPORTED_MODULE_6__["ResponsiveService"] }]; }, propDecorators: { data: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], gone: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }] } });


/***/ }),

/***/ "k0rm":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/content-overview/pages/author-list-page/filters-authors.function.ts ***!
  \*********************************************************************************************/
/*! exports provided: filtersAuthors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtersAuthors", function() { return filtersAuthors; });
/* harmony import */ var _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/schemas/user/user-order.enum */ "PZ9v");

function filtersAuthors(translateService) {
    return [
        {
            id: 0,
            text: translateService.instant('COMMON.MY_SUBSCRIPTIONS'),
            query: { sub: true, order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].LAST_POST_TIME },
        },
        {
            id: 1,
            text: translateService.instant('COMMON.RECOMMENDED'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].RATING, 'rating-after': Date.now() - 1000 * 60 * 60 * 24 * 7 },
        },
        {
            id: 2,
            text: translateService.instant('COMMON.RECENT'),
            query: { order: _api_schemas_user_user_order_enum__WEBPACK_IMPORTED_MODULE_0__["UserOrderEnum"].LAST_POST_TIME },
        }
    ];
}


/***/ })

}]);
//# sourceMappingURL=default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-module-es2015.js.map