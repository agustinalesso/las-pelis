import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IActorPelicula } from 'src/app/interfaces/actorPeliculas.interface';
import { IMovieResult } from 'src/app/interfaces/busquedas.interface';
import { PeliculasNovedad } from 'src/app/interfaces/PeliculasNovedades.interface';
import { PeliculaPopular } from 'src/app/interfaces/PeliculasPopulares.interface';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styles: []
})
export class TarjetaPeliculaComponent {

  @Input() pelicula! : PeliculaPopular | PeliculasNovedad | IActorPelicula | IMovieResult;

  constructor( private router:Router ) {}

  verPelicula(id:number){
    this.router.navigate( ['/ver-pelicula',id] )
  }

}
