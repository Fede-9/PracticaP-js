// 5) Define la función isSubString(param1,param2) que retorne true solo si param2
// está contenido dentro de param1 (si es una sub cadena) EJ: “juan”, “an” => true

function isSubString(cadena1,cadena2){
    if(cadena1.indexOf(cadena2) != -1){
        return true;
    }else{
        return false;
    }
}