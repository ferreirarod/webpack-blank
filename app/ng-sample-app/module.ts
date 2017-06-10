import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import SampleAppComponent from './component';
import {Cmp} from './component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SampleAppComponent, Cmp],
  bootstrap: [SampleAppComponent]
})
export default class SampleAppModule { }