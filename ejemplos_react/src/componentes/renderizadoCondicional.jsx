import React, {Component} from "react";

function Login(){
    return(
        <div>
            <h2>Login</h2>
        </div>
    );
}

function Loguot(){
    return(
        <div>
            <h2>Logout</h2>
        </div>

    );
}


export default class RenderizadoCondicional extends Component{
    constructor(props){
        super(props)
            this.state = {
                session: true
            }
        
    }
    render(){
        return(
            <div>
                <h2>Renderizado condicional</h2>
                <h2>{this.state.session ? <Login/> : <Loguot/> }</h2>
                
                
            </div>
        );
    }
}