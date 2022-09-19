/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Melissa",
    hijos: ["Natalia", "Gabriel"]
}

const imprimeHijos = (pasajero: Pasajero): void => { // Con void indicamos que la función no retornará nada
    const cuantosHijos = pasajero.hijos?.length || 0; // Con ? decimos que: si los hijos tienen un valor, ejecuta la acción. Si no tienen un valor será undefined y devolverá 0 // https://stackoverflow.com/questions/40238144/safe-navigation-operator-or-and-null-property-paths
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
