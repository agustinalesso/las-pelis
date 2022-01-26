import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriePopular } from 'src/app/interfaces/seriespopulares.interface';

@Component({
  selector: 'app-tarjeta-serie',
  templateUrl: './tarjeta-serie.component.html',
  styleUrls: ['./tarjeta-serie.component.css']
})
export class TarjetaSerieComponent implements OnInit {

  @Input() serie!: SeriePopular;

  constructor(private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
  }

  verSerie(){
    this.router.navigate(['/series', this.serie.id]);
  }

}
