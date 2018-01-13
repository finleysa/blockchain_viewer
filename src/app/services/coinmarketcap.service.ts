import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoinmarketcapService {

  constructor(private http: HttpClient) {

  }

  getPrices() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit=200');
  }

}
