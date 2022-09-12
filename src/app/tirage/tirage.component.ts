import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listepostulant } from 'src/models/listepostulant';
import { Tirage } from 'src/models/tirage';
import { ListepostulantService } from '../services/listepostulant.service';
import { TirageService } from '../services/tirage.service';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  tirage: Tirage = new Tirage();
  tirages!: Tirage[];
  listepostulants!: Listepostulant[];
  
  constructor(private router: Router,private tirageService:TirageService,private listepostulantService: ListepostulantService) { }

  ngOnInit(): void {
    this.getTirage();
    this.getListePostulant();
  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
    })
  }
  private getListePostulant(){
    this.listepostulantService.getPostulantList().subscribe(data => {
      this.listepostulants = data;
    })
  }

  onSubmit(){
    console.log(this.tirage);
  }

  onlistetrier(): void {
    this.router.navigateByUrl('PostulantTriées')
}

onImporter(): void {
  this.router.navigateByUrl('')
}
}
