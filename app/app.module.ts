import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridAllModule, PageService } from '@syncfusion/ej2-ng-grids';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import { InMemoryDataService }  from './in-mem';
import { CrudService }          from './crud.service';

@NgModule({
    imports: [CommonModule,   GridAllModule,  HttpModule, JsonpModule, BrowserModule,
            HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
          )],
declarations: [AppComponent],
bootstrap: [AppComponent],
providers:[ CrudService, PageService]
})
export class AppModule { }