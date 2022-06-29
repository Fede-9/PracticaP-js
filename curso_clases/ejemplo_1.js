class Curso {
    constructor(titulo, dificultad) {
        this.titulo = titulo;
        this.dificultad = dificultad;

        this.lecciones = [];
    }


    agregarLeccion(leccion){
        this.lecciones.push(leccion)
    }
    
    eliminarUltimaLeccion(){
        this.lecciones.pop()
    }

}


const cursojs = new Curso('Javascript','dificil');
const cursopy = new Curso('Python','facil');

cursojs.agregarLeccion('Intro a JS');
cursojs.agregarLeccion('Variables a JS');
cursojs.agregarLeccion('Funciones a JS');

console.log(cursojs);