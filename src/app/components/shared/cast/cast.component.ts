import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cast } from 'src/app/interfaces/Reparto.interface';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styles: [
  ]
})
export class CastComponent implements OnInit {

  @Input('casting') cast: Cast[] = [];

  filepath:string = 'https://image.tmdb.org/t/p/original';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verPerfilActor(id:number){
    this.router.navigate(['ver-actor',id]);
  }

}
