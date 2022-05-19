// 3) Define la función getFirstLast(param) que dada una cadena con más de 2
// caracteres retorne el primer y último carácter. .EJ: “juan” => “jn”

function getFirstLast(cadena){
        return cadena[0] + cadena[cadena.length-1];
}

console.log((getFirstLast('Federico')));