import { ITarjeta } from '../interface/ITarjeta';

    const NOMBRE_TARJETAS = ['fa-car', 'fa-bug', 'fa-diamond', 'fa-heart', 'fa-binoculars', 'fa-apple',
        'fa-cc-visa', 'fa-internet-explorer', 'fa-star', 'fa-university', 'fa-facebook', 'fa-instagram',
        'fa-youtube', 'fa-angellist', 'fa-wifi', 'fa-tint', 'fa-life-ring', 'fa-suitcase', 'fa-futbol-o',
        'fa-motorcycle', 'fa-leaf', 'fa-eye', 'fa-coffee', 'fa-bullseye', 'fa-plane' ];

    export const TARJETAS: Array<ITarjeta> = NOMBRE_TARJETAS.map(t => ({
        nombre: t,
        visible: false
    }));

    export function getTarjetas(tarjetas) {
        return tarjetas.concat(tarjetas).map((t, i) => ({
            _id: i,
            nombre: t.nombre,
            visible: t.visible,
        }));
    }
