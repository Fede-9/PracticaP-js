class Usuario {
    constructor(nombre,email,password){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    saludo(){
        console.log(`Hola soy ${this.nombre}`);
    }

    login(email,password) {
        return this.email === email && this.password === password
    }
}


class Alumno extends Usuario{
    constructor(nombre,email,password){
        super(nombre, email, password);
        
        this.activo = false;
        this.cursos = [];
    }

    activar(){
        this.activo = true;
    }
    
    login(email, password){
        if (this.activo) return false;
        
        return super.login(email, password);
        
    }
    
}






const pablo = new Usuario('Pablo','pablo@gmail.com','pablo123')
const jose = new Usuario('Jose','jose@gmail.com','jose123')

console.log(pablo);
console.log(jose);

// console.log(pablo instanceof Usuario);
// console.log(jose instanceof Alumno);