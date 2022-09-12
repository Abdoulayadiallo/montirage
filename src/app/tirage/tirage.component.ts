import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postulant } from 'src/models/postulant';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  postulants: Postulant = new Postulant();
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  onlistetrier(): void {
    this.router.navigateByUrl('PostulantTriées')
}

onImporter(): void {
  this.router.navigateByUrl('')
}
}
