import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Myservice } from './myservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [Myservice],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
