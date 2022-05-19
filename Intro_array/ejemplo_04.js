// ---------------------- Método every() -----------------
// Devuelve true si todos los elementos del Array cumplen el predicado que recibe como parámetro.
let ciudades = ['laboulaye','serrano','melo','jovita','buchardo','charlone']
console.log(ciudades.every(x=>x.length>6));





//--------------------- Método fill() ---------------
// Asigna un valor estático a todos los elementos del Array entre las posiciones inicio y fin.


let prueba = []
prueba.length=100;
prueba.fill('',0,100) // rellena con cadenas vacías de la posición 0 hasta la
100
console.log(prueba)