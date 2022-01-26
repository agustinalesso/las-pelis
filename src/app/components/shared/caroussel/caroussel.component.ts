import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ICartelera, Resultados } from 'src/app/interfaces/cartelera.interface';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  carousel : any;
  cartelera! : ICartelera;
  resultadosCartelera: Resultados[] = [];
  public swiper!: Swiper;

  constructor( private peliculasService : PeliculasService ) { }

  ngOnInit(): void {

    this.peliculasService.obtenerCartelera().subscribe(respuesta => {
      this.resultadosCartelera = respuesta.results;
    })

    this.swiper  = new Swiper('.swiper', {
      // Optional parameters
      loop: true
    });

    console.log('after swiper')

  }

  swipeNext(){
    this.swiper.slideNext();
  }

  swipePrevious(){
    this.swiper.slidePrev();
  }

}
