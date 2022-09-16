import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tirage } from 'src/models/tirage';
import { TirageService } from '../services/tirage.service';
import { Listepostulant } from 'src/models/listepostulant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.css']
})
export class DetailsTirageComponent implements OnInit {
tirages!: Tirage[];
searchText: any;
p: string|number|undefined;
lienlistetirage:Observable<any>;

  constructor(private router:Router,
    private tirageService:TirageService,
    private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getTirage();
    const IdListe = this.activateroute.snapshot.params['id_liste_postulant'];
    this.lienlistetirage = this.tirageService.LienParIdListe(IdListe);
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
listepostulant: Listepostulant = new Listepostulant;
onView():void {
  this.router.navigateByUrl(`listePostulant/${this.listepostulant.libele}`);
    

}

}
