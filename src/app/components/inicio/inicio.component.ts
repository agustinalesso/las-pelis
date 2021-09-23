import { Component, OnInit } from '@angular/core';
import { PeliculasPopulares } from 'src/app/interfaces/PeliculasPopulares.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public peliculasPopulares! : PeliculasPopulares;

  constructor(private _ps:PeliculasService) { 
    this._ps.obtenerPopulares().subscribe(resp => {
      this.peliculasPopulares = resp;
    })
  }

  ngOnInit(): void {}

}
