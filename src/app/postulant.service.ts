import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulant } from 'src/models/postulant';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  
  private baseUrl = "http://localhost:8080/API/Postulant/Afficher";

  constructor(private httpClient: HttpClient ) { }

  getPostulants() : Observable<Postulant[]>{
    return this.httpClient.get<Postulant[]>('${this.baseUrl}');
  }
  
}
