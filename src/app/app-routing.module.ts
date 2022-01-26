import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreloadAllModules } from '@angular/router';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { SeriesComponent } from './components/series/series.component';
import { VerActorComponent } from './components/ver-actor/ver-actor.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'ver-pelicula/:id', component: VerPeliculaComponent},
  {path: 'ver-actor/:actorId', component: VerActorComponent},
  {path: 'buscar', component: BuscadorComponent},
  {path: 'resultados/:query', component: ResultadoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
