import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  public textoBusqueda!:string;

  constructor(private router:Router) { }

  buscar(){
    if(this.textoBusqueda){
      this.router.navigate(['/resultados',this.textoBusqueda.toLowerCase()]);
    }else{
      Swal.fire('Error','Debe ingresar al menos una letra para buscar','error');
    }
  }

}
