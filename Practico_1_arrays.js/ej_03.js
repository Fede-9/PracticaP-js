// 4) Dado el Array del Ej. 3
// a) crear una función que me permita devolver una cadena con todos los nombres separados con un espacio y punto y coma.


let nombres = ["Juan", "Pedro", "Jorge", "Federico", "Lucas"];


// a 
function nombresArray(nombres) {
    let nombresCadena = nombres.join(" ; ");
    return nombresCadena;
}

let nombresModificado = nombresArray(nombres);
console.log(nombresModificado)

// b) Generar una función que me permita regresar de la cadena anteriormente generada al Array Original

function nombresArray2(nombres) {
    let nombresArray = nombres.split(" , ");
    return nombresArray;
}

console.log(nombresArray2(nombresModificado));