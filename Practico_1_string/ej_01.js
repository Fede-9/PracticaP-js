// 1) Define la función isString(param) que retorne true solo si la variable pasada
// como argumento es de tipo string.

function isString(cadena){
    return typeof(cadena) == 'string';
}

console.log(isString('federico'));
console.log(isString(1998));
console.log(isString(null));

