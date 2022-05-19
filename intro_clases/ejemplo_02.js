// ------- EXPRESIONES DE CLASES ES6 ----------

// Básicamente consiste en crear una variable y asignarle una expresión definida mediante class y las llaves.

var Persona = class {
    constructor(nombre) {
    this.nombre = nombre;
    }
}

let p = new Persona('juan');
console.log(p.nombre);
