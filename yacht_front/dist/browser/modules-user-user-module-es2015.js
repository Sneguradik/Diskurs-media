(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-module"],{

/***/ "9N29K":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "ByCP");




class UserModule {
}
UserModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserModule, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]] });
UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"]
                    ]
                }]
        }] });


/***/ }),

/***/ "ByCP":
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'edit',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-user-edit-page-user-edit-page-module */ "pages-user-edit-page-user-edit-page-module").then(__webpack_require__.bind(null, /*! ./pages/user-edit-page/user-edit-page.module */ "oTXG")).then((module) => module.UserEditPageModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts',
    },
    {
        path: 'posts',
        loadChildren: () => Promise.all(/*! import() | pages-user-posts-page-user-posts-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-user-posts-page-user-posts-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-posts-page/user-posts-page.module */ "VUcV")).then((module) => module.UserPostsPageModule)
    },
    {
        path: 'comments',
        loadChildren: () => Promise.all(/*! import() | pages-user-comments-page-user-comments-page-module */[__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-comments-page-user-comments-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-comments-page/user-comments-page.module */ "wPwW")).then((module) => module.UserCommentsPageModule)
    },
    {
        path: 'drafts',
        loadChildren: () => Promise.all(/*! import() | pages-user-drafts-page-user-drafts-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~pages-user-drafts-page-user-drafts-page-module~pages-user-posts-page-user-posts-page-module"), __webpack_require__.e("pages-user-drafts-page-user-drafts-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-drafts-page/user-drafts-page.module */ "fvRY")).then((module) => module.UserDraftsPageModule)
    },
    {
        path: 'promoted',
        loadChildren: () => Promise.all(/*! import() | pages-user-promoted-page-user-promoted-page-module */[__webpack_require__.e("default~pages-all-page-all-page-module~pages-home-page-home-page-module~pages-news-page-news-page-mo~788d06f5"), __webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"), __webpack_require__.e("default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"), __webpack_require__.e("pages-user-promoted-page-user-promoted-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-promoted-page/user-promoted-page.module */ "GAkG")).then((module) => module.UserPromotedPageModule)
    },
    {
        path: 'info',
        loadChildren: () => Promise.all(/*! import() | pages-user-info-page-user-info-page-module */[__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-info-page-user-info-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-info-page/user-info-page.module */ "FhSU")).then((module) => module.UserInfoPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() | pages-user-notifications-page-user-notifications-page-module */[__webpack_require__.e("default~pages-topic-page-topic-page-module~pages-user-comments-page-user-comments-page-module~pages-~3a7e322c"), __webpack_require__.e("default~pages-user-comments-page-user-comments-page-module~pages-user-drafts-page-user-drafts-page-m~a99588bb"), __webpack_require__.e("pages-user-notifications-page-user-notifications-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-notifications-page/user-notifications-page.module */ "oG45"))
            .then((module) => module.UserNotificationsPageModule)
    },
    {
        path: 'events',
        loadChildren: () => Promise.all(/*! import() | pages-user-events-page-user-events-page-module */[__webpack_require__.e("default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"), __webpack_require__.e("common"), __webpack_require__.e("pages-user-events-page-user-events-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-events-page/user-events-page.module */ "Sy3t")).then((module) => module.UserEventsPageModule)
    },
    {
        path: 'jobs',
        loadChildren: () => Promise.all(/*! import() | pages-user-jobs-page-user-jobs-page-module */[__webpack_require__.e("default~all-jobs-all-jobs-module~pages-user-jobs-page-user-jobs-page-module~pages-user-promoted-page~90d31588"), __webpack_require__.e("pages-user-jobs-page-user-jobs-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/user-jobs-page/user-jobs-page.module */ "9W2b")).then((module) => module.UserJobsPageModule)
    }
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
UserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
UserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=modules-user-user-module-es2015.js.map