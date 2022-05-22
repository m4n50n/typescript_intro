/*
    ===== Código de TypeScript =====
*/

class Heroe { // Las clases son código de JS y aparecerán en el inspector, pero las interfaces no; Con las clases además crearemos instancias para usar sus métodos, etc... Con las interfaces solo definimos el modelo de un objeto
    private alterEgo: string; // Será visible dentro de la clase
    public edad: number; // Visible desde fuera de la clase
    static nombreReal: number; // Se podrá acceder a ella sin crear una instancia de la clase

    constructor() {
        this.edad = 69;
    }
}

const ironMan = new Heroe();
console.log(ironMan);
console.log(ironMan.edad);
