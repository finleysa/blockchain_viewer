import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CoinmarketcapService } from '../../services/coinmarketcap.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Output() clearCoinStorage = new EventEmitter();
  constructor(private cmcService: CoinmarketcapService) { }

  ngOnInit() {
  }

  clearStorage() {
    localStorage.setItem('savedCoins', '');
    this.clearCoinStorage.emit();
  }

  refresh() {
    console.log("refesh clicked")
    this.cmcService.getPrices();
  }
}
