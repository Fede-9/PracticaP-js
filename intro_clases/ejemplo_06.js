// Como Javascript es tan permisivo, podemos asociar una propiedad a la clase simplemente asignando
// cualquier valor. La definición de la propiedad estática estaría fuera del código de la propia clase y
// por tanto en una lectura a ese código podríamos no darnos cuenta que más adelante se crea esa
// variable estática.


// En el ejemplo típico de crear una variable estática que lleva la cuenta de las instancias creadas a
// partir de una clase, podríamos optar por algo como esto:

class Habitante {
    constructor(nombre) {
    this.nombre = nombre;
    if(Habitante.contador) {
    Habitante.contador++;
    } else {
    Habitante.contador = 1;
    }
    }
}

// El problema aquí es que únicamente existirá esa propiedad estática a partir de la primera
// instanciación de un objeto.
// Podríamos agregar una nueva línea al final fuera de la clase:

Habitante.contador=0;

// y de esta forma dejarla definida.