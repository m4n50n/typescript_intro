/*
    ===== Código de TypeScript =====
*/

class Heroe { // Las clases son código de JS y aparecerán en el inspector, pero las interfaces no; Con las clases además crearemos instancias para usar sus métodos, etc... Con las interfaces solo definimos el modelo de un objeto
    private alterEgo: string; // Será visible dentro de la clase
    public edad: number; // Visible desde fuera de la clase (visibilidad por defecto si no se especifica ninguna otra)
    static nombreReal: number; // Se podrá acceder a ella sin crear una instancia de la clase

    constructor(alterEgo: string) {
        this.edad = 69;
        this.alterEgo = alterEgo;
    }
}

const ironMan = new Heroe("Superman");
console.log(ironMan);
console.log(ironMan.edad);
