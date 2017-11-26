import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashComponent } from './components/dash/dash.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinmarketcapService } from './services/coinmarketcap.service';
import { HoldingsComponent } from './components/holdings/holdings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HoldingsComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CoinmarketcapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
