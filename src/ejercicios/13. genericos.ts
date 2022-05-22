/*
    ===== Código de TypeScript =====
*/

// Podemos pasar el tipo de dato que queramos a la función para que este sea dinámico en la función según nuestras necesidades
const queTipoSoy = <T>(argumento: T) => { // Con funciones normales se escribiría: function queTipoSoy<T>(argumento: T) {}
    return argumento;
}

let soyString = queTipoSoy("Hola"); // Declarando la función con <T>, soyString será de tipo string puesto que le pasamos un string
let soyNumero = queTipoSoy(100); // Y soyNumero será de tipo number puesto que le pasamos un número
let soyArray = queTipoSoy([1,2,3,4,5,6]); // soyArray será un array de números (number[])

let soyExplicito = queTipoSoy<number>(100); // De esta manera podemos especificar también el tipo de datos que será soyExplicito
