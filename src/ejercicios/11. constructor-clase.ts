/*
    ===== Código de TypeScript =====
*/

class Clase {
    constructor(
        public alterEgo: string, // De esta forma creamos a la vez el argumento en la clase y además le asignamos el parámetro recibido
        public edad: number
    ) {
        this.edad = 69;
        console.log(this.alterEgo);
    }
}

const instancia = new Clase("Superman", 30);
