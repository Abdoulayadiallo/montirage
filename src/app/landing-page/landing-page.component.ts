import { Component, OnInit } from '@angular/core';

import { Tirage } from 'src/models/tirage';

import {ActivatedRoute, Router } from '@angular/router';
import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';

import { TirageService } from '../services/tirage.service';
import { Listepostulant } from 'src/models/listepostulant';
import { ListepostulantService } from '../services/listepostulant.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    

  tirages: Tirage[];
  listePostulants: Listepostulant[];
  postulant: Postulant[];


  constructor(private router:Router,
    private tirageService:TirageService,
    private activateroute:ActivatedRoute,
    private listePostulantService:ListepostulantService) { }

  ngOnInit(): void {
    this.getTirage();
    this.getListePostulant();
   const libeleListe = this.activateroute.snapshot.params['libelle'];
   const liste= this.listePostulantService.parlibelle(libeleListe);
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
 
listepostulant: Listepostulant = new Listepostulant;
ngVoir(): void{
  this.listePostulantService.parlibelle;
  this.router.navigateByUrl(`listePostulant/${this.listepostulant.libele}`);
}

  //Compter le nombre tolal de tirage
  get totalRows(): number {
    return this.tirages.length;
  }
}
