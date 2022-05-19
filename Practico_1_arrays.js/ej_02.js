// 3) Definir un Array con el nombre de al menos 5 de sus compañeros, luego realice
// un método que me permita borrar de la lista los elementos en la posición 1 y 2 del
// Array, y al mismo tiempo agregar un compañero en la posición 1 del Array.

let nombres = ["Juan", "Pedro", "Jorge", "Federico", "Lucas"];

nombres.splice(1, 2);
nombres.splice(1, 0, "Adrian");

console.log(nombres);
