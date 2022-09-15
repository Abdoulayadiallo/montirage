import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonTirageComponent } from './mon-tirage/mon-tirage.component';
import { HeaderComponent } from './header/header.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { PageAfficherTirageComponent } from './page-afficher-tirage/page-afficher-tirage.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostulantComponent } from './postulant/postulant.component';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';


@NgModule({
  declarations: [
     // import HttpClientModule after BrowserModule.
    AppComponent,
    MonTirageComponent,
    HeaderComponent,
    ListePostulantComponent,
    TirageComponent,
    DetailsTirageComponent,
    LandingPageComponent,
    PageAfficherTirageComponent,
    PostulantComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [ { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
