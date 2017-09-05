import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Myservice } from './myservice.service';
import { HttpModule } from '@angular/http';
import { CommonComponentComponent } from './common-component/common-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponentComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [Myservice],
  bootstrap: [CommonComponentComponent]
})
export class AppModule {
 }
