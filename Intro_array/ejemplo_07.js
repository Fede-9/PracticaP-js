// ----------------- Método split() (Este método pertenece a los String) ------
// El método split() devuelve el nuevo Array.

let cadenaMeses= "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
let separador=','; // la coma es el separador de los meses
cadenaMeses.split(separador); // retorna ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



// ------------------ Método reduce() ------------
// Aplica la función pasada como parámetro a un acumulador y a cada valor del
// Array, que se recorre de izquierda a derecha, para reducirlo a un único valor.
const suma = [10, 20, 30].reduce(function(a, b){return a + b}); // 60

// (a, b) son los parámetros que recibe la función, es nuestro ejemplo a = 10 y b = 20. Nuestra función retorna la suma de ambos, es decir 30. Debido a que existen más elementos en el Array, la función reduce() es invocada nuevamente, la diferencia radica en que el parámetro “a” ahora es igual a 30 (representa el monto acumulado) y “b” es el elemento restante en el Array, es decir 30. Al concretarse la operación el resultado que será mostrado en consola es ahora igual a 60.



// Otro ejemplo con Objetos
// Contar la cantidad de nombres repetidos en un aula de clase.

const nombres = [
'Juan','Manuel','Luis',
'Luis','Dario','Gisela',
'Juan','Luis'
]

const cantidadNombre = nombres.reduce((contadorNombre, nombre) =>
{
contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;

return contadorNombre;
},{});
console.log(cantidadNombre)
//{Juan: 2, Manuel: 1, Luis: 3, Dario: 1, Gisela: 1}

// A diferencia del ejemplo anterior donde retornábamos un Array, aquí el
// resultado será un objeto, por lo tanto a la función reduce, debo pasarle un
// parámetro más, que en este caso es un objeto vacío y representa el estado
// inicial de mi contador de nombres.



// Tercero Ejemplo con Pipes
// Vamos a usar lo que se conoce como las pipe functions, donde básicamente lo que se hace es llamar a una función, retornar una valor y pasarlo
// nuevamente a otra función

const suma5 = (num) => num + 5;
const doble = (num) => num *2;
const cuadrado = (num) => num * num;


// Función constructora de dos funciones encadenadas (composición)
const _pipe = (f,g) => (...args) => g(f(...args))


// Función constructora de n funciones encadenadas (composición)
const pipe = (...fns) => fns.reduce(_pipe)
// Notar que pipe retorna una función

const funcionesMixtas = pipe(suma5,cuadrado,doble)
// Ahora podemos ejecutar esta nueva función generada
funcionesMixtas(5) //200


// Primero se invoca sumar5 => 10
// Segundo se invoca cuadrado => 100
// tercero se invoca doble => 200
// Notar que con la funciones pipe podemos lograr la composición de n
// funciones en línea.