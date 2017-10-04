import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SampleService {
  response: any;
  jsonURL: string;
   constructor(private _http: Http) {
  }
    getValues(): Observable<any> {
    return this._http.get(this.jsonURL)
    .map(response => response.json());
  }
}
