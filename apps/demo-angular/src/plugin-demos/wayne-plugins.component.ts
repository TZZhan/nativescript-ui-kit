import { Component, NgZone } from '@angular/core';
import { DemoSharedWaynePlugins } from '@demo/shared';
import {} from '@wayne/wayne-plugins';

@Component({
  selector: 'demo-wayne-plugins',
  templateUrl: 'wayne-plugins.component.html',
})
export class WaynePluginsComponent {
  demoShared: DemoSharedWaynePlugins;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedWaynePlugins();
  }
}
