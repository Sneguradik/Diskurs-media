(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"],{

/***/ "JbfT":
/*!**********************************************!*\
  !*** ./src/app/shared/utils/money-format.ts ***!
  \**********************************************/
/*! exports provided: formatMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoney", function() { return formatMoney; });
function formatMoney(amount, currency) {
    switch (currency) {
        case 'EUR':
            return `€${amount}`;
        case 'USD':
            return `$${amount}`;
        case 'RUB':
            return `${amount} ₽`;
        default:
            return `${amount} ${currency}`;
    }
}


/***/ }),

/***/ "WCHF":
/*!****************************************************************!*\
  !*** ./src/app/modules/jobs/job-preview/job-preview.module.ts ***!
  \****************************************************************/
/*! exports provided: JobPreviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPreviewModule", function() { return JobPreviewModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _job_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-preview.component */ "WuGY");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/modules/user-info/user-info.module */ "tu4A");












class JobPreviewModule {
}
JobPreviewModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPreviewModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
JobPreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPreviewModule, declarations: [_job_preview_component__WEBPACK_IMPORTED_MODULE_3__["JobPreviewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_9__["UserInfoModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]], exports: [_job_preview_component__WEBPACK_IMPORTED_MODULE_3__["JobPreviewComponent"]] });
JobPreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPreviewModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_9__["UserInfoModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
            _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPreviewModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_job_preview_component__WEBPACK_IMPORTED_MODULE_3__["JobPreviewComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_9__["UserInfoModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
                        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()
                    ],
                    exports: [_job_preview_component__WEBPACK_IMPORTED_MODULE_3__["JobPreviewComponent"]],
                }]
        }] });


/***/ }),

/***/ "WuGY":
/*!*******************************************************************!*\
  !*** ./src/app/modules/jobs/job-preview/job-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: JobPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPreviewComponent", function() { return JobPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var _shared_utils_money_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/utils/money-format */ "JbfT");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/schemas/job/job-currency.enum */ "oSL1");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/jobs.service */ "YWUd");
/* harmony import */ var _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @api/routes/showcases.service */ "vb20");
/* harmony import */ var _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layout/shared/services/user-dropdown.service */ "6cGZ");
/* harmony import */ var _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/modules/user-info/user-info.component */ "Ozdm");
/* harmony import */ var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/modules/svg/svg/svg.component */ "ax+O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/pipes/custom-date.pipe */ "cUwi");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















class JobPreviewComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(sessionService, jobsService, changeDetectorRef, showcaseService, userDropdown) {
        super();
        this.sessionService = sessionService;
        this.jobsService = jobsService;
        this.changeDetectorRef = changeDetectorRef;
        this.showcaseService = showcaseService;
        this.userDropdown = userDropdown;
        this.gone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goneBookmarked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.publicationStageEnum = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"];
    }
    get salary() {
        const result = [];
        if (this.job.info.minSalary) {
            result.push('от', Object(_shared_utils_money_format__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(+this.job.info.minSalary, _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_4__["JobCurrencyEnum"][this.job.info.currency]));
        }
        if (this.job.info.maxSalary) {
            result.push('до', Object(_shared_utils_money_format__WEBPACK_IMPORTED_MODULE_2__["formatMoney"])(+this.job.info.maxSalary, _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_4__["JobCurrencyEnum"][this.job.info.currency]));
        }
        return result.join(' ');
    }
    ngOnInit() {
        this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe((user) => {
            this.isOwner = user && user.meta.id === this.job.company.meta.id;
            this.changeDetectorRef.markForCheck();
        });
    }
    hide() {
        this.jobsService.hide$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(this.gone);
    }
    publish(value) {
        if (value) {
            this.jobsService.publish$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
                this.job.info.publicationStage = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].PUBLISHED;
                this.changeDetectorRef.markForCheck();
            });
        }
        else {
            this.jobsService.withdraw$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
                this.job.info.publicationStage = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"].DRAFT;
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    delete() {
        this.jobsService.delete$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(this.gone);
    }
    showcase() {
        this.jobsService.showcase$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$))
            .subscribe((_) => this.showcaseService.navigate$(_));
    }
    toggleBookmark() {
        if (this.sessionService.loggedIn$.value) {
            this.jobsService.bookmark$(this.job.meta.id, this.job.bookmarks.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
                this.job.bookmarks.you = !this.job.bookmarks.you;
                this.job.bookmarks.count += this.job.bookmarks.you ? 1 : -1;
                this.changeDetectorRef.markForCheck();
                if (!this.job.bookmarks.you) {
                    this.goneBookmarked.next([this.job, 'job']);
                }
            });
        }
        else {
            this.userDropdown.setShowDropdown(true);
        }
    }
}
JobPreviewComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPreviewComponent, deps: [{ token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"] }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { token: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_8__["ShowcasesService"] }, { token: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
JobPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: JobPreviewComponent, selector: "app-job-preview", inputs: { job: "job", isOwner: "isOwner" }, outputs: { gone: "gone", goneBookmarked: "goneBookmarked" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<header class=\"v-center margin-bottom-20\">\n    <app-user-info class=\"margin-right-20\" [user]=\"job.company\"></app-user-info>\n    <span *ngIf=\"job.info.publicationStage !== publicationStageEnum.PUBLISHED\" class=\"overline c-caption\">\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E</span>\n    <span class=\"date align-right\">{{ job.meta.updatedAt | customDate }}</span>\n</header>\n<main>\n    <h3 class=\"margin-bottom-15 fade-0\"><a [routerLink]=\"['/jobs', job.meta.id]\">{{ job.info.name }}</a></h3>\n    <h5 class=\"margin-bottom-15 fade-2\">{{ job.info.city }} {{ salary ? salary : ('COMMON.INTERVIEW_SALARY' | translate) }}</h5>\n</main>\n<footer class=\"v-center\">\n    <div class=\"v-center event-stats\">\n        <div class=\"v-center margin-right-20\">\n            <svg name=\"bookmark\" class=\"margin-right-4 icon f-gray clickable\" [class.active]=\"job.bookmarks && job.bookmarks.you\" (click)=\"toggleBookmark()\"></svg>\n        </div>\n    </div>\n    <a class=\"align-right subtitle-2 fade-2 v-center\"><a [routerLink]=\"['/jobs', job.meta.id]\">{{ 'COMMON.TO_THE_VACANCY' | translate }}</a>\n        <svg name=\"chevron/right\" class=\"f-gray\"></svg>\n    </a>\n</footer>\n", styles: [".date {\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 16px;\n}\n\n:host {\n  word-wrap: break-word;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2pvYi1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJqb2ItcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG46aG9zdCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2lkdGg6IDEwMCVcbn0iXX0= */"], components: [{ type: _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"], selector: "app-user-info", inputs: ["user"] }, { type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_11__["SvgComponent"], selector: "svg[name]", inputs: ["name", "w", "h", "size"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "customDate": _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_14__["CustomDatePipe"], "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"] }, changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPreviewComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-job-preview',
                    templateUrl: './job-preview.component.html',
                    styleUrls: ['./job-preview.component.scss'],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                }]
        }], ctorParameters: function () { return [{ type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_8__["ShowcasesService"] }, { type: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"] }]; }, propDecorators: { job: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], isOwner: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], gone: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }], goneBookmarked: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
            }] } });


/***/ }),

/***/ "oSL1":
/*!******************************************************!*\
  !*** ./src/app/api/schemas/job/job-currency.enum.ts ***!
  \******************************************************/
/*! exports provided: JobCurrencyEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCurrencyEnum", function() { return JobCurrencyEnum; });
var JobCurrencyEnum;
(function (JobCurrencyEnum) {
    JobCurrencyEnum["RUB"] = "RUB";
    JobCurrencyEnum["USD"] = "USD";
    JobCurrencyEnum["EUR"] = "EUR";
})(JobCurrencyEnum || (JobCurrencyEnum = {}));


/***/ })

}]);
//# sourceMappingURL=default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588-es2015.js.map