import { Component } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'sample-component',
  //template: `<h1>Sample component</h1>`
  template:`
   <table border="1">
        <tr>
          <th *ngFor="let head of header">{{head}}</th>
        </tr>
        <tr *ngFor="let data of data">
        <td *ngFor="let head of header">
            {{data[head]}}
        </td>
        </tr>
   </table>
 `
})
export class SampleComponent {
  data: any = [];
  header: any = [];
  //jsonUrl: string;
  constructor(public _myservice: SampleService) {
     this.getRecrods(_myservice.jsonURL);
  }
    getRecrods(Json) {
    this._myservice.getValues().subscribe(value => {
      this.data = value;
      for (let header in this.data[0]) {
        this.header.push(header);
      }
     });
  }
}
