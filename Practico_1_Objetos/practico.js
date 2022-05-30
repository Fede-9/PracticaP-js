let secretarias = [];
let secGobierno = null; 
let empleados = [];


class Empleado{
    constructor(nombre,apellido,categoria,secretaria,telefonoFijo,esFijo,telefono2){
        this.nombre = nombre;
        this.apellido = apellido;
        this.categoria = categoria;
        this.secretaria = secretaria;
        this.telefonoFijo = telefonoFijo;
        this.esFijo = esFijo; //True si el numero telefono2 es fijo
        this.telefono2 = telefono2;
    }

    setSecretaria(secretaria){
        this.secretaria = secretaria;
    }

    show(){
        return `Nombre: ${this.nombre} '\n'Apellido: ${this.apellido}`
    }

    getNombre(){
        return `Nombre: ${this.nombre}`;
    }


}



const CATEGORIA = new (function FactoryCategoria(){
    this.A = 1;
    this.B = 2;
    this.C = 3;
})()


class Secretaria{

    constructor(nombre,direccion,secretario,fechaEntrada,fechaSalida,presupuesto){
        this.nombre = nombre;
        this.direccion = direccion;
        this.secretario = secretario;//tipo empleado
        this.fechaEntrada = fechaEntrada; //Date
        this.fechaSalida = fechaSalida; //Date
        this.presupuesto = presupuesto;
    }

    show(){
        return `Nombre: ${this.nombre}`+'\n'
        `Presupuesto: ${this.presupuesto}`
    }
    

}



class SecGobierno extends Secretaria{
    constructor(nombre,direccion,secretario,presupuesto,intendente){
        super(nombre,direccion,secretario,presupuesto)
        this.intendente = intendente; //empleado
    }

    getIntendente(){
        return this.intendente
    }

    getInfoIntendente(){
        return 'Intendente: '+ this.intendente.getName();
    }
}




// carga

let empleado1 = new Empleado('Federico','Cometto',CATEGORIA.B,null,)

let secSalud = new Secretaria('Salud','...',empleado1,25000,'2018-05-01','2022-05-30');

empleados.push(empleado1);
secretarias.push(secSalud);

empleado1.setSecretaria(secSalud);



showInfo();{
    let infoFull = '';
    secretarias.forEach(s=>{
        infoFull += s.info();

        empleados.filter(e=>
            e.secretaria == s
            ).forEach(e=>{
                infoFull += 'Empleados que trabajan aqui: '+'\n'
                infoFull += '     '+e.show();

            })
    })
}

console.log(empleado1)