import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICartelera } from '../interfaces/cartelera.interface';
import { PeliculasPopulares } from '../interfaces/PeliculasPopulares.interface';
import { PeliculasNovedades } from '../interfaces/PeliculasNovedades.interface';
import { PeliculaModel } from '../interfaces/PeliculaModel.interface';
import { IReviews } from '../interfaces/reviews.interface';
import { ICredits } from '../interfaces/Reparto.interface';
import { IRecomendations } from '../interfaces/recomendations.interface';
import { IRelated } from '../interfaces/related.interface';
import { IMultimedia } from '../interfaces/multimedia.interface';

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

  obtenerUltimas(){
    return this.http.get<PeliculasNovedades>(`${this.entorno.api_base_url}movie/upcoming?api_key=${this.entorno.api_key}`)
  }

  obtenerPopulares(){
    return this.http.get<PeliculasPopulares>(`${this.entorno.api_base_url}movie/popular?api_key=${this.entorno.api_key}`)
  }

  obtenerDetallePelicula(peliculaId:number){
    return this.http.get<PeliculaModel>(`${this.entorno.api_base_url}movie/${peliculaId}?api_key=${this.entorno.api_key}`)
  }
  // => /movie/{movie_id}/credits
  obtenerReparto(peliculaId:number){
    return this.http.get<ICredits>(`${this.entorno.api_base_url}movie/${peliculaId}/credits?api_key=${this.entorno.api_key}`)
  }

  obtenerReviews(peliculaId:number){
    return this.http.get<IReviews>(`${this.entorno.api_base_url}movie/${peliculaId}/reviews?api_key=${this.entorno.api_key}`)
  }
  // => /movie/{movie_id}/videos
  obtenerMultimedia(peliculaId:number){
    return this.http.get<IMultimedia>(`${this.entorno.api_base_url}movie/${peliculaId}/videos?api_key=${this.entorno.api_key}`)
  }
  // => /movie/{movie_id}/recommendations
  obtenerRecomendaciones(peliculaId:number){
    return this.http.get<IRecomendations>(`${this.entorno.api_base_url}movie/${peliculaId}/recommendations?api_key=${this.entorno.api_key}`)
  }
  // => /movie/{movie_id}/similar
  obtenerRelacionados(peliculaId:number){
    return this.http.get<IRelated>(`${this.entorno.api_base_url}movie/${peliculaId}/similar?api_key=${this.entorno.api_key}`)
  }

}