import { Component, OnInit } from '@angular/core';

import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';
import { Input } from '@angular/core';
import { Listepostulant } from 'src/models/listepostulant';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css'],
})
export class ListePostulantComponent implements OnInit {
  @Input() listepostulant!: Listepostulant;
  
  postulants!: Postulant[];
  constructor(private postulantService: PostulantService,
    private router:Router,
    private activatroute: ActivatedRoute ) { }
  
  ngOnInit(): void {
    this.getPostulants();
    this.activatroute.params.subscribe(
      (data) =>{
        console.log(data)
      }
    )
  
  }
  private getPostulants(){
    this.postulantService.getPostulantsList().subscribe(data => {
      this.postulants = data;
    });
  }
 

  onSuivant(): void {
    this.router.navigateByUrl('')
}

onPrecedent(): void {
  this.router.navigateByUrl('')
}
}


