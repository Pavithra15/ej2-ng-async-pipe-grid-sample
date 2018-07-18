"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var http_2 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var app_component_1 = require("./app.component");
var in_mem_1 = require("./in-mem");
var crud_service_1 = require("./crud.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ej2_ng_grids_1.GridAllModule, http_1.HttpModule, http_1.JsonpModule, platform_browser_1.BrowserModule,
            http_2.HttpClientModule,
            angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_mem_1.InMemoryDataService, { dataEncapsulation: false })],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [crud_service_1.CrudService, ej2_ng_grids_1.PageService]
    })
], AppModule);
exports.AppModule = AppModule;
