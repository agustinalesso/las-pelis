import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICartelera } from '../interfaces/cartelera.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  //movie/now_playing? --> ENDPOINT
  //api_key=97b90ae9fb7d31d765e5d5c9e4e3efd1
  entorno = environment;

  constructor(private http:HttpClient) { }

  obtenerCartelera(){
    return this.http.get<ICartelera>(`${this.entorno.api_base_url}movie/now_playing?api_key=${this.entorno.api_key}`)
  }


}