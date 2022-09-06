// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


const invertirTexto = (cadena='') =>
    (!cadena)
        ? console.log('no ingresaste cadena')
        : console.log(cadena.split('').reverse().join(''))


invertirTexto()
invertirTexto('Federico')






// 6) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo = (palabra='') =>{
    if(!palabra) console.log('no ingresaste la palabra')

    palabra = palabra.toLowerCase()
    let alReves = palabra.split('').reverse().join('')

    return (palabra === alReves)
    ? console.log('si es palindromo ....')
    : console.log('no es palindromo ...')
}

palindromo()
palindromo('Ana')
palindromo('Federico')




