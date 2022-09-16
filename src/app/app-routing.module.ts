import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { PageAfficherTirageComponent } from './page-afficher-tirage/page-afficher-tirage.component';
import { PostulantComponent } from './postulant/postulant.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  { path: 'listePostulant', component: ListePostulantComponent },
  { path: 'tirage', component: TirageComponent},
  { path: 'detailsTirage', component: DetailsTirageComponent },
  { path: '', component: LandingPageComponent },
  { path:'PostulantTriées',component:PageAfficherTirageComponent},
  {path: 'Importation', component:PostulantComponent},
  {path:'listePostulant/listePostulant/:libelle', component:ListePostulantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {

 }
