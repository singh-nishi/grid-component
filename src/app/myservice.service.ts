import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class Myservice {
result:Array<Object>; 
constructor(private http: Http) { 

}
      public jsonURL: string = './assets/data/CountryList.json';

      getRecordsDetails(): Observable<any> {
          return this.http.get(this.jsonURL)
          .map(this.extractData)
          .catch(this.handleError);
      }
      private extractData(res:Response) {
          let body = res.json();
          console.log(res.json());
          return body || [];
      }

      private handleError(error:any) {
          let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(errMsg);
      }

}