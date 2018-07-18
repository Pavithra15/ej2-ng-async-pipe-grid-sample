import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Customer } from './customer';
import { DataStateChangeEventArgs, Sorts, DataSourceChangedEventArgs, DataResult } from '@syncfusion/ej2-grids';
import { debug } from 'util';

const httpOptions = {
  headers: new HttpHeaders({'Accept': 'application/json','Origin': 'http://test.org', 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService extends Subject<DataStateChangeEventArgs>  {

  private customersUrl = 'api/customers';  // URL to web api

  constructor(
    private http: HttpClient) {
    super();
  }

  public execute(state: any): void {
    this.getAllData().subscribe(x => super.next(x as DataStateChangeEventArgs));
   // this.getData(state).subscribe(x => super.next(x));
  }
  
  /** GET all data from the server */
  getAllData(): Observable<any[]> {
    return this.http.get<Customer[]>(this.customersUrl,httpOptions)
      .map((response: any) => (<any>{
        result: response,
        count: response.length
      }))
      .map((data: any) => data);
  }

 /* protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
    const pageQuery = `$skip=${state.skip}&$top=${state.take}`;

    return this.http
        .get(`${this.BASE_URL}?${pageQuery}&$count=true`)
        .map((response: any) => response.json())
        .map((response: any) => (<DataResult>{
            result: response['value'],
            count: parseInt(response['@odata.count'], 10)
        }))
        .map((data: any) => data);
} */

  /** POST: add a new record  to the server */
  addRecord(state: DataSourceChangedEventArgs): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, state.data, httpOptions);
  }

  /** DELETE: delete the record from the server */
  deleteRecord(state: any): Observable<Customer> {
    const id = state.data[0].id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions);
  }

  /** PUT: update the record on the server */
  updateRecord(state: DataSourceChangedEventArgs): Observable<any> {
    return this.http.put(this.customersUrl, state.data, httpOptions);
  }

}

