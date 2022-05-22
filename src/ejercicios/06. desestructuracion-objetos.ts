/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 2,
    segundo: 3,
    cancion: "Titulo",
    detalles: {
        autor: "Nombre",
        anio: 1999
    }
}

// Desestructuración de objeto
const { volumen: vol, segundo, cancion, detalles } = reproductor; // Con volumen: vol lo que hacemos es decir que la variable volumen se llamará vol una vez se declare (pero tiene que ser volumen puesto que es como se llama dentro del objeto reproductor)
const { autor } = detalles;

console.log("El volumen actual es " + vol);
console.log("El segundo actual es " + segundo);
console.log("La cancion actual es " + cancion);
console.log("El autor actual es " + autor);
