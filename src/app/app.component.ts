import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  myWallet: any;

  constructor() {
    this.myWallet = [];
  }

  myCoinsEvent(wallet: Array<Object>) {
    this.myWallet = wallet;
  }
}
