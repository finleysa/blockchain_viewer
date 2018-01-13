import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { Coin } from '../../models/coin';

import _ from 'lodash';
import * as numeral from 'numeral';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.less']
})
export class HoldingsComponent implements OnInit {
  private _allCoins: Array<Coin>;

  @Input()
  set allCoins(coins: Array<Coin>) {
    this._allCoins = coins;
    let temp = 0;
    _.map(this.allCoins, (n) => {
      if (n.isMyCoin && n.amount_owned) {
        temp += (n.amount_owned * n.price_usd);
      }
    });

    this.moneys = numeral(temp).format('$0,0.00');
  }

  get allCoins() {
    return this._allCoins;
  }

  @Output() coinOwnedEvent = new EventEmitter();
  moneys: string;

  constructor() {
  }

  ngOnInit() {

    this.totalMoneys();

    // // get total after allCoins is set
    // let timer = setInterval(
    //   () => {
    //     if (this.allCoins) {
    //       this.totalMoneys();
    //       clearInterval(timer);
    //     }
    //   }, 100);
  }

  totalMoneys() {
    let temp = 0;
    _.map(this.allCoins, (n) => {
      if (n.isMyCoin && n.amount_owned) {
        temp += (n.amount_owned * n.price_usd);
      }
    });

    this.moneys = numeral(temp).format('$0,0.00');
  }

  emitCoin(coin: Coin) {
    this.totalMoneys();
    this.coinOwnedEvent.emit(coin);
  }
}
