import { Component, NgZone } from '@angular/core';
import { DemoSharedWayneLabelMarquee } from '@demo/shared';
import {} from '@wayne/wayne-label-marquee';

@Component({
  selector: 'demo-wayne-label-marquee',
  templateUrl: 'wayne-label-marquee.component.html',
})
export class WayneLabelMarqueeComponent {
  demoShared: DemoSharedWayneLabelMarquee;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedWayneLabelMarquee();
  }
}
