import { Injectable } from '@angular/core';
import { ITarjeta } from '../interface/ITarjeta';

@Injectable()
export class MemoTestService {

    private primerTarjetaAComparar: ITarjeta;
    private segundaTarjetaAComparar: ITarjeta;
    private aciertos: number;

    constructor() {}

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

    mostrarTarjeta(tarjeta: ITarjeta) {
        if (tarjeta.visible) {
            return;
        }
        if (this.isEmpty(this.primerTarjetaAComparar) && this.isEmpty(this.segundaTarjetaAComparar)) {
            this.primerTarjetaAComparar = tarjeta;
            this.primerTarjetaAComparar.visible = true;
            return;
        }
        if (this.isEmpty(this.segundaTarjetaAComparar)) {
            this.segundaTarjetaAComparar = tarjeta;
            this.segundaTarjetaAComparar.visible = true;
            this.comparar(this.primerTarjetaAComparar, this.segundaTarjetaAComparar);
        }
    }

    isEmpty(obj: any) {
        return obj === null || obj === undefined;
    }

    comparar(tarjeta1, tarjeta2) {
        this.primerTarjetaAComparar = null;
        this.segundaTarjetaAComparar = null;
        if (tarjeta1.nombre === tarjeta2.nombre) {
            this.aciertos++;
        } else {
            setTimeout(function(){
                tarjeta1.visible = false;
                tarjeta2.visible = false;
            }, 1000);
        }
    }

}
