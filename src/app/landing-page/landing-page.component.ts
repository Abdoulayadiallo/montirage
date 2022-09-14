import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';
import { TirageService } from '../services/tirage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  nombre : any;
  postulant: Postulant= new Postulant();
  postulants!: Postulant[];
  constructor(private router:Router,
     private tirageService:TirageService,private postulantService:PostulantService) { }

  ngOnInit(): void {
    this.getPostulants()
  }

  private getPostulants(){
    this.postulantService.getPostulantsList().subscribe(data => {
      this.postulants = data;
    });
  }

  getNomre(){
    this.tirageService.getCompteTirage().subscribe(data => {
      this.nombre = data;
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

}
