import { Component, OnInit} from '@angular/core';
import { Myservice } from './myservice.service';
import { Observable} from 'rxjs';
import {Http, Response } from '@angular/http';
//import {Subject} from 'rxjs/subject';
@Component({
 selector: 'app-root',
 template:`<table border=1>
              <thead>
                <tr>
                  <td *ngFor="let ke of key">
                    {{ke}}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td *ngFor="let va of val">
                    {{va}}
                  </td>
                </tr>
              </tbody>  
            </table>
           `,
providers: [Myservice]
})
export class AppComponent {
 result: string;
 keys: string[]=[];
 dataval: string [];
 //obj: Object;
 key:string[]=[];
 val:string[]=[];
 constructor(private _myservice: Myservice){
   this.getRecrods();
 } 
 getRecrods() {
     {
    this._myservice.getValues().subscribe(value => {
     // console.log(value);
      this.result=JSON.stringify(value);
      console.log('result');
      console.log(this.result);
      this.dataval=value;
      console.log('dateval');
      console.log(this.dataval);
    //});
 
     this.keys=this.dataval;
    // console.log('keys');
    // console.log(this.keys);
  
    console.log('Array iterate..'); 

    JSON.parse( this.result, (key, value) => {
    this.key.push(key);
    this.val.push(value);
    

   // console.log(key); 
  // this.val.push(value);
   // console.log(value);
});
 // console.log(this.key);


     //this.obj=JSON.parse(value);
     //console.log(this.obj);
  
     // function parseObject(obj)
     //{
    //  for(let key in this.obj)
    //   {
    //   console.log("key: " + key + ", value: " + this.obj[key])
    //   // if(this.obj[key] instanceof Object)
    //   // {
    //   //  // parseObject(obj[key]);
    //   //  console.log(this.obj[key]);
    //   // }
    //  }
 // }


    //  let property = [];

    //  for (let i = 0; i < this.dataval.length; i++) {
    //  property.push(this.dataval[0]);
    //   }

   //console.log(property);
   //console.log('Loop Start..');
    
    // for(let index of this.dataval) {
    //     console.log(index);
    //     for(let index1 in index.toString)
    //     {
    //       console.log(index1[index]);
    //       //console.log(index1);
    //     }
    //   }


    });

  // JSON.parse(this.result, (key, value) => {
  // if (typeof value === 'string') {
  // console.log(value.toUpperCase());
  // }
  // console.log(key);
  // ids.push(key);
  // });
  // console.log(ids);

  // for (let i in this.result[0])
  // {
  // console.log(i);
  // }

//  for (let i of this.dataval) {
//          console.log(i);
//            for (let j in i) {
//             console.log(j);
//              }
//         }

   }
  }  
}
    


 