import React from "react";

function calculaEdad({edad}){
    const mayorEdad = edad >= 18;
    
    return(
        <p>{mayorEdad ? 'Sos mayor de edad': 'Sos menor de edad'}</p>
    );
}

export default calculaEdad;