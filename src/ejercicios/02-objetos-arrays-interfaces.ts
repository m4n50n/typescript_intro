/*
    ===== Código de TypeScript =====
*/

/**
 * ARRAYS
 */
//let habilidades = []; // Array JS

let habilidades: any = [1, "string", 2]; // Se desaconseja el uso de any
let habilidades_mod = ["nombre1", "nombre2"]; // Se detectará string[]
//habilidades_mod.push(1); // Por lo que al hacer un push de un número dará error

let habilidades_mod2 = ["nombre", 1]; // Se detectará string | number[]
habilidades_mod2.push(1); // Por lo que aquí sí que funcionará

/* Forma correcta de declarar arrays */
let array: (string | number | boolean)[] = []; // De esta forma el array aceptará strings, numbers y booleanos
array.push(1); // Se admite porque el dato es aceptado
array.push(false); // Se admite porque el dato es aceptado
array.push("ok"); // Se admite porque el dato es aceptado 
//array.push({ id: "a" }); // NO se admite porque el dato NO es aceptado

/**
 * OBJETOS
 */
//let habilidades = {}; // Objeto JS

interface Personaje { // Con las interfaces definimos las propiedades de un objeto https://www.typescriptlang.org/docs/handbook/interfaces.html
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // Con ? indicamos que el parámetro es opcional
}

const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["h1", "h2"]
}

personaje.puebloNatal = "Pueblo paleta";
console.table(personaje); // Imprimir objeto en una tabla
