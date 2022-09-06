import React from "react";

// function calculaEdad({edad}){
//     const mayorEdad = edad >= 18;
    
//     return(
//         <p>{mayorEdad ? 'Sos mayor de edad': 'Sos menor de edad'}</p>


        
//     );
// }



const calculaEdad = ({edad}) => {

    return(
        <p>{edad >= 18 ? 'sos grande viejooo' : 'sos un pichonnnn'}</p>
    )
}


export default calculaEdad;