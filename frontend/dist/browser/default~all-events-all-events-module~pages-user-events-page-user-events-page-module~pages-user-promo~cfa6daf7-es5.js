(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7"], {
    /***/
    "D6c4":
    /*!**********************************************************************!*\
      !*** ./src/app/modules/events/event-preview/event-preview.module.ts ***!
      \**********************************************************************/

    /*! exports provided: EventPreviewModule */

    /***/
    function D6c4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventPreviewModule", function () {
        return EventPreviewModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _event_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./event-preview.component */
      "VreD");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @shared/components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/directives/directives.module */
      "yGOH");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/modules/svg/svg.module */
      "F/CY");
      /* harmony import */


      var _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared/modules/user-info/user-info.module */
      "tu4A");

      var EventPreviewModule = /*#__PURE__*/_createClass(function EventPreviewModule() {
        _classCallCheck(this, EventPreviewModule);
      });

      EventPreviewModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventPreviewModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
      });
      EventPreviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventPreviewModule,
        declarations: [_event_preview_component__WEBPACK_IMPORTED_MODULE_3__["EventPreviewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_9__["SvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]],
        exports: [_event_preview_component__WEBPACK_IMPORTED_MODULE_3__["EventPreviewComponent"]]
      });
      EventPreviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventPreviewModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_9__["SvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: EventPreviewModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_event_preview_component__WEBPACK_IMPORTED_MODULE_3__["EventPreviewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_9__["SvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"], _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"], _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_10__["UserInfoModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["SharedUiModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild()],
            exports: [_event_preview_component__WEBPACK_IMPORTED_MODULE_3__["EventPreviewComponent"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "Ozdm":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/modules/user-info/user-info.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserInfoComponent */

    /***/
    function Ozdm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
        return UserInfoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../ui/icon/icon.component */
      "9qJ4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/account-url.pipe */
      "uo9K");
      /* harmony import */


      var _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/person-name.pipe */
      "uJSW");

      var UserInfoComponent = /*#__PURE__*/_createClass(function UserInfoComponent() {
        _classCallCheck(this, UserInfoComponent);
      });

      UserInfoComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserInfoComponent,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: UserInfoComponent,
        selector: "app-user-info",
        inputs: {
          user: "user"
        },
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<div class=\"v-center\">\n    <a [routerLink]=\"user ? (user | accountUrl) : ''\" class=\"v-center\">\n        <app-ui-icon class=\"margin-right-10\" [src]=\"user?.info.picture\" [textAlternative]=\"user ? (user.info | personName) : ''\"></app-ui-icon>\n        <span class=\"subtitle-1\">{{ user ? (user.info | personName) : '' }}</span>\n    </a>\n</div>\n",
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"],
        components: [{
          type: _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"],
          selector: "app-ui-icon",
          inputs: ["src", "textAlternative", "size"]
        }],
        directives: [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"],
          selector: "a[routerLink],area[routerLink]",
          inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"]
        }],
        pipes: {
          "accountUrl": _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__["AccountUrlPipe"],
          "personName": _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__["PersonNamePipe"]
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: UserInfoComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-info',
            templateUrl: './user-info.component.html',
            styleUrls: ['./user-info.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }],
        propDecorators: {
          user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        }
      });
      /***/

    },

    /***/
    "VreD":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/events/event-preview/event-preview.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EventPreviewComponent */

    /***/
    function VreD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventPreviewComponent", function () {
        return EventPreviewComponent;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @api/schemas/article/publication-stage.enum */
      "l6fO");
      /* harmony import */


      var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @api/routes/events.service */
      "3Gor");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @api/routes/showcases.service */
      "vb20");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @layout/shared/services/user-dropdown.service */
      "6cGZ");
      /* harmony import */


      var _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/modules/user-info/user-info.component */
      "Ozdm");
      /* harmony import */


      var _shared_components_action_menu_action_menu_event_action_menu_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/components/action-menu/action-menu-event/action-menu-event.component */
      "3O7d");
      /* harmony import */


      var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/modules/svg/svg/svg.component */
      "ax+O");
      /* harmony import */


      var _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../shared/components/share/share.component */
      "xGVH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../shared/directives/logged-in.directive */
      "DwHT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../shared/pipes/url.pipe */
      "k/DK");

      var EventPreviewComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function EventPreviewComponent(eventsService, sessionService, showcaseService, translateService, userDropdown) {
          var _this;

          _classCallCheck(this, EventPreviewComponent);

          _this = _callSuper(this, EventPreviewComponent);
          _this.eventsService = eventsService;
          _this.sessionService = sessionService;
          _this.showcaseService = showcaseService;
          _this.translateService = translateService;
          _this.userDropdown = userDropdown;
          _this.gone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this.goneBookmarked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this.event$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          _this.publicationStageEnum = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__["PublicationStageEnum"];
          _this.isOwner = false;
          _this.pipeLng = _this.translateService.currentLang === 'ru' ? 'ru_RU' : 'en_US';
          return _this;
        }

        _inherits(EventPreviewComponent, _shared_classes_abstr);

        return _createClass(EventPreviewComponent, [{
          key: "event",
          get: function get() {
            return this.event$.value;
          },
          set: function set(data) {
            this.event$.next(data);
            this.isOwner = this.sessionService.userId && this.sessionService.userId === data.company.meta.id;
          }
        }, {
          key: "dateWithTime",
          get: function get() {
            return this.event.info.date % 10 === 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (user) {
              _this2.isOwner = user && user.meta.id === _this2.event.company.meta.id;
            });
          }
        }, {
          key: "toggleBookmark",
          value: function toggleBookmark() {
            var _this3 = this;

            if (this.sessionService.loggedIn$.value) {
              this.eventsService.bookmark$(this.event.meta.id, this.event.bookmarks.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
                _this3.event.bookmarks.you = !_this3.event.bookmarks.you;

                if (!_this3.event.bookmarks.you) {
                  _this3.goneBookmarked.next([_this3.event, 'event']);
                }
              });
            } else {
              this.userDropdown.setShowDropdown(true);
            }
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this4 = this;

            var id = this.event.meta.id;
            this.eventsService.hide$(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              _this4.gone.emit(id);
            });
          }
        }, {
          key: "publish",
          value: function publish(value) {
            var _this5 = this;

            if (value) {
              this.eventsService.publish$(this.event.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
                _this5.event.info.publicationStage = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__["PublicationStageEnum"].PUBLISHED;
              });
            } else {
              this.eventsService.withdraw$(this.event.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
                _this5.event.info.publicationStage = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__["PublicationStageEnum"].DRAFT;
              });
            }
          }
        }, {
          key: "showcase",
          value: function showcase() {
            var _this6 = this;

            this.eventsService.showcase$(this.event.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_) {
              return _this6.showcaseService.navigate$(_);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe();
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this7 = this;

            var id = this.event.meta.id;
            this.eventsService.delete$(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function () {
              _this7.gone.emit(id);
            });
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]);

      EventPreviewComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventPreviewComponent,
        deps: [{
          token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          token: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_7__["ShowcasesService"]
        }, {
          token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          token: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      EventPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: EventPreviewComponent,
        selector: "app-event-preview",
        inputs: {
          event: "event"
        },
        outputs: {
          gone: "gone",
          goneBookmarked: "goneBookmarked"
        },
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<header class=\"v-center margin-bottom-20\">\n    <app-user-info class=\"margin-right-20\" [user]=\"event.company\"></app-user-info>\n    <span *ngIf=\"event.info.publicationStage !== publicationStageEnum.PUBLISHED\" class=\"overline c-caption\">\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E</span>\n    <app-action-menu-event class=\"align-right\" *appLoggedIn [data]=\"event\" [own]=\"isOwner\" (gone)=\"this.gone.emit(event.meta.id)\"></app-action-menu-event>\n</header>\n<main>\n\n    <h3 class=\"margin-bottom-15 fade-0\" >\n        <a [routerLink]=\"['/events', event.meta.id]\">{{ event.info.name }}</a>\n    </h3>\n    <h5 class=\"margin-bottom-15 fade-2\">\n        {{ dateWithTime\n      ? (event.info.date | date:(pipeLng === 'ru_RU' ? 'd MMMM \u0432 HH:00' : 'd MMMM in HH:00'):null:pipeLng)\n      : (event.info.date | date:'d MMMM':null:pipeLng) }} {{ event.info.city }}\n    </h5>\n    <p class=\"body-1\">{{ event.info.announcement }}</p>\n</main>\n<footer class=\"v-center\">\n    <div class=\"v-center event-stats\">\n        <div class=\"v-center margin-right-20\">\n            <svg name=\"bookmark\" class=\"margin-right-4 icon f-gray clickable\" [class.active]=\"event.bookmarks && event.bookmarks.you\" (click)=\"toggleBookmark()\"></svg>\n            <span class=\"subtitle-2 c-gray\">{{ event.bookmarks.count }}</span>\n        </div>\n        <div class=\"v-center margin-right-20\">\n            <svg name=\"view\" class=\"margin-right-4 icon f-gray\"></svg>\n            <span class=\"subtitle-2 c-gray\">{{ event.views.count }}</span>\n        </div>\n        <app-share [url]=\"['/events', event.meta.id] | url\"></app-share>\n    </div>\n    <a class=\"align-right subtitle-2 fade-2 v-center\" [routerLink]=\"['/events', event.meta.id]\">{{ 'COMMON.TO_THE_EVENT' | translate }}\n        <svg name=\"chevron/right\" class=\"f-gray\"></svg>\n    </a>\n</footer>\n",
        styles: [":host {\n  word-wrap: break-word;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2V2ZW50LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJldmVudC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"],
        components: [{
          type: _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_10__["UserInfoComponent"],
          selector: "app-user-info",
          inputs: ["user"]
        }, {
          type: _shared_components_action_menu_action_menu_event_action_menu_event_component__WEBPACK_IMPORTED_MODULE_11__["ActionMenuEventComponent"],
          selector: "app-action-menu-event",
          inputs: ["data", "own"],
          outputs: ["gone"]
        }, {
          type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_12__["SvgComponent"],
          selector: "svg[name]",
          inputs: ["name", "w", "h", "size"]
        }, {
          type: _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_13__["ShareComponent"],
          selector: "app-share",
          inputs: ["url", "spec", "wide"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_15__["LoggedInDirective"],
          selector: "[appLoggedIn]"
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"],
          selector: "a[routerLink],area[routerLink]",
          inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"]
        }],
        pipes: {
          "date": _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"],
          "url": _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_17__["UrlPipe"],
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: EventPreviewComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-event-preview',
            templateUrl: './event-preview.component.html',
            styleUrls: ['./event-preview.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
          }, {
            type: _api_routes_showcases_service__WEBPACK_IMPORTED_MODULE_7__["ShowcasesService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"]
          }];
        },
        propDecorators: {
          gone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          goneBookmarked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        }
      });
      /***/

    },

    /***/
    "tu4A":
    /*!**************************************************************!*\
      !*** ./src/app/shared/modules/user-info/user-info.module.ts ***!
      \**************************************************************/

    /*! exports provided: UserInfoModule */

    /***/
    function tu4A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserInfoModule", function () {
        return UserInfoModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/ui/shared-ui.module */
      "j/N6");
      /* harmony import */


      var _user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-info.component */
      "Ozdm");

      var UserInfoModule = /*#__PURE__*/_createClass(function UserInfoModule() {
        _classCallCheck(this, UserInfoModule);
      });

      UserInfoModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule
      });
      UserInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
        exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]]
      });
      UserInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__,
        type: UserInfoModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
            exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~all-events-all-events-module~pages-user-events-page-user-events-page-module~pages-user-promo~cfa6daf7-es5.js.map