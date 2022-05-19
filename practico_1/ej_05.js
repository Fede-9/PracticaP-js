// 5) Dado una lista notas=[1,4,2,3,5] devolver otra lista pero con cada elemento multiplicado por 2, la lista resultante será [2,8,4,6,10].


//     a) Resolverlo de la forma convencional con un For


const notas = [1,4,2,3,5];


let nuevaLista = [];

for(let i = 0; i < notas.length; i++){
    notas[i] = notas[i] * 2;
    nuevaLista.push(notas[i]);
}

console.log(`Forma convencional: ${nuevaLista}`);



//  b) Resolverlo con una función de alto orden como map.


const numeros = [1,4,2,3,5];

const multiplicado = numeros.map(function(nota){
    return nota * 2;
});

console.log(`Forma map: ${multiplicado}`);	





// Otra forma map

const duplicado = numeros.map(nota => nota * 2);
console.log(`Otra forma map: ${duplicado}`);