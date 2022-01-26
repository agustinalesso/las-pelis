import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISerie } from '../interfaces/serie.interface';
import { ISeriesPopulares } from '../interfaces/seriespopulares.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor(private http: HttpClient){}

  //api_key=97b90ae9fb7d31d765e5d5c9e4e3efd1
  entorno = environment;

  //buscar series
  getSeriesPop(){
    return this.http.get<ISeriesPopulares>(`${this.entorno.api_base_url}tv/popular?api_key=${this.entorno.api_key}`);
  }

  //buscar series por id
  getSerieIndividual(id: string){
    return this.http.get<ISerie>(`${this.entorno.api_base_url}tv/${id}?api_key=${this.entorno.api_key}`);
  }
}
