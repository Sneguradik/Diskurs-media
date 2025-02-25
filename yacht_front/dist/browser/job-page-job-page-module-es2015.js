(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-page-job-page-module"],{

/***/ "J9Co":
/*!********************************************************************!*\
  !*** ./src/app/modules/jobs/job-page/job-page-unwrap.component.ts ***!
  \********************************************************************/
/*! exports provided: JobPageUnwrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageUnwrapComponent", function() { return JobPageUnwrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/routes/jobs.service */ "YWUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/companies.service */ "qPE0");
/* harmony import */ var _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layout/dynamic-meta-tags/dynamic-meta-tags.service */ "xAOu");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _job_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./job-page.component */ "kSPd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













class JobPageUnwrapComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(jobsService, activatedRoute, sessionService, companyService, dynamicMetaTagsService, router, sidebarWrapperService) {
        super();
        this.jobsService = jobsService;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.companyService = companyService;
        this.dynamicMetaTagsService = dynamicMetaTagsService;
        this.router = router;
        this.sidebarWrapperService = sidebarWrapperService;
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.job = this.activatedRoute.snapshot.data.data;
        this.setPreInfo();
        this.company$ = this.companyService.getSingle$(this.job.company.meta.id);
        this.own$ = this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => user && this.job.company.meta.id === user.meta.id));
        this.jobsService.view$(this.job.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe();
    }
    ngOnDestroy() {
        this.dynamicMetaTagsService.setToDefault();
        super.ngOnDestroy();
    }
    setPreInfo() {
        this.dynamicMetaTagsService.metaInfo$.next({
            title: this.job.info.name,
            tags: [
                { property: 'og:title', content: this.job.info.name },
                {
                    name: 'description',
                    content: this.job.body.requirements
                        ? this.job.body.requirements
                        : 'Вакансия на Diskurs.Media'
                },
                {
                    property: 'og:description',
                    content: this.job.body.requirements
                        ? this.job.body.requirements
                        : 'Вакансия на Diskurs.Media'
                },
                { property: 'og:url', content: _env__WEBPACK_IMPORTED_MODULE_3__["environment"].url + this.router.url },
                { property: 'og:image', content: this.job.body.image },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Diskurs.Media' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: this.job.info.name },
                {
                    name: 'twitter:description',
                    content: this.job.body.requirements
                        ? this.job.body.requirements
                        : 'Вакансия на Diskurs.Media'
                },
                { name: 'twitter:image', content: this.job.body.image }
            ]
        });
    }
}
JobPageUnwrapComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageUnwrapComponent, deps: [{ token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"] }, { token: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_8__["DynamicMetaTagsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
JobPageUnwrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: JobPageUnwrapComponent, selector: "app-job-page-unwrap", host: { styleAttribute: "width: 100%" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-job-page \n    [job]=\"job\" \n    [own]=\"own$ | async\" \n    [company]=\"company$ | async\">\n</app-job-page>", styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hcHAtam9iLXBhZ2UtdW53cmFwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQUE7QUM2aUJJO0VEbmlCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRHdpQkk7RUQ3aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FEa2lCSTtFRHZoQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUFkQTtFQUNFLFdBQUE7QUFpQkYiLCJmaWxlIjoiYXBwLWpvYi1wYWdlLXVud3JhcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvYXQtaW1wb3J0LW5vLXBhcnRpYWwtbGVhZGluZy11bmRlcnNjb3JlICovXG5AaW1wb3J0ICd+aW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhJztcblxuJGJyZWFrcG9pbnRzOiAoXG4gIHhsYXJnZTogMTQwMHB4LFxuICBsYXJnZTogMTA2MHB4LFxuICBtZWRpdW06IDc2N3B4LFxuICBzbWFsbDogMzc1cHgsXG4pO1xuXG4uaGlkZS1sdC1tZWRpdW0ge1xuICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtZ2UtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJz49bWVkaXVtJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaGlkZS1sdC1sYXJnZSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc8bGFyZ2UnKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgaHR0cHM6Ly9lZHVhcmRvYm91Y2FzLmdpdGh1Yi5pby9pbmNsdWRlLW1lZGlhXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEtpdHR5IEdpcmF1ZGVsIChAa2l0dHlnaXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NyYy9zdHlsZXMvcmVzcG9uc2l2ZSc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"], components: [{ type: _job_page_component__WEBPACK_IMPORTED_MODULE_10__["JobPageComponent"], selector: "app-job-page", inputs: ["job", "company", "own"] }], pipes: { "async": _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageUnwrapComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-job-page-unwrap',
                    templateUrl: 'app-job-page-unwrap.html',
                    styleUrls: ['./app-job-page-unwrap.scss'],
                    host: { style: 'width: 100%' }
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_4__["JobsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"] }, { type: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_8__["DynamicMetaTagsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__["SidebarWrapperService"] }]; } });


/***/ }),

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

/***/ "KEfy":
/*!**********************************************************!*\
  !*** ./src/app/modules/jobs/job-page/job-page.module.ts ***!
  \**********************************************************/
/*! exports provided: JobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageModule", function() { return JobPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _job_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-page.component */ "kSPd");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _job_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-page-routing.module */ "NI/M");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./job-page-unwrap.component */ "J9Co");
/* harmony import */ var _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/modules/user-info/user-info.module */ "tu4A");













class JobPageModule {
}
JobPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
JobPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPageModule, declarations: [_job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_9__["JobPageUnwrapComponent"],
        _job_page_component__WEBPACK_IMPORTED_MODULE_2__["JobPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _job_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["JobPageRoutingModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["CommonDirectivesModule"],
        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]], exports: [_job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_9__["JobPageUnwrapComponent"]] });
JobPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _job_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["JobPageRoutingModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["CommonDirectivesModule"],
            _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: JobPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [
                        _job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_9__["JobPageUnwrapComponent"],
                        _job_page_component__WEBPACK_IMPORTED_MODULE_2__["JobPageComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _job_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["JobPageRoutingModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["CommonDirectivesModule"],
                        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                    ],
                    exports: [
                        _job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_9__["JobPageUnwrapComponent"]
                    ],
                }]
        }] });


/***/ }),

/***/ "NI/M":
/*!******************************************************************!*\
  !*** ./src/app/modules/jobs/job-page/job-page-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: JobPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageRoutingModule", function() { return JobPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-page-unwrap.component */ "J9Co");
/* harmony import */ var _shared_services_jobs_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/jobs-resolver.service */ "TXbX");






const routes = [
    {
        path: '',
        component: _job_page_unwrap_component__WEBPACK_IMPORTED_MODULE_2__["JobPageUnwrapComponent"],
        resolve: { data: _shared_services_jobs_resolver_service__WEBPACK_IMPORTED_MODULE_3__["JobsResolverService"] }
    },
];
class JobPageRoutingModule {
}
JobPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
JobPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
JobPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
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

/***/ "TXbX":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/jobs-resolver.service.ts ***!
  \**********************************************************/
/*! exports provided: JobsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsResolverService", function() { return JobsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/not-found.operator */ "TNbK");
/* harmony import */ var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/routes/jobs.service */ "YWUd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class JobsResolverService {
    constructor(jobsService, router) {
        this.jobsService = jobsService;
        this.router = router;
    }
    resolve(route) {
        return this.jobsService.getSingle$(+route.params.id).pipe(Object(_shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__["notFound"])(this.router));
    }
}
JobsResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobsResolverService, deps: [{ token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable });
JobsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobsResolverService, providedIn: 'root' });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobsResolverService, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_2__["JobsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; } });


/***/ }),

/***/ "kSPd":
/*!*************************************************************!*\
  !*** ./src/app/modules/jobs/job-page/job-page.component.ts ***!
  \*************************************************************/
/*! exports provided: JobPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPageComponent", function() { return JobPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_utils_money_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/money-format */ "JbfT");
/* harmony import */ var _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/schemas/job/job-currency.enum */ "oSL1");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/jobs.service */ "YWUd");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @layout/shared/services/user-dropdown.service */ "6cGZ");
/* harmony import */ var _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/ui/card/card.component */ "Il9f");
/* harmony import */ var _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/modules/user-info/user-info.component */ "Ozdm");
/* harmony import */ var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/modules/svg/svg/svg.component */ "ax+O");
/* harmony import */ var _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/share/share.component */ "xGVH");
/* harmony import */ var _shared_components_action_menu_action_menu_job_action_menu_job_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/components/action-menu/action-menu-job/action-menu-job.component */ "B/ID");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/directives/logged-in.directive */ "DwHT");
/* harmony import */ var _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/pipes/custom-date.pipe */ "cUwi");
/* harmony import */ var _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/pipes/url.pipe */ "k/DK");
/* harmony import */ var _shared_pipes_trunk_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/pipes/trunk.pipe */ "G/9y");























class JobPageComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_3__["AbstractComponent"] {
    constructor(translateService, jobsService, changeDetectorRef, sessionService, sidebarWrapperService, router, userDropdown) {
        super();
        this.translateService = translateService;
        this.jobsService = jobsService;
        this.changeDetectorRef = changeDetectorRef;
        this.sessionService = sessionService;
        this.sidebarWrapperService = sidebarWrapperService;
        this.router = router;
        this.userDropdown = userDropdown;
        this.publicationStageEnum = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_5__["PublicationStageEnum"];
        this.contactsRevealed = false;
    }
    get salary() {
        const result = [];
        if (this.job.info.minSalary) {
            result.push(this.translateService.instant('COMMON.FROM'), Object(_shared_utils_money_format__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(+this.job.info.minSalary, _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_2__["JobCurrencyEnum"][this.job.info.currency]));
        }
        if (this.job.info.maxSalary) {
            result.push(this.translateService.instant('COMMON.TO'), Object(_shared_utils_money_format__WEBPACK_IMPORTED_MODULE_1__["formatMoney"])(+this.job.info.maxSalary, _api_schemas_job_job_currency_enum__WEBPACK_IMPORTED_MODULE_2__["JobCurrencyEnum"][this.job.info.currency]));
        }
        return result.join(' ');
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.shareBody = 'https://ru.yachtsmanjournal.com' + this.router.url;
        this.linkVk = 'https://vk.com/share.php?url=' + this.shareBody;
        this.linkFb = 'https://www.facebook.com/sharer/sharer.php?u=' + this.shareBody;
        this.linkTw = 'https://twitter.com/intent/tweet?url=' + this.shareBody;
        this.linkIn = 'https://vk.com/share.php?url=' + this.shareBody;
        this.linkTg = 'tg://msg_url?url=' + this.shareBody;
    }
    goTo(url) {
        window.open(url, '_blank');
    }
    toggleShare() {
        this.share = !this.share;
    }
    bookmark() {
        if (this.sessionService.loggedIn$.value) {
            this.jobsService.bookmark$(this.job.meta.id, this.job.bookmarks.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngOnDestroy$)).subscribe(() => {
                this.job.bookmarks.you = !this.job.bookmarks.you;
                this.job.bookmarks.count += this.job.bookmarks.you ? 1 : -1;
                this.changeDetectorRef.markForCheck();
            });
        }
        else {
            this.userDropdown.setShowDropdown(true);
        }
    }
}
JobPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageComponent, deps: [{ token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { token: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"] }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__["SidebarWrapperService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { token: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["UserDropdownService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
JobPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: JobPageComponent, selector: "app-job-page", inputs: { job: "job", company: "company", own: "own" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-ui-card [shadow]='false'>\n  <header class=\"margin-bottom-20\">\n    <section class=\"v-center mobile-small\">\n      <app-user-info class=\"margin-right-20\" [user]=\"company\"></app-user-info>\n      <span *ngIf=\"job.info.publicationStage !== publicationStageEnum.PUBLISHED\" class=\"overline c-caption\">\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E</span>\n      <div class=\"v-center align-right\">\n        <span class=\"caption fade-3 margin-right-8\">{{ job.info.publishedAt | customDate }}</span>\n        <svg name=\"bookmark\" class=\"f-gray icon clickable margin-right-8\" \n          [class.active]=\"job.bookmarks.you\" (click)=\"bookmark()\"></svg>\n        <app-share class=\"margin-right-10\" [url]=\"null | url\"></app-share>\n        <app-action-menu-job *appLoggedIn [data]=\"job\" [own]=\"own\" (gone)=\"this.router.navigate(['/jobs'])\">\n        </app-action-menu-job>\n      </div>\n    </section>\n  </header>\n  <article class=\"margin-bottom-30\">\n    <section class=\"margin-bottom-20\">\n      <h2 class=\"margin-bottom-30\">{{ job.info.name }}</h2>\n      <div class=\"fade-1 v-center space-between items-h6\">\n        <h6 class=\"item-h6\" >{{ salary ? salary : ('COMMON.INTERVIEW_SALARY' | translate) }}</h6>\n        <h6 class=\"item-h6\">{{ job.info.type === 'FULL' ? ('COMMON.FULL_TIME' | translate) : ('COMMON.PART_TIME' | translate) }}</h6>\n        <h6 class=\"item-h6\">{{ job.info.place === 'OFFICE' ? ('COMMON.TO_OFFICE' | translate) : ('COMMON.REMOTE_' | translate) }}</h6>\n        <h6 class=\"item-h6\" *ngIf=\"job.info.city\">{{ job.info.city | trunk:14 }}</h6>\n      </div>\n    </section>\n    <hr class=\"blue-line margin-bottom-30\">\n    <section class=\"margin-bottom-30\">\n      <section class=\"margin-bottom-30\">\n        <h3 class=\"fade-1 margin-bottom-10\">{{ 'COMMON.TASKS' | translate }}</h3>\n        <div [innerText]=\"job.body.tasks\"></div>\n      </section>\n      <hr class=\"blue-line margin-bottom-30\">\n      <section class=\"margin-bottom-30\">\n        <h3 class=\"fade-1 margin-bottom-10\">{{ 'COMMON.JOB_CONDITIONS' | translate }}</h3>\n        <div [innerText]=\"job.body.workConditions\"></div>\n      </section>\n      <hr class=\"blue-line margin-bottom-30\">\n      <section>\n        <h3 class=\"fade-1 margin-bottom-10\">{{ 'COMMON.REQUIREMENTS' | translate }}</h3>\n        <div [innerText]=\"job.body.requirements\"></div>\n      </section>\n    </section>\n    <hr class=\"blue-line margin-bottom-30\">\n    <section class=\"contact\">\n      <div>\n        <ng-container *ngIf=\"!contactsRevealed\">\n          <button class=\"primary-icon-button\" (click)=\"contactsRevealed = true\">\n            <span class=\"button-1\">{{ 'COMMON.SEND_THE_RESUME' | translate }}</span>\n            <svg name=\"mail\"></svg>\n          </button>\n        </ng-container>\n        <ng-container *ngIf=\"contactsRevealed\">\n          <div>\n            <h3 class=\"c-primary\">{{ 'COMMON.CONTACTS' | translate }}</h3>\n            <div class=\"contact-card margin-bottom-20\">\n              <span class=\"subtitle-1 fade-1\">{{ 'COMMON.CONTACT_PERSON' | translate }}</span>\n              <div class=\"font-1\">\n                {{ job.info.recruiterName }}\n                <svg class=\"f-gray\" name=\"user\"></svg>\n              </div>\n            </div>\n            <div class=\"contact-card\">\n              <span class=\"subtitle-1 fade-1\">\u041F\u043E\u0447\u0442\u0430 \u0434\u043B\u044F \u0441\u043E\u0438\u0441\u043A\u0430\u0442\u0435\u043B\u0435\u0439</span>\n              <div class=\"font-1\">\n                {{ job.info.email }}\n                <svg class=\"f-gray\" name=\"mail\"></svg>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <div>\n        <img *ngIf=\"job.body.image\" [src]=\"job.body.image\" [alt]=\"job.info.name\">\n      </div>\n    </section>\n  </article>\n  <footer>\n    <section class=\"v-center margin-bottom-20\">\n      <div class=\"c-gray v-center margin-right-20 clickable\" [class.c-primary]=\"job.bookmarks.you\" (click)=\"bookmark()\">\n        <svg name=\"bookmark\" class=\"margin-right-4 icon f-gray\"\n          [class.active]=\"job.bookmarks && job.bookmarks.you\"></svg>\n        <span class=\"subtitle-2\">{{ job.bookmarks.count }}</span>\n      </div>\n      <div class=\"v-center margin-right-20\">\n        <svg name=\"view\" class=\"margin-right-4 icon f-gray\"></svg>\n        <span class=\"subtitle-2 c-gray\">{{ job.views.count }}</span>\n      </div>\n      <app-share [url]=\"null | url\" style=\"width: 100%;\" [wide]=\"true\"></app-share>\n      <!--<app-contact-compact-list class=\"align-right\" [contacts]=\"company.contacts\"></app-contact-compact-list>-->\n    </section>\n    <hr class=\"blue-line\">\n  </footer>\n</app-ui-card>\n", styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\n.contact-form {\n  display: flex;\n  justify-content: space-between;\n}\n.contact-form .contacts-bar {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0.6;\n}\n.contact-form .contacts-bar .title {\n  color: #00b7ff;\n  display: flex;\n  padding-top: 0;\n}\n.contact-form .contacts-bar .annotation {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  padding-bottom: 15px;\n  padding-top: 20px;\n}\n.contact-form .contacts-bar .name-mail {\n  align-content: center;\n  align-items: center;\n  border-bottom: 2px solid rgba(0, 183, 255, 0.3);\n  color: #44444f;\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: normal;\n  justify-content: space-between;\n  letter-spacing: 0.1px;\n  line-height: 19px;\n  padding-bottom: 9px;\n}\n.contact-form .contacts-bar .name-mail svg {\n  fill: gray;\n}\n.contact-form .job-image img {\n  max-height: 200px;\n  max-width: 270px;\n}\n.items-h6 .item-h6:last-child {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 100px;\n}\n@media (max-width: 499px) {\n  .items-h6 {\n    display: block;\n    -moz-columns: 2;\n         columns: 2;\n    -moz-column-gap: 25px;\n         column-gap: 25px;\n  }\n  .items-h6 .item-h6 {\n    margin-bottom: 8px;\n    font-size: 16px;\n  }\n}\n@media (max-width: 374px) {\n  .mobile-small {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: auto;\n  }\n}\n.contact {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n}\n.contact > :first-child {\n  flex: 2 1 auto;\n  margin-right: 40px;\n}\n.contact img {\n  max-height: 200px;\n  max-width: 300px;\n}\n@media only screen and (max-width: 500px) {\n  .contact {\n    flex-direction: column-reverse;\n    align-items: flex-start;\n  }\n  .contact > :first-child {\n    display: block;\n    margin: 20px 0;\n    width: 100%;\n  }\n  .contact > :last-child {\n    width: 100%;\n  }\n  .contact img {\n    max-height: unset;\n    max-width: 100%;\n    width: 100%;\n  }\n}\n.contact-card div {\n  border-bottom: 1.5px solid rgba(0, 183, 255, 0.3);\n  color: #44444f;\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 0 8px;\n  word-break: break-word;\n}\n.primary-icon-button {\n  align-items: center;\n  background: #00b7ff;\n  border: 1px solid #00b7ff;\n  border-radius: 15px;\n  color: white;\n  display: flex;\n  height: 35px;\n  justify-content: center;\n  padding: 0 18px;\n}\n.primary-icon-button span {\n  margin-right: 8px;\n}\n.primary-icon-button svg {\n  fill: white;\n}\n.share {\n  align-items: center;\n  display: inline-flex;\n  padding: 0 12px;\n}\n.share--bottom {\n  padding: 0;\n}\n.share > * {\n  margin-right: 6px;\n}\n.share a {\n  text-decoration: none;\n}\n:host {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9qb2ItcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBQTtBQzZpQkk7RURuaUJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FEd2lCSTtFRDdoQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QURraUJJO0VEdmhCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBQWRBO0VBQ0UsV0FBQTtBQWlCRjtBQWRBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBaUJGO0FBZkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBaUJKO0FBZkk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFpQk47QUFkSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFnQk47QUFiSTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWVOO0FBYk07RUFDRSxVQUFBO0FBZVI7QUFUSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFXTjtBQUxFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFRSjtBRGtlSTtFQ3JlRjtJQUNFLGNBQUE7SUFDQSxlQUFBO1NBQUEsVUFBQTtJQUNBLHFCQUFBO1NBQUEsZ0JBQUE7RUFPRjtFQU5FO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VBUUo7QUFDRjtBRHNkSTtFQ3pkRjtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsMkJBQUE7RUFNRjtBQUNGO0FBSEE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUtGO0FBSkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFNSjtBQUpFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQU1KO0FBSkU7RUFaRjtJQWFJLDhCQUFBO0lBQ0EsdUJBQUE7RUFPRjtFQU5FO0lBQ0UsY0FBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VBUUo7RUFORTtJQUNFLFdBQUE7RUFRSjtFQU5FO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQVFKO0FBQ0Y7QUFIRTtFQUNFLGlEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFNSjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxtQkN2SVE7RUR3SVIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUtGO0FBSkU7RUFDRSxpQkFBQTtBQU1KO0FBSkU7RUFDRSxXQUFBO0FBTUo7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBS0Y7QUFIRTtFQUNFLFVBQUE7QUFLSjtBQUZFO0VBQ0UsaUJBQUE7QUFJSjtBQURFO0VBQ0UscUJBQUE7QUFHSjtBQUNBO0VBQ0UscUJBQUE7QUFFRiIsImZpbGUiOiJqb2ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2F0LWltcG9ydC1uby1wYXJ0aWFsLWxlYWRpbmctdW5kZXJzY29yZSAqL1xuQGltcG9ydCAnfmluY2x1ZGUtbWVkaWEvZGlzdC9faW5jbHVkZS1tZWRpYSc7XG5cbiRicmVha3BvaW50czogKFxuICB4bGFyZ2U6IDE0MDBweCxcbiAgbGFyZ2U6IDEwNjBweCxcbiAgbWVkaXVtOiA3NjdweCxcbiAgc21hbGw6IDM3NXB4LFxuKTtcblxuLmhpZGUtbHQtbWVkaXVtIHtcbiAgQGluY2x1ZGUgbWVkaWEoJzxtZWRpdW0nKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWRlLWdlLW1lZGl1bSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc+PW1lZGl1bScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmhpZGUtbHQtbGFyZ2Uge1xuICBAaW5jbHVkZSBtZWRpYSgnPGxhcmdlJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgIGh0dHBzOi8vZWR1YXJkb2JvdWNhcy5naXRodWIuaW8vaW5jbHVkZS1tZWRpYVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBLaXR0eSBHaXJhdWRlbCAoQGtpdHR5Z2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEtpdHR5IEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdzcmMvc3R5bGVzL3Jlc3BvbnNpdmUnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFjdC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIC5jb250YWN0cy1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDAuNjtcblxuICAgIC50aXRsZSB7XG4gICAgICBjb2xvcjogIzAwYjdmZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB9XG5cbiAgICAuYW5ub3RhdGlvbiB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAubmFtZS1tYWlsIHtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAxODMsIDI1NSwgMC4zKTtcbiAgICAgIGNvbG9yOiAjNDQ0NDRmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuXG4gICAgICBzdmcge1xuICAgICAgICBmaWxsOiBncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5qb2ItaW1hZ2Uge1xuICAgIGltZyB7XG4gICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgfVxuICB9XG59XG5cbi5pdGVtcy1oNntcbiAgLml0ZW0taDY6bGFzdC1jaGlsZHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYSgnPDUwMHB4Jyl7XG4gIC5pdGVtcy1oNntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2x1bW5zOiAyO1xuICAgIGNvbHVtbi1nYXA6IDI1cHg7XG4gICAgLml0ZW0taDZ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhKCc8c21hbGwnKSB7XG4gIC5tb2JpbGUtc21hbGwge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICB9XG59XG5cbi5jb250YWN0IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICA+IDpmaXJzdC1jaGlsZCB7XG4gICAgZmxleDogMiAxIGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICB9XG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA1MDBweCl7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgID4gOmZpcnN0LWNoaWxkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgPiA6bGFzdC1jaGlsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5jb250YWN0LWNhcmQge1xuICBkaXYge1xuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYmEoMCwgMTgzLCAyNTUsIDAuMyk7XG4gICAgY29sb3I6ICM0NDQ0NGY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweCAwIDhweDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG59XG5cbi5wcmltYXJ5LWljb24tYnV0dG9uIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbiAgc3ZnIHtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxufVxuXG4uc2hhcmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMCAxMnB4O1xuXG4gICYtLWJvdHRvbSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gID4gKiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cblxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuOmhvc3Qge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4iLCIkcHJpbWFyeTogIzAwYjdmZjtcbiRjYXB0aW9uOiAjOTc5Nzk3O1xuJGljb246ICM5MjkyOWQ7XG4kZ3JheTogIzkyOTI5ZDtcbiRpbnB1dDogIzY5Njk3NDtcbiRlcnJvcjogI2ZmNWIzNjtcbiRsYWJlbDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuXG4kbGlnaHRlc3QtZ3JheTogI2YxZjFmNTtcbiRsaWdodGVyLWdyYXk6ICNlMmUyZWE7XG4kbGlnaHQtZ3JheTogI2Q1ZDVkYztcblxuJGxpZ2h0LWJsdWU6IHJnYmEoMCwgMTgzLCAyNTUsIDAuMyk7XG4iXX0= */"], components: [{ type: _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"], selector: "app-ui-card", inputs: ["shadow"] }, { type: _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_13__["UserInfoComponent"], selector: "app-user-info", inputs: ["user"] }, { type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_14__["SvgComponent"], selector: "svg[name]", inputs: ["name", "w", "h", "size"] }, { type: _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_15__["ShareComponent"], selector: "app-share", inputs: ["url", "spec", "wide"] }, { type: _shared_components_action_menu_action_menu_job_action_menu_job_component__WEBPACK_IMPORTED_MODULE_16__["ActionMenuJobComponent"], selector: "app-action-menu-job", inputs: ["data", "own"], outputs: ["gone"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_18__["LoggedInDirective"], selector: "[appLoggedIn]" }], pipes: { "customDate": _shared_pipes_custom_date_pipe__WEBPACK_IMPORTED_MODULE_19__["CustomDatePipe"], "url": _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_20__["UrlPipe"], "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], "trunk": _shared_pipes_trunk_pipe__WEBPACK_IMPORTED_MODULE_21__["TrunkPipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: JobPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-job-page',
                    templateUrl: './job-page.component.html',
                    styleUrls: ['./job-page.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _api_routes_jobs_service__WEBPACK_IMPORTED_MODULE_7__["JobsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_9__["SidebarWrapperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["UserDropdownService"] }]; }, propDecorators: { job: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], company: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], own: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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


/***/ })

}]);
//# sourceMappingURL=job-page-job-page-module-es2015.js.map