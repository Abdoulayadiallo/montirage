import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSuivant(): void {
      this.router.navigateByUrl('')
  }

  onPrecedent(): void {
    this.router.navigateByUrl('')
}

}
