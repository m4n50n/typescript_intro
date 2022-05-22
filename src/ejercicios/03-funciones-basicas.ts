/*
    ===== Código de TypeScript =====
*/

const sumar = (a: number, b: number) => {
    return (a + b).toString();
}

const sumar2 = (a: number, b: number):number => {
    return a + b;
}

const multiplicar = (numero: number, otro?: number, base: number = 2):number => {
    return numero * base;
}

const resultado = sumar(10, 20); // Autómaticamente se detectará que la salida es un string puesto que en el return se hace un toString()
const resultado2 = sumar2(10, 20); // En este caso especificamos que la salida deberá ser un número
const resultado3 = multiplicar(5); // No es necesario pasar el segundo parámetro puesto que es opcional y funcionará porque el tercer parámetro tiene un valor por defecto

console.log("Resultado", resultado);
console.log("Resultado2", resultado2);
console.log("Resultado3", resultado3);
