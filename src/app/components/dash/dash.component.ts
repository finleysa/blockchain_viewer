import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoinmarketcapService } from '../../coinmarketcap.service';
import _ from 'lodash';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit {
  @Input() allCoins: any;
  @Output() coinToggleEvent = new EventEmitter();
  timerIntervalSeconds: number;


  constructor(private cmcService: CoinmarketcapService) {
    this.timerIntervalSeconds = 60;
  }

  ngOnInit() {
    this.updateCoins();
    setInterval(this.updateCoins.bind(this), 20000);
  }

  updateCoins() {

  }

  toggleCoin(coin) {
    coin.isMyCoin = !coin.isMyCoin;
    this.coinToggleEvent.emit(coin);
  }
}
