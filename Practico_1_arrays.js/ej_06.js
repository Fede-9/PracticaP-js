// 7) Generar un Array de 50 elementos, con todos los valores en 1, excepto el
// primero y el último numero cuyo valor será 100.



let array = []
array.length = 50;
array.fill(1,1,49) // rellena con 1 desde la posición 1 hasta la 49
array[0] = 100;
array[49] = 100;

console.log(array)


