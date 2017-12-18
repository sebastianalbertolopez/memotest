import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MemoTest slopez';
  juegoIniciado: boolean;
  mostrarAlerta = false;
  niveles = [
    {
      id: 0,
      nombre: 'Facil',
      tiempoMinutos: 2,
      cantidadFichas: 10
    },
    {
      id: 1,
      nombre: 'Medio',
      tiempoMinutos: 3,
      cantidadFichas: 15
    },
    {
      id: 2,
      nombre: 'Difícil',
      tiempoMinutos: 4,
      cantidadFichas: 20
    },
    {
      id: 3,
      nombre: 'Extremo',
      tiempoMinutos: 5,
      cantidadFichas: 25
    }
  ];
  nombre: string = null;
  nivelSeleccionado: any = null;

  ngOnInit() {
    this.juegoIniciado = false;
  }

  iniciar() {
    this.juegoIniciado = true;
    this.mostrarAlerta = true;
    setTimeout(function() {
      this.mostrarAlerta = false;
    }.bind(this), 2000);
  }

  detener() {
    this.juegoIniciado = false;
    this.nombre = null;
    this.nivelSeleccionado = null;
  }
}
