import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onlistetrier(): void {
    this.router.navigateByUrl('PostulantTriées')
}

onImporter(): void {
  this.router.navigateByUrl('')
}
}
