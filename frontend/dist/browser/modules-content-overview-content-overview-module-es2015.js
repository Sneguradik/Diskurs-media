(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-content-overview-content-overview-module"],{

/***/ "4xBb":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/content-overview/content-overview-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentOverviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOverviewRoutingModule", function() { return ContentOverviewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'topics',
        loadChildren: () => Promise.all(/*! import() | pages-topic-list-page-topic-list-page-module */[__webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-mod~49227114"), __webpack_require__.e("pages-topic-list-page-topic-list-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/topic-list-page/topic-list-page.module */ "WIrz")).then((module) => module.TopicListPageModule)
    },
    {
        path: 'tags',
        loadChildren: () => Promise.all(/*! import() | pages-tag-list-page-tag-list-page-module */[__webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-mod~49227114"), __webpack_require__.e("pages-tag-list-page-tag-list-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/tag-list-page/tag-list-page.module */ "x0/i")).then((module) => module.TagListPageModule)
    },
    {
        path: 'companies',
        loadChildren: () => Promise.all(/*! import() | pages-company-list-page-company-list-page-module */[__webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-mod~49227114"), __webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-module"), __webpack_require__.e("pages-company-list-page-company-list-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/company-list-page/company-list-page.module */ "atZA")).then((module) => module.CompanyListPageModule)
    },
    {
        path: 'authors',
        loadChildren: () => Promise.all(/*! import() | pages-author-list-page-author-list-page-module */[__webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-mod~49227114"), __webpack_require__.e("default~pages-author-list-page-author-list-page-module~pages-company-list-page-company-list-page-module"), __webpack_require__.e("pages-author-list-page-author-list-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/author-list-page/author-list-page.module */ "6K8a")).then((module) => module.AuthorListPageModule)
    }
];
class ContentOverviewRoutingModule {
}
ContentOverviewRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
ContentOverviewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
ContentOverviewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "n0L3":
/*!*********************************************************************!*\
  !*** ./src/app/modules/content-overview/content-overview.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContentOverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentOverviewModule", function() { return ContentOverviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _content_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-overview-routing.module */ "4xBb");




class ContentOverviewModule {
}
ContentOverviewModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
ContentOverviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewModule, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _content_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentOverviewRoutingModule"]] });
ContentOverviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _content_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentOverviewRoutingModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: ContentOverviewModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _content_overview_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentOverviewRoutingModule"]
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=modules-content-overview-content-overview-module-es2015.js.map