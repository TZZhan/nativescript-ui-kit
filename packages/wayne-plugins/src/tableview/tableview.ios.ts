import { WayneTableViewCommon } from './common';

export class WayneTableViewBridge extends WayneTableViewCommon {
  label: UIView;

  createNativeView() {
    const tableView = WayneTableView.alloc().init();
    // const marqueeLabel = MarqueeLabel.alloc().init();
    // tableView.addSubview(marqueeLabel);
    // this.label = marqueeLabel;
    return tableView;
  }

  initNativeView(): void {
    const nativeView = <WayneTableView>this.nativeView;

    var i = 0;
    nativeView.setButtonClickCallback(() => {
      nativeView.changeTheme();
    });

    // nativeView.changeOpenTheme();

    // nativeView.fadeLength = 10;
    // nativeView.scrollDuration = 8;
  }
}
