import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IActorResult, IMovieResult } from 'src/app/interfaces/busquedas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {

  query!:string;

  peliculas: IMovieResult[] = [];
  actores: IActorResult[] = [];
  cargando: boolean = true;
  filepath:string = 'https://image.tmdb.org/t/p/original';

  constructor(private ar:ActivatedRoute, private _ps:PeliculasService, private router: Router) {
    this.ar.params.subscribe(parametros => {
      this.query = parametros.query;
    })
  }

  ngOnInit(): void {
    this._ps.buscarPeliculas(this.query).subscribe(resultado => {
      this.peliculas = resultado.results;
      console.log(this.peliculas);
    });
    this._ps.buscarActores(this.query).subscribe(resultado => {
      this.actores = resultado.results;
      console.log(this.actores);
    })
    this.cargando = false;
  }

  verPerfilActor(id:number){
    this.router.navigate(['ver-actor',id]);
  }

}
