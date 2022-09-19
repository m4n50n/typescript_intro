/*
    ===== Código de TypeScript =====
*/

const arrayVal: string[] = ["String1", "String2", "String3"];
const arrayVal2: string[] = ["String1", "String2", "String3"];

// Desestructuración de array (se hace por posición y no por nombre como en los objetos, por lo que la primera variable corresponderá con el elemento de la primera posición)
const [ uno, dos, tres ] = arrayVal;
const [ , , _tres ] = arrayVal; // Si quisieramos tener únicamente la última variable, tendriamos que poner al menos las comas correspondientes a las posiciones y dejarlas vacias

console.log("String 1: ", uno);
console.log("String 2: ", dos);
console.log("String 3: ", tres);
console.log("String 3: ", _tres);
