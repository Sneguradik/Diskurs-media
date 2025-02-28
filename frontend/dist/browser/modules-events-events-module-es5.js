(function () {
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-events-events-module"], {
    /***/
    "3vAj":
    /*!*********************************************************!*\
      !*** ./src/app/modules/events/events-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EventsRoutingModule */

    /***/
    function vAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function () {
        return EventsRoutingModule;
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


      var _event_edit_event_create_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./event-edit/event-create.guard */
      "mjxi");
      /* harmony import */


      var _shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/guards/master.guard */
      "jJpQ");
      /* harmony import */


      var _shared_guards_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/guards/guards */
      "AME3");

      var routes = [{
        path: 'create',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | event-edit-event-edit-module */
          [__webpack_require__.e("common"), __webpack_require__.e("event-edit-event-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./event-edit/event-edit.module */
          "+z8G")).then(function (module) {
            return module.EventEditModule;
          });
        },
        canActivate: [_shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_3__["MasterGuard"]],
        data: {
          guards: [_event_edit_event_create_guard__WEBPACK_IMPORTED_MODULE_2__["EventCreateGuard"]],
          guardsRelation: 'AND'
        }
      }, {
        path: ':id/edit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | event-edit-event-edit-module */
          [__webpack_require__.e("common"), __webpack_require__.e("event-edit-event-edit-module")]).then(__webpack_require__.bind(null,
          /*! ./event-edit/event-edit.module */
          "+z8G")).then(function (module) {
            return module.EventEditModule;
          });
        },
        canActivate: [_shared_guards_master_guard__WEBPACK_IMPORTED_MODULE_3__["MasterGuard"]],
        data: {
          guards: [_shared_guards_guards__WEBPACK_IMPORTED_MODULE_4__["SuperUserGuard"], _shared_guards_guards__WEBPACK_IMPORTED_MODULE_4__["EditorGuard"], _shared_guards_guards__WEBPACK_IMPORTED_MODULE_4__["CompanyGuard"]],
          guardsRelation: 'OR',
          alternativeRoute: '/'
        }
      }, {
        path: ':id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | event-page-event-page-module */
          [__webpack_require__.e("common"), __webpack_require__.e("event-page-event-page-module")]).then(__webpack_require__.bind(null,
          /*! ./event-page/event-page.module */
          "z7O3")).then(function (module) {
            return module.EventPageModule;
          });
        }
      }, {
        path: '',
        pathMatch: 'full',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | all-events-all-events-module */
          [__webpack_require__.e("default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"), __webpack_require__.e("common"), __webpack_require__.e("all-events-all-events-module")]).then(__webpack_require__.bind(null,
          /*! ./all-events/all-events.module */
          "BbmQ")).then(function (module) {
            return module.AllEventsModule;
          });
        }
      }];

      var EventsRoutingModule = /*#__PURE__*/_createClass(function EventsRoutingModule() {
        _classCallCheck(this, EventsRoutingModule);
      });

      EventsRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      EventsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      EventsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventsRoutingModule,
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
    "Eij6":
    /*!*************************************************!*\
      !*** ./src/app/modules/events/events.module.ts ***!
      \*************************************************/

    /*! exports provided: EventsModule */

    /***/
    function Eij6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsModule", function () {
        return EventsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _events_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events-routing.module */
      "3vAj");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var EventsModule = /*#__PURE__*/_createClass(function EventsModule() {
        _classCallCheck(this, EventsModule);
      });

      EventsModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventsModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
      });
      EventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventsModule,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      });
      EventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventsModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild()]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventsModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventsRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild()]
          }]
        }]
      });
      /***/

    },

    /***/
    "mjxi":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/events/event-edit/event-create.guard.ts ***!
      \*****************************************************************/

    /*! exports provided: EventCreateGuard */

    /***/
    function mjxi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventCreateGuard", function () {
        return EventCreateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @api/routes/events.service */
      "3Gor");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var EventCreateGuard = /*#__PURE__*/function () {
        function EventCreateGuard(eventsService, router) {
          _classCallCheck(this, EventCreateGuard);

          this.eventsService = eventsService;
          this.router = router;
        }

        return _createClass(EventCreateGuard, [{
          key: "canActivate",
          value: function canActivate() {
            var _this = this;

            return this.eventsService.create$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (id) {
              return _this.router.createUrlTree(['/events', id, 'edit']);
            }));
          }
        }]);
      }();

      EventCreateGuard.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventCreateGuard,
        deps: [{
          token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]
        }, {
          token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable
      });
      EventCreateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventCreateGuard,
        providedIn: 'root'
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventCreateGuard,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-events-events-module-es5.js.map