import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulanttire } from 'src/models/postulanttire';

@Injectable({
  providedIn: 'root'
})
export class PostulanttireService {

  private Url = "http://localhost:8080/PostulantTire/compte"
  private URL = "http://localhost:8080/API/Postulant/Total"

  constructor(private httpClient:HttpClient) { }

  getNombreParTirage():Observable<Postulanttire[]>{
    return this.httpClient.get<Postulanttire[]>(`${this.Url}`)
  }
 
}
