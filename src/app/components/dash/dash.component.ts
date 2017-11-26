import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoinmarketcapService } from '../../services/coinmarketcap.service';
import { Coin } from '../../models/coin';

import * as numeral from 'numeral';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit {
  @Input() allCoins: Array<Coin>;
  @Output() coinToggleEvent = new EventEmitter();


  constructor(private cmcService: CoinmarketcapService) {
  }

  ngOnInit() {

  }

  updateCoins() {

  }

  toggleCoin(coin) {
    console.log(coin.name)
    coin.isMyCoin = !coin.isMyCoin;
    this.coinToggleEvent.emit(coin);
  }

  moneyFormat(money: number) {
    return numeral(money).format('$0,0.00');
  }
}
