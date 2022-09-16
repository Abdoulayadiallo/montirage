import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonTirageComponent } from './mon-tirage/mon-tirage.component';
import { HeaderComponent } from './header/header.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';

import { PageAfficherTirageComponent } from './page-afficher-tirage/page-afficher-tirage.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostulantComponent } from './postulant/postulant.component';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
>>>>>>> aaf1526673e0e325383a5c70030f97ac813d0525
@NgModule({
  declarations: [
     // import HttpClientModule after BrowserModule.
    AppComponent,
    MonTirageComponent,
    HeaderComponent,
    TirageComponent,
    DetailsTirageComponent,
    PageAfficherTirageComponent,
    PostulantComponent,
    LandingPageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //recherche liste
    Ng2SearchPipeModule,
    //pagination
    NgxPaginationModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
