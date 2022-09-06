// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.


// function contarCaracter(cadena=''){
//     if(!cadena){
//         console.log('No ingresaste ninguna cadena !!!')
//     }else{
//         console.log('Cantidad de caracteres de la cadena ingresada: ' + cadena.length)
//     }
// }


// OTRA FORMA 

const contarCaracter = (cadena='') =>(!cadena) ? console.log('no ingresaste nada') : console.log('Cantidad de caracteres: ' + cadena.length)

contarCaracter('Fede')
contarCaracter()





// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


const recortarTexto = (cadena = '', longitud = undefined) => 
     (!cadena) 
        ? console.log('no ingresaste el texto') 
        : (longitud === undefined)
        ? console.log('No ingresaste la longitud !!')
        : console.log(cadena.slice(0, longitud))





recortarTexto('Hola mundo',4)
recortarTexto()
recortarTexto('Federico')







// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].



const devuelveArray = (cadena='', separador=undefined) =>
    (!cadena)
        ? console.log('no ingresaste el string !!!')
        : (separador === undefined)
        ? console.log('No ingresaste el separador !!')
        : console.log(cadena.split(separador))

devuelveArray('Hola como andas jajaja', ' ')









// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.



const repetirTexto = (cadena='', veces=undefined) =>{
    if(!cadena) return console.log('No ingresaste la cadena ....');
    if (veces === undefined) return console.log('No ingreso el numero de veces');
    if(veces === 0 && veces < 0) return console.log('Error')

    for (let i=1; i <= veces; i++){
        console.log(cadena + ' - ' + i)
    }


}

repetirTexto('Cometto',5)