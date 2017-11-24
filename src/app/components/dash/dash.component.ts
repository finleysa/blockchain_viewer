import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoinmarketcapService } from '../../coinmarketcap.service';
import _ from 'lodash';
import * as numeral from 'numeral';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit {
  @Output() myCoinsEvent = new EventEmitter<Object>();
  myCoins: any;
  allCoins: any;
  timerIntervalSeconds: number;

  constructor(private cmcService: CoinmarketcapService) {
    this.timerIntervalSeconds = 60;
    this.myCoins = [];
  }

  ngOnInit() {
    this.myCoinsEvent.emit(this.myCoins);
    this.updateCoins();
    setInterval(this.updateCoins.bind(this), 20000);
  }

  updateCoins() {
    this.myCoins = JSON.parse(localStorage.getItem('myCoins'));
    this.cmcService.getPrices().subscribe(
      data => {
        this.allCoins = data;
        _.map(this.allCoins, (n) => {
          n.isMyCoin = false;
        });
      });

    this.myCoinsEvent.emit(this.myCoins);
  }

  toggleCoin(coin) {
    console.log(coin);
    this.myCoins.push(coin);
    this.myCoinsEvent.emit(this.myCoins);
    localStorage.setItem('myCoins', JSON.stringify(this.myCoins));
  }
}
