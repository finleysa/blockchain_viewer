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
  }

  ngOnInit() {
    this.updateCoins();
    setInterval(this.updateCoins.bind(this), 20000);
  }

  updateCoins() {
    this.cmcService.getPrices().subscribe(
      data => {
        console.log(data);
        this.allCoins = data;
        let temp = _.filter(data, (coin) => {
          return (coin.id === 'ethereum'
            || coin.id === 'bitcoin'
            || coin.id === 'iconomi'
            || coin.id === 'ethereum-classic');
        });
        this.myCoins = temp;
        this.myCoinsEvent.emit(temp);
      });
  }
}
