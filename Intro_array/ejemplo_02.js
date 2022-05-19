let ciudades = ['Cordoba','Buenos Aires','Laboulaye']


// ----------------------- Métodos shift() y unshift() ---------------

// Estos métodos cambia el valor de nuestro Array(Mutables)
// Si queremos eliminar o añadir valores al principio del Array

ciudades.shift() // elimina el primer valor del Array. "Cordoba"
ciudades.unshift("León", "Ciudad Real") // añade al principio del Array estas dos ciudades

console.log(ciudades)


// --------------------     Método splice() ----------------

// Este método cambia el valor de nuestro Array (Mutable)
// La función splice() nos permite insertar y/o eliminar elementos en cualquier parte del Array

ciudades.splice(2,3) // borraría a partir del valor ciudades[2] inclusive, los tres siguientes valores.
ciudades.splice(1,0, "Cádiz", "Vitoria", "Tarragona") // añadiría a partir de la posición 1, esas tres nuevas ciudades, desplazando las demás a la derecha.
// Al tener el 2o parámetro el valor „0‟, no borraría ninguno
// Incluso podríamos combinar para que borre y agregue al mismo tiempo.

let pueblos = ['Serrano','Melo','Jovita']

// ----------------------- Método reverse() ----------------
// Este método cambia el valor de nuestro Array (Mutables)

// Este método invierte el orden de los elementos.
console.log(pueblos.reverse())



// ------------------------ Método slice() ---------

// Este método no cambia el valor de nuestro Array (Inmutable)
// Copiar un Array
let copiaArray = pueblos.slice();
console.log(copiaArray)
// Tener en cuenta el caso donde los elementos son de tipos objetos, este método no alcanzara. Ya que estaría copiando referencia de objetos.


