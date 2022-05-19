// 7) Define la función skip3(param) que retorne todos los caracteres que están en la
// cadena menos los primeros 3. EJ: “prueba” => “eba”

function skip3(cadena){
    return cadena.substring(3,cadena.length);
}

console.log(skip3('Federico'));