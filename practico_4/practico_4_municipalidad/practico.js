let secretarias = [];
let secGobierno = null; 
let empleados = [];


class Empleado{
    constructor(nombre,apellido,categoria,secretaria,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.categoria = categoria;
        this.secretaria = secretaria;
        this.telefono = telefono;
        
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




// ----- carga ----

let empleado1 = new Empleado('Federico','Cometto',CATEGORIA.B,null,'3385462908')
let empleado2 = new Empleado('Lucas','Saby',CATEGORIA.A,null,'3385462908')
let empleado3 = new Empleado('Guido','Chanferoni',CATEGORIA.C,null,'3385462908')
let empleado4 = new Empleado('Tomas','Lerda',CATEGORIA.B,null,'3385462908')
let empleado5 = new Empleado('Facundo','Spagnuolo',CATEGORIA.C,null,'3385462908')


let secSalud = new Secretaria('Salud','...',empleado1,25000,'2018-05-01','2022-05-30');
let secMedioAmbiente = new Secretaria('Medio Ambiente','...',empleado2,5000,'2018-05-01','2022-05-30');
let secVivienda = new Secretaria('Vivienda','...',empleado3,123456,'2018-05-01','2022-05-30');
let secIntendecia = new Secretaria('Intendecia','...',empleado4,780,'2018-05-01','2022-05-30');
let secBienestar = new Secretaria('Bienestar','...',empleado5,1000,'2018-05-01','2022-05-30');



empleados.push(empleado1,empleado2,empleado3,empleado4,empleado5);
secretarias.push(secSalud,secMedioAmbiente,secVivienda,secIntendecia,secBienestar);



empleado2.setSecretaria(secMedioAmbiente);
empleado3.setSecretaria(secVivienda);
empleado4.setSecretaria(secIntendecia);
empleado5.setSecretaria(secBienestar);





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