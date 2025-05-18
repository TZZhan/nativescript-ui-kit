import { Component } from '@angular/core';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  items = [
    {
      name: 'wayne-plugins',
      route: '/wayne-plugins',
    },
  ];
}
