class Persona {
    constructor(nom,ape){
        this.nombre = nom;
        this.apellido = ape;
    }

    getNombre(){
        return this.nombre+' ' +this.apellido;
        }
}

let p = new Persona('juan','perez');
console.log(p.nombre);
console.log(p.getNombre())