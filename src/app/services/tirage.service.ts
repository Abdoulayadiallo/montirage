import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listepostulant } from 'src/models/listepostulant';
import { Tirage } from 'src/models/tirage';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private baseURL = "http://localhost:8080/Tirage/AfficherTirage";
  private url = "http://localhost:8080/Tirage/compte";

  constructor(private httpClient : HttpClient) { }

  getTirageList():Observable<Tirage[]>{
    return this.httpClient.get<Tirage[]>(`${this.baseURL}`)
  }
  getCompteTirage():Observable<Tirage[]>{
    return this.httpClient.get<Tirage[]>(`${this.url}`)
  }

}
