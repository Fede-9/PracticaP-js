import React, {Component} from 'react';


class Saludar extends Component {
    render() {
        return (
            <h1>Bienvenido {this.props.nombre}</h1>
        );
    }

}

export default Saludar

