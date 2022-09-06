import React, {Component} from 'react';

// con clases

// class Saludar extends Component {
//     render() {
//         return (
//             <h1>Bienvenido {this.props.nombre}</h1>
//         );
//     }

// }


// con funcion
const Saludar = ({nombre}) => {


    return(
        <h1>Hola {nombre}</h1>
    )
}

export default Saludar

