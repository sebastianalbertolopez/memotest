import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { FormsModule } from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component';

import { TarjetaService } from './servicios/tarjeta.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TableroService } from './servicios/tablero.service';


@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    TableroComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TarjetaService,
    TableroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
