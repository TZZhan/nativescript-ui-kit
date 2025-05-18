import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { WaynePluginsComponent } from './wayne-plugins.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: WaynePluginsComponent }])],
  declarations: [WaynePluginsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WaynePluginsModule {}
