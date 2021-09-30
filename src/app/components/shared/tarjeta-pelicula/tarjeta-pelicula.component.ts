import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasNovedad } from 'src/app/interfaces/PeliculasNovedades.interface';
import { PeliculaPopular } from 'src/app/interfaces/PeliculasPopulares.interface';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styles: [
  ]
})
export class TarjetaPeliculaComponent implements OnInit {

  @Input() pelicula! : PeliculaPopular | PeliculasNovedad;

  constructor( private router:Router ) {}

  ngOnInit(): void {
    console.log(this.pelicula)
  }

  verPelicula(id:number){
    this.router.navigate( ['/ver-pelicula',id] )
  }

}
