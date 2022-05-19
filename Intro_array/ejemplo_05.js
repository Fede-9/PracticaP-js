// --------------- Creación de un Array a partir de una expresión regular -------

// Buscar una d seguida de una o más b y, al final, de otra d
// Recordar las b y la d final
// No distinguir mayúsculas y minúsculas

const miRe = /d(b+)(d)/i
const miArray = miRe.exec('cdbBdbsbz')
// resultado: ['dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined]



// ------------------- Constructor Array() --------------
// Crea un nuevo objeto Array.
let paises = Array(10); // crear un Array con 10 elementos (por lo general con el valor undefined)
let pueblos = new Array(10); // También lo podemos hacer de esta forma, aunque es lo mismo para JS

console.log(paises)
console.log(pueblos)