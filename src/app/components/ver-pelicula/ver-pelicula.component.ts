import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaModel } from 'src/app/interfaces/PeliculaModel.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styles: [
  ]
})
export class VerPeliculaComponent implements OnInit {

  peliculaId! : number;
  pelicula!: PeliculaModel;

  constructor( private activatedRoute:ActivatedRoute, private _ps: PeliculasService ) { 

    this.activatedRoute.params.subscribe( ( {id} ) => {
      this.peliculaId = id;
    } )

  }

  ngOnInit(): void {
    this._ps.obtenerDetallePelicula(this.peliculaId).subscribe(respuesta => {
      this.pelicula = respuesta;
    })
  }

}
