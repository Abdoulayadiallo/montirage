import { Component, OnInit } from '@angular/core';

import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';


@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css'],
})
export class ListePostulantComponent implements OnInit {

  postulants!: Postulant[];
  constructor(private postulantService: PostulantService) { }
  
  ngOnInit() {
    console.log("On init...")
    this.getPostulants();
  }

getPostulants(){
  this.postulantService.getPostulants().subscribe(data => {
    this.postulants =data;
  })
  }
}
