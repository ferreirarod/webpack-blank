import { Observable } from 'rxjs/Observable';
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import sampleAppInstance from "./app";
import { SampleApp } from "./app";

@Component({
  selector: 'cmp',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `Number of ticks: {{numberOfTicks}}
    <h1 *ngIf="fullscreen">Fullscreen</h1>
    <h1 *ngIf="!fullscreen">Widget</h1>
  `
})
export class Cmp {
  numberOfTicks = 0;
  fullscreen: boolean;
  constructor(@Inject(ChangeDetectorRef) private ref: ChangeDetectorRef) {
    sampleAppInstance.setOnFullscreenCallback(() => {
      this.fullscreen = true;
      this.ref.markForCheck();
    });
    sampleAppInstance.setOnWidgetCallback(() => {
      this.fullscreen = false;
      this.ref.markForCheck();
    });
    setInterval(() => {
      this.numberOfTicks ++
      console.log(this.fullscreen);
      this.ref.markForCheck();
      //this.fullscreen = !this.fullscreen;
      // the following is required, otherwise the view will not be updated
    }, 1000);
  }
}
@Component({
  selector: 'sample-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <cmp><cmp>
  `,
})
export default class SampleAppComponent {
}