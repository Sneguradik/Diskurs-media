(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-topics-topics-module"],{

/***/ "2cIc":
/*!*********************************************************!*\
  !*** ./src/app/modules/topics/topics-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TopicsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsRoutingModule", function() { return TopicsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-topic-edit-page-topic-edit-page-module */ "pages-topic-edit-page-topic-edit-page-module").then(__webpack_require__.bind(null, /*! ./pages/topic-edit-page/topic-edit-page.module */ "bETk")).then((module) => module.TopicEditPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-topic-page-topic-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("common"), __webpack_require__.e("pages-topic-page-topic-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/topic-page/topic-page.module */ "/tmj")).then((module) => module.TopicPageModule)
    }
];
class TopicsRoutingModule {
}
TopicsRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
TopicsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
TopicsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "4l4s":
/*!*************************************************!*\
  !*** ./src/app/modules/topics/topics.module.ts ***!
  \*************************************************/
/*! exports provided: TopicsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsModule", function() { return TopicsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _topics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topics-routing.module */ "2cIc");




class TopicsModule {
}
TopicsModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
TopicsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsModule, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _topics_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicsRoutingModule"]] });
TopicsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _topics_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicsRoutingModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: TopicsModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _topics_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicsRoutingModule"]
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=modules-topics-topics-module-es2015.js.map