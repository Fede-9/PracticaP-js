// 6) Define la función getInternal(param) que retorne todos los caracteres que están
// en la cadena menos el primer y último carácter. EJ: “prueba” => “rueb”

function getInternal(cadena){
    return cadena.substring(1,cadena.length-1);
}

console.log(getInternal('Federico'));

