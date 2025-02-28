(function () {
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tag-list-page-tag-list-page-module"], {
    /***/
    "8FwF":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: TagListPageComponent */

    /***/
    function FwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagListPageComponent", function () {
        return TagListPageComponent;
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


      var _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/classes/pageable-conetnt.class */
      "RO7G");
      /* harmony import */


      var _api_schemas_tags_tag_order_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @api/schemas/tags/tag-order.enum */
      "Usf9");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @api/routes/tags.service */
      "nJK0");
      /* harmony import */


      var _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @app/services/session.service */
      "qh/L");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../navbar/navbar.component */
      "j3J1");
      /* harmony import */


      var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/modules/svg/svg/svg.component */
      "ax+O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/directives/logged-in.directive */
      "DwHT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var TagListPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function TagListPageComponent(tagsService, sessionService, sidebarWrapperService) {
          var _this;

          _classCallCheck(this, TagListPageComponent);

          _this = _callSuper(this, TagListPageComponent);
          _this.tagsService = tagsService;
          _this.sessionService = sessionService;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.searchQuery$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          _this.recent = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"](function (page) {
            return _this.fetch$(page, {
              seen: true
            });
          });
          _this.popular = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"](function (page) {
            return _this.fetch$(page, {
              order: _api_schemas_tags_tag_order_enum__WEBPACK_IMPORTED_MODULE_4__["TagOrderEnum"].POST_COUNT
            });
          });
          _this.found = new _shared_classes_pageable_conetnt_class__WEBPACK_IMPORTED_MODULE_3__["PageableContent"](function (page, query) {
            return _this.fetch$(page, {
              query: query
            });
          });
          return _this;
        }

        _inherits(TagListPageComponent, _shared_classes_abstr);

        return _createClass(TagListPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              _this2.sidebarWrapperService.params$.next({
                article: false,
                trending: true,
                navigation: true,
                live: false,
                showSidebar: true
              });
            });
            this.popular.fetch();
            this.setQueries();
          }
        }, {
          key: "setQueries",
          value: function setQueries() {
            var _this3 = this;

            this.hasSearchQuery$ = this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
              return !!_;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$));
            this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_) {
              return !!_;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
              return _this3.recent.setOptionsWithReset$(user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
            this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_) {
              return !!_;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (query) {
              return _this3.found.setOptionsWithReset$(query);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
            this.searchQuery$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_) {
              return !_;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () {
              return _this3.found.reset$();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$)).subscribe();
          }
        }, {
          key: "fetch$",
          value: function fetch$(page, query) {
            return this.tagsService.get$(page, query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngOnDestroy$));
          }
        }, {
          key: "handleSearch",
          value: function handleSearch(query) {
            this.searchQuery$.next(query);
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"]);

      TagListPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageComponent,
        deps: [{
          token: _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"]
        }, {
          token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      TagListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: TagListPageComponent,
        selector: "app-tag-list-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-navbar class=\"margin-bottom-44\" activeItem=\"# \u0422\u0435\u0433\u0438\" [searchPlaceholder]=\"'COMMON.SEARCH_BY_TAGS' | translate\" (search)=\"handleSearch($event)\"></app-navbar>\n<ul class=\"block-card tag-list\">\n    <ng-container [ngSwitch]=\"hasSearchQuery$ | async\">\n        <ng-container *ngSwitchCase=\"true\">\n            <h2>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u0430</h2>\n            <ul class=\"tags\">\n                <li *ngFor=\"let tag of found.content\">\n                    <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                </li>\n            </ul>\n            <button *ngIf=\"found.page != -1 && found.page < found.totalPages - 1\" class=\"show-more\" (click)=\"found.fetch()\">\n                <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                <svg name=\"chevron/down\"></svg>\n            </button>\n            <p *ngIf=\"found.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_' | translate}}</p>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"false\">\n            <div class=\"tag-popular\">\n                <h2>{{ 'COMMON.POPULAR_TAGS' | translate}}</h2>\n                <ul class=\"tags\">\n                    <li *ngFor=\"let tag of popular.content\">\n                        <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                    </li>\n                </ul>\n                <button *ngIf=\"popular.page < popular.totalPages - 1\" class=\"show-more\" (click)=\"popular.fetch()\">\n                    <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                    <svg name=\"chevron/down\"></svg>\n                </button>\n                <p *ngIf=\"popular.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_POPULAR' | translate}}</p>\n            </div>\n            <div *appLoggedIn class=\"tag-recent\">\n                <h2>{{ 'COMMON.RECENTLY_VIEWED' | translate}}</h2>\n                <ul class=\"tags\">\n                    <li *ngFor=\"let tag of recent.content\">\n                        <a [routerLink]=\"['/tags', tag.meta.id]\"># {{ tag.content }}</a>\n                    </li>\n                </ul>\n                <button *ngIf=\"recent.page < recent.totalPages - 1\" class=\"show-more\" (click)=\"recent.fetch()\">\n                    <span>{{ 'COMMON.SHOW_MORE' | translate}}</span>\n                    <svg name=\"chevron/down\"></svg>\n                </button>\n                <p *ngIf=\"recent.totalPages == 0\">{{ 'COMMON.TAGS_NOT_FOUND_RECENT' | translate}}</p>\n            </div>\n        </ng-container>\n    </ng-container>\n</ul>\n",
        styles: [":host {\n  width: 100%;\n}\n\n.tag-list h2 {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 20px;\n  font-style: normal;\n  line-height: 23px;\n  margin-bottom: 24px;\n}\n\n.tag-list .tag-recent {\n  margin-top: 50px;\n}\n\n.tag-list .show-more {\n  background: white;\n  border: 1px solid #f5f8fa;\n  border-radius: 15px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  padding: 7px 14px;\n}\n\n.tag-list .show-more span {\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  margin-right: 30px;\n}\n\n.tag-list .show-more svg {\n  fill: #00b7ff;\n}\n\n.tag-list ul.tags {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\n.tag-list ul.tags li {\n  margin-bottom: 17px;\n}\n\n.tag-list ul.tags li a {\n  color: #00b7ff;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: bold;\n  line-height: 21px;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3RhZy1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0FBREY7O0FBS0U7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSko7O0FBTUk7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUpOOztBQU9JO0VBQ0UsYUFBQTtBQUxOOztBQVNFO0VBQ0UsYUFBQTtFQUVBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVJKOztBQVVJO0VBQ0UsbUJBQUE7QUFSTjs7QUFVTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFSUiIsImZpbGUiOiJ0YWctbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFnLWxpc3Qge1xuICBoMiB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAudGFnLXJlY2VudCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuXG4gIC5zaG93LW1vcmUge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY4ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDdweCAxNHB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgZmlsbDogIzAwYjdmZjtcbiAgICB9XG4gIH1cblxuICB1bC50YWdzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIC8vIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwYjdmZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"],
        components: [{
          type: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
          selector: "app-navbar",
          inputs: ["navItems", "activeItem", "searchPlaceholder"],
          outputs: ["search"]
        }, {
          type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_10__["SvgComponent"],
          selector: "svg[name]",
          inputs: ["name", "w", "h", "size"]
        }],
        directives: [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"],
          selector: "[ngSwitch]",
          inputs: ["ngSwitch"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"],
          selector: "[ngSwitchCase]",
          inputs: ["ngSwitchCase"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"],
          selector: "[ngFor][ngForOf]",
          inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"],
          selector: "a[routerLink],area[routerLink]",
          inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"],
          selector: "[ngIf]",
          inputs: ["ngIf", "ngIfThen", "ngIfElse"]
        }, {
          type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_13__["LoggedInDirective"],
          selector: "[appLoggedIn]"
        }],
        pipes: {
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"],
          "async": _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]
        }
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-tag-list-page',
            templateUrl: './tag-list-page.component.html',
            styleUrls: ['./tag-list-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"]
          }, {
            type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    },

    /***/
    "RO7G":
    /*!**********************************************************!*\
      !*** ./src/app/shared/classes/pageable-conetnt.class.ts ***!
      \**********************************************************/

    /*! exports provided: NO_CONTENT, PageableContent */

    /***/
    function RO7G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NO_CONTENT", function () {
        return NO_CONTENT;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageableContent", function () {
        return PageableContent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var NO_CONTENT = Symbol('NO_CONTENT');

      var PageableContent = /*#__PURE__*/function () {
        function PageableContent(fetchNextFn$) {
          var _this4 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, PageableContent);

          this.fetchNextFn$ = fetchNextFn$;
          this.isFetching$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.end$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.content = [];
          this.page = -1;
          this.totalPages = 1;
          this.fetchCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.options$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](options);
          this.fetchCommand$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
            return _this4.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (_) {
              return !_;
            }));
          })).subscribe(function () {
            return _this4.fetchNextPage();
          });
        }

        return _createClass(PageableContent, [{
          key: "fetch",
          value: function fetch() {
            if (this.page < this.totalPages - 1) {
              this.fetchCommand$.next();
            }
          }
        }, {
          key: "reset$",
          value: function reset$() {
            var _this5 = this;

            var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            return this.isFetching$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (it) {
              return !it;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              if (hard) {
                _this5.content.splice(0, _this5.content.length);
              }

              _this5.page = -1;
              _this5.totalPages = 1;
            }));
          }
        }, {
          key: "setOptionsWithReset$",
          value: function setOptionsWithReset$(options) {
            var _this6 = this;

            var hard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this.reset$(hard).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              _this6.options$.next(options);

              _this6.fetch();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mapTo"])(options));
          }
        }, {
          key: "fetchNextPage",
          value: function fetchNextPage() {
            var _this7 = this;

            this.isFetching$.next(true);
            this.fetchNextFn$(this.page + 1, this.options$.value).subscribe(function (response) {
              var _this7$content;

              _this7.page = response.page;
              _this7.totalPages = response.totalPages;

              _this7.content$.next(response.content);

              if (_this7.page >= _this7.totalPages - 1) {
                _this7.end$.next();
              }

              (_this7$content = _this7.content).push.apply(_this7$content, _toConsumableArray(response.content));

              _this7.isFetching$.next(false);
            }, function (error) {
              _this7.isFetching$.next(false);

              if (error !== Symbol('NO_CONTENT')) {
                throw error;
              }
            });
          }
        }]);
      }();
      /***/

    },

    /***/
    "tbOu":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: TagListPageRoutingModule */

    /***/
    function tbOu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagListPageRoutingModule", function () {
        return TagListPageRoutingModule;
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


      var _tag_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tag-list-page.component */
      "8FwF");

      var routes = [{
        path: '',
        component: _tag_list_page_component__WEBPACK_IMPORTED_MODULE_2__["TagListPageComponent"]
      }];

      var TagListPageRoutingModule = /*#__PURE__*/_createClass(function TagListPageRoutingModule() {
        _classCallCheck(this, TagListPageRoutingModule);
      });

      TagListPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      TagListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      TagListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageRoutingModule,
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
    "x0/i":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/content-overview/pages/tag-list-page/tag-list-page.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: TagListPageModule */

    /***/
    function x0_i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagListPageModule", function () {
        return TagListPageModule;
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


      var _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tag-list-page-routing.module */
      "tbOu");
      /* harmony import */


      var _tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tag-list-page.component */
      "8FwF");
      /* harmony import */


      var _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @modules/content-overview/navbar/navbar.module */
      "d0zl");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/directives/directives.module */
      "yGOH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/modules/svg/svg.module */
      "F/CY");

      var TagListPageModule = /*#__PURE__*/_createClass(function TagListPageModule() {
        _classCallCheck(this, TagListPageModule);
      });

      TagListPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      TagListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageModule,
        declarations: [_tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__["TagListPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]]
      });
      TagListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: TagListPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_tag_list_page_component__WEBPACK_IMPORTED_MODULE_3__["TagListPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _tag_list_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["TagListPageRoutingModule"], _modules_content_overview_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(), _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_6__["CommonDirectivesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_8__["SvgModule"]]
          }]
        }]
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-tag-list-page-tag-list-page-module-es5.js.map