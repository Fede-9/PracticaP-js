let ciudades = ['Cordoba', 'Laboulaye', 'Serrano']

console.log(ciudades.length)

// AGREGAR  Y ACCEDER A PROPIEDADES

ciudades.fundador = 'Juan';
console.log(ciudades)

console.log(ciudades.fundador)
console.log(ciudades['fundador'])


// Método isArray()

// Devuelve true si valor es un Array, y false en caso contrario.

Array.isArray(ciudades); // retorna true
typeof ciudades // retorna "object"
typeof (ciudades) // retorna "object"



// Métodos pop() y push()
// Estos métodos cambia el valor de nuestro Array(Mutables)

// METODO POP()

// pop: Este método elimina el último elemento del Array.
// Retorna el elemento eliminado
ciudades.pop() // eliminaría su último valor, es decir „Granada‟


// METODO PUSH

// push: Este método añadiría nuevos valores al final del Array.
// Se escribiría: nombreArray.push(valor1, valor2,...).
// Podemos añadir uno o varios valores al Array con este método.
ciudades.push("Lugo", "Castellón", "Oviedo")