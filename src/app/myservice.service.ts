import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class Myservice {
  response: any;
  constructor(private _http: Http) { }
  getValues(): Observable<any> {
    return this._http.get('./assets/data/CountryList.json')
      .map(response => response.json());
  }
  getKey(key: string) {
    return this.getValues().map(data => {
      if (data[key] != 'undefined') {
        return data[key];
      } else {
        return false;
      }
    });
  }
}
