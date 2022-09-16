import { Component, OnInit } from '@angular/core';

import { Postulant } from 'src/models/postulant';
import { PostulantService } from '../postulant.service';
import { Input } from '@angular/core';
import { Listepostulant } from 'src/models/listepostulant';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.css'],
})
export class ListePostulantComponent implements OnInit {
formmodule!:FormGroup;
file:any;
liste!:Listepostulant;
//recherche && pagination
searchText:any;
p: any;


  @Input() listepostulant!: Listepostulant;
  postulants!: Postulant[];
  constructor(private postulantService: PostulantService,
    private router:Router,
    private activatroute: ActivatedRoute ,
    private formB:FormBuilder,
    private http:HttpClient) { }
  
  ngOnInit(): void {

    this.formmodule=this.formB.group({
      libele:['',Validators.required],
      file:['',Validators.required]
    })
    /************************ */
    this.getPostulants();
    /*
    
    this.activatroute.params.subscribe(
      (data) =>{
        console.log(data)
      }
    )*/
  
  }
  private getPostulants(){
    this.postulantService.getPostulantsList().subscribe(data => {
      this.postulants = data;
    });
  }

  filechange(e:any){
    this.file=e.target["files"][0]
  }




}


