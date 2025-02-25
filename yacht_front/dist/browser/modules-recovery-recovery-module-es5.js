(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-recovery-recovery-module"], {
    /***/
    "9XUY":
    /*!*****************************************************!*\
      !*** ./src/app/modules/recovery/recovery.module.ts ***!
      \*****************************************************/

    /*! exports provided: RecoveryModule */

    /***/
    function XUY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoveryModule", function () {
        return RecoveryModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recovery-routing.module */
      "UW+r");
      /* harmony import */


      var _recovery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./recovery.component */
      "q8Ph");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");

      var RecoveryModule = /*#__PURE__*/_createClass(function RecoveryModule() {
        _classCallCheck(this, RecoveryModule);
      });

      RecoveryModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      RecoveryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryModule,
        declarations: [_recovery_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"]]
      });
      RecoveryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_recovery_component__WEBPACK_IMPORTED_MODULE_3__["RecoveryComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recovery_routing_module__WEBPACK_IMPORTED_MODULE_2__["RecoveryRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "UW+r":
    /*!*************************************************************!*\
      !*** ./src/app/modules/recovery/recovery-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RecoveryRoutingModule */

    /***/
    function UWR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoveryRoutingModule", function () {
        return RecoveryRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _recovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./recovery.component */
      "q8Ph");

      var routes = [{
        path: '',
        component: _recovery_component__WEBPACK_IMPORTED_MODULE_2__["RecoveryComponent"]
      }];

      var RecoveryRoutingModule = /*#__PURE__*/_createClass(function RecoveryRoutingModule() {
        _classCallCheck(this, RecoveryRoutingModule);
      });

      RecoveryRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      RecoveryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      RecoveryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryRoutingModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "q8Ph":
    /*!********************************************************!*\
      !*** ./src/app/modules/recovery/recovery.component.ts ***!
      \********************************************************/

    /*! exports provided: RecoveryComponent */

    /***/
    function q8Ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecoveryComponent", function () {
        return RecoveryComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _api_routes_recovery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @api/routes/recovery.service */
      "11vM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/ui/card/card.component */
      "Il9f");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var RecoveryComponent = /*#__PURE__*/function () {
        function RecoveryComponent(recovery, route, router, fb) {
          _classCallCheck(this, RecoveryComponent);

          this.recovery = recovery;
          this.route = route;
          this.router = router;
          this.fb = fb;
        }

        return _createClass(RecoveryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              passwordRepeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }, {
              validators: function validators(group) {
                if (group.controls.password.value === group.controls.passwordRepeat.value) {
                  return null;
                }

                return {
                  mismatch: true
                };
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.recovery.change$(this.route.snapshot.queryParams.code, this.route.snapshot.queryParams.email, this.form.get('password').value).subscribe(function () {
              _this.router.navigate(['/']);
            });
          }
        }]);
      }();

      RecoveryComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryComponent,
        deps: [{
          token: _api_routes_recovery_service__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          token: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      RecoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: RecoveryComponent,
        selector: "app-recovery",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<div class=\"rec-container\">\n    <app-ui-card>\n        <h2>\u0424\u043E\u0440\u043C\u0430 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0430\u0440\u043E\u043B\u044F</h2>\n        <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n            <div class=\"margin-bottom-8\" [ngClass]=\"{error: form.controls['password'].invalid}\">\n                <label [for]=\"'input-login-password'\" class=\"caption\">\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n                <div class=\"v-center\">\n                    <input type=\"password\" [attr.id]=\"'input-login-password'\" formControlName=\"password\" minlength=\"8\" maxlength=\"128\">\n                </div>\n            </div>\n            <div class=\"margin-bottom-16\" [ngClass]=\"{error: form.hasError('mismatch')}\">\n                <label [for]=\"'input-login-password'\" class=\"caption\">{{ 'COMMON.CONFIRM_THE_PASSWORD'  | translate}}</label>\n                <div class=\"v-center\">\n                    <input type=\"password\" [attr.id]=\"'input-login-password'\" formControlName=\"passwordRepeat\" minlength=\"8\" maxlength=\"128\">\n                </div>\n            </div>\n            <div>\n              <button type=\"submit\" class=\"button-1\" [disabled]=\"form.invalid\">\n                {{ 'COMMON.FORGET_YOUR_PASSWORD' | translate }}\n              </button>\n            </div>\n        </form>\n    </app-ui-card>\n</div>\n\n",
        styles: [".rec-container {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  padding-top: 50px;\n  width: 100%;\n}\n.rec-container h2 {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 25px;\n  font-weight: 600;\n  line-height: 38px;\n  padding: 20px;\n  text-align: left;\n}\n.rec-container form {\n  margin: 0 auto;\n  width: 375px;\n}\n.rec-container form label {\n  color: #d5d5dc;\n  display: block;\n  padding-bottom: 10px;\n}\n.rec-container form input {\n  background: none;\n  border: 0;\n  border-bottom: 1px solid #d5d5dc;\n  flex-grow: 1;\n  font-size: 14px;\n  line-height: 22px;\n  margin-bottom: 10px;\n}\n.rec-container form input:focus {\n  border-bottom: 1px solid black;\n}\n.rec-container form button {\n  border-radius: 15px;\n  color: #92929d;\n  font-size: 15px;\n  height: 46px;\n  padding: 0.5em;\n  transition: 1s;\n  width: 100%;\n}\n.rec-container form .error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlY292ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUFOO0FBR0k7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUROO0FBR007RUFDRSw4QkFBQTtBQURSO0FBS0k7RUFDRSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUpOO0FBYUk7RUFDRSxVQUFBO0FBWE4iLCJmaWxlIjoicmVjb3ZlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjLWNvbnRhaW5lciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcblxuICBoMiB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICBmb3JtIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogMzc1cHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogI2Q1ZDVkYztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDVkNWRjO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCAjOTI5MjlkO1xuICAgICAgY29sb3I6ICM5MjkyOWQ7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC8vJjpob3ZlciB7XG4gICAgICAvLyAgICAgIC8vICBib3JkZXI6IDFweCBzb2xpZCAjMDBiN2ZmO1xuICAgICAgLy8gICAgICAvLyAgY29sb3I6ICMwMGI3ZmY7XG4gICAgICAvLyAgICAgIC8vICB0cmFuc2l0aW9uOiAxcztcbiAgICAgIC8vICAgICAgLy99XG4gICAgfVxuXG4gICAgLmVycm9yIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAvLyBlcnJvciBzdHlsZXMgaGVyZVxuICAgIH1cbiAgfVxufVxuIl19 */"],
        components: [{
          type: _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"],
          selector: "app-ui-card",
          inputs: ["shadow"]
        }],
        directives: [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"],
          selector: "form:not([ngNoForm]):not([ngNativeValidate])"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
          selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
          selector: "[formGroup]",
          inputs: ["formGroup"],
          outputs: ["ngSubmit"],
          exportAs: ["ngForm"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"],
          selector: "[ngClass]",
          inputs: ["class", "ngClass"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
          selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
          selector: "[formControlName],[ngModel],[formControl]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
          selector: "[formControlName]",
          inputs: ["disabled", "formControlName", "ngModel"],
          outputs: ["ngModelChange"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"],
          selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
          inputs: ["minlength"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"],
          selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
          inputs: ["maxlength"]
        }],
        pipes: {
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: RecoveryComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-recovery',
            templateUrl: './recovery.component.html',
            styleUrls: ['./recovery.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_recovery_service__WEBPACK_IMPORTED_MODULE_2__["RecoverPasswordService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-recovery-recovery-module-es5.js.map