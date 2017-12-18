import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { FormsModule } from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component';

import { MemoTestService } from './servicios/memotest.service';


@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [MemoTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
