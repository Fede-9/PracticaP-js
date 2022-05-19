// 8) Define la función vowel3(param) que reemplace todas las vocales por el número
// 3. EJ. “nube” => “n3b3”

function vowel3(cadena){
    var nuevaCadena = '';
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {
            nuevaCadena += '3';
        } else {
            nuevaCadena += cadena[i];
        }
    }
    return nuevaCadena;
}

console.log(vowel3('Federico'));
console.log(vowel3('Rata'));
console.log(vowel3('Lucas'));