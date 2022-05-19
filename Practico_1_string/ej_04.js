// 4) Define la función isRegular(param) que retorne true solo si la todos los
// caracteres están en mayúscula o todos los caracteres están en minúscula.

function isRegular(cadena){
    if(cadena == cadena.toUpperCase() || cadena == cadena.toLowerCase()){
        return true;
    }else{
        return false;
    }
}	

console.log(isRegular('Federico'));
console.log(isRegular('FEDERICO'));
console.log(isRegular('federico'));