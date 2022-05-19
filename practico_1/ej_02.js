// Crea una funcion 'sumAll' que tome una cantidad de argumentos inderterminado y retorne la suma de todos ellos. Ej sumAll(2,3), sumAll(4,6,8,9)

function sumAll(...parametro){
    let lista = parametro; //con los tres puntos se crea una lista
    let cont = 0;
    for (let i = 0; i < lista.length; i++){
        cont += lista[i];
    }
    return cont;
}

console.log(sumAll(2,3,5,4))