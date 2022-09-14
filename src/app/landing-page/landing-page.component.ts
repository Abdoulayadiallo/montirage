import { Component, OnInit } from '@angular/core';
import { Tirage } from 'src/models/tirage';
import { TirageService } from '../services/tirage.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  tirages!: Tirage[];


  constructor(private tirageService:TirageService) { }

  ngOnInit(): void {
    this.getTirage();
  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
    })
  }

  //Compter le nombre tolal de tirage
  get totalRows(): number {
    return this.tirages.length;
  }
}
