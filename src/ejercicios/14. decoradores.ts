/*
    ===== Código de TypeScript =====
*/

// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

// Los decoradores (funciones) cambian las clases en el momento de ser definidas añadiendo funcionalidades especiales

// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = "ABC123";

    imprimir() {
        console.log("Hola Mundo");
    }
}

console.log("MiSuperClase", MiSuperClase);

const miClase = new MiSuperClase();
console.log("miClase", miClase);
