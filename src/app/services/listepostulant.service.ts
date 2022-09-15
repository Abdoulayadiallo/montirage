import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listepostulant } from 'src/models/listepostulant';
import { Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListepostulantService {
  @Input() listepostulant!: Listepostulant;
  listePostulants!:Listepostulant[];
//connexion a la backend
  private baseURL = "http://localhost:8080/ListePostulant/Afficher"

  constructor(private httpClient: HttpClient) { }
//methode pour recuperer la liste des postulants
  getPostulantList():Observable<Listepostulant[]>{
    return this.httpClient.get<Listepostulant[]>(`${this.baseURL}`)
  }

  //une liste par lisbelle
  parlibelle(l: string):void{
   const postulantListes = this.listePostulants.find(postulantListes => postulantListes.libele === l);

  }
}
