import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./component/heroes/heroes.component";
import {HeroDetailComponent} from './component/hero-detail/hero-detail.component';
import {HeroService} from "./service/hero.service";
import {MessageService} from "./service/message.service";
import {MessagesComponent} from './component/messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {Location} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule, InMemoryBackendConfigArgs} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./service/in-memory-data.service";
import {HeroSearchComponent} from './component/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, <InMemoryBackendConfigArgs>{dataEncapsulation: false}
    )
  ],
  providers: [HeroService, MessageService, Location],
  bootstrap: [AppComponent]
})
export class AppModule {
}
