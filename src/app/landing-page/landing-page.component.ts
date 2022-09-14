import { Component, OnInit } from '@angular/core';

import { Tirage } from 'src/models/tirage';

import {/* ActivatedRoute,*/ Router } from '@angular/router';
//import { Postulant } from 'src/models/postulant';
//import { PostulantService } from '../postulant.service';

import { TirageService } from '../services/tirage.service';
import { Listepostulant } from 'src/models/listepostulant';
import { Postulant } from 'src/models/postulant';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    

  tirages!: Tirage[];
  listePostulant!: Listepostulant[];
  postulant!: Postulant[];
searchText: any;
p: string|number|undefined;


  constructor(private router:Router,
    private tirageService:TirageService) { }

  ngOnInit(): void {
    this.getTirage();
  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
/*



  
  nombre : any;
  constructor(private router:Router,
     private tirageService:TirageService,
     private activatroute:ActivatedRoute) { }

  ngOnInit(): void {
  }

*/
    })
  }
  onSuivant(): void {
    this.router.navigateByUrl('')
}

onPrecedent(): void {
  this.router.navigateByUrl('')
}
ngVoir(): void{
  this.router.navigateByUrl('listePostulant/:libelle')
}

  //Compter le nombre tolal de tirage
  get totalRows(): number {
    return this.tirages.length;
  }
}
