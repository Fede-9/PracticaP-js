// -------------------- ATRIBUTOS ESTATICOS -----------------

class Estadistica {
    static sumatoria (miarray){
    let suma=0;
    for (let valor of miarray){
    suma+=valor;
    }
    return suma;
    }

    static get pi() {
        return 3.1416
        }
}

// Podremos acceder a “pi” como si se tratara de una propiedad de la clase

console.log(Estadistica.pi);

// Si lo que queremos es una variable estática, que sea global para toda la clase, con un valor que no
// depende de las instancias y que puede variar a lo largo del tiempo, podríamos hacer algo como esto:

Estadistica.variableStatic = 'algun valor ';

