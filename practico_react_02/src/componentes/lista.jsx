import React, {Component} from "react";

import { Fragment } from "react";

// class Lista extends Component{
//     render(){
        
//         const {lista} = this.props;
        
           
//         return(

//             <div>
//                 {
//                 lista.map(persona => {
//                     return <li key={lista.id}>
//                         {persona.apellido} -- {persona.nombre} -- {persona.edad >= 18 ? 'Sos mayor de edad': 'Sos menor de edad'} 
                
//                     </li>
//                     })
//                 }
//             </div>
            
//         );
//     }

// }




const Lista = ({lista}) => {

    return(
        <Fragment>
        {
            lista.map(persona =>{
                return <li key={lista.id}>
                {persona.nombre} -- {persona.apellido} -- {persona.edad >= 18 ? 'mayor de edad' : 'menor de edad'}
                </li>
            })
        }
        </Fragment>
    )
}
   
    

export default Lista;



    

        

 
           
