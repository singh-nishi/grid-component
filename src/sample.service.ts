import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SampleService {
  response: any;
   constructor(private _http: Http) {
  }
    getValues(): Observable<any> {
    return this._http.get('https://restcountries.eu/rest/v2/all')
    .map(response => response.json());
  }
}
