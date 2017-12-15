import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  @Input()
  set cantidadFichas(cantidadFichas) {
    this._cantidadFichas = cantidadFichas;
  }
  _cantidadFichas: number;

  tarjetas = [
    {
      id: 0,
      class: 'fa-car'
    },
    {
      id: 1,
      class: 'fa-bug'
    },
    {
      id: 2,
      class: 'fa-diamond'
    },
    {
      id: 3,
      class: 'fa-heart'
    },
    {
      id: 4,
      class: 'fa-mastercard'
    },
    {
      id: 5,
      class: 'fa-apple'
    },
    {
      id: 6,
      class: 'fa-cc-visa'
    },
    {
      id: 7,
      class: 'fa-internet-explorer'
    },
    {
      id: 8,
      class: 'fa-star'
    },
    {
      id: 9,
      class: 'fa-university'
    },
    {
      id: 10,
      class: 'fa-facebook'
    },
    {
      id: 11,
      class: 'fa-instagram'
    },
    {
      id: 12,
      class: 'fa-youtube'
    },
    {
      id: 13,
      class: 'fa-angellist'
    },
    {
      id: 14,
      class: 'fa-wifi'
    },
    {
      id: 15,
      class: 'fa-tint'
    },
    {
      id: 16,
      class: 'fa-life-ring'
    },
    {
      id: 17,
      class: 'fa-suitcase'
    },
    {
      id: 18,
      class: 'fa-futbol-o'
    },
    {
      id: 19,
      class: 'fa-motorcycle'
    },
    {
      id: 20,
      class: 'fa-leaf'
    },
    {
      id: 21,
      class: 'fa-eye'
    },
    {
      id: 22,
      class: 'fa-coffee'
    },
    {
      id: 23,
      class: 'fa-bullseye'
    },
    {
      id: 24,
      class: 'fa-plane'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
