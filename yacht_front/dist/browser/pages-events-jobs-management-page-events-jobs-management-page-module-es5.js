(function () {
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-jobs-management-page-events-jobs-management-page-module"], {
    /***/
    "N4Rz":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/events-jobs-management-page/events-jobs-management-page-routing.module.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: EventsJobsManagementPageRoutingModule */

    /***/
    function N4Rz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsJobsManagementPageRoutingModule", function () {
        return EventsJobsManagementPageRoutingModule;
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


      var _events_jobs_management_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events-jobs-management-page.component */
      "QOrC");

      var routes = [{
        path: '',
        component: _events_jobs_management_page_component__WEBPACK_IMPORTED_MODULE_2__["EventsJobsManagementPageComponent"]
      }];

      var EventsJobsManagementPageRoutingModule = /*#__PURE__*/_createClass(function EventsJobsManagementPageRoutingModule() {
        _classCallCheck(this, EventsJobsManagementPageRoutingModule);
      });

      EventsJobsManagementPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      EventsJobsManagementPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      EventsJobsManagementPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageRoutingModule,
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
    "QOrC":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/events-jobs-management-page/events-jobs-management-page.component.ts ***!
      \**************************************************************************************************************/

    /*! exports provided: EventsJobsManagementPageComponent */

    /***/
    function QOrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsJobsManagementPageComponent", function () {
        return EventsJobsManagementPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @api/routes/administration.service */
      "5IOP");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _components_events_jobs_management_block_events_jobs_management_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/events-jobs-management-block/events-jobs-management-block.component */
      "s8eT");

      var EventsJobsManagementPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function EventsJobsManagementPageComponent(administrationService, sidebarWrapperService) {
          var _this;

          _classCallCheck(this, EventsJobsManagementPageComponent);

          _this = _callSuper(this, EventsJobsManagementPageComponent);
          _this.administrationService = administrationService;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          _this.saved = false;
          return _this;
        }

        _inherits(EventsJobsManagementPageComponent, _shared_classes_abstr);

        return _createClass(EventsJobsManagementPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.sidebarWrapperService.params$.next({
                article: false,
                trending: false,
                navigation: false,
                live: false,
                showSidebar: false
              });
            });
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this3 = this;

            this.administrationService.getEventsJobs$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (controls) {
              return _this3.data$.next(controls);
            });
          }
        }, {
          key: "postData",
          value: function postData() {
            var _this4 = this;

            this.administrationService.postEventsJobs$(this.data$.getValue()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              _this4.saved = true;
              setTimeout(function () {
                _this4.saved = false;
              }, 5000);
            });
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]);

      EventsJobsManagementPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageComponent,
        deps: [{
          token: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_4__["AdministrationService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      EventsJobsManagementPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: EventsJobsManagementPageComponent,
        selector: "app-events-jobs-management-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-events-jobs-management-block [data$]=\"data$\"\n                                  [saved]=\"saved\"\n                                  (saveReq)=\"postData()\"\n                                  (resetReq)=\"getData()\">\n</app-events-jobs-management-block>\n",
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudHMtam9icy1tYW5hZ2VtZW50LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
        components: [{
          type: _components_events_jobs_management_block_events_jobs_management_block_component__WEBPACK_IMPORTED_MODULE_6__["EventsJobsManagementBlockComponent"],
          selector: "app-events-jobs-management-block",
          inputs: ["data$", "saved"],
          outputs: ["saveReq", "resetReq"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-events-jobs-management-page',
            templateUrl: './events-jobs-management-page.component.html',
            styleUrls: ['./events-jobs-management-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_4__["AdministrationService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_5__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    },

    /***/
    "Rr0d":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/events-jobs-management-page/events-jobs-management-page.module.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: EventsJobsManagementPageModule */

    /***/
    function Rr0d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsJobsManagementPageModule", function () {
        return EventsJobsManagementPageModule;
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


      var _events_jobs_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events-jobs-management-page-routing.module */
      "N4Rz");
      /* harmony import */


      var _events_jobs_management_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./events-jobs-management-page.component */
      "QOrC");
      /* harmony import */


      var _components_events_jobs_management_block_events_jobs_management_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/events-jobs-management-block/events-jobs-management-block.component */
      "s8eT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var EventsJobsManagementPageModule = /*#__PURE__*/_createClass(function EventsJobsManagementPageModule() {
        _classCallCheck(this, EventsJobsManagementPageModule);
      });

      EventsJobsManagementPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      EventsJobsManagementPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageModule,
        declarations: [_events_jobs_management_page_component__WEBPACK_IMPORTED_MODULE_3__["EventsJobsManagementPageComponent"], _components_events_jobs_management_block_events_jobs_management_block_component__WEBPACK_IMPORTED_MODULE_4__["EventsJobsManagementBlockComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_jobs_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsJobsManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
      });
      EventsJobsManagementPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_jobs_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsJobsManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_events_jobs_management_page_component__WEBPACK_IMPORTED_MODULE_3__["EventsJobsManagementPageComponent"], _components_events_jobs_management_block_events_jobs_management_block_component__WEBPACK_IMPORTED_MODULE_4__["EventsJobsManagementBlockComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_jobs_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsJobsManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "s8eT":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/events-jobs-management-page/components/events-jobs-management-block/events-jobs-management-block.component.ts ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: EventsJobsManagementBlockComponent */

    /***/
    function s8eT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsJobsManagementBlockComponent", function () {
        return EventsJobsManagementBlockComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var EventsJobsManagementBlockComponent = /*#__PURE__*/function () {
        function EventsJobsManagementBlockComponent(fb) {
          _classCallCheck(this, EventsJobsManagementBlockComponent);

          this.fb = fb;
          this.saved = false;
          this.saveReq = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.resetReq = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.viewForm = this.fb.group({
            firstViewEvents: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            firstViewJobs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            secondViewEvents: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            secondViewJobs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            thirdViewEvents: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            thirdViewJobs: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]]
          });
        }

        return _createClass(EventsJobsManagementBlockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._setFormValue();
          }
        }, {
          key: "_setFormValue",
          value: function _setFormValue() {
            var _this5 = this;

            this.data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(Boolean)).subscribe(function (data) {
              _this5.viewForm.setValue({
                firstViewEvents: data.firstView.events,
                firstViewJobs: data.firstView.jobs,
                secondViewEvents: data.secondView.events,
                secondViewJobs: data.secondView.jobs,
                thirdViewEvents: data.thirdView.events,
                thirdViewJobs: data.thirdView.jobs
              });
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.resetReq.emit();
          }
        }, {
          key: "changeData",
          value: function changeData(value, patch, type) {
            this.data$.next(Object.assign(Object.assign({}, this.data$.getValue()), _defineProperty({}, patch, Object.assign(Object.assign({}, this.data$.getValue()[patch]), _defineProperty({}, type, value)))));
          }
        }, {
          key: "paramsSwitcher",
          value: function paramsSwitcher() {
            this.data$.next(Object.assign(Object.assign({}, this.data$.getValue()), {
              publicationsBottom: !this.data$.getValue().publicationsBottom
            }));
          }
        }, {
          key: "save",
          value: function save() {
            this.data$.next(Object.assign(Object.assign({}, this.data$.getValue()), {
              firstView: {
                jobs: Number(this.viewForm.get('firstViewJobs').value),
                events: Number(this.viewForm.get('firstViewEvents').value)
              },
              secondView: {
                jobs: Number(this.viewForm.get('secondViewJobs').value),
                events: Number(this.viewForm.get('secondViewEvents').value)
              },
              thirdView: {
                jobs: Number(this.viewForm.get('thirdViewJobs').value),
                events: Number(this.viewForm.get('thirdViewEvents').value)
              }
            }));
            this.saveReq.emit();
          }
        }]);
      }();

      EventsJobsManagementBlockComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementBlockComponent,
        deps: [{
          token: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      EventsJobsManagementBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: EventsJobsManagementBlockComponent,
        selector: "app-events-jobs-management-block",
        inputs: {
          data$: "data$",
          saved: "saved"
        },
        outputs: {
          saveReq: "saveReq",
          resetReq: "resetReq"
        },
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<form *ngIf=\"data$ | async\" class=\"admin-form\">\n    <fieldset class=\"admin-form__fieldset\">\n        <table class=\"admin-form__tab\">\n            <thead>\n                <tr>\n                    <th>\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440</th>\n                    <th>{{ 'COMMON.EVENT_' | translate }}</th>\n                    <th>{{ 'COMMON.VACANCIES_' | translate }}</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><b>\u0413\u0434\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C</b></td>\n                    <td></td>\n                    <td></td>\n                </tr>\n                <tr>\n                    <td>{{ 'COMMON.MY_NEWSFEED' | translate }}</td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"feedEvents\"\n                                   [ngModel]=\"(data$ | async).feed.events\"\n                                   (ngModelChange)=\"changeData($event, 'feed', 'events')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"feedJobs\"\n                                   [ngModel]=\"(data$ | async).feed.jobs\"\n                                   (ngModelChange)=\"changeData($event, 'feed', 'jobs')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                </tr>\n                <tr>\n                    <td>{{ 'COMMON.PUBLICATIONS' | translate }}</td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"publicationsEvents\"\n                                   [ngModel]=\"(data$ | async).publications.events\"\n                                   (ngModelChange)=\"changeData($event, 'publications', 'events')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"publicationsJobs\"\n                                   [ngModel]=\"(data$ | async).publications.jobs\"\n                                   (ngModelChange)=\"changeData($event, 'publications', 'jobs')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                </tr>\n                <tr>\n                    <td>{{ 'COMMON.POPULAR' | translate }}</td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"popularEvents\"\n                                   [ngModel]=\"(data$ | async).popular.events\"\n                                   (ngModelChange)=\"changeData($event, 'popular', 'events')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                    <td>\n                        <label class=\"admin-check\">\n                            <input type=\"checkbox\"\n                                   name=\"popularJobs\"\n                                   [ngModel]=\"(data$ | async).popular.jobs\"\n                                   (ngModelChange)=\"changeData($event, 'popular', 'jobs')\">\n                            <span class=\"admin-check__txt\"></span>\n                        </label>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\u041F\u043E\u0434 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0435\u0439 <br>[\u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C]</td>\n                    <td>\n                        <label class=\"admin-big-check\">\n                            <input type=\"checkbox\"\n                                   name=\"publicationsBottomEvents\"\n                                   [ngModel]=\"(data$ | async).publicationsBottom\"\n                                   (ngModelChange)=\"paramsSwitcher()\">\n                            <span class=\"admin-big-check__txt\"></span>\n                        </label>\n                    </td>\n                    <td>\n                        <label class=\"admin-big-check\">\n                            <input type=\"checkbox\"\n                                   name=\"publicationsBottomJobs\"\n                                   [ngModel]=\"!(data$ | async).publicationsBottom\"\n                                   (ngModelChange)=\"paramsSwitcher()\">\n                            <span class=\"admin-big-check__txt\"></span>\n                        </label>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </fieldset>\n    <fieldset class=\"admin-form__fieldset\" *ngIf=\"viewForm\" [formGroup]=\"viewForm\">\n        <legend class=\"admin-form__legend\">\u041F\u043E\u043A\u0430\u0437\u044B \u0432 \u043B\u0435\u043D\u0442\u0435 <br><small>[\u043F\u043E\u0441\u043B\u0435 \u043A\u0430\u043A\u043E\u0439 \u043F\u043E \u0441\u0447\u0451\u0442\u0443 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0432\u0435\u0440\u0445\u0443]</small></legend>\n        <table class=\"admin-form__tab\">\n            <tbody>\n                <tr>\n                    <td>\u041F\u0435\u0440\u0432\u044B\u0439 \u043F\u043E\u043A\u0430\u0437</td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"firstViewEvents\"\n                               formControlName=\"firstViewEvents\">\n                    </td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"firstViewJobs\"\n                               formControlName=\"firstViewJobs\">\n                    </td>\n                </tr>\n                <tr>\n                    <td>\u0412\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043A\u0430\u0437</td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"secondViewEvents\"\n                               formControlName=\"secondViewEvents\">\n                    </td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"secondViewJobs\"\n                               formControlName=\"secondViewJobs\">\n                    </td>\n                </tr>\n                <tr>\n                    <td>\u0422\u0440\u0435\u0442\u0438\u0439 \u043F\u043E\u043A\u0430\u0437</td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"thirdViewEvents\"\n                               formControlName=\"thirdViewEvents\">\n                    </td>\n                    <td>\n                        <input type=\"number\"\n                               class=\"admin-input\"\n                               [min]=\"0\"\n                               name=\"thirdViewJobs\"\n                               formControlName=\"thirdViewJobs\">\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </fieldset>\n    <div class=\"admin-form__bar\">\n        <button class=\"btn admin-btn_white\"\n                type=\"submit\"\n                [disabled]=\"viewForm.invalid\"\n                (click)=\"save()\">{{ saved ? '\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B' : '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F' }}</button>\n        <button class=\"btn admin-btn_blue\" (click)=\"reset()\">{{ 'COMMON.UNDO' | translate }}</button>\n    </div>\n</form>\n",
        styles: ["/*baisic*/\nhtml {\n  -webkit-locale: \"ru-RU\";\n  direction: ltr;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  min-height: 100%;\n  background: #f0f0f0;\n}\nhtml, body {\n  min-height: 100%;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  background: #f0f0f0;\n}\nbody {\n  font: 400 16px/1.2 \"Open Sans\", sans-serif;\n  color: #000;\n  background: #f0f0f0;\n  min-width: 310px;\n  min-height: 100%;\n  position: relative;\n  overflow-x: hidden;\n  opacity: 1;\n  -moz-font-feature-settings: \"kern\";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: none;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.clearfix {\n  -ms-zoom: 1;\n  zoom: 1;\n}\n*, *:before, *:after, .input--search {\n  box-sizing: border-box;\n}\n/*typographyc*/\nol, ul, li {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\nh1, h2, h3, h4, p {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n  outline: none;\n  transition: 0.25s ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/*buttons*/\n.btn {\n  display: block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: none;\n  box-shadow: none;\n  transition: 0.25s ease;\n  cursor: pointer;\n  border-radius: 0;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.btn::-moz-focus-inner {\n  border: 0;\n}\n.btn:disabled {\n  cursor: default;\n  opacity: 0.3;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nsvg {\n  display: block;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n/*layout*/\n.wrapper {\n  overflow: hidden;\n  min-height: 100%;\n}\n.main {\n  min-height: 100vh;\n}\n.admin-wrap {\n  max-width: 1024px;\n  padding: 0 20px;\n  margin: 0 auto;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  -o-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.admin-bar {\n  width: 260px;\n  margin-right: 40px;\n  margin-bottom: 30px;\n}\n.admin-content {\n  width: calc(100% - 260px - 40px);\n}\n.admin-blc {\n  padding: 22px 20px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n}\n.admin-blc__grey {\n  background-color: #FAFAFB;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n}\n.admin-blc__white {\n  background-color: #fff;\n}\n.admin-blc__title,\n.admin-blc__subtitle {\n  font-family: \"Roboto\";\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 22px;\n}\n.admin-blc__title {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  margin: 18px 0;\n  border-bottom: 1px solid #E5E5E5;\n  padding-bottom: 6px;\n}\n.admin-blc__subtitle {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n}\n.admin-full {\n  width: 100%;\n}\n@media only screen and (max-width: 767px) {\n  .admin-wrap {\n    padding: 0 15px;\n    display: block;\n  }\n\n  .admin-bar {\n    width: 100%;\n    margin: 0 0 20px;\n  }\n\n  .admin-content {\n    width: 100%;\n  }\n}\n/*nav*/\n.admin-nav {\n  background: #fff;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 20px;\n}\n.admin-nav li {\n  border-bottom: 1px solid #F6F6F6;\n}\n.admin-nav li:last-child {\n  border-bottom: none;\n}\n.admin-nav li a {\n  padding: 10px 0;\n  display: block;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.admin-nav li a:hover,\n.admin-nav li a.active {\n  color: #00b7ff;\n}\n/*form*/\n.admin-form > *:first-child {\n  margin-top: 0;\n}\n.admin-form > *:last-child {\n  margin-bottom: 0;\n}\n.admin-form__fieldset {\n  display: block;\n  margin: 0 0 15px;\n  padding: 0;\n  border: none;\n  outline: none;\n  max-width: 100%;\n  min-inline-size: auto;\n}\n.admin-form__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 24px;\n}\n.admin-form__bar .btn {\n  margin-right: 24px;\n}\n.admin-form__bar .btn:last-child {\n  margin-right: 0;\n}\n.admin-form__wrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.admin-form__wrap-main {\n  flex-grow: 1;\n  margin-right: 30px;\n}\n.admin-form__wrap-bar {\n  padding-top: 37px;\n}\n.admin-form__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: 15px 0;\n}\n.admin-form__legend {\n  font-weight: 600;\n}\n.admin-form__col-title {\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 6px;\n}\n/*select*/\n.admin-select {\n  width: 100%;\n}\n/*input*/\n.admin-input {\n  display: block;\n  width: 100%;\n  outline: none;\n  transition: 0.25s ease;\n  box-shadow: none;\n  -webkit-appearance: none;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  padding: 8px 19px;\n  font-size: 14px;\n}\n/*input*/\n.admin-textarea {\n  display: block;\n  width: 100%;\n  outline: none;\n  transition: 0.25s ease;\n  box-shadow: none;\n  -webkit-appearance: none;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  padding: 8px 19px;\n  font-size: 14px;\n  height: 100px;\n  resize: none;\n}\n.admin-textarea_100 {\n  height: 52px;\n}\n/*buttons*/\n.admin-btn_white {\n  height: 42px;\n  line-height: 40px;\n  border-radius: 21px;\n  padding: 0 13px;\n  background: #fff;\n  border: 1px solid #00B9FA;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: #00B9FA;\n  text-align: center;\n  white-space: nowrap;\n}\n.admin-btn_blue {\n  height: 42px;\n  line-height: 40px;\n  border-radius: 21px;\n  padding: 0 13px;\n  background: #00B9FA;\n  border: 1px solid #00B9FA;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n}\n.admin-btn_m {\n  width: 200px;\n}\n/*admin-input-row*/\n.admin-input-row {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  margin: 12px 0;\n}\n.admin-input-blc {\n  display: block;\n  margin: 12px 0;\n}\n.admin-input-blc .admin-input-row__title {\n  margin-bottom: 6px;\n}\n.admin-input-row__title {\n  display: block;\n}\n.admin-input-row .admin-input-row__title {\n  width: 170px;\n}\n.admin-input-row .admin-input-row__title_m {\n  width: 220px;\n}\n.admin-input-row .admin-input-row__title_s {\n  width: 70px;\n  font-size: 14px;\n}\n.admin-input-row__inputgroup {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  flex-grow: 1;\n}\n.admin-input-row__inputgroup span {\n  white-space: nowrap;\n}\n.admin-input-row__input {\n  width: 90px;\n}\n.admin-input_m {\n  width: 160px;\n}\n.admin-input_s {\n  width: 110px;\n}\n.admin-input_xs {\n  width: 65px;\n}\n.admin-input-row .admin-select {\n  width: 220px;\n}\n.admin-input-row__inputgroup .admin-input + .admin-input,\n.admin-input-row__inputgroup .admin-input + .admin-check {\n  margin-left: 25px;\n}\n.admin-input-row__inputwrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  font-size: 14px;\n  width: 270px;\n}\n.admin-input-row__inputwrap .admin-input {\n  max-width: 30%;\n  flex-grow: 1;\n  background: none;\n  border: none;\n}\n@media only screen and (max-width: 767px) {\n  .admin-input-row {\n    -o-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n\n  .admin-input-row__title {\n    padding: 7px 0;\n  }\n}\n/*add*/\n.admin-form__add {\n  width: 34px;\n  height: 34px;\n}\n/*form tab*/\n.admin-form__tab {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 380px;\n}\n.admin-form__tab th {\n  padding: 8px 12px;\n  text-align: center;\n}\n.admin-form__tab tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-form__tab tbody tr:last-child {\n  border-bottom: none;\n}\n.admin-form__tab td {\n  padding: 8px 12px;\n  font-size: 14px;\n}\n.admin-form__tab th:first-child,\n.admin-form__tab td:first-child {\n  padding-left: 0;\n  text-align: left;\n  width: 140px;\n}\n.admin-form__tab .admin-input {\n  margin: 0 auto;\n}\n.admin-form__tab .admin-check {\n  width: 15px;\n  height: 15px;\n  margin: 0 auto;\n  display: block;\n  padding-left: 15px;\n}\n.admin-form__tab .admin-big-check {\n  margin: 0 auto;\n}\n/*del*/\n.admin-form__del {\n  width: 34px;\n  height: 34px;\n}\n/*admin-popup*/\n.admin-popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n}\n.admin-popup__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.admin-popup__main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  padding: 54px 20px 20px;\n  background: #FCFCFC;\n  border: 1px solid #FCFCFC;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-popup__close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 24px;\n  height: 24px;\n  z-index: 2;\n}\n.admin-popup__title {\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23px;\n  margin-bottom: 10px;\n}\n.admin-popup__txt {\n  margin-bottom: 30px;\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-popup__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.admin-popup__bar .admin-btn_white {\n  flex-grow: 1;\n  margin-right: 20px;\n}\n/*dropdown*/\n.admin-dropdown {\n  position: relative;\n}\n.admin-dropdown__content {\n  display: none;\n  position: absolute;\n  left: -15px;\n  top: 100%;\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  text-align: left;\n  padding: 20px 12px;\n  z-index: 10;\n}\n.admin-dropdown__content::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -19px;\n  left: 10px;\n  display: block;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 26px solid #fff;\n}\n.admin-dropdown__content_left {\n  left: auto;\n  right: -15px;\n}\n.admin-dropdown__content_left::before {\n  left: auto;\n  right: 10px;\n}\n.admin-dropdown__content .admin-check__txt {\n  white-space: nowrap;\n}\n.admin-dropdown__content .admin-check {\n  margin: 8px 0;\n}\n.admin-dropdown__content .admin-check:first-child {\n  margin-top: 0;\n}\n.admin-dropdown__content .admin-check:last-child {\n  margin-bottom: 0;\n}\n.admin-dropdown__content a {\n  white-space: nowrap;\n  display: block;\n  padding: 8px 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.6);\n  border-bottom: 1px solid #F6F6F6;\n}\n.admin-dropdown__content a:last-child {\n  border-bottom: none;\n}\n.admin-dropdown__content a:hover {\n  color: #000;\n}\n.admin-dropdown__content.show {\n  display: block;\n}\n.admin-dropdown__btn {\n  width: 16px;\n  height: 16px;\n}\n.admin-dropdown__btn svg {\n  fill: rgba(0, 0, 0, 0.6);\n}\n/*table*/\n.admin-tab-wrap {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.admin-tab {\n  width: 100%;\n  border-collapse: collapse;\n}\n.admin-tab tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-tab td {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.admin-tab td:nth-child(2) {\n  word-break: break-all;\n}\n.admin-tab td, .admin-tab th {\n  padding: 12px 10px;\n  text-align: center;\n  vertical-align: top;\n}\n.admin-tab td:first-child, .admin-tab th:first-child {\n  padding-left: 20px;\n}\n.admin-tab td:last-child, .admin-tab th:last-child {\n  padding-right: 20px;\n}\n.admin-tab td {\n  text-align: center;\n  font-size: 14px;\n}\n.admin-tab__sort {\n  white-space: nowrap;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n.admin-tab__sort-icn {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.admin-tab__sort-icn svg {\n  fill: rgba(0, 0, 0, 0.6);\n}\n/*admin-check*/\n.admin-check {\n  display: inline-block;\n  padding-left: 25px;\n  position: relative;\n}\n.admin-check__txt {\n  color: #696974;\n  font-size: 14px;\n  line-height: 22px;\n  min-height: 15px;\n  display: inline-block;\n}\n.admin-check__txt::before {\n  content: \"\";\n  display: block;\n  background: #e6e6e6;\n  border: 0 solid #000;\n  border-radius: 5px;\n  height: 15px;\n  left: 0;\n  position: absolute;\n  top: 3px;\n  width: 15px;\n  cursor: pointer;\n}\n.admin-check input {\n  display: none;\n}\n.admin-check input:checked + .admin-check__txt::before {\n  background: #3dd598;\n}\n.admin-check input:checked + .admin-check__txt::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  height: 7px;\n  left: 5px;\n  top: 5px;\n  transform: rotate(45deg);\n  width: 3px;\n  box-sizing: unset;\n  cursor: pointer;\n}\n/*admin-big-check*/\n.admin-big-check {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: relative;\n}\n.admin-big-check__txt::before {\n  content: \"\";\n  display: block;\n  background: #e6e6e6;\n  border: 0 solid #000;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n}\n.admin-big-check input {\n  display: none;\n}\n.admin-big-check input:checked + .admin-big-check__txt::before {\n  background: #3dd598;\n}\n.admin-big-check input:checked + .admin-big-check__txt::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  height: 9px;\n  left: 7px;\n  top: 4px;\n  transform: rotate(45deg);\n  width: 4px;\n  box-sizing: unset;\n  cursor: pointer;\n}\n/*upload*/\n.admin-upload__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 15px 0 10px;\n}\n.admin-upload__label {\n  display: inline-block;\n  margin-right: 30px;\n}\n.admin-upload__label input {\n  display: none;\n}\n.admin-upload__add {\n  color: #00B9FA;\n  text-decoration: underline;\n}\n.admin-upload__del:hover,\n.admin-upload__add:hover {\n  text-decoration: none;\n}\n.admin-upload__del {\n  color: rgba(0, 0, 0, 0.6);\n  text-decoration: underline;\n}\n.admin-upload__wrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 15px;\n  border: 1px dashed rgba(0, 0, 0, 0.6);\n  min-height: 100px;\n}\n.admin-upload__wrap-plus {\n  width: 40px;\n  height: 40px;\n}\n/*admin-bar-list*/\n.admin-bar-list {\n  background: #fff;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 20px;\n}\n.admin-bar-list__title {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  margin-bottom: 10px;\n}\n.admin-bar-list {\n  list-style: none;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.8);\n  counter-reset: num;\n}\n.admin-bar-list li {\n  list-style: none;\n  position: relative;\n  padding-left: 20px;\n  margin-top: 0.8em;\n}\n.admin-bar-list li:before {\n  content: counter(num) \".\";\n  counter-increment: num;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*admin-tabs*/\n.admin-tabs__nav {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-end;\n  align-items: flex-end;\n  justify-content: flex-start;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  margin-bottom: 15px;\n}\n.admin-tabs__link {\n  margin-right: 25px;\n  display: block;\n  padding-bottom: 15px;\n  font-size: 15px;\n  line-height: 18px;\n  color: rgba(0, 0, 0, 0.7);\n  position: relative;\n  bottom: -1px;\n}\n.admin-tabs__link.active {\n  color: #00B9FA;\n}\n.admin-tabs__link.active::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  border-radius: 3px 3px 0 0;\n  background-color: #00B9FA;\n}\n.admin-tabs__pane {\n  display: none;\n}\n.admin-tabs__pane.show {\n  display: block;\n}\n.admin-tabs__filter {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-bottom: 15px;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 15px;\n}\n.admin-tabs__filter .admin-select {\n  width: 200px;\n  margin-left: 15px;\n}\n/*author*/\n.admin-author {\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-author__main,\n.admin-author__content,\n.admin-author__header {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.admin-author__header {\n  margin-bottom: 15px;\n}\n.admin-author__avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  margin-right: 15px;\n}\n.admin-author__avatar img {\n  display: block;\n  width: 100%;\n}\n.admin-author__name {\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 33px;\n}\n.admin-author:last-child {\n  border-bottom: none;\n}\n.admin-author__txt {\n  max-width: calc(33% - 10px);\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-author__txt span {\n  color: #00B9FA;\n}\n/*hr*/\n.admin-hr {\n  margin: 15px 0;\n  padding: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZGFzaGJvYXJkLWJhc2Utc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ldmVudHMtam9icy1tYW5hZ2VtZW50LWJsb2NrLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9hZG1pbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQUE7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQUEsMEJBQUE7RUFBQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQUE7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FDR0Y7QUREQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQ0lGO0FERkE7RUFBaUIsV0FBQTtBQ01qQjtBRExBO0VBQ0UsV0FBQTtFQUNBLE9BQUE7QUNRRjtBRE5BO0VBR1ksc0JBQUE7QUNTWjtBRE5BLGNBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDU0Y7QURQQTtFQUFNLGdCQUFBO0FDV047QURWQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDYUY7QURYQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUdBLHNCQUFBO0VBQ0EsNkNBQUE7QUNjRjtBRFhBLFVBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBR0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Es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bUJBQUE7QUQ2SEo7QUMxSEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUQ2SEo7QUMxSEEsU0FBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDRDQUFBO0FENkhKO0FDMUhBOzs7RUFJSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FENkhKO0FDMUhBO0VBQ0ksbUJBQUE7QUQ2SEo7QUMxSEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FENkhKO0FDMUhBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUQ2SEo7QUMxSEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRDZISjtBQzFIQTtFQUNJLG1CQUFBO0FENkhKO0FDMUhBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUQ2SEo7QUMxSEE7RUFDSSxjQUFBO0FENkhKO0FDMUhBLEtBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBRDZISiIsImZpbGUiOiJldmVudHMtam9icy1tYW5hZ2VtZW50LWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypiYWlzaWMqL1xuaHRtbHtcbiAgLXdlYmtpdC1sb2NhbGU6IFwicnUtUlVcIjtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIHVuaWNvZGUtYmlkaTogaXNvbGF0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbmh0bWwsIGJvZHl7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuYm9keXtcbiAgZm9udDogNDAwIDE2cHgvMS4yICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbiAgbWluLXdpZHRoOiAzMTBweDsgXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xuICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlcntcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNsZWFyZml4OmFmdGVyIHtjbGVhcjogYm90aDt9XG4uY2xlYXJmaXh7XG4gIC1tcy16b29tOiAxO1xuICB6b29tOiAxO1xufVxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIsIC5pbnB1dC0tc2VhcmNoe1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKnR5cG9ncmFwaHljKi9cbm9sLHVsLGxpeyAgICBcbiAgbWFyZ2luOjA7XG4gIHBhZGRpbmc6IDA7ICAgIFxufVxudWwgbGl7bGlzdC1zdHlsZTogbm9uZTt9XG5oMSxoMixoMyxoNCxwe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vKmJ1dHRvbnMqL1xuLmJ0bntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2U7ICBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4uYnRuOjotbW96LWZvY3VzLWlubmVyIHtib3JkZXI6IDA7fVxuLmJ0bjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogLjM7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbnN2Z3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypsYXlvdXQqL1xuLndyYXBwZXJ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59IFxuLm1haW57bWluLWhlaWdodDogMTAwdmg7fSIsIi8qYmFpc2ljKi9cbmh0bWwge1xuICAtd2Via2l0LWxvY2FsZTogXCJydS1SVVwiO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG5odG1sLCBib2R5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG5cbmJvZHkge1xuICBmb250OiA0MDAgMTZweC8xLjIgXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIG1pbi13aWR0aDogMzEwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xuICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJrZXJuXCI7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY2xlYXJmaXgge1xuICAtbXMtem9vbTogMTtcbiAgem9vbTogMTtcbn1cblxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIsIC5pbnB1dC0tc2VhcmNoIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qdHlwb2dyYXBoeWMqL1xub2wsIHVsLCBsaSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qYnV0dG9ucyovXG4uYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYnRuOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAwLjM7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypsYXlvdXQqL1xuLndyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uYWRtaW4td3JhcCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IC1vLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAtby1mbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFkbWluLWJhciB7XG4gIHdpZHRoOiAyNjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uYWRtaW4tY29udGVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCAtIDQwcHgpO1xufVxuXG4uYWRtaW4tYmxjIHtcbiAgcGFkZGluZzogMjJweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYWRtaW4tYmxjX19ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5hZG1pbi1ibGNfX3doaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUsXG4uYWRtaW4tYmxjX19zdWJ0aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDE4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5hZG1pbi1ibGNfX3N1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmFkbWluLWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRtaW4td3JhcCB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmFkbWluLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDAgMjBweDtcbiAgfVxuXG4gIC5hZG1pbi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLypuYXYqL1xuLmFkbWluLW5hdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5hZG1pbi1uYXYgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y2RjZGNjtcbn1cblxuLmFkbWluLW5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkbWluLW5hdiBsaSBhIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5hZG1pbi1uYXYgbGkgYTpob3Zlcixcbi5hZG1pbi1uYXYgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogIzAwYjdmZjtcbn1cblxuLypmb3JtKi9cbi5hZG1pbi1mb3JtID4gKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hZG1pbi1mb3JtID4gKjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmFkbWluLWZvcm1fX2ZpZWxkc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDE1cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taW5saW5lLXNpemU6IGF1dG87XG59XG5cbi5hZG1pbi1mb3JtX19iYXIge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IC1vLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5hZG1pbi1mb3JtX19iYXIgLmJ0biB7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuLmFkbWluLWZvcm1fX2JhciAuYnRuOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hZG1pbi1mb3JtX193cmFwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZG1pbi1mb3JtX193cmFwLW1haW4ge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLmFkbWluLWZvcm1fX3dyYXAtYmFyIHtcbiAgcGFkZGluZy10b3A6IDM3cHg7XG59XG5cbi5hZG1pbi1mb3JtX19ncmlkIHtcbiAgZGlzcGxheTogLW1zLWdyaWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmFkbWluLWZvcm1fX2xlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hZG1pbi1mb3JtX19jb2wtdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi8qc2VsZWN0Ki9cbi5hZG1pbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyppbnB1dCovXG4uYWRtaW4taW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2U7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2YxZjFmNTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDhweCAxOXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qaW5wdXQqL1xuLmFkbWluLXRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlO1xuICBib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiA4cHggMTlweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5hZG1pbi10ZXh0YXJlYV8xMDAge1xuICBoZWlnaHQ6IDUycHg7XG59XG5cbi8qYnV0dG9ucyovXG4uYWRtaW4tYnRuX3doaXRlIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjFweDtcbiAgcGFkZGluZzogMCAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCOUZBO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGNvbG9yOiAjMDBCOUZBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZG1pbi1idG5fYmx1ZSB7XG4gIGhlaWdodDogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgYmFja2dyb3VuZDogIzAwQjlGQTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjlGQTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tYnRuX20ge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi8qYWRtaW4taW5wdXQtcm93Ki9cbi5hZG1pbi1pbnB1dC1yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IC1vLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuLmFkbWluLWlucHV0LWJsYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEycHggMDtcbn1cblxuLmFkbWluLWlucHV0LWJsYyAuYWRtaW4taW5wdXQtcm93X190aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19fdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZSB7XG4gIHdpZHRoOiAxNzBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZV9tIHtcbiAgd2lkdGg6IDIyMHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93IC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlX3Mge1xuICB3aWR0aDogNzBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dGdyb3VwIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0Z3JvdXAgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0IHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF9tIHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4uYWRtaW4taW5wdXRfcyB7XG4gIHdpZHRoOiAxMTBweDtcbn1cblxuLmFkbWluLWlucHV0X3hzIHtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3cgLmFkbWluLXNlbGVjdCB7XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXRncm91cCAuYWRtaW4taW5wdXQgKyAuYWRtaW4taW5wdXQsXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dGdyb3VwIC5hZG1pbi1pbnB1dCArIC5hZG1pbi1jaGVjayB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dHdyYXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IC1vLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6ICNmMWYxZjU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyNzBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXR3cmFwIC5hZG1pbi1pbnB1dCB7XG4gIG1heC13aWR0aDogMzAlO1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRtaW4taW5wdXQtcm93IHtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuYWRtaW4taW5wdXQtcm93X190aXRsZSB7XG4gICAgcGFkZGluZzogN3B4IDA7XG4gIH1cbn1cbi8qYWRkKi9cbi5hZG1pbi1mb3JtX19hZGQge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4vKmZvcm0gdGFiKi9cbi5hZG1pbi1mb3JtX190YWIge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzODBweDtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0aCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0ZCB7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdGg6Zmlyc3QtY2hpbGQsXG4uYWRtaW4tZm9ybV9fdGFiIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWlucHV0IHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWNoZWNrIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWJpZy1jaGVjayB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKmRlbCovXG4uYWRtaW4tZm9ybV9fZGVsIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbn1cblxuLyphZG1pbi1wb3B1cCovXG4uYWRtaW4tcG9wdXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYWRtaW4tcG9wdXBfX292ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4uYWRtaW4tcG9wdXBfX21haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMzgwcHg7XG4gIHBhZGRpbmc6IDU0cHggMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkNGQ0ZDO1xuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5hZG1pbi1wb3B1cF9fY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5hZG1pbi1wb3B1cF9fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFkbWluLXBvcHVwX190eHQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYWRtaW4tcG9wdXBfX2JhciB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFkbWluLXBvcHVwX19iYXIgLmFkbWluLWJ0bl93aGl0ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4vKmRyb3Bkb3duKi9cbi5hZG1pbi1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTVweDtcbiAgdG9wOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweCAxMnB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOXB4O1xuICBsZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjZweCBzb2xpZCAjZmZmO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnRfbGVmdCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTVweDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50X2xlZnQ6OmJlZm9yZSB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrX190eHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IC5hZG1pbi1jaGVjazpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCAuYWRtaW4tY2hlY2s6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCBhIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjZGNkY2O1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgYTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IGE6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50LnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLWRyb3Bkb3duX19idG4ge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2J0biBzdmcge1xuICBmaWxsOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi8qdGFibGUqL1xuLmFkbWluLXRhYi13cmFwIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFkbWluLXRhYiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLmFkbWluLXRhYiB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmFkbWluLXRhYiB0ZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5hZG1pbi10YWIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmFkbWluLXRhYiB0ZCwgLmFkbWluLXRhYiB0aCB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmFkbWluLXRhYiB0ZDpmaXJzdC1jaGlsZCwgLmFkbWluLXRhYiB0aDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5hZG1pbi10YWIgdGQ6bGFzdC1jaGlsZCwgLmFkbWluLXRhYiB0aDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5hZG1pbi10YWIgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFkbWluLXRhYl9fc29ydCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRtaW4tdGFiX19zb3J0LWljbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmFkbWluLXRhYl9fc29ydC1pY24gc3ZnIHtcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4vKmFkbWluLWNoZWNrKi9cbi5hZG1pbi1jaGVjayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZG1pbi1jaGVja19fdHh0IHtcbiAgY29sb3I6ICM2OTY5NzQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1pbi1oZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFkbWluLWNoZWNrX190eHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBib3JkZXI6IDAgc29saWQgIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZG1pbi1jaGVjayBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWNoZWNrX190eHQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMzZGQ1OTg7XG59XG5cbi5hZG1pbi1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWNoZWNrX190eHQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBzb2xpZCAjZmZmO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICBoZWlnaHQ6IDdweDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB3aWR0aDogM3B4O1xuICBib3gtc2l6aW5nOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKmFkbWluLWJpZy1jaGVjayovXG4uYWRtaW4tYmlnLWNoZWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkbWluLWJpZy1jaGVja19fdHh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgYm9yZGVyOiAwIHNvbGlkICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi1iaWctY2hlY2sgaW5wdXQ6Y2hlY2tlZCArIC5hZG1pbi1iaWctY2hlY2tfX3R4dDo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzNkZDU5ODtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWJpZy1jaGVja19fdHh0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogc29saWQgI2ZmZjtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGxlZnQ6IDdweDtcbiAgdG9wOiA0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDRweDtcbiAgYm94LXNpemluZzogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyp1cGxvYWQqL1xuLmFkbWluLXVwbG9hZF9fYmFyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDE1cHggMCAxMHB4O1xufVxuXG4uYWRtaW4tdXBsb2FkX19sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYWRtaW4tdXBsb2FkX19sYWJlbCBpbnB1dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi11cGxvYWRfX2FkZCB7XG4gIGNvbG9yOiAjMDBCOUZBO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fZGVsOmhvdmVyLFxuLmFkbWluLXVwbG9hZF9fYWRkOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWRtaW4tdXBsb2FkX19kZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fd3JhcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLmFkbWluLXVwbG9hZF9fd3JhcC1wbHVzIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLyphZG1pbi1iYXItbGlzdCovXG4uYWRtaW4tYmFyLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uYWRtaW4tYmFyLWxpc3RfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFkbWluLWJhci1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvdW50ZXItcmVzZXQ6IG51bTtcbn1cblxuLmFkbWluLWJhci1saXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDAuOGVtO1xufVxuXG4uYWRtaW4tYmFyLWxpc3QgbGk6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihudW0pIFwiLlwiO1xuICBjb3VudGVyLWluY3JlbWVudDogbnVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLyphZG1pbi10YWJzKi9cbi5hZG1pbi10YWJzX19uYXYge1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXg7XG4gIGRpc3BsYXk6IC1vLWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFkbWluLXRhYnNfX2xpbmsge1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IC0xcHg7XG59XG5cbi5hZG1pbi10YWJzX19saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDBCOUZBO1xufVxuXG4uYWRtaW4tdGFic19fbGluay5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCOUZBO1xufVxuXG4uYWRtaW4tdGFic19fcGFuZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi10YWJzX19wYW5lLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLXRhYnNfX2ZpbHRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFkbWluLXRhYnNfX2ZpbHRlciAuYWRtaW4tc2VsZWN0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLyphdXRob3IqL1xuLmFkbWluLWF1dGhvciB7XG4gIHBhZGRpbmc6IDEycHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5hZG1pbi1hdXRob3JfX21haW4sXG4uYWRtaW4tYXV0aG9yX19jb250ZW50LFxuLmFkbWluLWF1dGhvcl9faGVhZGVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRtaW4tYXV0aG9yX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYWRtaW4tYXV0aG9yX19hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmFkbWluLWF1dGhvcl9fYXZhdGFyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFkbWluLWF1dGhvcl9fbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG59XG5cbi5hZG1pbi1hdXRob3I6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5hZG1pbi1hdXRob3JfX3R4dCB7XG4gIG1heC13aWR0aDogY2FsYygzMyUgLSAxMHB4KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uYWRtaW4tYXV0aG9yX190eHQgc3BhbiB7XG4gIGNvbG9yOiAjMDBCOUZBO1xufVxuXG4vKmhyKi9cbi5hZG1pbi1ociB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyOiBub25lO1xufSIsIi5hZG1pbi13cmFwIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hZG1pbi1iYXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmFkbWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCAtIDQwcHgpO1xufVxuXG4uYWRtaW4tYmxjIHsgIFxuICAgIHBhZGRpbmc6IDIycHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZG1pbi1ibGNfX2dyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkI7ICBcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuXG4uYWRtaW4tYmxjX193aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUsXG4uYWRtaW4tYmxjX19zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44Nyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUgeyBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDsgXG4gICAgbWFyZ2luOiAxOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLmFkbWluLWJsY19fc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uYWRtaW4tZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XG4gICAgLmFkbWluLXdyYXB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5hZG1pbi1iYXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIH1cbiAgICAuYWRtaW4tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLypuYXYqL1xuLmFkbWluLW5hdiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFkbWluLW5hdiBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNkY2RjY7XG59XG5cbi5hZG1pbi1uYXYgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkbWluLW5hdiBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi5hZG1pbi1uYXYgbGkgYTpob3Zlcixcbi5hZG1pbi1uYXYgbGkgYS5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDBiN2ZmO1xufVxuXG4vKmZvcm0qL1xuLmFkbWluLWZvcm0gPiAqOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWRtaW4tZm9ybSA+ICo6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmFkbWluLWZvcm1fX2ZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogYXV0bztcbn1cblxuLmFkbWluLWZvcm1fX2JhciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLmFkbWluLWZvcm1fX2JhciAuYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5hZG1pbi1mb3JtX19iYXIgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hZG1pbi1mb3JtX193cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRtaW4tZm9ybV9fd3JhcC1tYWluIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4OyAgXG59XG5cbi5hZG1pbi1mb3JtX193cmFwLWJhciB7IFxuICAgIHBhZGRpbmctdG9wOiAzN3B4O1xufVxuXG4uYWRtaW4tZm9ybV9fZ3JpZCB7XG4gICAgZGlzcGxheTogLW1zLWdyaWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5hZG1pbi1mb3JtX19sZWdlbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hZG1pbi1mb3JtX19jb2wtdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi8qc2VsZWN0Ki9cbi5hZG1pbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKmlucHV0Ki9cbi5hZG1pbi1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyppbnB1dCovXG4uYWRtaW4tdGV4dGFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5hZG1pbi10ZXh0YXJlYV8xMDAge1xuICAgIGhlaWdodDogNTJweDtcbn1cblxuLypidXR0b25zKi9cbi5hZG1pbi1idG5fd2hpdGUge1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEI5RkE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGNvbG9yOiAjMDBCOUZBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tYnRuX2JsdWUge1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBCOUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEI5RkE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tYnRuX20ge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLyphZG1pbi1pbnB1dC1yb3cqL1xuLmFkbWluLWlucHV0LXJvdyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5hZG1pbi1pbnB1dC1ibGMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTJweCAwO1xufVxuXG4uYWRtaW4taW5wdXQtYmxjIC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZSB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93IC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlX20ge1xuICAgIHdpZHRoOiAyMjBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZV9zIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0Z3JvdXAge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXRncm91cCBzcGFuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dCB7XG4gICAgd2lkdGg6IDkwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF9tIHtcbiAgICB3aWR0aDogMTYwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF9zIHtcbiAgICB3aWR0aDogMTEwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF94cyB7XG4gICAgd2lkdGg6IDY1cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3cgLmFkbWluLXNlbGVjdCB7XG4gICAgd2lkdGg6IDIyMHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dGdyb3VwIC5hZG1pbi1pbnB1dCArIC5hZG1pbi1pbnB1dCxcbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0Z3JvdXAgLmFkbWluLWlucHV0ICsgLmFkbWluLWNoZWNrIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXR3cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXR3cmFwIC5hZG1pbi1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweCkge1xuICAgIC5hZG1pbi1pbnB1dC1yb3cge1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgfVxufVxuXG4vKmFkZCovXG4uYWRtaW4tZm9ybV9fYWRkIHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7ICBcbn1cblxuLypmb3JtIHRhYiovXG4uYWRtaW4tZm9ybV9fdGFiIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzgwcHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdGgge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYWRtaW4tZm9ybV9fdGFiIHRkIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdGg6Zmlyc3QtY2hpbGQsXG4uYWRtaW4tZm9ybV9fdGFiIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTQwcHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWlucHV0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFkbWluLWZvcm1fX3RhYiAuYWRtaW4tY2hlY2sge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWJpZy1jaGVjayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qZGVsKi9cbi5hZG1pbi1mb3JtX19kZWwge1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGhlaWdodDogMzRweDsgXG59XG5cbi8qYWRtaW4tcG9wdXAqL1xuLmFkbWluLXBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmFkbWluLXBvcHVwX19vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuXG4uYWRtaW4tcG9wdXBfX21haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgcGFkZGluZzogNTRweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkNGQ0ZDO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tcG9wdXBfX2Nsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYWRtaW4tcG9wdXBfX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7ICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWRtaW4tcG9wdXBfX3R4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tcG9wdXBfX2JhciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZG1pbi1wb3B1cF9fYmFyIC5hZG1pbi1idG5fd2hpdGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi8qZHJvcGRvd24qL1xuLmFkbWluLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTlweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAyNnB4IHNvbGlkICNmZmY7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudF9sZWZ0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMTVweDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50X2xlZnQ6OmJlZm9yZSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTBweDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IC5hZG1pbi1jaGVja19fdHh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrIHtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCBhIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNkY2RjY7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCBhOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmVcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fYnRuIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fYnRuIHN2ZyB7XG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi8qdGFibGUqL1xuLmFkbWluLXRhYi13cmFwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZG1pbi10YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIHRkLCB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4uYWRtaW4tdGFiX19zb3J0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZG1pbi10YWJfX3NvcnQtaWNuIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hZG1pbi10YWJfX3NvcnQtaWNuIHN2ZyB7XG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi8qYWRtaW4tY2hlY2sqL1xuLmFkbWluLWNoZWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxufVxuXG4uYWRtaW4tY2hlY2tfX3R4dCB7XG4gICAgY29sb3I6ICM2OTY5NzQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRtaW4tY2hlY2tfX3R4dDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGJvcmRlcjogMCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRtaW4tY2hlY2sgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWNoZWNrX190eHQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzNkZDU5ODtcbn1cblxuLmFkbWluLWNoZWNrIGlucHV0OmNoZWNrZWQgKyAuYWRtaW4tY2hlY2tfX3R4dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgYm94LXNpemluZzogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKmFkbWluLWJpZy1jaGVjayovXG4uYWRtaW4tYmlnLWNoZWNrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG59XG5cbi5hZG1pbi1iaWctY2hlY2tfX3R4dDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGJvcmRlcjogMCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWJpZy1jaGVja19fdHh0OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICMzZGQ1OTg7XG59XG5cbi5hZG1pbi1iaWctY2hlY2sgaW5wdXQ6Y2hlY2tlZCArIC5hZG1pbi1iaWctY2hlY2tfX3R4dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBoZWlnaHQ6IDlweDtcbiAgICBsZWZ0OiA3cHg7XG4gICAgdG9wOiA0cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiA0cHg7XG4gICAgYm94LXNpemluZzogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKnVwbG9hZCovXG4uYWRtaW4tdXBsb2FkX19iYXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMTVweCAwIDEwcHg7XG59XG5cbi5hZG1pbi11cGxvYWRfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYWRtaW4tdXBsb2FkX19sYWJlbCBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fYWRkIHtcbiAgICBjb2xvcjogIzAwQjlGQTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fZGVsOmhvdmVyLFxuLmFkbWluLXVwbG9hZF9fYWRkOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hZG1pbi11cGxvYWRfX2RlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYWRtaW4tdXBsb2FkX193cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5hZG1pbi11cGxvYWRfX3dyYXAtcGx1cyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4vKmFkbWluLWJhci1saXN0Ki9cbi5hZG1pbi1iYXItbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFkbWluLWJhci1saXN0X190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFkbWluLWJhci1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIGNvdW50ZXItcmVzZXQ6IG51bTtcbn1cblxuLmFkbWluLWJhci1saXN0IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLjhlbTtcbn1cblxuLmFkbWluLWJhci1saXN0IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogY291bnRlcihudW0pICcuJzsgXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IG51bTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuXG4vKmFkbWluLXRhYnMqL1xuLmFkbWluLXRhYnNfX25hdiB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFkbWluLXRhYnNfX2xpbmsge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0xcHg7XG59XG5cbi5hZG1pbi10YWJzX19saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMEI5RkE7XG59XG5cbi5hZG1pbi10YWJzX19saW5rLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjlGQTtcbn1cblxuLmFkbWluLXRhYnNfX3BhbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi10YWJzX19wYW5lLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRtaW4tdGFic19fZmlsdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyAgXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hZG1pbi10YWJzX19maWx0ZXIgLmFkbWluLXNlbGVjdCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4vKmF1dGhvciovXG4uYWRtaW4tYXV0aG9yIHtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLmFkbWluLWF1dGhvcl9fbWFpbixcbi5hZG1pbi1hdXRob3JfX2NvbnRlbnQsXG4uYWRtaW4tYXV0aG9yX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRtaW4tYXV0aG9yX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hZG1pbi1hdXRob3JfX2F2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5hZG1pbi1hdXRob3JfX2F2YXRhciBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRtaW4tYXV0aG9yX19uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmFkbWluLWF1dGhvcjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYWRtaW4tYXV0aG9yX190eHQge1xuICAgIG1heC13aWR0aDogY2FsYygzMyUgLSAxMHB4KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tYXV0aG9yX190eHQgc3BhbiB7XG4gICAgY29sb3I6ICMwMEI5RkE7XG59XG5cbi8qaHIqL1xuLmFkbWluLWhyIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"],
          selector: "form:not([ngNoForm]):not([ngNativeValidate])"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"],
          selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"],
          selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
          inputs: ["ngFormOptions"],
          outputs: ["ngSubmit"],
          exportAs: ["ngForm"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"],
          selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"],
          selector: "[formControlName],[ngModel],[formControl]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"],
          selector: "[ngModel]:not([formControlName]):not([formControl])",
          inputs: ["name", "disabled", "ngModel", "ngModelOptions"],
          outputs: ["ngModelChange"],
          exportAs: ["ngModel"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],
          selector: "[formGroup]",
          inputs: ["formGroup"],
          outputs: ["ngSubmit"],
          exportAs: ["ngForm"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"],
          selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinValidator"],
          selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
          inputs: ["min"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"],
          selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"],
          selector: "[formControlName]",
          inputs: ["disabled", "formControlName", "ngModel"],
          outputs: ["ngModelChange"]
        }],
        pipes: {
          "async": _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"],
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsJobsManagementBlockComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-events-jobs-management-block',
            templateUrl: './events-jobs-management-block.component.html',
            styleUrls: ['./events-jobs-management-block.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        },
        propDecorators: {
          data$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          saved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          saveReq: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          resetReq: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-events-jobs-management-page-events-jobs-management-page-module-es5.js.map