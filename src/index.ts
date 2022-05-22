/*
    ===== Código de TypeScript =====
*/

interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 20.3
};

const tablet: Producto = {
    desc: "Apple 1",
    precio: 500.6
};

function calcular(productos: Producto[]) {
    let total = 0;

    productos.forEach((producto: Producto) => {
        total += producto.precio;
    });

    return total * 0.15;
}

const articulos = [telefono, tablet];
const operacion = calcular(articulos);

console.log("Resultado", operacion);
