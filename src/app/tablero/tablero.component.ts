import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {trigger, state, transition, style, animate, query, stagger} from '@angular/animations';

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
    this.tarjetasSeleccionadas = this.tarjetasTotales.slice(0, this._cantidadFichas);
    this.tarjetasDuplicadas = Array.from(this.tarjetasSeleccionadas);
    this.tarjetasSeleccionadas.push.apply(this.tarjetasSeleccionadas,this.tarjetasDuplicadas);
    console.log(this.tarjetasSeleccionadas.sort());
  }
  _cantidadFichas: number;

  tarjetasTotales = [
    {
      id: 0,
      class: 'fa-car',
      visible: false
    },
    {
      id: 1,
      class: 'fa-bug',
      visible: false
    },
    {
      id: 2,
      class: 'fa-diamond',
      visible: false
    },
    {
      id: 3,
      class: 'fa-heart',
      visible: false
    },
    {
      id: 4,
      class: 'fa-binoculars',
      visible: false
    },
    {
      id: 5,
      class: 'fa-apple',
      visible: false
    },
    {
      id: 6,
      class: 'fa-cc-visa',
      visible: false
    },
    {
      id: 7,
      class: 'fa-internet-explorer',
      visible: false
    },
    {
      id: 8,
      class: 'fa-star',
      visible: false
    },
    {
      id: 9,
      class: 'fa-university',
      visible: false
    },
    {
      id: 10,
      class: 'fa-facebook',
      visible: false
    },
    {
      id: 11,
      class: 'fa-instagram',
      visible: false
    },
    {
      id: 12,
      class: 'fa-youtube',
      visible: false
    },
    {
      id: 13,
      class: 'fa-angellist',
      visible: false
    },
    {
      id: 14,
      class: 'fa-wifi',
      visible: false
    },
    {
      id: 15,
      class: 'fa-tint',
      visible: false
    },
    {
      id: 16,
      class: 'fa-life-ring',
      visible: false
    },
    {
      id: 17,
      class: 'fa-suitcase',
      visible: false
    },
    {
      id: 18,
      class: 'fa-futbol-o',
      visible: false
    },
    {
      id: 19,
      class: 'fa-motorcycle',
      visible: false
    },
    {
      id: 20,
      class: 'fa-leaf',
      visible: false
    },
    {
      id: 21,
      class: 'fa-eye',
      visible: false
    },
    {
      id: 22,
      class: 'fa-coffee',
      visible: false
    },
    {
      id: 23,
      class: 'fa-bullseye',
      visible: false
    },
    {
      id: 24,
      class: 'fa-plane',
      visible: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
