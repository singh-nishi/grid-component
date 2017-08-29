import { Component, OnInit} from '@angular/core';
import { Myservice } from './myservice.service';
import { Observable} from 'rxjs';
import {Http, Response } from '@angular/http';
//import {Subject} from 'rxjs/subject';
@Component({
 selector: 'app-root',
 template:`
            <table border=1>
              <thead>
                <tr *ngFor="let data of sub">
                  <td>
                    {{data.name}}
                  </td>
                  <td>
                    {{data.abbreviation}}
                  </td>
                </tr>
              </thead>
             </table>
           `,
providers: [Myservice]
})
export class AppComponent implements OnInit {
 public jsonURL: string = './assets/data/CountryList.json';
  // keys: string[]=[];
  // values: string[]=[];
  sub:any;

  //data:Observable<Array<any>>;
  // records: object; 
  // name:string;
  private errorMessage: any = '';
 
  constructor(private _myservice: Myservice,private http: Http) {
     this.getData();
    // this.getV();
    }
    ngOnInit() {
       //this.getData();
    }
    getData() {
      this._myservice.getRecordsDetails()
      .subscribe(
        sub => this.sub = sub,
        error => this.errorMessage = <any> error);
        console.log(this.sub);

           
          // for (let i of this.sub) {
          //   console.log(i);
          //   for (let j in i) {
          //    console.log(j);
          //          }
          //  }
       //console.log(this.keys);

      }


      // getV(){
      // this.http.get(this.jsonURL)
      // .map((response: Response) => {
      //  let result = response.json();
      //   console.log(result);
      //  });
      // }
     }  

    


 