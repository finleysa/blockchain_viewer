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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatMenuModule, MatTableModule
} from '@angular/material';


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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    CoinmarketcapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
