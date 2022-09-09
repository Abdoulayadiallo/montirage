import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonTirageComponent } from './mon-tirage/mon-tirage.component';
import { HeaderComponent } from './header/header.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
     // import HttpClientModule after BrowserModule.
    AppComponent,
    MonTirageComponent,
    HeaderComponent,
    ListePostulantComponent,
    TirageComponent,
    DetailsTirageComponent,
    LandingPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
