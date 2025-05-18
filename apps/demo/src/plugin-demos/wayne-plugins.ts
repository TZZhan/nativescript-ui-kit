import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedWaynePlugins } from '@demo/shared';
import {} from '@wayne/wayne-plugins';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWaynePlugins {}
