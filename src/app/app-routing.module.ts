import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { VerPeliculaComponent } from './components/ver-pelicula/ver-pelicula.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'ver-pelicula/:id', component: VerPeliculaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
