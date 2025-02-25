(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-not-found-not-found-module"],{

/***/ "1NIu":
/*!**********************************************************!*\
  !*** ./src/app/modules/not-found/not-found.component.ts ***!
  \**********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class NotFoundComponent {
    constructor(sidebarWrapperService) {
        this.sidebarWrapperService = sidebarWrapperService;
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
    }
}
NotFoundComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundComponent, deps: [{ token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarWrapperService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: NotFoundComponent, selector: "app-not-found", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<section class=\"not-found-component font-1\">\n    <h5><b>{{ 'COMMON.NOT_FOUND_PAGE.HEADER' | translate }}</b></h5>\n    <h5>{{ 'COMMON.NOT_FOUND_PAGE.MAIN' | translate }}</h5>\n    <h5>{{ 'COMMON.NOT_FOUND_PAGE.SEARCH' | translate }}</h5>\n    <ul>\n        <li><h5><a routerLink=\"/popular/editorschoice\">{{ 'COMMON.NOT_FOUND_PAGE.EDITORS_CHOICE.TITLE' | translate }}</a>{{ 'COMMON.NOT_FOUND_PAGE.EDITORS_CHOICE.DESCRIPTION' | translate }}</h5></li>\n        <li><h5><a routerLink=\"/popular/week\">{{ 'COMMON.NOT_FOUND_PAGE.POPULAR.TITLE' | translate }}</a>{{ 'COMMON.NOT_FOUND_PAGE.POPULAR.DESCRIPTION' | translate }}</h5></li>\n        <li><h5><a routerLink=\"/authors\">{{ 'COMMON.NOT_FOUND_PAGE.AUTHORS.TITLE' | translate }}</a>{{ 'COMMON.NOT_FOUND_PAGE.AUTHORS.DESCRIPTION' | translate }}</h5></li>\n    </ul>\n    <h5>{{ 'COMMON.NOT_FOUND_PAGE.FOOTER' | translate }}</h5>\n</section>", styles: [".font-1,\n.overline,\n.button-1,\n.button-2,\n.subtitle-1,\n.subtitle-2,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.font-2,\n.caption,\n.body-1,\n.body-2,\n.body-3 {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh5 {\n  font-weight: 500;\n}\n\nh1 {\n  font-size: 40px;\n}\n\nh2 {\n  font-size: 34px;\n}\n\nh3 {\n  font-size: 28px;\n}\n\nh4 {\n  font-size: 24px;\n  font-weight: 400;\n}\n\nh5 {\n  font-size: 20px;\n}\n\nh6 {\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.body-1 {\n  font-size: 18px;\n}\n\n.body-2 {\n  font-size: 16px;\n  line-height: 22px;\n}\n\n.body-3 {\n  font-size: 14px;\n  line-height: 22px;\n}\n\n.subtitle-1,\n.subtitle-2 {\n  font-size: 14px;\n}\n\n.subtitle-1 {\n  font-weight: 500;\n}\n\n.subtitle-2 {\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n.subtitle-2 > a {\n  color: black;\n}\n\n.button-1,\n.button-2 {\n  cursor: pointer;\n  font-weight: 500;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.button-1 {\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.button-2 {\n  font-size: 12px;\n  line-height: 16px;\n  cursor: pointer;\n}\n\n.button-4 {\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.caption {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.overline {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n}\n\n:host {\n  width: 100%;\n}\n\n.not-found-component {\n  width: 100%;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  padding: 10px;\n  color: rgba(0, 0, 0, 0.7);\n  border-color: rgba(0, 0, 0, 0.7);\n  border-width: 1px;\n  box-sizing: border-box;\n}\n\n.not-found-component h5 {\n  margin-bottom: 20px;\n  font-weight: normal;\n}\n\n.not-found-component a {\n  color: #00b7ff;\n  text-decoration: underline;\n}\n\n.not-found-component hr {\n  display: block;\n  width: 50px;\n  margin-left: 0;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9mb250LnNjc3MiLCIuLi8uLi8uLi8uLi9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztFQUVFLGlDQUFBO0FDV0Y7O0FEUkE7Ozs7O0VBRUUsb0NBQUE7QUNjRjs7QURYQTs7Ozs7O0VBUUUsU0FBQTtFQUNBLFVBQUE7QUNZRjs7QURUQTs7OztFQUlFLGdCQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0FDY0Y7O0FEWkE7RUFDRSxlQUFBO0FDZUY7O0FEWkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNlRjs7QURiQTtFQUNFLGVBQUE7QUNnQkY7O0FEYkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNnQkY7O0FEUkE7RUFDRSxlQUFBO0FDV0Y7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURSQTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQ1VGOztBRFBBOztFQUlFLGVBQUE7QUNRRjs7QUROQTtFQUNFLGdCQUFBO0FDU0Y7O0FEUEE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEVEU7RUFDRSxZQUFBO0FDV0o7O0FEUEE7O0VBS0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQ09GOztBREpBO0VBRUUsZUFBQTtFQUNBLGVBQUE7QUNNRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDT0Y7O0FESkE7RUFHRSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURGQTtFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUFoSUE7RUFDSSxXQUFBO0FBbUlKOztBQWhJQTtFQUNJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EseUJDTkk7RURPSixnQ0NQSTtFRFFKLGlCQUFBO0VBQ0Esc0JBQUE7QUFtSUo7O0FBaklJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQW1JUjs7QUFoSUk7RUFDSSxjQ3ZCRTtFRHdCRiwwQkFBQTtBQWtJUjs7QUEvSEk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWlJUiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC0xLFxuJWZvbnQtMSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtMixcbiVmb250LTIge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIEBleHRlbmQgJWZvbnQtMTtcblxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg1IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmgxIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuaDIge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5oMyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5ib2R5LTEsXG4uYm9keS0yLFxuLmJvZHktMyB7XG4gIEBleHRlbmQgJWZvbnQtMjtcbn1cbi5ib2R5LTEge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ib2R5LTIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uYm9keS0zLFxuJWJvZHktMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5zdWJ0aXRsZS0xLFxuLnN1YnRpdGxlLTIge1xuICBAZXh0ZW5kICVmb250LTE7XG5cbiAgZm9udC1zaXplOiAxNHB4OyAgXG59XG4uc3VidGl0bGUtMSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uc3VidGl0bGUtMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICYgPiBhe1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4uYnV0dG9uLTEsXG4uYnV0dG9uLTIsXG4lYnV0dG9uLTEge1xuICBAZXh0ZW5kICVmb250LTE7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJ1dHRvbi0xLFxuJWJ1dHRvbi0xIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXR0b24tMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24tNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FwdGlvbiB7XG4gIEBleHRlbmQgJWZvbnQtMjtcblxuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5vdmVybGluZSB7XG4gIEBleHRlbmQgJWZvbnQtMTtcblxuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIiwiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5AaW1wb3J0ICdzcmMvc3R5bGVzL2ZvbnQuc2Nzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm5vdC1mb3VuZC1jb21wb25lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICRsYWJlbDtcbiAgICBib3JkZXItY29sb3I6ICRsYWJlbDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgaDUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGhyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG59IiwiJHByaW1hcnk6ICMwMGI3ZmY7XG4kY2FwdGlvbjogIzk3OTc5NztcbiRpY29uOiAjOTI5MjlkO1xuJGdyYXk6ICM5MjkyOWQ7XG4kaW5wdXQ6ICM2OTY5NzQ7XG4kZXJyb3I6ICNmZjViMzY7XG4kbGFiZWw6IHJnYmEoMCwgMCwgMCwgMC43KTtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNmMWYxZjU7XG4kbGlnaHRlci1ncmF5OiAjZTJlMmVhO1xuJGxpZ2h0LWdyYXk6ICNkNWQ1ZGM7XG5cbiRsaWdodC1ibHVlOiByZ2JhKDAsIDE4MywgMjU1LCAwLjMpO1xuIl19 */"], directives: [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-not-found',
                    templateUrl: './not-found.component.html',
                    styleUrls: ['./not-found.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_1__["SidebarWrapperService"] }]; } });


/***/ }),

/***/ "mGJb":
/*!***************************************************************!*\
  !*** ./src/app/modules/not-found/not-found-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "1NIu");





const routes = [
    {
        path: '',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];
class NotFoundRoutingModule {
}
NotFoundRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
NotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
NotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
        }] });


/***/ }),

/***/ "r4Gc":
/*!*******************************************************!*\
  !*** ./src/app/modules/not-found/not-found.module.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component */ "1NIu");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "mGJb");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








class NotFoundModule {
}
NotFoundModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
NotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundModule, declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] });
NotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: NotFoundModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
                    ]
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=modules-not-found-not-found-module-es2015.js.map