import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMultimedia } from 'src/app/interfaces/multimedia.interface';
import { PeliculaModel } from 'src/app/interfaces/PeliculaModel.interface';
import { IRecomendations } from 'src/app/interfaces/recomendations.interface';
import { IRelated } from 'src/app/interfaces/related.interface';
import { Cast, ICredits } from 'src/app/interfaces/Reparto.interface';
import { IReviews } from 'src/app/interfaces/reviews.interface';
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
  reviews!: IReviews;
  relacionadas!: IRelated;
  recomendaciones!: IRecomendations;
  multimedia!: IMultimedia;
  cast!: ICredits;
  crew: Cast[] = []

  director!: string | undefined;

  constructor( private activatedRoute:ActivatedRoute, private _ps: PeliculasService ) { 

    this.activatedRoute.params.subscribe( ( {id} ) => {
      this.peliculaId = id;
    } )
    
  }

  ngOnInit(): void {

    
    this._ps.obtenerDetallePelicula(this.peliculaId).subscribe(respuesta => {
      this.pelicula = respuesta;
      console.log(this.pelicula)
    })

    this._ps.obtenerRelacionados(this.peliculaId).subscribe(respuesta => {
      this.relacionadas = respuesta;
      console.log(this.relacionadas)
    })
    
    this._ps.obtenerRecomendaciones(this.peliculaId).subscribe(respuesta => {
      this.recomendaciones = respuesta;
      console.log(this.recomendaciones)
    })
    
    this._ps.obtenerMultimedia(this.peliculaId).subscribe(respuesta => {
      this.multimedia = respuesta;
      console.log(this.multimedia)
    })
    
    this._ps.obtenerReparto(this.peliculaId).subscribe(respuesta => {
      this.cast = respuesta;
      this.crew = respuesta.crew;
      const d = respuesta.crew.find(c => c.job == "Director")
      this.director = d?.name;
      console.log(this.cast)
    })

    this._ps.obtenerReviews(this.peliculaId).subscribe(respuesta => {
      this.reviews = respuesta;
      console.log(this.reviews)
    })


  }

}
