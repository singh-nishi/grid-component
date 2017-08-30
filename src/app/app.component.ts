import { Component, OnInit } from '@angular/core';
import { Myservice } from './myservice.service';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Myservice]
})
export class AppComponent {
  data: any = [];
  header: any = [];
  constructor(private _myservice: Myservice) {
    this.getRecrods();
  }
  getRecrods() {
    this._myservice.getValues().subscribe(value => {
      this.data = value;
      for (let header in this.data[0]) {
        this.header.push(header);
      }
    });
  }
}



