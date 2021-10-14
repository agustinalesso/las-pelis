import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActorPeliculas } from 'src/app/interfaces/actorPeliculas.interface';
import { IActor, IActorImages, ActorImage } from 'src/app/interfaces/IActor.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-ver-actor',
  templateUrl: './ver-actor.component.html',
  styles: [
  ]
})
export class VerActorComponent implements OnInit {
  
  actorId!: number;
  datosActor!: IActor;
  imagenesActor!: ActorImage[];
  peliculasActor!: IActorPeliculas;
  imagenFondo: string = '';
  filepath:string = 'https://image.tmdb.org/t/p/original';

  constructor(private _ar: ActivatedRoute, private _ps: PeliculasService) { 
    this._ar.params.subscribe(parametros =>  {
      this.actorId = parametros['actorId'];
    })
  }

  ngOnInit(): void {
    this._ps.obtenerDatosActor(this.actorId).subscribe(respuesta => {
      this.datosActor = respuesta;
    })
    this._ps.obtenerImagenesActor(this.actorId).subscribe(respuesta => {
      this.imagenesActor = respuesta.profiles;
      this.imagenFondo = respuesta.profiles[0].file_path;
    })
    this._ps.obtenerPeliculasActor(this.actorId).subscribe(respuesta => {
      this.peliculasActor = respuesta;
      console.log(this.peliculasActor);
    })
  }

}
