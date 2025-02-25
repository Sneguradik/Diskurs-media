(function () {
  function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }

  function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }

  function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }

  function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

  function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

  function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }

  function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-management-page-activity-management-page-module"], {
    /***/
    "Pjdb":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/activity-management-page/components/activity-block/activity-block.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ActivityBlockComponent */

    /***/
    function Pjdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityBlockComponent", function () {
        return ActivityBlockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_dashboard_shared_classes_dashboard_constants_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @modules/dashboard/shared/classes/dashboard-constants.class */
      "jRqe");
      /* harmony import */


      var _shared_ui_dashboard_range_dashboard_range_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../shared/ui/dashboard-range/dashboard-range.component */
      "S4fY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ActivityBlockComponent = /*#__PURE__*/function () {
        function ActivityBlockComponent() {
          _classCallCheck(this, ActivityBlockComponent);

          this.showReq = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        return _createClass(ActivityBlockComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.range$) {
              this.range$.next(_modules_dashboard_shared_classes_dashboard_constants_class__WEBPACK_IMPORTED_MODULE_1__["DashboardConstants"].RangeParamsConstant);
            }
          }
        }, {
          key: "show",
          value: function show() {
            this.showReq.emit();
          }
        }]);
      }();

      ActivityBlockComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityBlockComponent,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      ActivityBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: ActivityBlockComponent,
        selector: "app-activity-block",
        inputs: {
          stat$: "stat$",
          range$: "range$"
        },
        outputs: {
          showReq: "showReq"
        },
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<form class=\"admin-form\">\n    <fieldset class=\"admin-form__fieldset\">\n        <legend class=\"admin-form__legend\">\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u044F \u043F\u043E\u0440\u0442\u0430\u043B\u0430</legend>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0412\u0441\u0435\u0433\u043E <br>\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).count.all\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).count.users\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">{{ 'COMMON.COMPANIES' | translate}}</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).count.companies\">\n            </span>\n        </label>\n        <div class=\"admin-input-row\">\n            <button class=\"btn admin-btn_white admin-btn_m\" (click)=\"show()\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C</button>\n        </div>\n    </fieldset>\n    <hr class=\"admin-hr\">\n    <app-dashboard-range [params$]=\"range$\"></app-dashboard-range>\n    <fieldset class=\"admin-form__fieldset\">\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\"><b>\u0412\u0441\u0435\u0433\u043E \u043D\u043E\u0432\u044B\u0445 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0439</b></span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).registrations.all\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).registrations.users\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">{{ 'COMMON.COMPANIES' | translate}}</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).registrations.companies\">\n            </span>\n        </label>\n    </fieldset>\n    <fieldset class=\"admin-form__fieldset\">\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\"><b>\u041F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 </b> <small> [\u0437\u0430\u0445\u043E\u0434\u0438\u043B\u0438 \u0445\u043E\u0442\u044F \u0431\u044B 1 \u0440\u0430\u0437 \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434]</small></span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).presence.all\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).presence.users\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">{{ 'COMMON.COMPANIES' | translate}}</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).presence.companies\">\n            </span>\n        </label>\n    </fieldset>\n    <fieldset class=\"admin-form__fieldset\">\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\"><b>\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C </b> <small> [\u0445\u043E\u0442\u044F \u0431\u044B 1 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F \u0437\u0430 \u043F\u0435\u0440\u0438\u043E\u0434]</small></span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).activity.all\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).activity.users\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">{{ 'COMMON.COMPANIES' | translate}}</span>\n            <span class=\"admin-input-row__inputgroup\">\n                <input type=\"text\" class=\"admin-input admin-input_m\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).activity.companies\">\n            </span>\n        </label>\n    </fieldset>\n    <fieldset class=\"admin-form__fieldset\">\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\"><b>{{ 'COMMON.PUBLICATIONS_' | translate}} / {{ 'COMMON.COMMENTS' | translate}} / {{ 'COMMON.NEWS' | translate}}</b></span>\n            <span class=\"admin-input-row__inputwrap\">\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.all.articles\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.all.comments\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.all.news\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n            <span class=\"admin-input-row__inputwrap\">\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.users.articles\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.users.comments\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.users.news\">\n            </span>\n        </label>\n        <label class=\"admin-input-row\">\n            <span class=\"admin-input-row__title admin-input-row__title_m\">{{ 'COMMON.COMPANIES' | translate}}</span>\n            <span class=\"admin-input-row__inputwrap\">\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.companies.articles\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.companies.comments\">\n                /\n                <input type=\"text\" class=\"admin-input\" disabled=\"true\" name=\"\" [value]=\"(stat$ | async).materials.companies.news\">\n            </span>\n        </label>\n    </fieldset>\n</form>\n",
        styles: ["/*baisic*/\nhtml {\n  -webkit-locale: \"ru-RU\";\n  direction: ltr;\n  unicode-bidi: -webkit-isolate;\n  unicode-bidi: -moz-isolate;\n  unicode-bidi: isolate;\n  min-height: 100%;\n  background: #f0f0f0;\n}\nhtml, body {\n  min-height: 100%;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  background: #f0f0f0;\n}\nbody {\n  font: 400 16px/1.2 \"Open Sans\", sans-serif;\n  color: #000;\n  background: #f0f0f0;\n  min-width: 310px;\n  min-height: 100%;\n  position: relative;\n  overflow-x: hidden;\n  opacity: 1;\n  -moz-font-feature-settings: \"kern\";\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: none;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.clearfix {\n  -ms-zoom: 1;\n  zoom: 1;\n}\n*, *:before, *:after, .input--search {\n  box-sizing: border-box;\n}\n/*typographyc*/\nol, ul, li {\n  margin: 0;\n  padding: 0;\n}\nul li {\n  list-style: none;\n}\nh1, h2, h3, h4, p {\n  margin: 0;\n  padding: 0;\n}\na {\n  text-decoration: none;\n  outline: none;\n  transition: 0.25s ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n/*buttons*/\n.btn {\n  display: block;\n  padding: 0;\n  outline: none;\n  border: none;\n  background: none;\n  box-shadow: none;\n  transition: 0.25s ease;\n  cursor: pointer;\n  border-radius: 0;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.btn::-moz-focus-inner {\n  border: 0;\n}\n.btn:disabled {\n  cursor: default;\n  opacity: 0.3;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\nsvg {\n  display: block;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n/*layout*/\n.wrapper {\n  overflow: hidden;\n  min-height: 100%;\n}\n.main {\n  min-height: 100vh;\n}\n.admin-wrap {\n  max-width: 1024px;\n  padding: 0 20px;\n  margin: 0 auto;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  -o-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n.admin-bar {\n  width: 260px;\n  margin-right: 40px;\n  margin-bottom: 30px;\n}\n.admin-content {\n  width: calc(100% - 260px - 40px);\n}\n.admin-blc {\n  padding: 22px 20px;\n  margin-bottom: 30px;\n  border-radius: 20px;\n}\n.admin-blc__grey {\n  background-color: #FAFAFB;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n}\n.admin-blc__white {\n  background-color: #fff;\n}\n.admin-blc__title,\n.admin-blc__subtitle {\n  font-family: \"Roboto\";\n  color: rgba(0, 0, 0, 0.87);\n  margin-bottom: 22px;\n}\n.admin-blc__title {\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  margin: 18px 0;\n  border-bottom: 1px solid #E5E5E5;\n  padding-bottom: 6px;\n}\n.admin-blc__subtitle {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n}\n.admin-full {\n  width: 100%;\n}\n@media only screen and (max-width: 767px) {\n  .admin-wrap {\n    padding: 0 15px;\n    display: block;\n  }\n\n  .admin-bar {\n    width: 100%;\n    margin: 0 0 20px;\n  }\n\n  .admin-content {\n    width: 100%;\n  }\n}\n/*nav*/\n.admin-nav {\n  background: #fff;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 20px;\n}\n.admin-nav li {\n  border-bottom: 1px solid #F6F6F6;\n}\n.admin-nav li:last-child {\n  border-bottom: none;\n}\n.admin-nav li a {\n  padding: 10px 0;\n  display: block;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.6);\n}\n.admin-nav li a:hover,\n.admin-nav li a.active {\n  color: #00b7ff;\n}\n/*form*/\n.admin-form > *:first-child {\n  margin-top: 0;\n}\n.admin-form > *:last-child {\n  margin-bottom: 0;\n}\n.admin-form__fieldset {\n  display: block;\n  margin: 0 0 15px;\n  padding: 0;\n  border: none;\n  outline: none;\n  max-width: 100%;\n  min-inline-size: auto;\n}\n.admin-form__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 24px;\n}\n.admin-form__bar .btn {\n  margin-right: 24px;\n}\n.admin-form__bar .btn:last-child {\n  margin-right: 0;\n}\n.admin-form__wrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.admin-form__wrap-main {\n  flex-grow: 1;\n  margin-right: 30px;\n}\n.admin-form__wrap-bar {\n  padding-top: 37px;\n}\n.admin-form__grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-column-gap: 20px;\n  grid-row-gap: 20px;\n  margin: 15px 0;\n}\n.admin-form__legend {\n  font-weight: 600;\n}\n.admin-form__col-title {\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 6px;\n}\n/*select*/\n.admin-select {\n  width: 100%;\n}\n/*input*/\n.admin-input {\n  display: block;\n  width: 100%;\n  outline: none;\n  transition: 0.25s ease;\n  box-shadow: none;\n  -webkit-appearance: none;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  padding: 8px 19px;\n  font-size: 14px;\n}\n/*input*/\n.admin-textarea {\n  display: block;\n  width: 100%;\n  outline: none;\n  transition: 0.25s ease;\n  box-shadow: none;\n  -webkit-appearance: none;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  padding: 8px 19px;\n  font-size: 14px;\n  height: 100px;\n  resize: none;\n}\n.admin-textarea_100 {\n  height: 52px;\n}\n/*buttons*/\n.admin-btn_white {\n  height: 42px;\n  line-height: 40px;\n  border-radius: 21px;\n  padding: 0 13px;\n  background: #fff;\n  border: 1px solid #00B9FA;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: #00B9FA;\n  text-align: center;\n  white-space: nowrap;\n}\n.admin-btn_blue {\n  height: 42px;\n  line-height: 40px;\n  border-radius: 21px;\n  padding: 0 13px;\n  background: #00B9FA;\n  border: 1px solid #00B9FA;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n}\n.admin-btn_m {\n  width: 200px;\n}\n/*admin-input-row*/\n.admin-input-row {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n  margin: 12px 0;\n}\n.admin-input-blc {\n  display: block;\n  margin: 12px 0;\n}\n.admin-input-blc .admin-input-row__title {\n  margin-bottom: 6px;\n}\n.admin-input-row__title {\n  display: block;\n}\n.admin-input-row .admin-input-row__title {\n  width: 170px;\n}\n.admin-input-row .admin-input-row__title_m {\n  width: 220px;\n}\n.admin-input-row .admin-input-row__title_s {\n  width: 70px;\n  font-size: 14px;\n}\n.admin-input-row__inputgroup {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  flex-grow: 1;\n}\n.admin-input-row__inputgroup span {\n  white-space: nowrap;\n}\n.admin-input-row__input {\n  width: 90px;\n}\n.admin-input_m {\n  width: 160px;\n}\n.admin-input_s {\n  width: 110px;\n}\n.admin-input_xs {\n  width: 65px;\n}\n.admin-input-row .admin-select {\n  width: 220px;\n}\n.admin-input-row__inputgroup .admin-input + .admin-input,\n.admin-input-row__inputgroup .admin-input + .admin-check {\n  margin-left: 25px;\n}\n.admin-input-row__inputwrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n  background: #f1f1f5;\n  border: 1px solid transparent;\n  border-radius: 15px;\n  font-size: 14px;\n  width: 270px;\n}\n.admin-input-row__inputwrap .admin-input {\n  max-width: 30%;\n  flex-grow: 1;\n  background: none;\n  border: none;\n}\n@media only screen and (max-width: 767px) {\n  .admin-input-row {\n    -o-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n\n  .admin-input-row__title {\n    padding: 7px 0;\n  }\n}\n/*add*/\n.admin-form__add {\n  width: 34px;\n  height: 34px;\n}\n/*form tab*/\n.admin-form__tab {\n  border-collapse: collapse;\n  width: 100%;\n  max-width: 380px;\n}\n.admin-form__tab th {\n  padding: 8px 12px;\n  text-align: center;\n}\n.admin-form__tab tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-form__tab tbody tr:last-child {\n  border-bottom: none;\n}\n.admin-form__tab td {\n  padding: 8px 12px;\n  font-size: 14px;\n}\n.admin-form__tab th:first-child,\n.admin-form__tab td:first-child {\n  padding-left: 0;\n  text-align: left;\n  width: 140px;\n}\n.admin-form__tab .admin-input {\n  margin: 0 auto;\n}\n.admin-form__tab .admin-check {\n  width: 15px;\n  height: 15px;\n  margin: 0 auto;\n  display: block;\n  padding-left: 15px;\n}\n.admin-form__tab .admin-big-check {\n  margin: 0 auto;\n}\n/*del*/\n.admin-form__del {\n  width: 34px;\n  height: 34px;\n}\n/*admin-popup*/\n.admin-popup {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n}\n.admin-popup__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.admin-popup__main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 380px;\n  padding: 54px 20px 20px;\n  background: #FCFCFC;\n  border: 1px solid #FCFCFC;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-popup__close {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 24px;\n  height: 24px;\n  z-index: 2;\n}\n.admin-popup__title {\n  font-family: \"Roboto\";\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23px;\n  margin-bottom: 10px;\n}\n.admin-popup__txt {\n  margin-bottom: 30px;\n  font-size: 16px;\n  line-height: 22px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-popup__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.admin-popup__bar .admin-btn_white {\n  flex-grow: 1;\n  margin-right: 20px;\n}\n/*dropdown*/\n.admin-dropdown {\n  position: relative;\n}\n.admin-dropdown__content {\n  display: none;\n  position: absolute;\n  left: -15px;\n  top: 100%;\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 15px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  text-align: left;\n  padding: 20px 12px;\n  z-index: 10;\n}\n.admin-dropdown__content::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -19px;\n  left: 10px;\n  display: block;\n  border-left: 13px solid transparent;\n  border-right: 13px solid transparent;\n  border-bottom: 26px solid #fff;\n}\n.admin-dropdown__content_left {\n  left: auto;\n  right: -15px;\n}\n.admin-dropdown__content_left::before {\n  left: auto;\n  right: 10px;\n}\n.admin-dropdown__content .admin-check__txt {\n  white-space: nowrap;\n}\n.admin-dropdown__content .admin-check {\n  margin: 8px 0;\n}\n.admin-dropdown__content .admin-check:first-child {\n  margin-top: 0;\n}\n.admin-dropdown__content .admin-check:last-child {\n  margin-bottom: 0;\n}\n.admin-dropdown__content a {\n  white-space: nowrap;\n  display: block;\n  padding: 8px 0;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.6);\n  border-bottom: 1px solid #F6F6F6;\n}\n.admin-dropdown__content a:last-child {\n  border-bottom: none;\n}\n.admin-dropdown__content a:hover {\n  color: #000;\n}\n.admin-dropdown__content.show {\n  display: block;\n}\n.admin-dropdown__btn {\n  width: 16px;\n  height: 16px;\n}\n.admin-dropdown__btn svg {\n  fill: rgba(0, 0, 0, 0.6);\n}\n/*table*/\n.admin-tab-wrap {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.admin-tab {\n  width: 100%;\n  border-collapse: collapse;\n}\n.admin-tab tr {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-tab td {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.admin-tab td:nth-child(2) {\n  word-break: break-all;\n}\n.admin-tab td, .admin-tab th {\n  padding: 12px 10px;\n  text-align: center;\n  vertical-align: top;\n}\n.admin-tab td:first-child, .admin-tab th:first-child {\n  padding-left: 20px;\n}\n.admin-tab td:last-child, .admin-tab th:last-child {\n  padding-right: 20px;\n}\n.admin-tab td {\n  text-align: center;\n  font-size: 14px;\n}\n.admin-tab__sort {\n  white-space: nowrap;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n}\n.admin-tab__sort-icn {\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.admin-tab__sort-icn svg {\n  fill: rgba(0, 0, 0, 0.6);\n}\n/*admin-check*/\n.admin-check {\n  display: inline-block;\n  padding-left: 25px;\n  position: relative;\n}\n.admin-check__txt {\n  color: #696974;\n  font-size: 14px;\n  line-height: 22px;\n  min-height: 15px;\n  display: inline-block;\n}\n.admin-check__txt::before {\n  content: \"\";\n  display: block;\n  background: #e6e6e6;\n  border: 0 solid #000;\n  border-radius: 5px;\n  height: 15px;\n  left: 0;\n  position: absolute;\n  top: 3px;\n  width: 15px;\n  cursor: pointer;\n}\n.admin-check input {\n  display: none;\n}\n.admin-check input:checked + .admin-check__txt::before {\n  background: #3dd598;\n}\n.admin-check input:checked + .admin-check__txt::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  height: 7px;\n  left: 5px;\n  top: 5px;\n  transform: rotate(45deg);\n  width: 3px;\n  box-sizing: unset;\n  cursor: pointer;\n}\n/*admin-big-check*/\n.admin-big-check {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: relative;\n}\n.admin-big-check__txt::before {\n  content: \"\";\n  display: block;\n  background: #e6e6e6;\n  border: 0 solid #000;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  cursor: pointer;\n}\n.admin-big-check input {\n  display: none;\n}\n.admin-big-check input:checked + .admin-big-check__txt::before {\n  background: #3dd598;\n}\n.admin-big-check input:checked + .admin-big-check__txt::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  border: solid #fff;\n  border-width: 0 2px 2px 0;\n  height: 9px;\n  left: 7px;\n  top: 4px;\n  transform: rotate(45deg);\n  width: 4px;\n  box-sizing: unset;\n  cursor: pointer;\n}\n/*upload*/\n.admin-upload__bar {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 15px 0 10px;\n}\n.admin-upload__label {\n  display: inline-block;\n  margin-right: 30px;\n}\n.admin-upload__label input {\n  display: none;\n}\n.admin-upload__add {\n  color: #00B9FA;\n  text-decoration: underline;\n}\n.admin-upload__del:hover,\n.admin-upload__add:hover {\n  text-decoration: none;\n}\n.admin-upload__del {\n  color: rgba(0, 0, 0, 0.6);\n  text-decoration: underline;\n}\n.admin-upload__wrap {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border-radius: 15px;\n  border: 1px dashed rgba(0, 0, 0, 0.6);\n  min-height: 100px;\n}\n.admin-upload__wrap-plus {\n  width: 40px;\n  height: 40px;\n}\n/*admin-bar-list*/\n.admin-bar-list {\n  background: #fff;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 20px;\n}\n.admin-bar-list__title {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 18px;\n  margin-bottom: 10px;\n}\n.admin-bar-list {\n  list-style: none;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  line-height: 16px;\n  color: rgba(0, 0, 0, 0.8);\n  counter-reset: num;\n}\n.admin-bar-list li {\n  list-style: none;\n  position: relative;\n  padding-left: 20px;\n  margin-top: 0.8em;\n}\n.admin-bar-list li:before {\n  content: counter(num) \".\";\n  counter-increment: num;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*admin-tabs*/\n.admin-tabs__nav {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: flex-end;\n  align-items: flex-end;\n  justify-content: flex-start;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  margin-bottom: 15px;\n}\n.admin-tabs__link {\n  margin-right: 25px;\n  display: block;\n  padding-bottom: 15px;\n  font-size: 15px;\n  line-height: 18px;\n  color: rgba(0, 0, 0, 0.7);\n  position: relative;\n  bottom: -1px;\n}\n.admin-tabs__link.active {\n  color: #00B9FA;\n}\n.admin-tabs__link.active::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  border-radius: 3px 3px 0 0;\n  background-color: #00B9FA;\n}\n.admin-tabs__pane {\n  display: none;\n}\n.admin-tabs__pane.show {\n  display: block;\n}\n.admin-tabs__filter {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding-bottom: 15px;\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: flex-end;\n  margin-bottom: 15px;\n}\n.admin-tabs__filter .admin-select {\n  width: 200px;\n  margin-left: 15px;\n}\n/*author*/\n.admin-author {\n  padding: 12px 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.admin-author__main,\n.admin-author__content,\n.admin-author__header {\n  display: -moz-flex;\n  display: -ms-flex;\n  display: -o-flex;\n  display: flex;\n  -ms-align-items: center;\n  align-items: center;\n  justify-content: space-between;\n}\n.admin-author__header {\n  margin-bottom: 15px;\n}\n.admin-author__avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  margin-right: 15px;\n}\n.admin-author__avatar img {\n  display: block;\n  width: 100%;\n}\n.admin-author__name {\n  font-weight: 500;\n  font-size: 28px;\n  line-height: 33px;\n}\n.admin-author:last-child {\n  border-bottom: none;\n}\n.admin-author__txt {\n  max-width: calc(33% - 10px);\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.7);\n}\n.admin-author__txt span {\n  color: #00B9FA;\n}\n/*hr*/\n.admin-hr {\n  margin: 15px 0;\n  padding: 0;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.12);\n  border: none;\n}\n.admin-input_s {\n  width: 170px;\n}\n@media only screen and (max-width: 767px) {\n  .admin-input-row__inputgroup {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .admin-input-row__inputgroup * {\n    margin-left: 0 !important;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvZGFzaGJvYXJkLWJhc2Utc3R5bGVzLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9hY3Rpdml0eS1ibG9jay5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9zdHlsZXMvYWRtaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUFBLDBCQUFBO0VBQUEscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUNFRjtBREFBO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtBQ0dGO0FEREE7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUNJRjtBREZBO0VBQWlCLFdBQUE7QUNNakI7QURMQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0FDUUY7QUROQTtFQUdZLHNCQUFBO0FDU1o7QUROQSxjQUFBO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1NGO0FEUEE7RUFBTSxnQkFBQTtBQ1dOO0FEVkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2FGO0FEWEE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFHQSxzQkFBQTtFQUNBLDZDQUFBO0FDY0Y7QURYQSxVQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJB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MUhBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FENkhKO0FDMUhBLFNBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSw0Q0FBQTtBRDZISjtBQzFIQTs7O0VBSUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRDZISjtBQzFIQTtFQUNJLG1CQUFBO0FENkhKO0FDMUhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBRDZISjtBQzFIQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FENkhKO0FDMUhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQ2SEo7QUMxSEE7RUFDSSxtQkFBQTtBRDZISjtBQzFIQTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FENkhKO0FDMUhBO0VBQ0ksY0FBQTtBRDZISjtBQzFIQSxLQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUQ2SEo7QUExbENBO0VBQ0ksWUFBQTtBQTZsQ0o7QUF6bENJO0VBREo7SUFFUSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7RUE2bENOO0VBM2xDTTtJQUNJLHlCQUFBO0lBQ0EsbUJBQUE7RUE2bENWO0FBQ0YiLCJmaWxlIjoiYWN0aXZpdHktYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmJhaXNpYyovXG5odG1se1xuICAtd2Via2l0LWxvY2FsZTogXCJydS1SVVwiO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdW5pY29kZS1iaWRpOiBpc29sYXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuaHRtbCwgYm9keXtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG59XG5ib2R5e1xuICBmb250OiA0MDAgMTZweC8xLjIgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICBtaW4td2lkdGg6IDMxMHB4OyBcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG9wYWNpdHk6IDE7XG4gIC1tb3otZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVye1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uY2xlYXJmaXg6YWZ0ZXIge2NsZWFyOiBib3RoO31cbi5jbGVhcmZpeHtcbiAgLW1zLXpvb206IDE7XG4gIHpvb206IDE7XG59XG4qLCAqOmJlZm9yZSwgKjphZnRlciwgLmlucHV0LS1zZWFyY2h7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qdHlwb2dyYXBoeWMqL1xub2wsdWwsbGl7ICAgIFxuICBtYXJnaW46MDtcbiAgcGFkZGluZzogMDsgICAgXG59XG51bCBsaXtsaXN0LXN0eWxlOiBub25lO31cbmgxLGgyLGgzLGg0LHB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qYnV0dG9ucyovXG4uYnRue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IC4yNXMgZWFzZTsgIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi5idG46Oi1tb3otZm9jdXMtaW5uZXIge2JvcmRlcjogMDt9XG4uYnRuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBvcGFjaXR5OiAuMztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuc3Zne1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKmxheW91dCovXG4ud3JhcHBlcntcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn0gXG4ubWFpbnttaW4taGVpZ2h0OiAxMDB2aDt9IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2hhcmVkL3N0eWxlcy9kYXNoYm9hcmQtYmFzZS1zdHlsZXMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zaGFyZWQvc3R5bGVzL2FkbWluLnNjc3MnO1xuXG4uYWRtaW4taW5wdXRfcyB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dGdyb3VwIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweCkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5hZG1pbi13cmFwIHtcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5hZG1pbi1iYXIge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmFkbWluLWNvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCAtIDQwcHgpO1xufVxuXG4uYWRtaW4tYmxjIHsgIFxuICAgIHBhZGRpbmc6IDIycHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5hZG1pbi1ibGNfX2dyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkI7ICBcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xufVxuXG4uYWRtaW4tYmxjX193aGl0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUsXG4uYWRtaW4tYmxjX19zdWJ0aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44Nyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn1cblxuLmFkbWluLWJsY19fdGl0bGUgeyBcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDsgXG4gICAgbWFyZ2luOiAxOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLmFkbWluLWJsY19fc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uYWRtaW4tZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XG4gICAgLmFkbWluLXdyYXB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5hZG1pbi1iYXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4O1xuICAgIH1cbiAgICAuYWRtaW4tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLypuYXYqL1xuLmFkbWluLW5hdiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFkbWluLW5hdiBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNkY2RjY7XG59XG5cbi5hZG1pbi1uYXYgbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmFkbWluLW5hdiBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi5hZG1pbi1uYXYgbGkgYTpob3Zlcixcbi5hZG1pbi1uYXYgbGkgYS5hY3RpdmUge1xuICAgIGNvbG9yOiAjMDBiN2ZmO1xufVxuXG4vKmZvcm0qL1xuLmFkbWluLWZvcm0gPiAqOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWRtaW4tZm9ybSA+ICo6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmFkbWluLWZvcm1fX2ZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1pbi1pbmxpbmUtc2l6ZTogYXV0bztcbn1cblxuLmFkbWluLWZvcm1fX2JhciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLmFkbWluLWZvcm1fX2JhciAuYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG59XG5cbi5hZG1pbi1mb3JtX19iYXIgLmJ0bjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5hZG1pbi1mb3JtX193cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRtaW4tZm9ybV9fd3JhcC1tYWluIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4OyAgXG59XG5cbi5hZG1pbi1mb3JtX193cmFwLWJhciB7IFxuICAgIHBhZGRpbmctdG9wOiAzN3B4O1xufVxuXG4uYWRtaW4tZm9ybV9fZ3JpZCB7XG4gICAgZGlzcGxheTogLW1zLWdyaWQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5hZG1pbi1mb3JtX19sZWdlbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hZG1pbi1mb3JtX19jb2wtdGl0bGUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi8qc2VsZWN0Ki9cbi5hZG1pbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKmlucHV0Ki9cbi5hZG1pbi1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiAuMjVzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmNTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyppbnB1dCovXG4uYWRtaW4tdGV4dGFyZWEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogLjI1cyBlYXNlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiA4cHggMTlweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5hZG1pbi10ZXh0YXJlYV8xMDAge1xuICAgIGhlaWdodDogNTJweDtcbn1cblxuLypidXR0b25zKi9cbi5hZG1pbi1idG5fd2hpdGUge1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEI5RkE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGNvbG9yOiAjMDBCOUZBO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tYnRuX2JsdWUge1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDBCOUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMEI5RkE7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tYnRuX20ge1xuICAgIHdpZHRoOiAyMDBweDtcbn1cblxuLyphZG1pbi1pbnB1dC1yb3cqL1xuLmFkbWluLWlucHV0LXJvdyB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbi5hZG1pbi1pbnB1dC1ibGMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMTJweCAwO1xufVxuXG4uYWRtaW4taW5wdXQtYmxjIC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZSB7XG4gICAgd2lkdGg6IDE3MHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93IC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlX20ge1xuICAgIHdpZHRoOiAyMjBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvdyAuYWRtaW4taW5wdXQtcm93X190aXRsZV9zIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0Z3JvdXAge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXRncm91cCBzcGFuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dCB7XG4gICAgd2lkdGg6IDkwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF9tIHtcbiAgICB3aWR0aDogMTYwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF9zIHtcbiAgICB3aWR0aDogMTEwcHg7XG59XG5cbi5hZG1pbi1pbnB1dF94cyB7XG4gICAgd2lkdGg6IDY1cHg7XG59XG5cbi5hZG1pbi1pbnB1dC1yb3cgLmFkbWluLXNlbGVjdCB7XG4gICAgd2lkdGg6IDIyMHB4O1xufVxuXG4uYWRtaW4taW5wdXQtcm93X19pbnB1dGdyb3VwIC5hZG1pbi1pbnB1dCArIC5hZG1pbi1pbnB1dCxcbi5hZG1pbi1pbnB1dC1yb3dfX2lucHV0Z3JvdXAgLmFkbWluLWlucHV0ICsgLmFkbWluLWNoZWNrIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXR3cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWY1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbn1cblxuLmFkbWluLWlucHV0LXJvd19faW5wdXR3cmFwIC5hZG1pbi1pbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA3NjdweCkge1xuICAgIC5hZG1pbi1pbnB1dC1yb3cge1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5hZG1pbi1pbnB1dC1yb3dfX3RpdGxlIHtcbiAgICAgICAgcGFkZGluZzogN3B4IDA7XG4gICAgfVxufVxuXG4vKmFkZCovXG4uYWRtaW4tZm9ybV9fYWRkIHtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDM0cHg7ICBcbn1cblxuLypmb3JtIHRhYiovXG4uYWRtaW4tZm9ybV9fdGFiIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzgwcHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdGgge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLmFkbWluLWZvcm1fX3RhYiB0Ym9keSB0cjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYWRtaW4tZm9ybV9fdGFiIHRkIHtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgdGg6Zmlyc3QtY2hpbGQsXG4uYWRtaW4tZm9ybV9fdGFiIHRkOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTQwcHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWlucHV0IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmFkbWluLWZvcm1fX3RhYiAuYWRtaW4tY2hlY2sge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5hZG1pbi1mb3JtX190YWIgLmFkbWluLWJpZy1jaGVjayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi8qZGVsKi9cbi5hZG1pbi1mb3JtX19kZWwge1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGhlaWdodDogMzRweDsgXG59XG5cbi8qYWRtaW4tcG9wdXAqL1xuLmFkbWluLXBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmFkbWluLXBvcHVwX19vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuXG4uYWRtaW4tcG9wdXBfX21haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgcGFkZGluZzogNTRweCAyMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkNGQ0ZDO1xuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tcG9wdXBfX2Nsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYWRtaW4tcG9wdXBfX3RpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7ICBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWRtaW4tcG9wdXBfX3R4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tcG9wdXBfX2JhciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5hZG1pbi1wb3B1cF9fYmFyIC5hZG1pbi1idG5fd2hpdGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi8qZHJvcGRvd24qL1xuLmFkbWluLWRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgdG9wOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIC4yNSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4IDEycHg7XG4gICAgei1pbmRleDogMTA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTlweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAyNnB4IHNvbGlkICNmZmY7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudF9sZWZ0IHtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAtMTVweDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50X2xlZnQ6OmJlZm9yZSB7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMTBweDtcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IC5hZG1pbi1jaGVja19fdHh0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrIHtcbiAgICBtYXJnaW46IDhweCAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQgLmFkbWluLWNoZWNrOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCBhIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNkY2RjY7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fY29udGVudCBhOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmVcbn1cblxuLmFkbWluLWRyb3Bkb3duX19jb250ZW50IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4uYWRtaW4tZHJvcGRvd25fX2NvbnRlbnQuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fYnRuIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5hZG1pbi1kcm9wZG93bl9fYnRuIHN2ZyB7XG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi8qdGFibGUqL1xuLmFkbWluLXRhYi13cmFwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZG1pbi10YWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cbiAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgfVxuICAgIHRkIHtcbiAgICAgICAgJjpudGgtY2hpbGQoMil7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgIHRkLCB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4uYWRtaW4tdGFiX19zb3J0IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hZG1pbi10YWJfX3NvcnQtaWNuIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hZG1pbi10YWJfX3NvcnQtaWNuIHN2ZyB7XG4gICAgZmlsbDogcmdiYSgwLCAwLCAwLCAuNik7XG59XG5cbi8qYWRtaW4tY2hlY2sqL1xuLmFkbWluLWNoZWNrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgIFxufVxuXG4uYWRtaW4tY2hlY2tfX3R4dCB7XG4gICAgY29sb3I6ICM2OTY5NzQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWRtaW4tY2hlY2tfX3R4dDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGJvcmRlcjogMCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRtaW4tY2hlY2sgaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWNoZWNrX190eHQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogIzNkZDU5ODtcbn1cblxuLmFkbWluLWNoZWNrIGlucHV0OmNoZWNrZWQgKyAuYWRtaW4tY2hlY2tfX3R4dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiA1cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAzcHg7XG4gICAgYm94LXNpemluZzogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKmFkbWluLWJpZy1jaGVjayovXG4uYWRtaW4tYmlnLWNoZWNrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG59XG5cbi5hZG1pbi1iaWctY2hlY2tfX3R4dDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGJvcmRlcjogMCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkbWluLWJpZy1jaGVjayBpbnB1dDpjaGVja2VkICsgLmFkbWluLWJpZy1jaGVja19fdHh0OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICMzZGQ1OTg7XG59XG5cbi5hZG1pbi1iaWctY2hlY2sgaW5wdXQ6Y2hlY2tlZCArIC5hZG1pbi1iaWctY2hlY2tfX3R4dDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgICBoZWlnaHQ6IDlweDtcbiAgICBsZWZ0OiA3cHg7XG4gICAgdG9wOiA0cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiA0cHg7XG4gICAgYm94LXNpemluZzogdW5zZXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKnVwbG9hZCovXG4uYWRtaW4tdXBsb2FkX19iYXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIG1hcmdpbjogMTVweCAwIDEwcHg7XG59XG5cbi5hZG1pbi11cGxvYWRfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4uYWRtaW4tdXBsb2FkX19sYWJlbCBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fYWRkIHtcbiAgICBjb2xvcjogIzAwQjlGQTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFkbWluLXVwbG9hZF9fZGVsOmhvdmVyLFxuLmFkbWluLXVwbG9hZF9fYWRkOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hZG1pbi11cGxvYWRfX2RlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYWRtaW4tdXBsb2FkX193cmFwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xuICAgIGRpc3BsYXk6IC1vLWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgwLCAwLCAwLCAuNik7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5hZG1pbi11cGxvYWRfX3dyYXAtcGx1cyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4vKmFkbWluLWJhci1saXN0Ki9cbi5hZG1pbi1iYXItbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmFkbWluLWJhci1saXN0X190aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFkbWluLWJhci1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpO1xuICAgIGNvdW50ZXItcmVzZXQ6IG51bTtcbn1cblxuLmFkbWluLWJhci1saXN0IGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogLjhlbTtcbn1cblxuLmFkbWluLWJhci1saXN0IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogY291bnRlcihudW0pICcuJzsgXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IG51bTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpO1xufVxuXG4vKmFkbWluLXRhYnMqL1xuLmFkbWluLXRhYnNfX25hdiB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFkbWluLXRhYnNfX2xpbmsge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0xcHg7XG59XG5cbi5hZG1pbi10YWJzX19saW5rLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMEI5RkE7XG59XG5cbi5hZG1pbi10YWJzX19saW5rLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjlGQTtcbn1cblxuLmFkbWluLXRhYnNfX3BhbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZG1pbi10YWJzX19wYW5lLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRtaW4tdGFic19fZmlsdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4OyAgXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiAtby1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hZG1pbi10YWJzX19maWx0ZXIgLmFkbWluLXNlbGVjdCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4vKmF1dGhvciovXG4uYWRtaW4tYXV0aG9yIHtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLmFkbWluLWF1dGhvcl9fbWFpbixcbi5hZG1pbi1hdXRob3JfX2NvbnRlbnQsXG4uYWRtaW4tYXV0aG9yX19oZWFkZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXg7XG4gICAgZGlzcGxheTogLW8tZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRtaW4tYXV0aG9yX19oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5hZG1pbi1hdXRob3JfX2F2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5hZG1pbi1hdXRob3JfX2F2YXRhciBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRtaW4tYXV0aG9yX19uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbn1cblxuLmFkbWluLWF1dGhvcjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uYWRtaW4tYXV0aG9yX190eHQge1xuICAgIG1heC13aWR0aDogY2FsYygzMyUgLSAxMHB4KTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xufVxuXG4uYWRtaW4tYXV0aG9yX190eHQgc3BhbiB7XG4gICAgY29sb3I6ICMwMEI5RkE7XG59XG5cbi8qaHIqL1xuLmFkbWluLWhyIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"],
        components: [{
          type: _shared_ui_dashboard_range_dashboard_range_component__WEBPACK_IMPORTED_MODULE_2__["DashboardRangeComponent"],
          selector: "app-dashboard-range",
          inputs: ["params$"]
        }],
        directives: [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"],
          selector: "form:not([ngNoForm]):not([ngNativeValidate])"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"],
          selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]"
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"],
          selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
          inputs: ["ngFormOptions"],
          outputs: ["ngSubmit"],
          exportAs: ["ngForm"]
        }],
        pipes: {
          "async": _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"],
          "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]
        },
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityBlockComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity-block',
            templateUrl: './activity-block.component.html',
            styleUrls: ['./activity-block.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [];
        },
        propDecorators: {
          stat$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          range$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showReq: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        }
      });
      /***/

    },

    /***/
    "SLwH":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/activity-management-page/activity-management-page.module.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: ActivityManagementPageModule */

    /***/
    function SLwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityManagementPageModule", function () {
        return ActivityManagementPageModule;
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


      var _activity_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-management-page-routing.module */
      "fTss");
      /* harmony import */


      var _activity_management_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activity-management-page.component */
      "wngE");
      /* harmony import */


      var _components_activity_block_activity_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/activity-block/activity-block.component */
      "Pjdb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _modules_dashboard_shared_ui_dashboard_range_dashboard_range_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @modules/dashboard/shared/ui/dashboard-range/dashboard-range.module */
      "8q4u");

      var ActivityManagementPageModule = /*#__PURE__*/_createClass(function ActivityManagementPageModule() {
        _classCallCheck(this, ActivityManagementPageModule);
      });

      ActivityManagementPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      ActivityManagementPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageModule,
        declarations: [_activity_management_page_component__WEBPACK_IMPORTED_MODULE_3__["ActivityManagementPageComponent"], _components_activity_block_activity_block_component__WEBPACK_IMPORTED_MODULE_4__["ActivityBlockComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _activity_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _modules_dashboard_shared_ui_dashboard_range_dashboard_range_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRangeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
      });
      ActivityManagementPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageModule,
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _activity_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _modules_dashboard_shared_ui_dashboard_range_dashboard_range_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRangeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_activity_management_page_component__WEBPACK_IMPORTED_MODULE_3__["ActivityManagementPageComponent"], _components_activity_block_activity_block_component__WEBPACK_IMPORTED_MODULE_4__["ActivityBlockComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _activity_management_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityManagementPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _modules_dashboard_shared_ui_dashboard_range_dashboard_range_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRangeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
          }]
        }]
      });
      /***/

    },

    /***/
    "fTss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/activity-management-page/activity-management-page-routing.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ActivityManagementPageRoutingModule */

    /***/
    function fTss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityManagementPageRoutingModule", function () {
        return ActivityManagementPageRoutingModule;
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


      var _activity_management_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./activity-management-page.component */
      "wngE");

      var routes = [{
        path: '',
        component: _activity_management_page_component__WEBPACK_IMPORTED_MODULE_2__["ActivityManagementPageComponent"]
      }];

      var ActivityManagementPageRoutingModule = /*#__PURE__*/_createClass(function ActivityManagementPageRoutingModule() {
        _classCallCheck(this, ActivityManagementPageRoutingModule);
      });

      ActivityManagementPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageRoutingModule,
        deps: [],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule
      });
      ActivityManagementPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageRoutingModule,
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
      ActivityManagementPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageRoutingModule,
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageRoutingModule,
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
    "jRqe":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/dashboard/shared/classes/dashboard-constants.class.ts ***!
      \*******************************************************************************/

    /*! exports provided: DashboardConstants */

    /***/
    function jRqe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardConstants", function () {
        return DashboardConstants;
      });

      var DashboardConstants = /*#__PURE__*/_createClass(function DashboardConstants() {
        _classCallCheck(this, DashboardConstants);
      });

      DashboardConstants.SelectItemConstant = {
        title: null,
        id: null,
        payload: null
      };
      DashboardConstants.RangeParamsConstant = {
        before: null,
        after: null,
        checkbox: null
      };
      DashboardConstants.TagsStatConstant = {
        all: null,
        "new": null
      };
      DashboardConstants.ActivityConstant = {
        count: {
          all: null,
          users: null,
          companies: null
        },
        registrations: {
          all: null,
          users: null,
          companies: null
        },
        presence: {
          all: null,
          users: null,
          companies: null
        },
        activity: {
          all: null,
          users: null,
          companies: null
        },
        materials: {
          all: {
            articles: null,
            comments: null,
            news: null
          },
          users: {
            articles: null,
            comments: null,
            news: null
          },
          companies: {
            articles: null,
            comments: null,
            news: null
          }
        }
      };
      /***/
    },

    /***/
    "wngE":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/dashboard/pages/activity-management-page/activity-management-page.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: ActivityManagementPageComponent */

    /***/
    function wngE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityManagementPageComponent", function () {
        return ActivityManagementPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modules_dashboard_shared_classes_dashboard_constants_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @modules/dashboard/shared/classes/dashboard-constants.class */
      "jRqe");
      /* harmony import */


      var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @shared/classes/abstract-component.class */
      "5Gpq");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @api/routes/administration.service */
      "5IOP");
      /* harmony import */


      var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @layout/sidebar-wrapper/sidebar-wrapper.service */
      "bgVh");
      /* harmony import */


      var _components_activity_block_activity_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/activity-block/activity-block.component */
      "Pjdb");

      var ActivityManagementPageComponent = /*#__PURE__*/function (_shared_classes_abstr) {
        function ActivityManagementPageComponent(administrationService, sidebarWrapperService) {
          var _this;

          _classCallCheck(this, ActivityManagementPageComponent);

          _this = _callSuper(this, ActivityManagementPageComponent);
          _this.administrationService = administrationService;
          _this.sidebarWrapperService = sidebarWrapperService;
          _this.stat$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_modules_dashboard_shared_classes_dashboard_constants_class__WEBPACK_IMPORTED_MODULE_1__["DashboardConstants"].ActivityConstant);
          _this.range$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_modules_dashboard_shared_classes_dashboard_constants_class__WEBPACK_IMPORTED_MODULE_1__["DashboardConstants"].RangeParamsConstant);
          return _this;
        }

        _inherits(ActivityManagementPageComponent, _shared_classes_abstr);

        return _createClass(ActivityManagementPageComponent, [{
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
            this.getStats();
          }
        }, {
          key: "getStats",
          value: function getStats() {
            var _this3 = this;

            var range = this.range$.getValue();

            if (range.checkbox) {
              this.administrationService.getActivity$(range.before, range.after).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (res) {
                return _this3.stat$.next(res);
              });
            } else {
              this.administrationService.getActivity$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$)).subscribe(function (res) {
                return _this3.stat$.next(res);
              });
            }
          }
        }]);
      }(_shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]);

      ActivityManagementPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageComponent,
        deps: [{
          token: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_5__["AdministrationService"]
        }, {
          token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["SidebarWrapperService"]
        }],
        target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component
      });
      ActivityManagementPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        type: ActivityManagementPageComponent,
        selector: "app-activity-management-page",
        usesInheritance: true,
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        template: "<app-activity-block [range$]=\"range$\" [stat$]=\"stat$\" (showReq)=\"getStats()\"></app-activity-block>\n",
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpdml0eS1tYW5hZ2VtZW50LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
        components: [{
          type: _components_activity_block_activity_block_component__WEBPACK_IMPORTED_MODULE_7__["ActivityBlockComponent"],
          selector: "app-activity-block",
          inputs: ["stat$", "range$"],
          outputs: ["showReq"]
        }]
      });

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({
        minVersion: "12.0.0",
        version: "12.2.17",
        ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__,
        type: ActivityManagementPageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-activity-management-page',
            templateUrl: './activity-management-page.component.html',
            styleUrls: ['./activity-management-page.component.scss']
          }]
        }],
        ctorParameters: function ctorParameters() {
          return [{
            type: _api_routes_administration_service__WEBPACK_IMPORTED_MODULE_5__["AdministrationService"]
          }, {
            type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_6__["SidebarWrapperService"]
          }];
        }
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-activity-management-page-activity-management-page-module-es5.js.map