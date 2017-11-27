import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Coin } from '../../models/coin';

import * as numeral from 'numeral';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.less']
})
export class DashComponent implements OnInit {
  _allCoins: Array<Coin>;
  @Output() coinToggleEvent = new EventEmitter();

  displayedColumns = ['add', 'name', 'price', 'percent_change_1h', 'percent_change_24h', 'percent_change_7d'];
  dataSource = new MatTableDataSource<Coin>(this._allCoins);

  @Input()
  set allCoins(coins: Array<Coin>) {
    this._allCoins = coins;
    this.dataSource = new MatTableDataSource<Coin>(this._allCoins);
  }

  get allCoins() {
    return this._allCoins;
  }


  constructor() {
  }

  ngOnInit() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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
