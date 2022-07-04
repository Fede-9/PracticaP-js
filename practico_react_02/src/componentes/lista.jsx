import React, {Component} from "react";

class Lista extends Component{
    render(){
        
        const {lista} = this.props;
        
           
        return(

            <div>
                {
                lista.map(persona => {
                    return <li key={lista.id}>
                        {persona.apellido} -- {persona.nombre} -- {persona.edad >= 18 ? 'Sos mayor de edad': 'Sos menor de edad'} 
                
                    </li>
                    })
                }
            </div>
            
        );
    }

}
   
    

export default Lista;



    

        

 
           
