import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import SampleAppComponent from './component';

@NgModule({
  imports: [BrowserModule],
  declarations: [SampleAppComponent],
  bootstrap: [SampleAppComponent]
})
export default class SampleAppModule { }