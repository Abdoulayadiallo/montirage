import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listepostulant } from 'src/models/listepostulant';
import { Postulant } from 'src/models/postulant';
import { Tirage } from 'src/models/tirage';
import { ListepostulantService } from '../services/listepostulant.service';
import { TirageService } from '../services/tirage.service';
import * as xlsx from 'xlsx';
import { PostulantService } from '../postulant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

formmodule!: FormGroup;
file:any;
liste:Listepostulant;
//liste:Listepostulant=new Listepostulant();

monLibelle:any;



  Libele:any
  tirage: Tirage = new Tirage();
  choix:any;
  listepostulant: Listepostulant = new Listepostulant()
  tirages!: Tirage[];
  listepostulants!: Listepostulant[];
  postulant: Postulant= new Postulant;
  data: [][];
  constructor(private router: Router,
    private tirageService:TirageService,
    private listepostulantService: ListepostulantService,
    private postulantService:PostulantService,
    /****** */
    private formB:FormBuilder,

    /*************** */) { }

  ngOnInit(): void {

    /**************** */
    this.formmodule=this.formB.group({
      libele:['',Validators.required],
      dateListe:['', Validators.required],
      file:['',Validators.required],
    })
    /************************ */

    this.getTirage();
    this.getListePostulant();
  }
  private getTirage(){
    this.tirageService.getTirageList().subscribe(data => {
      this.tirages = data;
    })
  }
  private getListePostulant(){
    this.listepostulantService.getPostulantList().subscribe(data => {
      this.listepostulants = data;
    })
  }
  saveTirage(){
    this.tirageService.CreateTirage(this.tirage,this.choix,this.tirage.n_tirage).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));

  }
  gotoTirageList(){
    this.router.navigate([`/detailsTirage`])
  }



  onSubmit(){
    console.log(this.tirage);
    this.saveTirage();
    console.log(this.choix)
  }

  onlistetrier(): void {
    this.router.navigateByUrl('PostulantTriées')
}

//enregistement 

savePostulant(){
  this.postulantService.AjouterList(this.postulant,this.Libele).subscribe(data =>{
    console.log(data);
  },
  error => console.log(error));
}
onImport(){
  console.log(this.tirage);
    this.savePostulant();
}

/************* *******/
filechange(e:any){
  
  this.file=e.target["files"][0]
  console.log(e.target['files'][0].name+" "+ e.target['files'][0].length);
}
ImporterListe(){
this.liste=this.formmodule.value

 
  console.log("------------------------------- "+this.Libele)

this.postulantService.ImportList(this.liste.libele,this.file).subscribe(data =>{

  this.formmodule.reset();
});
/********************** */
}




}
