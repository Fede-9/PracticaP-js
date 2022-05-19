// --------------------   Método concat() ------------
// Este método no cambia el valor de nuestro Array (Inmutable)
// Devuelve un nuevo Array que es la concatenación de aquél sobre el que se
// invoca, seguido de otros Array(s) o valor(es).

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

// --------------- Método entries() -----------------

// Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor
// para cada índice del Array.

var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]






// -------------------------- Método indexOf() ---------------

// Este método nos da la posición o índice que ocupa en el Array un valor dado,como un texto o un número.
// Busca solo la primera coincidencia en caso de que esté repetido.
// En caso de no encontrar coincidencia retorna -1;

let nombres = ['Sonia','Graciela','Victoria','Ana','Victoria']
console.log(nombres.indexOf("Victoria")) // nos retorna el índice o ( -1) en caso de no encontrarlo

// Si deseamos buscar la segunda coincidencia, bastara con decirle a partir de qué valor (n) índice comience a buscar:
console.log(nombres.indexOf("Vitoria",n)) // nos retorna el índice o ( -1) en caso de no encontrarlo