// ----------- AMPLIAR UNA CLASE -----------

// Una característica ventajosa de las funciones y clases constructoras es que pueden ampliarse a
// nuevos esquemas de objeto basados en el elemento principal. Esto impide la repetición de código
// para objetos similares, pero necesitan características adicionales o más específicas.



class Alumno extends Persona {
    constructor(nom, ape, curso){
    super(nom,ape)
    this.curso = curso;
    }
    
    getCurso(){
    return this.curso;
    }
}

let e = new Alumno('juan','perez','tercero');

