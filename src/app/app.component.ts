import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  myWallet: Object;

  myCoinsEvent(wallet: Object) {
    this.myWallet = wallet;
  }
}
