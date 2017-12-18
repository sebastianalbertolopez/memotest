import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { ITarjeta } from '../interface/ITarjeta';
import { TarjetaService } from '../servicios/tarjeta.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
  animations: [
    trigger('tarjetasAnimation', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ])
    ])
  ]
})

export class TableroComponent implements OnInit {

  @Input()
  set cantidadFichas(cantidadFichas) {
    this._cantidadFichas = cantidadFichas;
    // this.tarjetasSeleccionadas = TARJETAS.slice(0, this._cantidadFichas);
    // this.tarjetasSeleccionadas = getTarjetas(this.tarjetasSeleccionadas);
    // this.tarjetasSeleccionadas = this.actions.mezclar(this.tarjetasSeleccionadas);
  }
  _cantidadFichas: number;

  tarjetasSeleccionadas: Array<ITarjeta>;


  constructor(private actions: TarjetaService) { }

  ngOnInit() {
  }

}
