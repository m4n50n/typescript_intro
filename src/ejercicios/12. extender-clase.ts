/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {

    }
}

class Hero extends PersonaNormal {
    constructor(        
        public alterEgo: string, // De esta forma creamos a la vez el argumento en la clase y además le asignamos el parámetro recibido
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, "Calle falsa"); // Con super() inicializamos el constructor de la clase padre
        this.edad = 70;        
    }
}

const myHero = new Hero("Superman", 30, "Johny");
console.log(myHero);
