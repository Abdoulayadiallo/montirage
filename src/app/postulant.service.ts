import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from 'src/models/postulant';


@Injectable({
  providedIn: 'root'
})
export class PostulantService {
  private baseUrl = 'http://localhost:8080/API/Postulant';
  private URL = "http://localhost:8080/API/Postulant/Total"

  constructor(private httpClient: HttpClient) { }
  
  getPostulantsList(): Observable<Postulant[]> {
    return this.httpClient.get<Postulant[]>(`${this.baseUrl}/Afficher`);
  }
  AjouterList(postulant:Postulant,libele:string){
    return this.httpClient.post(`${this.baseUrl}/ajoute_postulant/${libele}`,postulant);
  }
  ImportList(libele:string,file:any):Observable<void>{
    let data = new FormData();
    data.append("file",file)
    return this.httpClient.post<void>(`${this.baseUrl}/ajoute_postulant/${libele}`,data);
  }
  getNombreTotalPostulant():Observable<number>{
    return this.httpClient.get<number>(`${this.URL}`)
  }

}
