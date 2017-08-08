import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {BeerService} from './shared/beer/beer.service';
import {GiphyService} from './shared/giphy/giphy.service';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BeerService, GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
