// 2) Define la función isEvenLength(param) que retorne true solo si la longitud
// (tamaño de la cadena) es par.

function isEvenLength(cadena){
    if(cadena.length % 2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEvenLength('fede'))
console.log(isEvenLength('lucas'))