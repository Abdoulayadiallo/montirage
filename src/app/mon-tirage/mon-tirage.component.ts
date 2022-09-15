import { Component, OnInit} from '@angular/core';
import { Listepostulant } from 'src/models/listepostulant';
import { Postulant } from 'src/models/postulant';

@Component({
  selector: 'app-mon-tirage',
  templateUrl: './mon-tirage.component.html',
  styleUrls: ['./mon-tirage.component.css']
})
export class MonTirageComponent implements OnInit  {
  p!: Postulant;
  l!:Listepostulant;
  constructor(){}

  ngOnInit(): void {
    
  }
 

}
