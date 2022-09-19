/*
    ===== Código de TypeScript =====
*/

import { Producto, calcular } from "./08. desestructuracion-argumentos";

const carritoCompras: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 1
    },
    {
        desc: "Telefono 2",
        precio: 2
    }
];

const [total, totaloperacion] = calcular(carritoCompras);
