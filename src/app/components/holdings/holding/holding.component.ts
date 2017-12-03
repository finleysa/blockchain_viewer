import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coin} from '../../../models/coin';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.less']
})
export class HoldingComponent implements OnInit {
  @Input() coin: Coin;
  @Output() coinOwnedEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  multiply(e, coin: Coin) {
    if (e.target.value > 0) {
      coin.amount_owned = e.target.value;
    } else {
      coin.amount_owned = null;
    }

    this.coinOwnedEvent.emit(coin);
  }
}
