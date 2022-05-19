// -------------- Definir métodos static en ES6 ------------

// Los miembros estáticos de las clases en Programación Orientada a Objetos en general son atributos
// y métodos que dependen directamente de una clase, en vez de depender de un objeto en particular.
// Al depender de la clase no están asociados a un objeto, por lo que comparten el valor para toda la
// clase, independientemente de las instancias que se hayan creado.



// Un método estático se construye simplemente indicando la palabra "static" antes del nombre del
// método que se está creando. El resto de la definición de un método estático sería igual que la
// definición de un método convencional, con la excepción de disponer de la variable "this" como
// habitualmente en los métodos.


class Estadistica {
    static sumatoria (miarray){
    let suma=0;
    for (let valor of miarray){
    suma+=valor;
    }
    return suma;
    }
}

// El método static depende directamente de la clase, por lo que usaremos la propia clase para invocarlo.
console.log(Estadistica.sumatoria([1,2,3,4,5]));
// Los métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones para una aplicación.