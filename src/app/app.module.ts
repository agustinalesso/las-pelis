import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';

import { SafeUrlPipe } from './pipes/safeUrl.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarousselComponent } from './components/shared/caroussel/caroussel.component';
import { SliderHorizontalComponent } from './components/shared/slider-horizontal/slider-horizontal.component';
import { TarjetaPeliculaComponent } from './components/shared/tarjeta-pelicula/tarjeta-pelicula.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';
import { CastComponent } from './components/shared/cast/cast.component';
import { VerActorComponent } from './components/ver-actor/ver-actor.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { MiPropioPipePipe } from './pipes/mi-propio-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CarousselComponent,
    SliderHorizontalComponent,
    TarjetaPeliculaComponent,
    VerPeliculaComponent,
    CastComponent,
    VerActorComponent,
    BuscadorComponent,
    ResultadoComponent,
    SafeUrlPipe,
    MiPropioPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
