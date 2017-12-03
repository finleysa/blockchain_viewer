import { Component, OnInit } from '@angular/core';
import { CoinmarketcapService } from './services/coinmarketcap.service';
import { Coin } from './models/coin';

import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  allCoins: any;
  savedCoins: Array<Coin>;


  constructor(private cmcService: CoinmarketcapService) {
    this.savedCoins = [];
  }

  ngOnInit() {
    // get stored coins
    let temp = localStorage.getItem('savedCoins');
    if (temp) { this.savedCoins = JSON.parse(temp); }

    this.startUpdate();
    setInterval( () => {
      this.startUpdate();
    }, 20000);
  }

  startUpdate() {
    this.cmcService.getPrices().subscribe(
      data => {
        _.map(data, (m) => {
          _.map(this.savedCoins, (n) => {
            if (m.id === n.id) {
              m.isMyCoin = n.isMyCoin;
              m.amount_owned = n.amount_owned;
            }
          });
        })
        this.allCoins = data;

      },
      (err) => {
        console.error(err);
      },
      () => {
      });
  }

  clearCoinStorageHandler(): void {
    this.savedCoins = [];
    _.map(this.allCoins, (n: Coin) => {
      n.isMyCoin = false;
      n.amount_owned = 0;
    });
    localStorage.clear();
  }

  coinOwnedHandler(coin: Coin): void {
    _.map(this.savedCoins, (n: Coin) => {
      if (n.id === coin.id) {
        n.amount_owned = coin.amount_owned;
        n.ownedTotal = coin.ownedTotal;
      }
    });
    this.saveCoins(JSON.stringify(this.savedCoins));
  }

  coinToggleHandler(coin: Coin): void {
    if (coin.isMyCoin) {
      this.savedCoins.push(coin);
    } else {
      _.remove(this.savedCoins, (n) => {
        return n.id === coin.id;
      });
    }
    this.saveCoins(JSON.stringify(this.savedCoins));
  }

  saveCoins(value: string) {
    localStorage.setItem('savedCoins', value);
  }
}
