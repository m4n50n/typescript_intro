/*
    ===== Código de TypeScript =====
*/

interface Personaje2 {
    nombre: string;
    pv: number;
    mostrarHP: () => void; // Void se usa cuando la función no retorna nada
}

const curar = (personaje: Personaje2, curar: number): void => {
    personaje.pv += curar;
}

const nuevoPersonaje: Personaje2 = {
    nombre: "Frodo",
    pv: 666,
    mostrarHP() {
        console.log("Puntos de vida:", this.pv)
    }
}

curar(nuevoPersonaje, 1);
console.log(nuevoPersonaje);

nuevoPersonaje.mostrarHP(); // En este caso se ve que la interface actua como una clase también
