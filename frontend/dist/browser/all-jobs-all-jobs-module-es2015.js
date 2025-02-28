(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-jobs-all-jobs-module"],{

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

/***/ "T9ap":
/*!************************************************************************!*\
  !*** ./src/app/modules/jobs/all-jobs/jobs-list/jobs-list.component.ts ***!
  \************************************************************************/
/*! exports provided: JobsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsListComponent", function() { return JobsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var _jobs_ranges_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-ranges.const */ "gLAm");
/* harmony import */ var _shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/functions/extract-query.function */ "atHU");
/* harmony import */ var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @api/routes/jobs.service */ "YWUd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/modules/ranges/ranges.component */ "HThX");
/* harmony import */ var _job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../job-preview/job-preview.component */ "WuGY");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/pagination/pagination.component */ "NhFE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













class JobsListComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"] {
    constructor(jobsService, translateService) {
        super();
        this.jobsService = jobsService;
        this.translateService = translateService;
        this.jobs = [];
        this.onRange$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ranges = Object(_jobs_ranges_const__WEBPACK_IMPORTED_MODULE_4__["jobsRanges"])(this.translateService);
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.selectedRange = this.ranges[2];
        this.currentPage = -1;
        this.totalPages = 1;
        this.isLoading = false;
        this.activeRange = this.selectedRange.id;
    }
    ngOnInit() {
        this.onRange$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => this.isLoading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((_) => !_))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$))
            .subscribe(() => this.reset());
        this.isLoading$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe((_) => (this.isLoading = _));
    }
    fetchNextPage() {
        if (!this.isLoading && this.currentPage < this.totalPages - 1) {
            this.isLoading$.next(true);
            this.currentPage += 1;
            this.jobsService.get$(this.currentPage, Object.assign({ query: this.query || undefined }, Object(_shared_functions_extract_query_function__WEBPACK_IMPORTED_MODULE_5__["extractQuery"])(this.selectedRange))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe((response) => {
                this.jobs.push(...response.content);
                this.currentPage = response.page;
                this.totalPages = response.totalPages;
                this.isLoading$.next(false);
            });
        }
    }
    reset() {
        this.currentPage = -1;
        this.totalPages = 1;
        this.jobs = [];
        this.fetchNextPage();
    }
    remove(job) {
        this.jobs.splice(this.jobs.indexOf(job), 1);
    }
    rangeEvent(range) {
        this.selectedRange = range;
        this.onRange$.next(0);
    }
}
JobsListComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobsListComponent, deps: [{ token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] }, { token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
JobsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: JobsListComponent, selector: "app-jobs-list", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-ranges [ranges]=\"ranges\" [activeRange]=\"activeRange\" (toggleRange)=\"rangeEvent($event)\"></app-ranges>\n<ul class=\"block-card item-space-20\">\n  <li *ngFor=\"let job of jobs\" class=\"with-border\">\n    <app-job-preview [job]=\"job\" (gone)=\"remove(job)\"></app-job-preview>\n  </li>\n</ul>\n\n<app-pagination [page]=\"currentPage\" [maxPages]=\"totalPages\" [enabled]=\"!isLoading\" (onPage)=\"fetchNextPage()\"></app-pagination>\n", styles: ["* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.with-border {\n  padding-bottom: 20px;\n  position: relative;\n}\n\n.with-border::before {\n  border-radius: 20px;\n  border-top: 2px solid #f6f6f6;\n  bottom: 0;\n  content: \"\";\n  position: absolute;\n  width: 100%;\n}\n\n.header {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  padding-top: 20px;\n}\n\n.header .company-name {\n  color: black;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 16px;\n  padding-left: 10px;\n}\n\n.header .post-date {\n  color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  flex-grow: 1;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  justify-content: flex-end;\n  line-height: 16px;\n}\n\n.job-name {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 33px;\n  padding-top: 22px;\n}\n\n.city-salary {\n  color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 23px;\n  padding-top: 15px;\n}\n\n.city-salary .salary {\n  padding-left: 15px;\n}\n\n.footer {\n  align-content: center;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  justify-content: space-between;\n  line-height: 16px;\n  padding-bottom: 20px;\n  padding-top: 25px;\n}\n\n.footer svg {\n  fill: rgba(0, 0, 0, 0.6);\n}\n\n.footer .to-job-page {\n  align-content: center;\n  align-items: center;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2pvYnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFFRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBS0U7RUFDRSxrQkFBQTtBQUhKOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUpGOztBQU1FO0VBQ0Usd0JBQUE7QUFKSjs7QUFPRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBTEoiLCJmaWxlIjoiam9icy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLndpdGgtYm9yZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpiZWZvcmUge1xuICAgIC8vIGJvcmRlclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmNmY2ZjY7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaGVhZGVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gIC5jb21wYW55LW5hbWUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAucG9zdC1kYXRlIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxufVxuXG4uam9iLW5hbWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cblxuLmNpdHktc2FsYXJ5IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcblxuICAuc2FsYXJ5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcblxuICBzdmcge1xuICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgfVxuXG4gIC50by1qb2ItcGFnZSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuIl19 */"], components: [{ type: _shared_modules_ranges_ranges_component__WEBPACK_IMPORTED_MODULE_8__["RangesComponent"], selector: "app-ranges", inputs: ["ranges", "activeRange"], outputs: ["toggleRange"] }, { type: _job_preview_job_preview_component__WEBPACK_IMPORTED_MODULE_9__["JobPreviewComponent"], selector: "app-job-preview", inputs: ["job", "isOwner"], outputs: ["gone", "goneBookmarked"] }, { type: _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"], selector: "app-pagination", inputs: ["page", "enabled", "maxPages", "fireFirstPage", "pageable"], outputs: ["onPage", "onPageAttempt"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobsListComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-jobs-list',
                    templateUrl: './jobs-list.component.html',
                    styleUrls: ['./jobs-list.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_6__["JobsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; } });


/***/ }),

/***/ "VU+u":
/*!******************************************************************!*\
  !*** ./src/app/modules/jobs/all-jobs/all-jobs-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AllJobsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJobsRoutingModule", function() { return AllJobsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _all_jobs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-jobs.component */ "gYeg");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _all_jobs_component__WEBPACK_IMPORTED_MODULE_2__["AllJobsComponent"],
    },
];
class AllJobsRoutingModule {
}
AllJobsRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
AllJobsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
AllJobsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                }]
        }] });


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

/***/ "gLAm":
/*!**********************************************************************!*\
  !*** ./src/app/modules/jobs/all-jobs/jobs-list/jobs-ranges.const.ts ***!
  \**********************************************************************/
/*! exports provided: jobsRanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobsRanges", function() { return jobsRanges; });
/* harmony import */ var _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @api/schemas/job/job-order.enum */ "wUCb");

const jobsRanges = (translateService) => {
    return [
        {
            id: 0,
            text: translateService.instant('COMMON.SORT_BY_NUMBER_OF_VIEWS'),
            query: { order: _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_0__["JobOrderEnum"].VIEWS },
        },
        {
            id: 1,
            text: translateService.instant('COMMON.BY_ADDING_TO_BOOKMARKS'),
            query: { order: _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_0__["JobOrderEnum"].BOOKMARKS },
        },
        {
            id: 2,
            text: translateService.instant('COMMON.SORT_BY_TIME_POSTED'),
            query: { order: _api_schemas_job_job_order_enum__WEBPACK_IMPORTED_MODULE_0__["JobOrderEnum"].LAST_POST_TIME },
        }
    ];
};


/***/ }),

/***/ "gYeg":
/*!*************************************************************!*\
  !*** ./src/app/modules/jobs/all-jobs/all-jobs.component.ts ***!
  \*************************************************************/
/*! exports provided: AllJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJobsComponent", function() { return AllJobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @api/routes/showcases.service */ "vb20");
/* harmony import */ var _layout_sidebar_wrapper_live_content_showcase_edit_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @layout/sidebar-wrapper/live-content/showcase-edit-block.service */ "+2XM");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/card/card.component */ "Il9f");
/* harmony import */ var _shared_ui_dots_menu_dots_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ui/dots-menu/dots-menu.component */ "Q69/");
/* harmony import */ var _shared_ui_dots_menu_dots_menu_item_dots_menu_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/ui/dots-menu/dots-menu-item/dots-menu-item.component */ "Cr4O");
/* harmony import */ var _jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jobs-list/jobs-list.component */ "T9ap");
/* harmony import */ var _shared_directives_role_guard_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/role-guard.directive */ "bw2O");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













class AllJobsComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(showcaseService, showcaseEBS, sidebarWrapperService) {
        super();
        this.showcaseService = showcaseService;
        this.showcaseEBS = showcaseEBS;
        this.sidebarWrapperService = sidebarWrapperService;
        this.own = false;
        this.isPublic = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
    }
    showcase() {
        this.showcaseService.create$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((_) => {
            const data = {
                info: {
                    url: 'https://ru.yachtsmanjournal.com/jobs',
                    title: 'Все вакансии',
                    subtitle: 'Перейти ко всем вакансиям',
                },
            };
            return this.showcaseService.patch$(_.id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
                this.showcaseEBS.setId(_.id);
                this.showcaseEBS.toggle();
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe();
    }
}
AllJobsComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsComponent, deps: [{ token: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_3__["ShowcasesService"] }, { token: _layout_sidebar_wrapper_live_content_showcase_edit_block_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseEditBlockService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
AllJobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: AllJobsComponent, selector: "app-all-jobs", usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-ui-card class=\"title-card\" [shadow]=\"false\">\n  <h3 class=\"fade-0\">{{ 'COMMON.VACANCIES_' | translate }}</h3>\n  <app-ui-dots-menu *appRoleGuard=\"'EDITOR$'\">\n    <app-ui-dots-menu-item *appRoleGuard=\"'EDITOR$'\" icon=\"star\" [text]=\"'COMMON.PLACE_AT_DISPLAY_WINDOW' | translate\" (click)=\"showcase()\"\n      ></app-ui-dots-menu-item>\n    </app-ui-dots-menu>\n  </app-ui-card>\n<section class=\"all-jobs\">\n  <app-jobs-list></app-jobs-list>\n</section>\n", styles: [":host {\n  width: 100%;\n}\n\n.title-card ::ng-deep .card {\n  align-items: center;\n  display: flex;\n  height: 80px;\n  margin-bottom: 40px;\n  padding: 0 20px;\n}\n\n.title-card ::ng-deep .card app-ui-dots-menu {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FsbC1qb2JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUtJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZOOztBQUdNO0VBQ0UsaUJBQUE7QUFEUiIsImZpbGUiOiJhbGwtam9icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLnRpdGxlLWNhcmQge1xuICA6Om5nLWRlZXAge1xuICAgIC5jYXJkIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGFwcC11aS1kb3RzLW1lbnUge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], components: [{ type: _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], selector: "app-ui-card", inputs: ["shadow"] }, { type: _shared_ui_dots_menu_dots_menu_component__WEBPACK_IMPORTED_MODULE_7__["DotsMenuComponent"], selector: "app-ui-dots-menu", inputs: ["svgColor"] }, { type: _shared_ui_dots_menu_dots_menu_item_dots_menu_item_component__WEBPACK_IMPORTED_MODULE_8__["DotsMenuItemComponent"], selector: "app-ui-dots-menu-item", inputs: ["icon", "text"] }, { type: _jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_9__["JobsListComponent"], selector: "app-jobs-list" }], directives: [{ type: _shared_directives_role_guard_directive__WEBPACK_IMPORTED_MODULE_10__["RoleGuardDirective"], selector: "[appRoleGuard]", inputs: ["appRoleGuard", "appRoleGuardAnd", "appRoleGuardOr"] }], pipes: { "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: AllJobsComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-all-jobs',
                    templateUrl: './all-jobs.component.html',
                    styleUrls: ['./all-jobs.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_3__["ShowcasesService"] }, { type: _layout_sidebar_wrapper_live_content_showcase_edit_block_service__WEBPACK_IMPORTED_MODULE_4__["ShowcaseEditBlockService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["SidebarWrapperService"] }]; } });


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


/***/ }),

/***/ "xEVO":
/*!**********************************************************!*\
  !*** ./src/app/modules/jobs/all-jobs/all-jobs.module.ts ***!
  \**********************************************************/
/*! exports provided: AllJobsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllJobsModule", function() { return AllJobsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-preview/job-preview.module */ "WCHF");
/* harmony import */ var _all_jobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-jobs.component */ "gYeg");
/* harmony import */ var _jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jobs-list/jobs-list.component */ "T9ap");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _all_jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-jobs-routing.module */ "VU+u");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/modules/ranges/ranges.module */ "iMhr");












class AllJobsModule {
}
AllJobsModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: AllJobsModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
AllJobsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: AllJobsModule, declarations: [_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"], _jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_4__["JobsListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _all_jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["AllJobsRoutingModule"],
        _job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_2__["JobPreviewModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedUiModule"],
        _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_10__["RangesModule"]], exports: [_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"]] });
AllJobsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: AllJobsModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _all_jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["AllJobsRoutingModule"],
            _job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_2__["JobPreviewModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedUiModule"],
            _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_10__["RangesModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: AllJobsModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"], _jobs_list_jobs_list_component__WEBPACK_IMPORTED_MODULE_4__["JobsListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _all_jobs_routing_module__WEBPACK_IMPORTED_MODULE_7__["AllJobsRoutingModule"],
                        _job_preview_job_preview_module__WEBPACK_IMPORTED_MODULE_2__["JobPreviewModule"],
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["CommonDirectivesModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_6__["SharedComponentsModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_9__["SharedUiModule"],
                        _shared_modules_ranges_ranges_module__WEBPACK_IMPORTED_MODULE_10__["RangesModule"]
                    ],
                    exports: [_all_jobs_component__WEBPACK_IMPORTED_MODULE_3__["AllJobsComponent"]],
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=all-jobs-all-jobs-module-es2015.js.map