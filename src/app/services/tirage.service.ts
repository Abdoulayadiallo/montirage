import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/models/tirage';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private baseURL = "http://localhost:8080/Tirage";

  constructor(private httpClient : HttpClient) { }

  getTirageList():Observable<Tirage[]>{
    return this.httpClient.get<Tirage[]>(`${this.baseURL}/AfficherTirage`)
  }

  CreateTirage(tirage:Tirage, libele:string,n_tirage:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/CreerTirage/${libele}/${n_tirage}`,tirage)
  }
  CompteParListe():Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/compteParListe`)
  }
  
  NombredeListeTirer() : Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/NombreListeTire`)
  }
  //acces par liste id
  LienParIdListe(id_liste:number):Observable<Tirage[]>{
    return this.httpClient.get<Tirage[]>(`${this.baseURL}/AfficherListeParId/${id_liste}`)
  }

}
