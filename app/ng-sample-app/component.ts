import { Component, NgZone, Inject } from '@angular/core';
import sampleAppInstance from "./app";
import { SampleApp } from "./app";

@Component({
  selector: 'sample-app',
  template: `
    <div>
      <h3 *ngIf="fullscreen">fullscreen</h3>
      <h3 *ngIf="!fullscreen">widget</h3>
    </div>
  `,
})
export default class SampleAppComponent {
  fullscreen: boolean = false;
  appstationApp: SampleApp = sampleAppInstance;
  counter: number = 0;
  constructor( @Inject(NgZone) zone: NgZone) {
    console.log(sampleAppInstance.isFullScreenApp());
    this.appstationApp.setOnFullScreenCallback(() => {
      zone.run(() => this.fullscreen = true)
    });
    this.appstationApp.setOnWidgetCallback(() => {
      zone.run(() => this.fullscreen = false)
    });
    setInterval(() => {
      this.appstationApp.setBadge((++ this.counter) + '');
    }, 5000);
  }
}