// 4) ¿Que sucede si a la función del ejercicio anterior (Ej3) solo le paso un parámetro?, Mejorar la definición de la función para que se comporte como esperamos.


function pot(potencia) {
    const base = 2;
    
    return Math.pow(base, potencia);
}

console.log(pot(4));