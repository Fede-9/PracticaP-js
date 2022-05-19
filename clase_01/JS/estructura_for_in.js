/* Si se quieren recorrer todos los elementos que forman un array, la estructura for...in es la
forma más eficiente de hacerlo, como se muestra en el siguiente ejemplo: */

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(i in dias) {
    console.log(dias[i]);
}
/* 
La variable que se indica como índice es la que se puede utilizar dentro del bucle for...in para
acceder a los elementos del array. De esta forma, en la primera repetición del bucle la
variable i vale 0 y en la última vale 6.

Esta estructura de control es la más adecuada para recorrer arrays (y objetos) */