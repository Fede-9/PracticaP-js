// 2) Define un Array con 3 elementos numéricos, luego cambie el tamaño del arreglo
// a 20 y finalmente recorra todo el Array y muéstrelo por consola.

let numeros = [1, 2, 3];
numeros.length = 20;
numeros.fill([],20)
console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

numeros.forEach(element => console.log(element));
