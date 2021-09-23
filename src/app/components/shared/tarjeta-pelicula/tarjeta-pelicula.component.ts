import { Component, Input, OnInit } from '@angular/core';
import { PeliculaPopular } from 'src/app/interfaces/PeliculasPopulares.interface';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styles: [
  ]
})
export class TarjetaPeliculaComponent implements OnInit {

  @Input() pelicula! : PeliculaPopular;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pelicula)
  }

}
