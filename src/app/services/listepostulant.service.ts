import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listepostulant } from 'src/models/listepostulant';

@Injectable({
  providedIn: 'root'
})
export class ListepostulantService {

  private baseURL = "http://localhost:8080/ListePostulant/Afficher"

  constructor(private httpClient: HttpClient) { }

  getPostulantList():Observable<Listepostulant[]>{
    return this.httpClient.get<Listepostulant[]>(`${this.baseURL}`)
  }
}
