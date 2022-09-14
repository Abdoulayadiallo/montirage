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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

formmodule!:FormGroup;
file:any;
liste!:Listepostulant;

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
    private http:HttpClient
    /*************** */) { }

  ngOnInit(): void {

    /**************** */
    this.formmodule=this.formB.group({
      libele:['',Validators.required],
      file:['',Validators.required]
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

onImporter(): void {
  this.router.navigateByUrl('Importation')
}

onFileChange(evt: any){
  const target: DataTransfer =  <DataTransfer>(evt.target);

  if(target.files.length !== 1) throw new Error('mauvais fichier');

  const reader: FileReader  = new FileReader();

  reader.onload = (e:any) => {
    const bstr:String = e.target.result;

    const wb: xlsx.WorkBook = xlsx.read(bstr, {type: 'binary' });
    const wsname : string = wb.SheetNames[0];
    const ws: xlsx.WorkSheet= wb.Sheets[wsname];
    console.log(ws);
    this.data = (xlsx.utils.sheet_to_json(ws, {header: 1 }));
    console.log(this.data);
  };

  reader.readAsBinaryString(target.files[0]);
}

//enregistement 

savePostulant(){
  this.postulantService.AjouterList(this.postulant,this.liste.libele).subscribe(data =>{
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
}
ImporterListe(){
this.liste=this.formmodule.value
this.postulantService.ImportList(this.file,this.listepostulant.libele).subscribe(data =>{
  this.formmodule.reset();
});
/********************** */
}



}
