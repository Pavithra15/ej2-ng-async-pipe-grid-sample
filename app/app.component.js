"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var crud_service_1 = require("./crud.service");
var AppComponent = (function () {
    function AppComponent(crudService) {
        this.crudService = crudService;
        this.data = crudService;
        //this.data = new DataManager({url:'http://localhost:61046/api/orders',adaptor : new WebApiAdaptor});
    }
    ;
    AppComponent.prototype.dataStateChange = function (state) {
        this.crudService.execute(state);
    };
    AppComponent.prototype.dataSourceChanged = function (state) {
        if (state.action === 'add') {
            this.crudService.addRecord(state).subscribe(function () { return state.endEdit(); });
        }
        else if (state.action === 'edit') {
            this.crudService.updateRecord(state).subscribe(function () { return state.endEdit(); });
        }
        else if (state.requestType === 'delete') {
            this.crudService.deleteRecord(state).subscribe(function () { return state.endEdit(); });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.pageOptions = { pageSize: 1 };
        var state = { skip: 0, take: 12 };
        this.crudService.execute(state);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "\n    <ejs-grid [dataSource]='data | async' [allowPaging]='true' [editSettings]='editSettings' [toolbar]='toolbar' (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)'>\n        <e-columns>\n        <e-column field='id' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>\n            <e-column field= \"name\" headerText=\"CustomerName\" width=\"150\"></e-column>            \n        </e-columns>\n    </ejs-grid>"
    }),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], AppComponent);
exports.AppComponent = AppComponent;
