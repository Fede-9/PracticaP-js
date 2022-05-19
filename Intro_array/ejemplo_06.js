// -----------------   Método forEach() -------

// Recorrer un Array
let frutas = ["Manzana", "Banana"]

frutas.forEach(function(elemento, indice, array) {
console.log(elemento, indice);
})

// Manzana 0
// Banana 1


const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"




//---------------------------  Método filter() --------------
// Devuelve un nuevo Array que contiene todos los elementos de aquél para el
// cual se llama que cumplan el predicado que se le pasa como parámetro.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



//---------------  Método find() ----------
// Devuelve el primer elemento del Array que cumpla el predicado que se pasa como parámetro, o undefined si ninguno lo cumple.

const lista = [5, 12, 8, 130, 44];

const found = lista.find(element => element > 10);

console.log(found);
// expected output: 12



// ----------- Método some() ------------
// Devuelve true si al menos un elemento del Array cumple con el predicado que se pasa como parámetro.

const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true



// -------------------- Método sort() -----------------
// Ordena los elementos de un Array, modificando éste, y devuelve el Array ordenado. También es posible pasarle una función personalizada que
// compare los elementos, el cual deberá retornar 0, 1, y -1, para que de esta forma sort los pueda ordenar.

var fruta = ['guindas', 'manzanas', 'bananas'];
fruta.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.



// ----------------- Método map() --------------
// Devuelve un nuevo Array que contiene el resultado de llamar a la función pasada como parámetro a todos los elementos del Array sobre el que se invoca.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]




//------------------- Método includes() -------------------
// Determina si el Array contiene el valorBuscado y devuelve true o false según sea el caso.

const array2 = [1, 2, 3];

console.log(array2.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


//-----------------------  Método join() -----------------
// Concatena en un String todos los elementos de un Array. Y además puede
// agregar un separador, por default es la coma („,‟) pero lo podemos cambiar.

let meses= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
meses.join(','); // 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"