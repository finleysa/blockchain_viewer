import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashComponent } from './components/dash/dash.component';
import { HttpClientModule } from '@angular/common/http';
import { CoinmarketcapService } from './coinmarketcap.service';
import { HoldingsComponent } from './components/holdings/holdings.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    HoldingsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CoinmarketcapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
