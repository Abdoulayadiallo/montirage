import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tirage } from 'src/models/tirage';
import { TirageService } from '../services/tirage.service';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {
  tirages!: Tirage[];

  constructor(private router:Router,
    private tirageService:TirageService) { }

  ngOnInit(): void {
    this.getTirage();
  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
    })
  }
  //Compter tirage
  get totalRows(): number {
    return this.tirages.length;
  }


  onSuivant(): void {
      this.router.navigateByUrl('')
  }

  onPrecedent(): void {
    this.router.navigateByUrl('')
}

}
