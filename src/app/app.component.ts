import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CoinmarketcapService} from './coinmarketcap.service';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  allCoins: any;
  savedCoins: Array<Object>;

  constructor(private cmcService: CoinmarketcapService) {
    this.savedCoins = [];
  }

  ngOnInit() {
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
        _.map(this.savedCoins, (m) => {
          _.map(data, (n) => {
            if (m.id === n.id) {
              n.isMyCoin = true;
            }
          });
        });
        this.allCoins = data;
      },
      (err) => {
        console.error(err);
      },
      () => {
      });
  }

  clearCoinStorageHandler(): void {
    this.savedCoins = null;
    _.map(this.allCoins, (n) => {
      n.isMyCoin = false;
    });
  }

  coinToggleHandler(coin): void {
    if (coin.isMyCoin) {
      this.savedCoins.push(coin);
    } else {
      _.remove(this.savedCoins, (n) => {
        return n.id === coin.id;
      });
    }
    localStorage.setItem('savedCoins', JSON.stringify(this.savedCoins));

  }
}
