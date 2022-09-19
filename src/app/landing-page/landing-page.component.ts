import { Component, OnInit } from '@angular/core';

import { Tirage } from 'src/models/tirage';

import {ActivatedRoute, Router } from '@angular/router';
import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';

import { TirageService } from '../services/tirage.service';
import { Listepostulant } from 'src/models/listepostulant';
import { ListepostulantService } from '../services/listepostulant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    

  tirages!: Tirage[];
  listePostulants!: Listepostulant[];
  postulant!: Postulant[];
  searchText: any;
  p: string|number|undefined;
  listepostulant: any;
  public Contenu:any = [];
  nombretotaliste:number;
  lienlistetirage:Observable<any>;
  nombreTotalPostulant:number;


  constructor(private router:Router,
    private tirageService:TirageService,
    private activateroute:ActivatedRoute,
    private listePostulantService:ListepostulantService,
    private postulantService: PostulantService,) { }

  ngOnInit(): void {
    this.NomTotalListe();
    this.getTirage();
    this.getListePostulant();
    this.CompterTirageParListe();
    this.getNombreTotalPostulant();
  
    
   const IdListe = this.activateroute.snapshot.params['id_liste_postulant'];


   this.lienlistetirage = this.tirageService.LienParIdListe(IdListe)

  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
   })
  }
private getListePostulant(){
  this.listePostulantService.getPostulantList().subscribe(data => {
    this.listePostulants = data;
  })
}
 

ngVoir(): void{
  this.router.navigateByUrl(`listePostulant/listePostulant/${this.listepostulant.libele}`);
}

  //Compter le nombre tolal de tirage
  get totalRows(): number {
    return this.tirages.length;
  }
  

  CompterTirageParListe(){
    this.tirageService.CompteParListe()
    .subscribe(data =>{
      this.Contenu = data;
      this.lienlistetirage =this.Contenu.length;
      console.log("mes données 2222222222222222222222+++",data);

    })
  }
  //Nombre total de liste tirés
  NomTotalListe():any {
    this.tirageService.NombredeListeTirer().subscribe(data => {
      this.nombretotaliste = data
      console.log("mes données==================",data)
    })
  }
  /*
  RecupererListeParId(){
    this.tirageService.LienParIdListe(IdListe).subscribe({
    })
  }
  */
  getNombreTotalPostulant(){
  this.postulantService.getNombreTotalPostulant().subscribe(data =>{
  this.nombreTotalPostulant = data
  console.log(data)
})
  }
  
}
