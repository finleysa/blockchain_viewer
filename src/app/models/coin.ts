export class Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: number;
  // twofour_hr_volume_usd: number;
  market_cap_usd: number;
  available_supply: number;
  total_supply: number;
  max_supply: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  last_update: string;
  amount_owned: number;
  isMyCoin: false;
  ownedTotal: string;


  constructor(newCoin) {

    this.id = newCoin.id;
    this.name = newCoin.name;
    this.symbol = newCoin.symbol;
    this.rank = newCoin.rank
    this.price_usd = newCoin.price_usd;
    this.price_btc = newCoin.price_btc ;
    // this.twofour_hr_volume_usd = newCoin.24h_volume_usd;
    this.market_cap_usd = newCoin.arket_cap_usd;
    this.available_supply = newCoin.available_supply;
    this.total_supply = newCoin.total_supply;
    this.max_supply = newCoin.max_supply;
    this.percent_change_1h = newCoin.percent_change_1h;
    this.percent_change_24h = newCoin.percent_change_24h;
    this.percent_change_7d = newCoin.percent_change_7d;
    this.last_update = newCoin.last_update;
  }

}
