import { Component, Input, OnInit } from '@angular/core';
import { ICredits, Cast } from 'src/app/interfaces/Reparto.interface';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styles: [
  ]
})
export class CastComponent implements OnInit {

  @Input('casting') cast: Cast[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
