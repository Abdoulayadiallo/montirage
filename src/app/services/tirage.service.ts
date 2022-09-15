import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tirage } from 'src/models/tirage';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private baseURL = "http://localhost:8080/Tirage/AfficherTirage";

  private baseURL2 = "http://localhost:8080/Tirage/CreerTirage";


  constructor(private httpClient : HttpClient) { }

  getTirageList():Observable<Tirage[]>{
    return this.httpClient.get<Tirage[]>(`${this.baseURL}`)
  }

  CreateTirage(tirage:Tirage, libele:string,n_tirage:number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL2}/${libele}/${n_tirage}`,tirage)
  }
  
  


}
