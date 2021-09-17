import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ICartelera, Resultados } from 'src/app/interfaces/cartelera.interface';

//Carousel
import EmblaCarousel from 'embla-carousel';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  carousel : any;
  cartelera! : ICartelera;
  resultadosCartelera: Resultados[] = [];
  
  constructor( private peliculasService : PeliculasService ) { }

  ngOnInit(): void {
    
    const contenedor : any = document.querySelector('.embla');
    const opciones = {loop: true,speed:20};
    this.carousel = EmblaCarousel(contenedor,opciones)

    this.peliculasService.obtenerCartelera().subscribe(respuesta => {
      this.resultadosCartelera = respuesta.results;
    })

  }

  scrollSiguiente(){
    this.carousel.scrollNext();
  }

  scrollAnterior(){
    this.carousel.scrollPrev();
  }

}
