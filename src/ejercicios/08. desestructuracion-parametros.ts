/*
    ===== Código de TypeScript =====
*/

export interface Producto { // Exportamos esta interface para usarla en ejercicios posteriores
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 20
};

const tablet: Producto = {
    desc: "Apple 1",
    precio: 500
};

export const calcular = (productos: Producto[]): [number, number] => {
    let total = 0;

    productos.forEach(({ precio }) => { // Poniendo precio entre llaves desestructuramos los parámetros
        total += precio;
    });

    return [total, total * 0.15];
}

const articulos = [telefono, tablet];
const [total, totaloperacion] = calcular(articulos); // Desestructuración del array devuelto

console.log("total", total);
console.log("totaloperacion", totaloperacion);
