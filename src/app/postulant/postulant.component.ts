import { Component } from '@angular/core';
import { TirageComponent } from '../tirage/tirage.component';


@Component({
  selector: 'app-postulant',
  templateUrl: './postulant.component.html',
  styleUrls: ['./postulant.component.css']
})
export class PostulantComponent{
  tirage!: TirageComponent;
  ngImport():void{
    this.tirage.onFileChange;
  }
}
  

