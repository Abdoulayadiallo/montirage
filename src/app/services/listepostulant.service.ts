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

  private baseURL = "http://localhost:8080/ListePostulant/Afficher"

  constructor(private httpClient: HttpClient) { }

  getPostulantList():Observable<Listepostulant[]>{
    return this.httpClient.get<Listepostulant[]>(`${this.baseURL}`)
  }

  
  parlibelle(l: string):void{
   //const liste = this.listepostulant.find(this.listepostulant => this.listepostulant.libele === l);


  }
}
