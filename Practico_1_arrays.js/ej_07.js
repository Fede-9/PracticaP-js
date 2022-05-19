// 8) Crear una función AVG que dado un Array me retorne el promedio de todos los
// números, sin utilizar for, forEach


let numeros = [1,2,3,4,5,6,7,8,9,10];




function promedio(array){
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma / array.length;
}

console.log(promedio(`El promedio es: ${numeros}`));
