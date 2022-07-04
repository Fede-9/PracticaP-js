import React, {Component} from "react";

class Toast extends Component {
    constructor(props){
        super(props);
        this.state = {
            mensaje: `Esto es un Toast ${this.props.nombre}`
        };

        setTimeout(()=>{
            this.setState({
                mensaje: null
            })
        },5000);
    }

    render(){
        return(
            <div>
                <h1>{this.state.mensaje}</h1>
            </div>
        )
    }
}

export default Toast;