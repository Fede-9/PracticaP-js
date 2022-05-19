// 3) crea una función que calcule la potencia de un número, (base, potencia), pero que además el parámetro base este predefinido en 2 en caso que el parámetro sea undefined

function pot(base, potencia) {
    if (base === undefined) {
        base = 2;
    }
    
    return Math.pow(base, potencia);
}

console.log(pot(2, 4));