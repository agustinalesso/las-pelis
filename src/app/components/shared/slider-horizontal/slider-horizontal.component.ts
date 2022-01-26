import { Component, Input, OnInit } from '@angular/core';
import { PeliculasNovedades } from 'src/app/interfaces/PeliculasNovedades.interface';
import { PeliculasPopulares } from 'src/app/interfaces/PeliculasPopulares.interface';
import { ISeriesPopulares } from 'src/app/interfaces/seriespopulares.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-slider-horizontal',
  templateUrl: './slider-horizontal.component.html',
  styles: [
  ]
})
export class SliderHorizontalComponent implements OnInit{

  @Input() i_tituloPagina : string = '';
  @Input() i_modo : string = '';

  public pelisPopulares! : PeliculasPopulares;
  public pelisUltimas! : PeliculasNovedades;
  public seriesPopulares!: ISeriesPopulares;

  constructor(private _ps:PeliculasService, private _ss: SeriesService){
  }

  get modoPop(){
    return (this.i_modo === 'popular');
  }

  get modoNov(){
    return (this.i_modo === 'novedades')
  }

  get modoSeriesPop(){
    return (this.i_modo === 'seriespop');
  }

  get puedeMostrarSeries(){
    return (this.i_modo === 'seriespop' ? true : false);
  }

  get puedeMostrar(){
    return (this.i_modo === 'popular') ? (this.pelisPopulares ? true : false) : (this.pelisUltimas ? true : false)

    /*
    //Si el modo que pasamos es 'popular'
    if(this.i_modo === 'popular'){
      //Me fijo que existan datos en pelisPopulares
      if(this.pelisPopulares){
        return true //Si existen retorno true
      }else{
        return false //Si no retorno false
      }
    } else {
      //No es modo 'popular', o sea que es 'novedades'
      //Me fijo que exista datos en pelisUltimas
      if(this.pelisUltimas){
        return true //Si existre retorno true
      }else{
        return false //Si no retorno false
      }
    }
    */
  }
  
  ngOnInit(){
    if(this.i_modo === 'novedades'){
      this._ps.obtenerUltimas().subscribe(resp => {
        this.pelisUltimas = resp;
      })
    }

    if(this.i_modo === 'popular'){
      this._ps.obtenerPopulares().subscribe(resp => {
        this.pelisPopulares = resp;
      })
    }

    if(this.i_modo === 'seriespop'){
      this._ss.getSeriesPop().subscribe(resp => {
        this.seriesPopulares = resp;
      })
    }
  }

}
