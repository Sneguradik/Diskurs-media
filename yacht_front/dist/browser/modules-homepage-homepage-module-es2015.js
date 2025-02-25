(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-homepage-homepage-module"],{

/***/ "IWSN":
/*!*************************************************************!*\
  !*** ./src/app/modules/homepage/homepage-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomepageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageRoutingModule", function() { return HomepageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/guards/master.guard */ "jJpQ");
/* harmony import */ var _shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/guards/guards */ "AME3");






const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-home-page-home-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~dcd1f135"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module"), __webpack_require__.e("pages-home-page-home-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/home-page/home-page.module */ "TPmu")).then((module) => module.HomePageModule),
        canActivate: [_shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_2__["MasterGuard"]],
        data: { guards: [_shared_guards_guards__WEBPACK_IMPORTED_MODULE_3__["PersonalFeedGuard"]], guardsRelation: 'AND', alternativeRoute: '/all' },
    },
    {
        path: 'all',
        loadChildren: () => Promise.all(/*! import() | pages-all-page-all-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~dcd1f135"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-all-page-all-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/all-page/all-page.module */ "0OOX")).then((module) => module.AllPageModule)
    },
    {
        path: 'popular',
        loadChildren: () => Promise.all(/*! import() | pages-popular-page-popular-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~dcd1f135"), __webpack_require__.e("pages-popular-page-popular-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/popular-page/popular-page.module */ "B/Hh")).then((module) => module.PopularPageModule)
    }
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
HomepageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
HomepageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "pIwm":
/*!*****************************************************!*\
  !*** ./src/app/modules/homepage/homepage.module.ts ***!
  \*****************************************************/
/*! exports provided: HomepageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageModule", function() { return HomepageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage-routing.module */ "IWSN");




class HomepageModule {
}
HomepageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
HomepageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageModule, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomepageRoutingModule"]] });
HomepageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomepageRoutingModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: HomepageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomepageRoutingModule"]
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=modules-homepage-homepage-module-es2015.js.map