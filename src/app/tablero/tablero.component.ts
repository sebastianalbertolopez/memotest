import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgRedux } from '@angular-redux/store';

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

  tarjetasSeleccionadas = new Array();
  tarjetasDuplicadas = new Array();

  @Input()
  set cantidadFichas(cantidadFichas) {
    this._cantidadFichas = cantidadFichas;
    this.tarjetasSeleccionadas = this.tarjetasTotales.slice(0, this._cantidadFichas).map(t => ({
      nombre: t,
      visible: false,
    }));
    this.tarjetasDuplicadas = this.getTarjetas().sort();
    this.tarjetasDuplicadas = this.mezclar(this.tarjetasDuplicadas);
  }
  _cantidadFichas: number;

  mezclar(arr: any[]) {
    const newArr = arr.slice();
    for (let i = newArr.length; i; i -= 1) {
        const j = Math.floor(Math.random() * i);
        const x = newArr[i - 1];
        newArr[i - 1] = newArr[j];
        newArr[j] = x;
    }
    return newArr;
  }

  getTarjetas() {
    return this.tarjetasSeleccionadas.concat(this.tarjetasSeleccionadas).map((c, i) => ({
        _id: i,
        nombre: c.nombre,
        visible: c.visible,
    }));
  }

  tarjetasTotales = ['fa-car', 'fa-bug', 'fa-diamond', 'fa-heart', 'fa-binoculars', 'fa-apple', 'fa-cc-visa', 
    'fa-internet-explorer', 'fa-star', 'fa-university', 'fa-facebook', 'fa-instagram', 'fa-youtube', 'fa-angellist',
    'fa-wifi', 'fa-tint', 'fa-life-ring', 'fa-suitcase', 'fa-futbol-o', 'fa-motorcycle', 'fa-leaf', 'fa-eye',
    'fa-coffee', 'fa-bullseye', 'fa-plane'
  ];

  descubrir(tarjeta) {
    if (tarjeta.visible) {
        return;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
