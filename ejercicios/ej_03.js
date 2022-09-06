// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.


const numeroAleatorio = () => {
    console.log(Math.round(Math.random() * 100) + 500)
}

numeroAleatorio()





// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.


const capicua = (numero=0) =>{
    if(!numero) return console.log('no ingresaste ningun numero');
    if(typeof numero !== 'number') return console.log('El valor ingresado no es un numero');

    numero = numero.toString();
    let alReves = numero.split('').reverse().join('')
    return (numero == alReves)
        ? console.log('El numero es capicúa')
        : console.log('El numero no es capicúa')

}

capicua(123)
capicua(262)





// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.




const factorial = (numero=0) =>{
    
}