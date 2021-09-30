import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarousselComponent } from './components/shared/caroussel/caroussel.component';
import { SliderHorizontalComponent } from './components/shared/slider-horizontal/slider-horizontal.component';
import { TarjetaPeliculaComponent } from './components/shared/tarjeta-pelicula/tarjeta-pelicula.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CarousselComponent,
    SliderHorizontalComponent,
    TarjetaPeliculaComponent,
    VerPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
