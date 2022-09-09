import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css']
})
export class ListePostulantComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSuivant(): void {
    this.router.navigateByUrl('')
}

onPrecedent(): void {
  this.router.navigateByUrl('')
}

}
