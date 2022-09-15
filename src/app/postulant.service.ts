import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from 'src/models/postulant';


@Injectable({
  providedIn: 'root'
})
export class PostulantService {
  private baseUrl = 'http://localhost:8080/API/Postulant';

  constructor(private httpClient: HttpClient) { }
  
  getPostulantsList(): Observable<Postulant[]> {
    return this.httpClient.get<Postulant[]>(`${this.baseUrl}/Afficher`);
  }
  AjouterList(postulant:Postulant,libele:string):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/ajoute_postulant/${libele}`,postulant);
  }

}
