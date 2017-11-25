import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Output() clearCoinStorage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clearStorage() {
    localStorage.setItem('savedCoins', '');
    this.clearCoinStorage.emit();
  }
}
