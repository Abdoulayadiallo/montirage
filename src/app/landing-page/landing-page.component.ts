import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TirageService } from '../services/tirage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
    
  
  nombre : any;
  constructor(private router:Router,
     private tirageService:TirageService,
     private activatroute:ActivatedRoute) { }

  ngOnInit(): void {
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
