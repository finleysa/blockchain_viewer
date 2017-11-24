import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.less']
})
export class HoldingsComponent implements OnInit {
  @Input() wallet: any;

  constructor() {
    this.wallet = [];
  }

  ngOnInit() {
  }

}
