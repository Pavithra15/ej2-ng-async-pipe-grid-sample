import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';
import { Customer } from './customer';
import { DataStateChangeEventArgs, Sorts, DataSourceChangedEventArgs, Page } from '@syncfusion/ej2-grids';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
    selector: 'app-container',
    template: `
    <ejs-grid [dataSource]='data | async' [allowPaging]='true' [editSettings]='editSettings' [toolbar]='toolbar' (dataSourceChanged)='dataSourceChanged($event)' (dataStateChange)= 'dataStateChange($event)'>
        <e-columns>
        <e-column field='id' headerText='Customer ID' width='120' textAlign='Right' isPrimaryKey='true'></e-column>
            <e-column field= "name" headerText="CustomerName" width="150"></e-column>            
        </e-columns>
    </ejs-grid>`
})
export class AppComponent {
    public data: Observable<DataStateChangeEventArgs>;;
    public pageOptions: Object;
    public editSettings: Object;
    public toolbar: string[];
    public state: DataStateChangeEventArgs;
    customers: Customer[];
    constructor(private crudService: CrudService) {
        this.data = crudService;
        //this.data = new DataManager({url:'http://localhost:61046/api/orders',adaptor : new WebApiAdaptor});
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.crudService.execute(state);
    }

    public dataSourceChanged(state: DataSourceChangedEventArgs): void {
        if (state.action === 'add') {
            this.crudService.addRecord(state).subscribe(() => state.endEdit());
        } else if (state.action === 'edit') {
            this.crudService.updateRecord(state).subscribe(() => state.endEdit());
        } else if (state.requestType === 'delete') {
            this.crudService.deleteRecord(state).subscribe(() => state.endEdit());
        }
    }

    public ngOnInit(): void {
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel']; 
        this.pageOptions = { pageSize: 1 };       
        let state = { skip: 0, take: 12 };
        this.crudService.execute(state);
    }
}

