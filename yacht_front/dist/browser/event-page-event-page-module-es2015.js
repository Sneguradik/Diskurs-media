(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-page-event-page-module"],{

/***/ "+Ocd":
/*!**************************************************************************!*\
  !*** ./src/app/modules/events/event-page/event-page-unwrap.component.ts ***!
  \**************************************************************************/
/*! exports provided: EventPageUnwrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageUnwrapComponent", function() { return EventPageUnwrapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "AytR");
/* harmony import */ var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/routes/events.service */ "3Gor");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @api/routes/companies.service */ "qPE0");
/* harmony import */ var _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @layout/sidebar-wrapper/sidebar-wrapper.service */ "bgVh");
/* harmony import */ var _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layout/dynamic-meta-tags/dynamic-meta-tags.service */ "xAOu");
/* harmony import */ var _event_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event-page.component */ "faIG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













class EventPageUnwrapComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_1__["AbstractComponent"] {
    constructor(eventsService, activatedRoute, sessionService, companyService, sidebarWrapperService, dynamicMetaTagsService, router) {
        super();
        this.eventsService = eventsService;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.companyService = companyService;
        this.sidebarWrapperService = sidebarWrapperService;
        this.dynamicMetaTagsService = dynamicMetaTagsService;
        this.router = router;
    }
    ngOnInit() {
        setTimeout(() => {
            this.sidebarWrapperService.params$.next({ article: false, trending: true, navigation: true, live: false, showSidebar: true });
        });
        this.event = this.activatedRoute.snapshot.data.data;
        this.setPreInfo();
        this.company$ = this.companyService.getSingle$(this.event.company.meta.id);
        this.own$ = this.sessionService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => user && this.event.company.meta.id === user.meta.id));
        this.eventsService.view$(this.event.meta.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngOnDestroy$)).subscribe();
    }
    ngOnDestroy() {
        this.dynamicMetaTagsService.setToDefault();
        super.ngOnDestroy();
    }
    setPreInfo() {
        this.dynamicMetaTagsService.metaInfo$.next({
            title: this.event.info.name,
            tags: [
                { property: 'og:title', content: this.event.info.name },
                { name: 'description', content: this.event.info.announcement },
                { property: 'og:description', content: this.event.info.announcement },
                { property: 'og:url', content: _env__WEBPACK_IMPORTED_MODULE_3__["environment"].url + this.router.url },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'Diskurs.Media' },
                { name: 'twitter:card', content: 'summary' },
                { name: 'twitter:title', content: this.event.info.name },
                { name: 'twitter:description', content: this.event.info.announcement },
            ]
        });
    }
}
EventPageUnwrapComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageUnwrapComponent, deps: [{ token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { token: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"] }, { token: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }, { token: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_9__["DynamicMetaTagsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
EventPageUnwrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: EventPageUnwrapComponent, selector: "app-event-page-unwrap", host: { styleAttribute: "width: 100%" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: '<app-event-page [event]="event" [own]="own$ | async" [company]="company$ | async"></app-event-page>', isInline: true, components: [{ type: _event_page_component__WEBPACK_IMPORTED_MODULE_10__["EventPageComponent"], selector: "app-event-page", inputs: ["event", "company", "own"] }], pipes: { "async": _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"] } });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageUnwrapComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-event-page-unwrap',
                    template: '<app-event-page [event]="event" [own]="own$ | async" [company]="company$ | async"></app-event-page>',
                    // tslint:disable-next-line:no-host-metadata-property
                    host: { style: 'width: 100%' }
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_4__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _api_routes_companies_service__WEBPACK_IMPORTED_MODULE_7__["CompaniesService"] }, { type: _layout_sidebar_wrapper_sidebar_wrapper_service__WEBPACK_IMPORTED_MODULE_8__["SidebarWrapperService"] }, { type: _layout_dynamic_meta_tags_dynamic_meta_tags_service__WEBPACK_IMPORTED_MODULE_9__["DynamicMetaTagsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; } });


/***/ }),

/***/ "7avB":
/*!*****************************************************************************************!*\
  !*** ./node_modules/angular8-yandex-maps/__ivy_ngcc__/fesm2015/angular8-yandex-maps.js ***!
  \*****************************************************************************************/
/*! exports provided: AngularYandexMapsModule, ScriptService, YA_MAP_CONFIG, YaClustererComponent, YaControlComponent, YaGeoObjectComponent, YaMapComponent, YaMultirouteComponent, YaPanoramaComponent, YaPlacemarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularYandexMapsModule", function() { return AngularYandexMapsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YA_MAP_CONFIG", function() { return YA_MAP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaClustererComponent", function() { return YaClustererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaControlComponent", function() { return YaControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaGeoObjectComponent", function() { return YaGeoObjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaMapComponent", function() { return YaMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaMultirouteComponent", function() { return YaMultirouteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaPanoramaComponent", function() { return YaPanoramaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YaPlacemarkComponent", function() { return YaPlacemarkComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "mrSG");








const _c0 = ["container"];
const YA_MAP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('YA_MAP_CONFIG');

/**
 * Generates a random string based on Date in hexadecimal numeral system
 * @example f175517fa4f3
 */
const generateRandomId = () => {
    return `f${Number(new Date()).toString(16)}`;
};

/**
 * Removes all Leading blank spaces from each line
 * @param s String for replacing
 */
const removeLeadingSpaces = (s) => s.trim().replace(/^ +/gm, '');

/**
 * Component for creating a geo object.
 * Can be displayed as a placemark, polyline, polygon, etc., depending on the geometry type.
 *
 * @example `<ya-geoobject [feature]="{ geometry: { type: 'Rectangle', coordinates: [[55.665, 37.66], [55.64,37.53]] } }"></ya-geoobject>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/geoobject}
 */
class YaGeoObjectComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the balloon.
         */
        this.balloon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Left-click on the object.
         */
        this.yaclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * GeoObject dragging.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the hint.
         */
        this.hint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Mouse actions with the object.
         */
        this.mouse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Multitouch actions with the object.
         */
        this.multitouch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._logErrors();
    }
    ngOnChanges(changes) {
        this._updateGeoObject(changes);
    }
    /**
     * Method for dynamic GeoObject configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updateGeoObject(changes) {
        const geoObject = this._geoObject;
        if (!geoObject)
            return;
        const { feature, options } = changes;
        if (feature) {
            this._setFeature(feature.currentValue, geoObject);
        }
        if (options) {
            geoObject.options.set(options.currentValue);
        }
    }
    /**
     * Destructs state and provides new values to API.
     * @param feature
     * @param geoObject
     */
    _setFeature(feature, geoObject) {
        const { geometry, properties } = feature;
        if (geometry) {
            console.error(removeLeadingSpaces(`
        The geometry of GeoObject cannot be changed after entity init.

        Solutions:
        1. Use ymaps from ILoadEvent
        2. Recreate GeoObject component with new feature.geometry
      `));
        }
        if (properties) {
            /**
             * Wrong typings in DefinitelyTyped.
             */
            geoObject.properties.set(properties);
        }
    }
    _logErrors() {
        if (!this.feature) {
            console.error('GeoObjects: feature input is required.');
            this.feature = {};
        }
    }
    /**
     * Creates GeoObject.
     *
     * @param map Necessary for removing entity from map.geoObjects on GeoObject destroy
     * `this.map.geoObjects.remove(this.geoObject);`.
     * @param clusterer Necessary for removing entity from Clusterer on GeoObject destroy
     * `this.clusterer.remove(this.geoObject);`.
     */
    createGeoObject(map, clusterer) {
        const geoObject = new ymaps.GeoObject(this.feature, this.options);
        this.id = generateRandomId();
        this._clusterer = clusterer;
        this._geoObject = geoObject;
        this._map = map;
        this._addEventListeners();
        return geoObject;
    }
    /**
     * Adds listeners on the GeoObject events.
     */
    _addEventListeners() {
        const geoObject = this._geoObject;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: geoObject }));
        const handlers = [
            {
                name: ['balloonopen', 'balloonclose'],
                fn: (e) => this.balloon.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['click', 'dblclick'],
                fn: (e) => this.yaclick.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['dragstart', 'dragend'],
                fn: (e) => this.drag.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['hintopen', 'hintclose'],
                fn: (e) => this.hint.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                fn: (e) => this.mouse.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['multitouchstart', 'multitouchmove', 'multitouchend'],
                fn: (e) => this.multitouch.emit({
                    ymaps,
                    instance: geoObject,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
        ];
        handlers.forEach((handler) => {
            geoObject.events.add(handler.name, (e) => this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        var _a, _b;
        /**
         * Wrong typings in DefinitelyTyped.
         */
        (_a = this._clusterer) === null || _a === void 0 ? void 0 : _a.remove(this._geoObject);
        (_b = this._map) === null || _b === void 0 ? void 0 : _b.geoObjects.remove(this._geoObject);
    }
}
YaGeoObjectComponent.ɵfac = function YaGeoObjectComponent_Factory(t) { return new (t || YaGeoObjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
YaGeoObjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaGeoObjectComponent, selectors: [["ya-geoobject"]], inputs: { feature: "feature", options: "options" }, outputs: { load: "load", balloon: "balloon", yaclick: "yaclick", drag: "drag", hint: "hint", mouse: "mouse", multitouch: "multitouch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function YaGeoObjectComponent_Template(rf, ctx) { }, styles: [""] });
YaGeoObjectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
YaGeoObjectComponent.propDecorators = {
    feature: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    balloon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yaclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    hint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    multitouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaGeoObjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-geoobject',
                template: "",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], balloon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yaclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multitouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], feature: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Component for creating a geo object with the geometry geometry.Point.
 *
 * @example `<ya-placemark [geometry]="[55.751952, 37.600739]"></ya-placemark>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/placemark}
 */
class YaPlacemarkComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the balloon.
         */
        this.balloon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Left-click on the object.
         */
        this.yaclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Placemark dragging.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the hint.
         */
        this.hint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Mouse actions with the object.
         */
        this.mouse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Multitouch actions with the object.
         */
        this.multitouch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._logErrors();
    }
    ngOnChanges(changes) {
        this._updatePlacemark(changes);
    }
    /**
     * Method for dynamic Placemark configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updatePlacemark(changes) {
        const placemark = this._placemark;
        if (!placemark)
            return;
        const { geometry, properties, options } = changes;
        if (geometry) {
            placemark.geometry.setCoordinates(geometry.currentValue);
        }
        if (properties) {
            /**
             * Wrong typings in DefinitelyTyped.
             */
            placemark.properties.set(properties.currentValue);
        }
        if (options) {
            placemark.options.set(options.currentValue);
        }
    }
    _logErrors() {
        if (!this.geometry) {
            console.error('Placemark: geometry input is required.');
            this.geometry = [];
        }
    }
    /**
     * Creates placemark.
     *
     * @param map Necessary for removing entity from map.geoObjects on Placemark destroy
     * `this.map.geoObjects.remove(this.placemark);`.
     * @param clusterer Necessary for removing entity from Clusterer on Placemark destroy
     * `this.clusterer.remove(this.placemark);`.
     */
    createPlacemark(map, clusterer) {
        const placemark = new ymaps.Placemark(this.geometry, this.properties, this.options);
        this.id = generateRandomId();
        this._clusterer = clusterer;
        this._map = map;
        this._placemark = placemark;
        this._addEventListeners();
        return placemark;
    }
    /**
     * Adds listeners on the Placemark events.
     */
    _addEventListeners() {
        const placemark = this._placemark;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: placemark }));
        const handlers = [
            {
                name: ['balloonopen', 'balloonclose'],
                fn: (e) => this.balloon.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['click', 'dblclick'],
                fn: (e) => this.yaclick.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['dragstart', 'dragend'],
                fn: (e) => this.drag.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['hintopen', 'hintclose'],
                fn: (e) => this.hint.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                fn: (e) => this.mouse.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['multitouchstart', 'multitouchmove', 'multitouchend'],
                fn: (e) => this.multitouch.emit({
                    ymaps,
                    instance: placemark,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
        ];
        handlers.forEach((handler) => {
            placemark.events.add(handler.name, (e) => this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        var _a, _b;
        /**
         * Wrong typings in DefinitelyTyped.
         */
        (_a = this._clusterer) === null || _a === void 0 ? void 0 : _a.remove(this._placemark);
        (_b = this._map) === null || _b === void 0 ? void 0 : _b.geoObjects.remove(this._placemark);
    }
}
YaPlacemarkComponent.ɵfac = function YaPlacemarkComponent_Factory(t) { return new (t || YaPlacemarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
YaPlacemarkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaPlacemarkComponent, selectors: [["ya-placemark"]], inputs: { geometry: "geometry", properties: "properties", options: "options" }, outputs: { load: "load", balloon: "balloon", yaclick: "yaclick", drag: "drag", hint: "hint", mouse: "mouse", multitouch: "multitouch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function YaPlacemarkComponent_Template(rf, ctx) { }, styles: [""] });
YaPlacemarkComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
YaPlacemarkComponent.propDecorators = {
    geometry: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    properties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    balloon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yaclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    hint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    multitouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaPlacemarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-placemark',
                template: "",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], balloon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yaclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multitouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], geometry: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], properties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Component for creating a clusterer. Clusterizes objects in the visible area of the map.
 * If the object does not fall within the visible area of the map, it will not be added to the map.
 * Note, that the clusterer does not react to changing the coordinates of objects (either programmatically,
 * or as the result of dragging). If you want to change the coordinates of some object in the clusterer,
 * you should first delete the object from the clusterer and then add it back.
 *
 * @example
 * `<ya-clusterer>
 *  <ya-placemark [geometry]="[55.74, 37.50]"></ya-placemark>
 *   <ya-geoobject [feature]="{ geometry: { type: 'Point', coordinates: [55.73, 37.52] } }"></ya-geoobject>
 * </ya-clusterer>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/clusterer}
 */
class YaClustererComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the hint.
         */
        this.hint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Map reference changed.
         */
        this.mapChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Change to the object options.
         */
        this.optionsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The parent object reference changed.
         */
        this.parentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnChanges(changes) {
        this._updateClusterer(changes);
    }
    /**
     * Method for dynamic Clusterer configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updateClusterer(changes) {
        const clusterer = this._clusterer;
        if (!clusterer)
            return;
        const { options } = changes;
        if (options) {
            /**
             * Wrong typings in DefinitelyTyped.
             */
            clusterer.options.set(options.currentValue);
        }
    }
    /**
     * Creates Clusterer.
     *
     * @param map Necessary for passing in children.
     */
    createClusterer(map) {
        const clusterer = new ymaps.Clusterer(this.options);
        this._clusterer = clusterer;
        /**
         * Adds new Placemarks to the clusterer on changes.
         */
        const placemarksSub = this.placemarks.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.placemarks))
            .subscribe((list) => {
            list.forEach((placemark) => {
                if (!placemark.id) {
                    /**
                     * Wrong typings in DefinitelyTyped.
                     */
                    clusterer.add(placemark.createPlacemark(map, clusterer));
                }
            });
        });
        this._sub.add(placemarksSub);
        /**
         * Adds new GeoObjects to the clusterer on changes.
         */
        const geoObjectsSub = this.geoObjects.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.geoObjects))
            .subscribe((list) => {
            list.forEach((geoObject) => {
                if (!geoObject.id) {
                    /**
                     * Wrong typings in DefinitelyTyped.
                     */
                    clusterer.add(geoObject.createGeoObject(map, clusterer));
                }
            });
        });
        this._sub.add(geoObjectsSub);
        this._addEventListeners();
        return clusterer;
    }
    /**
     * Adds listeners on Clusterer events.
     */
    _addEventListeners() {
        const clusterer = this._clusterer;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: clusterer }));
        const handlers = [
            {
                name: ['hintclose', 'hintopen'],
                fn: (e) => this.hint.emit({
                    ymaps,
                    instance: clusterer,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: 'mapchange',
                fn: (e) => this.mapChange.emit({
                    ymaps,
                    instance: clusterer,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: 'optionschange',
                fn: (e) => this.optionsChange.emit({
                    ymaps,
                    instance: clusterer,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: 'parentchange',
                fn: (e) => this.parentChange.emit({
                    ymaps,
                    instance: clusterer,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
        ];
        handlers.forEach((handler) => {
            clusterer.events.add(handler.name, (e) => this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
YaClustererComponent.ɵfac = function YaClustererComponent_Factory(t) { return new (t || YaClustererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
YaClustererComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaClustererComponent, selectors: [["ya-clusterer"]], contentQueries: function YaClustererComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaPlacemarkComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaGeoObjectComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.placemarks = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.geoObjects = _t);
    } }, inputs: { options: "options" }, outputs: { load: "load", hint: "hint", mapChange: "mapChange", optionsChange: "optionsChange", parentChange: "parentChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function YaClustererComponent_Template(rf, ctx) { }, styles: [""] });
YaClustererComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
YaClustererComponent.propDecorators = {
    placemarks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaPlacemarkComponent,] }],
    geoObjects: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaGeoObjectComponent,] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    hint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    optionsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    parentChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaClustererComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-clusterer',
                template: "",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], optionsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], parentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], placemarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaPlacemarkComponent]
        }], geoObjects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaGeoObjectComponent]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Component for creating and managing controls on the map.
 *
 * @example `<ya-control type="RoutePanel" [parameters]="{ options: { float: 'right' } }"></ya-control>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/controls}
 */
class YaControlComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._logErrors();
    }
    _logErrors() {
        if (!this.type) {
            console.error('Control: type input is required.');
        }
    }
    /**
     * Creates control
     * @returns Instance of created control
     */
    createControl() {
        const control = new ymaps.control[this.type](this.parameters);
        // RoutePanel ignores state in parameters. API bug
        if (this.type === 'RoutePanel' &&
            this.parameters &&
            this.parameters.state) {
            control.routePanel.state.set(Object.assign({}, this.parameters.state));
        }
        this._emitEvent(control);
        return control;
    }
    ngOnChanges(changes) {
        this._updateControl(changes);
    }
    _updateControl(changes) {
        if (Object.values(changes).some((v) => v.firstChange))
            return;
        console.error(removeLeadingSpaces(`
      Control doesn't support dynamic configuartion.

      Solutions:
      1. Use ymaps from ILoadEvent
      2. Recreate component with new configuration
    `));
    }
    _emitEvent(control) {
        this._ngZone.run(() => this.load.emit({ ymaps, instance: control }));
    }
}
YaControlComponent.ɵfac = function YaControlComponent_Factory(t) { return new (t || YaControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
YaControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaControlComponent, selectors: [["ya-control"]], inputs: { type: "type", parameters: "parameters" }, outputs: { load: "load" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function YaControlComponent_Template(rf, ctx) { }, styles: [""] });
YaControlComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
YaControlComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    parameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-control',
                template: "",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], parameters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

const DEFAULT_CONFIG = {
    lang: 'ru_RU',
};
/**
 * @dynamic
 *
 * @description Injectable service that will handle the loading of Yandex.Maps script
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/services/script}
 */
class ScriptService {
    constructor(config, _document) {
        this._document = _document;
        this._config = config || DEFAULT_CONFIG;
        this._window = document.defaultView;
    }
    /**
     * Inits Yandex.Maps script
     */
    initScript() {
        if ('ymaps' in this._window) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(ymaps.ready()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => ymaps));
        }
        if (!this._script) {
            const script = this._document.createElement('script');
            script.type = 'text/javascript';
            script.src = this._getScriptSource(this._config);
            script.id = 'yandexMapsApiScript';
            this._script = this._document.body.appendChild(script);
        }
        const load = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._script, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(ymaps.ready()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => ymaps))));
        const error = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._script, 'error').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((e) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(load, error).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    }
    /**
     * Returns script source by config
     * @param config Config with parameters that will be added in source
     * @example 'https://api-maps.yandex.ru/2.1/?apikey=658f67a2-fd77-42e9-b99e-2bd48c4ccad4&lang=en_US'
     */
    _getScriptSource(config) {
        const { enterprise, version = '2.1' } = config, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__rest"])(config, ["enterprise", "version"]);
        const params = this._convertIntoQueryParams(rest);
        return `https://${enterprise ? 'enterprise.' : ''}api-maps.yandex.ru/${version}/?${params}`;
    }
    /**
     * Converts an object into a query string parameters
     * @param o Object for converting
     * @example
     * // returns "apikey=XXX"
     * convertIntoQueryParams({ apikey: 'XXX' })
     */
    _convertIntoQueryParams(o) {
        return Object.keys(o)
            .map((key) => `${key}=${o[key]}`)
            .join('&');
    }
}
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](YA_MAP_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ScriptService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function ScriptService_Factory() { return new ScriptService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(YA_MAP_CONFIG, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: ScriptService, providedIn: "root" });
ScriptService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [YA_MAP_CONFIG,] }] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [YA_MAP_CONFIG]
            }] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();

/**
 * Component for creating Multi-route on the map
 *
 * @example `<ya-multiroute [referencePoints]="[[55.751952, 37.600739], 'Красные ворота, Москва']"></ya-multiroute>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/multiroute}
 */
class YaMultirouteComponent {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Change to the active route.
         */
        this.activeroutechange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the balloon.
         */
        this.balloon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Left-click on the object.
         */
        this.yaclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Mouse actions with the object.
         */
        this.mouse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Multitouch actions with the object.
         */
        this.multitouch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._logErrors();
    }
    ngOnChanges(changes) {
        this._updateMultiroute(changes);
    }
    /**
     * Method for dynamic Miltiroute configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updateMultiroute(changes) {
        const multiroute = this._multiroute;
        if (!multiroute)
            return;
        const { referencePoints, model, options } = changes;
        if (referencePoints) {
            multiroute.model.setReferencePoints(referencePoints.currentValue);
        }
        if (model) {
            this._setModel(model.currentValue, multiroute);
        }
        if (options) {
            /**
             * Wrong typings in DefinitelyTyped.
             */
            multiroute.options.set(options.currentValue);
        }
    }
    /**
     * Destructs state and provides new values to API.
     * @param model
     * @param multiroute
     */
    _setModel(model, multiroute) {
        const { referencePoints, params } = model;
        if (referencePoints) {
            multiroute.model.setReferencePoints(referencePoints);
        }
        if (params) {
            multiroute.model.setParams(params);
        }
    }
    _logErrors() {
        if (!this.referencePoints) {
            console.error('Multiroute: referencePoints input is required.');
            this.referencePoints = [];
        }
    }
    /**
     * Creates Multiroute.
     *
     * @param map Necessary for removing entity from map.geoObjects on Multiroute destroy
     * `this.map.geoObjects.remove(this.multiroute);`.
     */
    createMultiroute(map) {
        const multiroute = new ymaps.multiRouter.MultiRoute(Object.assign(Object.assign({}, this.model), { referencePoints: this.referencePoints }), this.options);
        this.id = generateRandomId();
        this._map = map;
        this._multiroute = multiroute;
        this._addEventListeners();
        return multiroute;
    }
    /**
     * Adds listeners on the Multiroute events.
     */
    _addEventListeners() {
        const multiroute = this._multiroute;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: multiroute }));
        const handlers = [
            {
                name: 'activeroutechange',
                fn: (e) => this.activeroutechange.emit({
                    ymaps,
                    instance: multiroute,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['balloonopen', 'balloonclose'],
                fn: (e) => this.balloon.emit({
                    ymaps,
                    instance: multiroute,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['click', 'dblclick'],
                fn: (e) => this.yaclick.emit({
                    ymaps,
                    instance: multiroute,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                fn: (e) => this.mouse.emit({
                    ymaps,
                    instance: multiroute,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['multitouchstart', 'multitouchmove', 'multitouchend'],
                fn: (e) => this.multitouch.emit({
                    ymaps,
                    instance: multiroute,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
        ];
        handlers.forEach((handler) => {
            multiroute.events.add(handler.name, (e) => this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this._map) === null || _a === void 0 ? void 0 : _a.geoObjects.remove(this._multiroute);
    }
}
YaMultirouteComponent.ɵfac = function YaMultirouteComponent_Factory(t) { return new (t || YaMultirouteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
YaMultirouteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaMultirouteComponent, selectors: [["ya-multiroute"]], inputs: { referencePoints: "referencePoints", model: "model", options: "options" }, outputs: { load: "load", activeroutechange: "activeroutechange", balloon: "balloon", yaclick: "yaclick", mouse: "mouse", multitouch: "multitouch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function YaMultirouteComponent_Template(rf, ctx) { }, styles: [""] });
YaMultirouteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
YaMultirouteComponent.propDecorators = {
    referencePoints: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    activeroutechange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    balloon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yaclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    multitouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaMultirouteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-multiroute',
                template: "",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], activeroutechange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], balloon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yaclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multitouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], referencePoints: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Component for creating and managing a map.
 *
 * @example `<ya-map [center]="[55.751952, 37.600739]" [state]="{type: 'yandex#satellite'}"></ya-map>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/map}
 */
class YaMapComponent {
    constructor(_ngZone, _scriptService) {
        this._ngZone = _ngZone;
        this._scriptService = _scriptService;
        /**
         * Map zoom level.
         */
        this.zoom = 10;
        /**
         * States for the map.
         * @see {@link https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/Map-docpage/#Mapparam-state}
         */
        this.state = {};
        /**
         * Options for the map.
         * @see {@link https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/Map-docpage/#Mapparam-options}
         */
        this.options = {};
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Smooth map movement.
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the balloon.
         */
        this.balloon = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Left-click on the object.
         */
        this.yaclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the hint.
         */
        this.hint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Mouse actions with the object.
         */
        this.mouse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Multitouch actions with the object.
         */
        this.multitouch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this._logErrors();
        this._initScript();
    }
    ngOnChanges(changes) {
        this._updateMap(changes);
    }
    /**
     * Method for dynamic Map configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updateMap(changes) {
        const map = this._map;
        if (!map)
            return;
        const { center, zoom, state, options } = changes;
        if (center) {
            map.setCenter(center.currentValue);
        }
        if (zoom) {
            map.setZoom(zoom.currentValue);
        }
        if (state) {
            this._setState(state.currentValue, map);
        }
        if (options) {
            map.options.set(options.currentValue);
        }
    }
    /**
     * Destructs state and provides new values to API.
     * @param state
     * @param map
     */
    _setState(state, map) {
        const { behaviors, bounds, center, controls, margin, type, zoom } = state;
        if (behaviors) {
            map.behaviors.enable(behaviors);
        }
        if (bounds) {
            map.setBounds(bounds);
        }
        if (center) {
            map.setCenter(center);
        }
        if (controls) {
            /**
             * Wrong typings in DefinitelyTyped.
             */
            controls.forEach((c) => map.controls.add(c));
        }
        if (margin) {
            map.margin.setDefaultMargin(margin);
        }
        if (type) {
            map.setType(type);
        }
        if (zoom) {
            map.setZoom(zoom);
        }
    }
    _logErrors() {
        if (!this.center && !this.onlyInstance) {
            console.error('Map: center input is required.');
            this.center = [];
        }
    }
    _initScript() {
        const sub = this._scriptService.initScript().subscribe(() => {
            if (this.onlyInstance) {
                this.load.emit({ ymaps });
                return;
            }
            const id = generateRandomId();
            this._map = this._createMap(id);
            this._addGeoObjects();
            this._addControls();
            this._addEventListeners();
        });
        this._sub.add(sub);
    }
    /**
     * Creates map.
     * @param id ID which will be set to the map container.
     */
    _createMap(id) {
        const containerElem = this.mapContainer.nativeElement;
        containerElem.setAttribute('id', id);
        containerElem.style.cssText = 'width: 100%; height: 100%;';
        return new ymaps.Map(id, Object.assign(Object.assign({}, this.state), { zoom: this.zoom, center: this.center }), this.options);
    }
    /**
     * Adds GeoObject to the Map on ContentChildren changes.
     */
    _addGeoObjects() {
        const map = this._map;
        // Placemarks (async)
        const placemarksSub = this.placemarks.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.placemarks))
            .subscribe((list) => {
            list.forEach((placemark) => {
                if (!placemark.id) {
                    const p = placemark.createPlacemark(map);
                    map.geoObjects.add(p);
                }
            });
        });
        this._sub.add(placemarksSub);
        // Multiroutes (async)
        const multiroutesSub = this.multiroutes.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.multiroutes))
            .subscribe((list) => {
            list.forEach((multiroute) => {
                if (!multiroute.id) {
                    const m = multiroute.createMultiroute(map);
                    map.geoObjects.add(m);
                }
            });
        });
        this._sub.add(multiroutesSub);
        // GeoObjects (async)
        const geoObjectsSub = this.geoObjects.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.geoObjects))
            .subscribe((list) => {
            list.forEach((geoObject) => {
                if (!geoObject.id) {
                    const g = geoObject.createGeoObject(map);
                    map.geoObjects.add(g);
                }
            });
        });
        this._sub.add(geoObjectsSub);
        // Clusterers (not async)
        this.clusterers.forEach((clusterer) => {
            const c = clusterer.createClusterer(map);
            /**
             * Wrong typings in DefinitelyTyped.
             */
            map.geoObjects.add(c);
        });
    }
    /**
     * Adds controls to the Map.
     */
    _addControls() {
        this.controls.forEach((control) => {
            const c = control.createControl();
            this._map.controls.add(c);
        });
    }
    /**
     * Adds listeners on the Map events.
     */
    _addEventListeners() {
        const map = this._map;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: map }));
        const handlers = [
            {
                name: ['actionbegin', 'actionend'],
                fn: (e) => this.action.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['balloonopen', 'balloonclose'],
                fn: (e) => this.balloon.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['click', 'dblclick'],
                fn: (e) => this.yaclick.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['hintopen', 'hintclose'],
                fn: (e) => this.hint.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseup'],
                fn: (e) => this.mouse.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
                runOutsideAngular: true,
            },
            {
                name: ['multitouchstart', 'multitouchmove', 'multitouchend'],
                fn: (e) => this.multitouch.emit({
                    ymaps,
                    instance: map,
                    type: e.originalEvent.type,
                    event: e,
                }),
                runOutsideAngular: true,
            },
        ];
        /**
         * Mouse and multitouch events should be run outside angular for better perfomance.
         * @see {@link https://github.com/ddubrava/angular8-yandex-maps/issues/35}
         */
        handlers.forEach((handler) => {
            map.events.add(handler.name, (e) => handler.runOutsideAngular
                ? this._ngZone.runOutsideAngular(() => handler.fn(e))
                : this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
YaMapComponent.ɵfac = function YaMapComponent_Factory(t) { return new (t || YaMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScriptService)); };
YaMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaMapComponent, selectors: [["ya-map"]], contentQueries: function YaMapComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaPlacemarkComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaMultirouteComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaGeoObjectComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaControlComponent, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, YaClustererComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.placemarks = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.multiroutes = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.geoObjects = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.controls = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.clusterers = _t);
    } }, viewQuery: function YaMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapContainer = _t.first);
    } }, inputs: { zoom: "zoom", state: "state", options: "options", center: "center", onlyInstance: "onlyInstance" }, outputs: { load: "load", action: "action", balloon: "balloon", yaclick: "yaclick", hint: "hint", mouse: "mouse", multitouch: "multitouch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["container", ""]], template: function YaMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: [""] });
YaMapComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: ScriptService }
];
YaMapComponent.propDecorators = {
    mapContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container',] }],
    placemarks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaPlacemarkComponent,] }],
    multiroutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaMultirouteComponent,] }],
    geoObjects: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaGeoObjectComponent,] }],
    controls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaControlComponent,] }],
    clusterers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [YaClustererComponent,] }],
    onlyInstance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    center: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    balloon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yaclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    hint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    multitouch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-map',
                template: "<div #container></div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: ScriptService }]; }, { zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], balloon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yaclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], multitouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], center: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container']
        }], placemarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaPlacemarkComponent]
        }], multiroutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaMultirouteComponent]
        }], geoObjects: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaGeoObjectComponent]
        }], controls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaControlComponent]
        }], clusterers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [YaClustererComponent]
        }], onlyInstance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Component for creating and controlling the panorama player.
 *
 * @example `<ya-panorama [point]="[59.938557, 30.316198]" layer="yandex#airPanorama"></ya-panorama>`.
 * @see {@link https://ddubrava.github.io/angular8-yandex-maps/#/components/panorama}
 */
class YaPanoramaComponent {
    constructor(_ngZone, _scriptService) {
        this._ngZone = _ngZone;
        this._scriptService = _scriptService;
        /**
         * Emits immediately after this entity is added in root container.
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The view direction changed.
         */
        this.direction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The panorama player screen mode is switched.
         */
        this.fullscreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Actions with the marker.
         */
        this.marker = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._sub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this._logErrors();
        this._initScript();
    }
    ngOnChanges(changes) {
        this._updatePanorama(changes);
    }
    /**
     * Method for dynamic Panorama configuration.
     * Handles input changes and provides it to API.
     * @param changes
     */
    _updatePanorama(changes) {
        const player = this._player;
        if (!player)
            return;
        const { point, layer, options } = changes;
        if (point) {
            player.moveTo(point.currentValue, layer ? { layer: layer.currentValue } : {});
        }
        if (layer && !point) {
            console.error('Panorama: You cannot change the layer without point');
        }
        if (options) {
            console.error(removeLeadingSpaces(`
        The options of Panorama cannot be changed after entity init.

        Solutions:
        1. Use ymaps from ILoadEvent
        2. Recreate Panorama component with new options
      `));
        }
    }
    _logErrors() {
        if (!this.point) {
            console.error('Panorama: point input is required.');
            this.point = [];
        }
    }
    _initScript() {
        const sub = this._scriptService.initScript().subscribe(() => {
            const id = generateRandomId();
            this._createPanorama(id);
        });
        this._sub.add(sub);
    }
    /**
     * Creates panorama with the player.
     * @param id ID which will be set to the panorama container.
     */
    _createPanorama(id) {
        const containerElem = this.panoramaContainer.nativeElement;
        containerElem.setAttribute('id', id);
        containerElem.style.cssText = 'width: 100%; height: 100%;';
        /**
         * Wrong typings in DefinitelyTyped.
         */
        ymaps.panorama
            .locate(this.point, { layer: this.layer })
            .then((panorama) => {
            const player = new ymaps.panorama.Player(id, panorama[0], this.options);
            this._player = player;
            this.addEventListeners();
        });
    }
    /**
     * Adds listeners on the Panorama events.
     */
    addEventListeners() {
        const player = this._player;
        this._ngZone.run(() => this.load.emit({ ymaps, instance: player }));
        const handlers = [
            {
                name: 'directionchange',
                fn: (e) => this.direction.emit({
                    ymaps,
                    instance: player,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: ['fullscreenenter', 'fullscreenexit'],
                fn: (e) => this.fullscreen.emit({
                    ymaps,
                    instance: player,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
            {
                name: [
                    'markercollapse',
                    'markerexpand',
                    'markermouseenter',
                    'markermouseleave',
                ],
                fn: (e) => this.marker.emit({
                    ymaps,
                    instance: player,
                    type: e.originalEvent.type,
                    event: e,
                }),
            },
        ];
        handlers.forEach((handler) => {
            player.events.add(handler.name, (e) => this._ngZone.run(() => handler.fn(e)));
        });
    }
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
}
YaPanoramaComponent.ɵfac = function YaPanoramaComponent_Factory(t) { return new (t || YaPanoramaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScriptService)); };
YaPanoramaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YaPanoramaComponent, selectors: [["ya-panorama"]], viewQuery: function YaPanoramaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.panoramaContainer = _t.first);
    } }, inputs: { point: "point", layer: "layer", options: "options" }, outputs: { load: "load", direction: "direction", fullscreen: "fullscreen", marker: "marker" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["container", ""]], template: function YaPanoramaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", null, 0);
    } }, styles: [""] });
YaPanoramaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: ScriptService }
];
YaPanoramaComponent.propDecorators = {
    panoramaContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['container',] }],
    point: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    layer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    marker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YaPanoramaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ya-panorama',
                template: "<div #container></div>\n",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: ScriptService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], marker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], point: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], panoramaContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container']
        }], layer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class AngularYandexMapsModule {
    /**
     * Please use this method when you register the module at the root level
     * @param config
     */
    static forRoot(config) {
        return {
            ngModule: AngularYandexMapsModule,
            providers: [{ provide: YA_MAP_CONFIG, useValue: config }],
        };
    }
}
AngularYandexMapsModule.ɵfac = function AngularYandexMapsModule_Factory(t) { return new (t || AngularYandexMapsModule)(); };
AngularYandexMapsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AngularYandexMapsModule });
AngularYandexMapsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularYandexMapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    YaClustererComponent,
                    YaControlComponent,
                    YaGeoObjectComponent,
                    YaMapComponent,
                    YaMultirouteComponent,
                    YaPanoramaComponent,
                    YaPlacemarkComponent,
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [
                    YaClustererComponent,
                    YaControlComponent,
                    YaGeoObjectComponent,
                    YaMapComponent,
                    YaMultirouteComponent,
                    YaPanoramaComponent,
                    YaPlacemarkComponent,
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularYandexMapsModule, { declarations: function () { return [YaClustererComponent, YaControlComponent, YaGeoObjectComponent, YaMapComponent, YaMultirouteComponent, YaPanoramaComponent, YaPlacemarkComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [YaClustererComponent, YaControlComponent, YaGeoObjectComponent, YaMapComponent, YaMultirouteComponent, YaPanoramaComponent, YaPlacemarkComponent]; } }); })();

/*
 * Public API Surface of angular8-yandex-maps
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular8-yandex-maps.js.map

/***/ }),

/***/ "JLeJ":
/*!************************************************************!*\
  !*** ./src/app/shared/services/events-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: EventsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsResolverService", function() { return EventsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/utils/not-found.operator */ "TNbK");
/* harmony import */ var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @api/routes/events.service */ "3Gor");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class EventsResolverService {
    constructor(eventsService, router) {
        this.eventsService = eventsService;
        this.router = router;
    }
    resolve(route) {
        return this.eventsService.getSingle$(+route.params.id).pipe(Object(_shared_utils_not_found_operator__WEBPACK_IMPORTED_MODULE_1__["notFound"])(this.router));
    }
}
EventsResolverService.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventsResolverService, deps: [{ token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Injectable });
EventsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjectable"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventsResolverService, providedIn: 'root' });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventsResolverService, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; } });


/***/ }),

/***/ "Ozdm":
/*!*****************************************************************!*\
  !*** ./src/app/shared/modules/user-info/user-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/icon/icon.component */ "9qJ4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/account-url.pipe */ "uo9K");
/* harmony import */ var _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/person-name.pipe */ "uJSW");






class UserInfoComponent {
}
UserInfoComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserInfoComponent, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: UserInfoComponent, selector: "app-user-info", inputs: { user: "user" }, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<div class=\"v-center\">\n    <a [routerLink]=\"user ? (user | accountUrl) : ''\" class=\"v-center\">\n        <app-ui-icon class=\"margin-right-10\" [src]=\"user?.info.picture\" [textAlternative]=\"user ? (user.info | personName) : ''\"></app-ui-icon>\n        <span class=\"subtitle-1\">{{ user ? (user.info | personName) : '' }}</span>\n    </a>\n</div>\n", styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LnNjc3MifQ== */"], components: [{ type: _ui_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"], selector: "app-ui-icon", inputs: ["src", "textAlternative", "size"] }], directives: [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], pipes: { "accountUrl": _pipes_account_url_pipe__WEBPACK_IMPORTED_MODULE_3__["AccountUrlPipe"], "personName": _pipes_person_name_pipe__WEBPACK_IMPORTED_MODULE_4__["PersonNamePipe"] }, changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: UserInfoComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-user-info',
                    templateUrl: './user-info.component.html',
                    styleUrls: ['./user-info.component.scss'],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                }]
        }], propDecorators: { user: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }] } });


/***/ }),

/***/ "TNbK":
/*!****************************************************!*\
  !*** ./src/app/shared/utils/not-found.operator.ts ***!
  \****************************************************/
/*! exports provided: notFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFound", function() { return notFound; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


function notFound(router) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
        if (error.status === 404 || error.status === 422) {
            router.navigateByUrl('/404');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
    });
}


/***/ }),

/***/ "faIG":
/*!*******************************************************************!*\
  !*** ./src/app/modules/events/event-page/event-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageComponent", function() { return EventPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @api/schemas/event/event-currency.enum */ "t08Q");
/* harmony import */ var _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/classes/abstract-component.class */ "5Gpq");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @api/schemas/article/publication-stage.enum */ "l6fO");
/* harmony import */ var _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/routes/events.service */ "3Gor");
/* harmony import */ var _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/services/session.service */ "qh/L");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @layout/shared/services/user-dropdown.service */ "6cGZ");
/* harmony import */ var _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/ui/card/card.component */ "Il9f");
/* harmony import */ var _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/modules/user-info/user-info.component */ "Ozdm");
/* harmony import */ var _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/modules/svg/svg/svg.component */ "ax+O");
/* harmony import */ var _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/share/share.component */ "xGVH");
/* harmony import */ var _shared_components_action_menu_action_menu_event_action_menu_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/action-menu/action-menu-event/action-menu-event.component */ "3O7d");
/* harmony import */ var _shared_components_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/wysiwyg-editor/wysiwyg-editor.component */ "Mo9q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/directives/logged-in.directive */ "DwHT");
/* harmony import */ var _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared/pipes/url.pipe */ "k/DK");




















class EventPageComponent extends _shared_classes_abstract_component_class__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"] {
    constructor(eventsService, sessionService, changeDetectorRef, translateService, router, userDropdown) {
        super();
        this.eventsService = eventsService;
        this.sessionService = sessionService;
        this.changeDetectorRef = changeDetectorRef;
        this.translateService = translateService;
        this.router = router;
        this.userDropdown = userDropdown;
        this.publicationStageEnum = _api_schemas_article_publication_stage_enum__WEBPACK_IMPORTED_MODULE_4__["PublicationStageEnum"];
        this.pipeLng = this.translateService.currentLang === 'ru' ? 'ru_RU' : 'en_US';
    }
    get price() {
        switch (this.event.info.currency) {
            case _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__["EventCurrencyEnum"].FREE:
                return this.translateService.instant('COMMON.FREE');
            case _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__["EventCurrencyEnum"].EUR:
                return this.event.info.price ? `€${this.event.info.price}` : null;
            case _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__["EventCurrencyEnum"].USD:
                return this.event.info.price ? `$${this.event.info.price}` : null;
            case _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__["EventCurrencyEnum"].RUB:
                return this.event.info.price ? `${this.event.info.price} ₽` : null;
            case _api_schemas_event_event_currency_enum__WEBPACK_IMPORTED_MODULE_1__["EventCurrencyEnum"].NONE:
                return null;
        }
    }
    get dateWithTime() {
        return (this.event.info.date % 10) === 0;
    }
    ngOnInit() {
        this.shareBody = 'https://ru.yachtsmanjournal.com' + this.router.url;
        this.linkVk = 'https://vk.com/share.php?url=' + this.shareBody;
        this.linkFb = 'https://www.facebook.com/sharer/sharer.php?u=' + this.shareBody;
        this.linkTw = 'https://twitter.com/intent/tweet?url=' + this.shareBody;
        this.linkIn = 'https://vk.com/share.php?url=' + this.shareBody;
        this.linkTg = 'tg://msg_url?url=' + this.shareBody;
    }
    goTo(url) {
        window.open(url, '_blank');
    }
    bookmark() {
        if (this.sessionService.loggedIn$.value) {
            this.eventsService.bookmark$(this.event.meta.id, this.event.bookmarks.you).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngOnDestroy$))
                .subscribe(() => {
                this.event.bookmarks.you = !this.event.bookmarks.you;
                this.event.bookmarks.count += this.event.bookmarks.you ? 1 : -1;
                this.changeDetectorRef.markForCheck();
            });
        }
        else {
            this.userDropdown.setShowDropdown(true);
        }
    }
    toggleShare() {
        this.share = !this.share;
    }
}
EventPageComponent.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageComponent, deps: [{ token: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { token: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { token: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { token: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { token: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { token: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"] }], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].Component });
EventPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareComponent"]({ minVersion: "12.0.0", version: "12.2.17", type: EventPageComponent, selector: "app-event-page", inputs: { event: "event", company: "company", own: "own" }, usesInheritance: true, ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, template: "<app-ui-card [shadow]='false'>\n  <header class=\"margin-bottom-20\">\n    <section class=\"v-center mobile-small\">\n      <app-user-info class=\"margin-right-20\" [user]=\"event.company\"></app-user-info>\n      <span *ngIf=\"event.info.publicationStage !== publicationStageEnum.PUBLISHED\" class=\"overline c-caption\">\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E</span>\n      <div class=\"v-center align-right without-margin\">\n        <span class=\"caption fade-3 margin-right-8\">{{ event.info.publishedAt | date:'d MMMM HH:mm' : null : pipeLng }}</span>\n        <svg name=\"bookmark\" class=\"f-gray icon clickable margin-right-8\" \n          [class.active]=\"event.bookmarks.you\" (click)=\"bookmark()\"></svg>\n        <app-share [url]=\"null | url\" class=\"margin-right-10\"></app-share>\n        <app-action-menu-event *appLoggedIn [data]=\"event\" [own]=\"own\" (gone)=\"this.router.navigate(['/events'])\"></app-action-menu-event>\n      </div>\n    </section>\n  </header>\n  <article class=\"margin-bottom-30\">\n    <section class=\"event-info margin-bottom-30\">\n      <h2 class=\"margin-bottom-20\">{{ event.info.name }}</h2>\n      <div class=\"fade-1 v-center mobile-small\">\n        <h6 *ngIf=\"event.info.city\">{{ event.info.city }}</h6>\n        <h6 *ngIf=\"event.info.date\">\n          {{ dateWithTime ? (event.info.date | date:'d MMMM HH:00' : null : pipeLng)\n          : (event.info.date | date:'d MMMM' : null : pipeLng) }}\n        </h6>\n        <h6 *ngIf=\"price\">{{ price }}</h6>\n        <a class=\"button-1 button\" [href]=\"event.body.registrationLink\" target=\"_blank\">\n          <span class=\"margin-right-4\">{{'COMMON.REGISTER' | translate}}</span>\n          <svg class=\"f-white icon\" name=\"calendar\"></svg>\n        </a>\n      </div>\n    </section>\n    <app-wysiwyg-editor [initialData]=\"event.body.html\" [readOnly]=\"true\"></app-wysiwyg-editor>\n    <section>\n      <h3>{{ event.info.name }}</h3>\n      <table class=\"fade-1 f-primary info-table\">\n        <tr *ngIf=\"event.info.date\">\n          <td><svg name=\"calendar\"></svg></td>\n          <td>\n            <h6>\n              {{ dateWithTime ? (event.info.date | date:(pipeLng === 'ru_RU' ? 'd MMMM \u0432 HH:00' : 'd MMMM in HH:00') : null : pipeLng)\n              : (event.info.date | date:'d MMMM' : null : pipeLng) }}\n            </h6>\n          </td>\n        </tr>\n        <tr>\n          <td><svg name=\"geo\"></svg></td>\n          <td><h6>{{ event.body.address }}</h6></td>\n        </tr>\n        <tr *ngIf=\"price\">\n          <td><svg name=\"star\"></svg></td>\n          <td><h6>{{ price ? price : '\u0426\u0435\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430' }}</h6></td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <a class=\"button-1 button\" [href]=\"event.body.registrationLink\" target=\"_blank\">\n              <span class=\"margin-right-4\">{{'COMMON.REGISTER' | translate}}</span>\n              <svg class=\"f-white icon\" name=\"calendar\"></svg>\n            </a>\n          </td>\n        </tr>\n      </table>\n    </section>\n  </article>\n  <footer>\n    <section class=\"v-center margin-bottom-20\">\n      <div class=\"c-gray v-center margin-right-20 clickable\" (click)=\"bookmark()\">\n        <svg name=\"bookmark\" class=\"margin-right-4 icon f-gray\" [class.active]=\"event.bookmarks && event.bookmarks.you\"></svg>\n        <span class=\"subtitle-2\">{{ event.bookmarks.count }}</span>\n      </div>\n      <div class=\"v-center margin-right-20\">\n        <svg name=\"view\" class=\"margin-right-4 icon f-gray\"></svg>\n        <span class=\"subtitle-2 c-gray\">{{ event.views.count }}</span>\n      </div>\n      <app-share [url]=\"null | url\"></app-share>\n    </section>\n  </footer>\n</app-ui-card>\n", styles: ["/* stylelint-disable-next-line scss/at-import-no-partial-leading-underscore */\n@media (max-width: 766px) {\n  .hide-lt-medium {\n    display: none !important;\n  }\n}\n@media (min-width: 767px) {\n  .hide-ge-medium {\n    display: none !important;\n  }\n}\n@media (max-width: 1059px) {\n  .hide-lt-large {\n    display: none !important;\n  }\n}\n:host {\n  width: 100%;\n}\nfooter::after {\n  border-radius: 20px;\n  border-top: 3px solid #00b7ff;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  margin-top: 10px;\n  width: 100%;\n}\n.event-info div {\n  justify-content: space-between;\n}\n.event-info div h6 {\n  max-width: 25%;\n}\n@media (max-width: 766px) {\n  .event-info div h6 {\n    max-width: 100%;\n  }\n}\n.event-info::after {\n  border-radius: 20px;\n  border-top: 3px solid #00b7ff;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  margin-top: 10px;\n  width: 100%;\n}\n.info-table {\n  border-collapse: separate;\n  border-spacing: 0 25px;\n}\n.info-table h6 {\n  margin-left: 10px;\n}\n::ng-deep .main-content {\n  padding-bottom: 40px;\n}\n::ng-deep .main-content img {\n  max-width: 100%;\n}\na.button {\n  align-items: center;\n  background: #00b7ff;\n  border-radius: 15px;\n  color: white;\n  display: inline-flex;\n  height: 35px;\n  padding: 0 16px;\n}\n.event-body img {\n  width: 100%;\n}\n.share {\n  align-content: center;\n  align-items: center;\n  display: inline-flex;\n  padding: 0 12px;\n}\n.share--bottom {\n  padding: 0;\n}\n.share > * {\n  margin-right: 6px;\n}\n.share a {\n  text-decoration: none;\n}\n@media (max-width: 499px) {\n  .event-info .mobile-small {\n    justify-content: flex-start;\n  }\n\n  .mobile-small {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .mobile-small h6 {\n    margin: 0 10px 10px 0;\n    font-weight: 600;\n    font-size: 15px;\n  }\n  .mobile-small .without-margin {\n    margin-left: 0;\n  }\n}\n:host {\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9yZXNwb25zaXZlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L19pbmNsdWRlLW1lZGlhLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9ldmVudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUFBO0FDNmlCSTtFRG5pQko7SUFFSSx3QkFBQTtFRVJGO0FBQ0Y7QUR3aUJJO0VEN2hCSjtJQUVJLHdCQUFBO0VFUkY7QUFDRjtBRGtpQkk7RUR2aEJKO0lBRUksd0JBQUE7RUVSRjtBQUNGO0FBZEE7RUFDRSxXQUFBO0FBaUJGO0FBWkU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBZUo7QUFWRTtFQUNFLDhCQUFBO0FBYUo7QUFaSTtFQUNFLGNBQUE7QUFjTjtBRHVnQkk7RUN0aEJBO0lBR0ksZUFBQTtFQWdCTjtBQUNGO0FBYkU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBZUo7QUFYQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7QUFjRjtBQVpFO0VBQ0UsaUJBQUE7QUFjSjtBQVZBO0VBQ0Usb0JBQUE7QUFhRjtBQVhFO0VBQ0UsZUFBQTtBQWFKO0FBVEE7RUFDRSxtQkFBQTtFQUNBLG1CQzVEUTtFRDZEUixtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBWUY7QUFSRTtFQUNFLFdBQUE7QUFXSjtBQVBBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQVVGO0FBUkU7RUFDRSxVQUFBO0FBVUo7QUFQRTtFQUNFLGlCQUFBO0FBU0o7QUFORTtFQUNFLHFCQUFBO0FBUUo7QUQ0Y0k7RUM5Y0E7SUFDRSwyQkFBQTtFQU1KOztFQUhBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0VBTUY7RUFIRTtJQUNFLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBS0o7RUFIRTtJQUNFLGNBQUE7RUFLSjtBQUNGO0FBREE7RUFDRSxxQkFBQTtBQUdGIiwiZmlsZSI6ImV2ZW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9hdC1pbXBvcnQtbm8tcGFydGlhbC1sZWFkaW5nLXVuZGVyc2NvcmUgKi9cbkBpbXBvcnQgJ35pbmNsdWRlLW1lZGlhL2Rpc3QvX2luY2x1ZGUtbWVkaWEnO1xuXG4kYnJlYWtwb2ludHM6IChcbiAgeGxhcmdlOiAxNDAwcHgsXG4gIGxhcmdlOiAxMDYwcHgsXG4gIG1lZGl1bTogNzY3cHgsXG4gIHNtYWxsOiAzNzVweCxcbik7XG5cbi5oaWRlLWx0LW1lZGl1bSB7XG4gIEBpbmNsdWRlIG1lZGlhKCc8bWVkaXVtJykge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaGlkZS1nZS1tZWRpdW0ge1xuICBAaW5jbHVkZSBtZWRpYSgnPj1tZWRpdW0nKSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5oaWRlLWx0LWxhcmdlIHtcbiAgQGluY2x1ZGUgbWVkaWEoJzxsYXJnZScpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8gICAgIF8gICAgICAgICAgICBfICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgXyBfXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXG4vLyAgICAgXyBfIF9fICAgX19ffCB8XyAgIF8gIF9ffCB8IF9fXyAgIF8gX18gX19fICAgX19fICBfX3wgfF8gIF9fIF9cbi8vICAgIHwgfCAnXyBcXCAvIF9ffCB8IHwgfCB8LyBfYCB8LyBfIFxcIHwgJ18gYCBfIFxcIC8gXyBcXC8gX2AgfCB8LyBfYCB8XG4vLyAgICB8IHwgfCB8IHwgKF9ffCB8IHxffCB8IChffCB8ICBfXy8gfCB8IHwgfCB8IHwgIF9fLyAoX3wgfCB8IChffCB8XG4vLyAgICB8X3xffCB8X3xcXF9fX3xffFxcX18sX3xcXF9fLF98XFxfX198IHxffCB8X3wgfF98XFxfX198XFxfXyxffF98XFxfXyxffFxuLy9cbi8vICAgICAgU2ltcGxlLCBlbGVnYW50IGFuZCBtYWludGFpbmFibGUgbWVkaWEgcXVlcmllcyBpbiBTYXNzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHYxLjQuOVxuLy9cbi8vICAgICAgICBodHRwczovL2VkdWFyZG9ib3VjYXMuZ2l0aHViLmlvL2luY2x1ZGUtbWVkaWFcbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgS2l0dHkgR2lyYXVkZWwgKEBraXR0eWdpcmF1ZGVsKVxuLy9cbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2Vcbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgS2l0dHkgR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBMb2cgYSBtZXNzYWdlIGVpdGhlciB3aXRoIGBAZXJyb3JgIGlmIHN1cHBvcnRlZFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXG4vLy8gdG8gZGV0ZWN0IHN1cHBvcnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AZnVuY3Rpb24gaW0tbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XG4gICAgQGVycm9yICRtZXNzYWdlO1xuICB9IEBlbHNlIHtcbiAgICBAd2FybiAkbWVzc2FnZTtcbiAgICAkXzogbm9vcCgpO1xuICB9XG5cbiAgQHJldHVybiAkbWVzc2FnZTtcbn1cblxuXG4vLy9cbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XG4vLy8gQVBJIHRoYW4gYEBpZiBpbS1sb2coJy4uJykge31gIG9yIGAkXzogaW0tbG9nKCcuLicpYC4gQmFzaWNhbGx5LCB1c2UgdGhlIGZ1bmN0aW9uXG4vLy8gd2l0aGluIGZ1bmN0aW9ucyBiZWNhdXNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW4gYSBmdW5jdGlvblxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AbWl4aW4gbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBpbS1sb2coJG1lc3NhZ2UpIHt9XG59XG5cblxuLy8vXG4vLy8gRnVuY3Rpb24gd2l0aCBubyBgQHJldHVybmAgY2FsbGVkIG5leHQgdG8gYEB3YXJuYCBpbiBTYXNzIDMuM1xuLy8vIHRvIHRyaWdnZXIgYSBjb21waWxpbmcgZXJyb3IgYW5kIHN0b3AgdGhlIHByb2Nlc3MuXG4vLy9cbkBmdW5jdGlvbiBub29wKCkge31cblxuLy8vXG4vLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbGlzdCBvZiBjb25kaXRpb25zIGlzIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludC5cbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAcmV0dXJuIHtCb29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyBhcmUgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy9cbkBmdW5jdGlvbiBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSB7XG4gICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQpO1xuXG4gIEBpZiBub3QgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUge1xuICAgIEBpZiBpbS1sb2coJ2AjeyRpbS1uby1tZWRpYS1icmVha3BvaW50fWAgaXMgbm90IGEgdmFsaWQgYnJlYWtwb2ludC4nKSB7fVxuICB9XG5cbiAgQGVhY2ggJGNvbmRpdGlvbiBpbiAkY29uZGl0aW9ucyB7XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGNvbmRpdGlvbik7XG4gICAgICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcblxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXG4gICAgICAgICAgKCRwcmVmaXggPT0gJ21pbicgYW5kICR2YWx1ZSA+ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiBub3QgaW5kZXgoJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vL1xuLy8vIFBhcnNpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBLaXR0eSBHaXJhdWRlbFxuLy8vXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucyBbKCldIC0gTWFwIG9mIHR3ZWFrZWQgbWVkaWEgZXhwcmVzc2lvbnMgdG8gYmUgbWVyZ2VkIHdpdGggYCRtZWRpYS1leHByZXNzaW9uYFxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCkpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSwgKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XG4gIC8vIFNhdmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGdsb2JhbC1icmVha3BvaW50czogJGJyZWFrcG9pbnRzO1xuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XG5cbiAgLy8gVXBkYXRlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6IG1hcC1tZXJnZSgkbWVkaWEtZXhwcmVzc2lvbnMsICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucykgIWdsb2JhbDtcblxuICBAY29udGVudDtcblxuICAvLyBSZXN0b3JlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6ICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnMgIWdsb2JhbDtcbn1cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgcHVibGljIGV4cG9zZWQgQVBJXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHNpbmdsZSBzZXQgYnJlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCB0d28gc2V0IGJyZWFrcG9pbnRzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD10YWJsZXQnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzU4cHgnLCAnPDg1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBzZXQgYnJlYWtwb2ludHMgd2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+ZGVza3RvcCcsICc8PTEzNTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzdGF0aWMgZXhwcmVzc2lvblxuLy8vICBAaW5jbHVkZSBtZWRpYSgncmV0aW5hMngnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBNaXhpbmcgZXZlcnl0aGluZ1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNTBweCcsICc8dGFibGV0JywgJ3JldGluYTN4JykgeyB9XG4vLy9cbkBtaXhpbiBtZWRpYSgkY29uZGl0aW9ucy4uLikge1xuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnc3JjL3N0eWxlcy9yZXNwb25zaXZlJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG5mb290ZXIge1xuICAmOjphZnRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwYjdmZjtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZXZlbnQtaW5mbyB7XG4gIGRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGg2e1xuICAgICAgbWF4LXdpZHRoOiAyNSU7XG4gICAgICBAaW5jbHVkZSBtZWRpYSgnPG1lZGl1bScpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmOjphZnRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzAwYjdmZjtcbiAgICBib3R0b206IDA7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaW5mby10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDI1cHg7XG5cbiAgaDYge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuYS5idXR0b24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbi5ldmVudC1ib2R5IHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc2hhcmUge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAwIDEycHg7XG5cbiAgJi0tYm90dG9tIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgPiAqIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYSgnPDUwMHB4Jykge1xuICAuZXZlbnQtaW5mb3tcbiAgICAubW9iaWxlLXNtYWxse1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgfVxuICAubW9iaWxlLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAvLyBncmlkLWdhcDogMTBweDtcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgaDZ7ICAgICAgXG4gICAgICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAud2l0aG91dC1tYXJnaW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cbjpob3N0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuIiwiJHByaW1hcnk6ICMwMGI3ZmY7XG4kY2FwdGlvbjogIzk3OTc5NztcbiRpY29uOiAjOTI5MjlkO1xuJGdyYXk6ICM5MjkyOWQ7XG4kaW5wdXQ6ICM2OTY5NzQ7XG4kZXJyb3I6ICNmZjViMzY7XG4kbGFiZWw6IHJnYmEoMCwgMCwgMCwgMC43KTtcblxuJGxpZ2h0ZXN0LWdyYXk6ICNmMWYxZjU7XG4kbGlnaHRlci1ncmF5OiAjZTJlMmVhO1xuJGxpZ2h0LWdyYXk6ICNkNWQ1ZGM7XG5cbiRsaWdodC1ibHVlOiByZ2JhKDAsIDE4MywgMjU1LCAwLjMpO1xuIl19 */"], components: [{ type: _shared_ui_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], selector: "app-ui-card", inputs: ["shadow"] }, { type: _shared_modules_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_11__["UserInfoComponent"], selector: "app-user-info", inputs: ["user"] }, { type: _shared_modules_svg_svg_svg_component__WEBPACK_IMPORTED_MODULE_12__["SvgComponent"], selector: "svg[name]", inputs: ["name", "w", "h", "size"] }, { type: _shared_components_share_share_component__WEBPACK_IMPORTED_MODULE_13__["ShareComponent"], selector: "app-share", inputs: ["url", "spec", "wide"] }, { type: _shared_components_action_menu_action_menu_event_action_menu_event_component__WEBPACK_IMPORTED_MODULE_14__["ActionMenuEventComponent"], selector: "app-action-menu-event", inputs: ["data", "own"], outputs: ["gone"] }, { type: _shared_components_wysiwyg_editor_wysiwyg_editor_component__WEBPACK_IMPORTED_MODULE_15__["WysiwygEditorComponent"], selector: "app-wysiwyg-editor", inputs: ["id", "initialData", "readOnly"], outputs: ["valueChange"] }], directives: [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: _shared_directives_logged_in_directive__WEBPACK_IMPORTED_MODULE_17__["LoggedInDirective"], selector: "[appLoggedIn]" }], pipes: { "date": _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"], "url": _shared_pipes_url_pipe__WEBPACK_IMPORTED_MODULE_18__["UrlPipe"], "translate": _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"] }, changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageComponent, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
            args: [{
                    selector: 'app-event-page',
                    templateUrl: './event-page.component.html',
                    styleUrls: ['./event-page.component.scss'],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                }]
        }], ctorParameters: function () { return [{ type: _api_routes_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }, { type: _app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _layout_shared_services_user_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["UserDropdownService"] }]; }, propDecorators: { event: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], company: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }], own: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
            }] } });


/***/ }),

/***/ "t+me":
/*!************************************************************************!*\
  !*** ./src/app/modules/events/event-page/event-page-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: EventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function() { return EventPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-page-unwrap.component */ "+Ocd");
/* harmony import */ var _shared_services_events_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/events-resolver.service */ "JLeJ");






const routes = [
    {
        path: '',
        component: _event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_2__["EventPageUnwrapComponent"],
        resolve: { data: _shared_services_events_resolver_service__WEBPACK_IMPORTED_MODULE_3__["EventsResolverService"] }
    },
];
class EventPageRoutingModule {
}
EventPageRoutingModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageRoutingModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵFactoryTarget"].NgModule });
EventPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageRoutingModule, imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
EventPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageRoutingModule, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_0__, type: EventPageRoutingModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
            args: [{
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                }]
        }] });


/***/ }),

/***/ "tu4A":
/*!**************************************************************!*\
  !*** ./src/app/shared/modules/user-info/user-info.module.ts ***!
  \**************************************************************/
/*! exports provided: UserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoModule", function() { return UserInfoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _user_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info.component */ "Ozdm");







class UserInfoModule {
}
UserInfoModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
UserInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]], exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]] });
UserInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: UserInfoModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_3__["SharedPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["SharedUiModule"]],
                    exports: [_user_info_component__WEBPACK_IMPORTED_MODULE_5__["UserInfoComponent"]],
                }]
        }] });


/***/ }),

/***/ "z7O3":
/*!****************************************************************!*\
  !*** ./src/app/modules/events/event-page/event-page.module.ts ***!
  \****************************************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _event_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-page-routing.module */ "t+me");
/* harmony import */ var _event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-page-unwrap.component */ "+Ocd");
/* harmony import */ var _event_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-page.component */ "faIG");
/* harmony import */ var angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular8-yandex-maps */ "7avB");
/* harmony import */ var _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/ui/shared-ui.module */ "j/N6");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/shared-components.module */ "jgPy");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/shared-pipes.module */ "aYsj");
/* harmony import */ var _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/directives/directives.module */ "yGOH");
/* harmony import */ var _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/modules/svg/svg.module */ "F/CY");
/* harmony import */ var _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/modules/user-info/user-info.module */ "tu4A");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















class EventPageModule {
}
EventPageModule.ɵfac = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareFactory"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: EventPageModule, deps: [], target: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵFactoryTarget"].NgModule });
EventPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareNgModule"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: EventPageModule, declarations: [_event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_3__["EventPageUnwrapComponent"], _event_page_component__WEBPACK_IMPORTED_MODULE_4__["EventPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _event_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventPageRoutingModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_11__["UserInfoModule"],
        _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_10__["SvgModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["CommonDirectivesModule"],
        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
        angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__["AngularYandexMapsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]], exports: [_event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_3__["EventPageUnwrapComponent"]] });
EventPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareInjector"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: EventPageModule, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _event_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventPageRoutingModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
            _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_11__["UserInfoModule"],
            _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_10__["SvgModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
            _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
            _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["CommonDirectivesModule"],
            _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
            angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__["AngularYandexMapsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
        ]] });
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵngDeclareClassMetadata"]({ minVersion: "12.0.0", version: "12.2.17", ngImport: _angular_core__WEBPACK_IMPORTED_MODULE_1__, type: EventPageModule, decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
                    declarations: [_event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_3__["EventPageUnwrapComponent"], _event_page_component__WEBPACK_IMPORTED_MODULE_4__["EventPageComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _event_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventPageRoutingModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
                        _shared_modules_user_info_user_info_module__WEBPACK_IMPORTED_MODULE_11__["UserInfoModule"],
                        _shared_modules_svg_svg_module__WEBPACK_IMPORTED_MODULE_10__["SvgModule"],
                        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                        _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_8__["SharedPipesModule"],
                        _shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_9__["CommonDirectivesModule"],
                        _shared_ui_shared_ui_module__WEBPACK_IMPORTED_MODULE_6__["SharedUiModule"],
                        angular8_yandex_maps__WEBPACK_IMPORTED_MODULE_5__["AngularYandexMapsModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forChild(),
                    ],
                    exports: [_event_page_unwrap_component__WEBPACK_IMPORTED_MODULE_3__["EventPageUnwrapComponent"]],
                }]
        }] });


/***/ })

}]);
//# sourceMappingURL=event-page-event-page-module-es2015.js.map