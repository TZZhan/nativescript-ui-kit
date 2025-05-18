import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedWayneLabelMarquee } from '@demo/shared';
import {} from '@wayne/wayne-label-marquee';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWayneLabelMarquee {}
