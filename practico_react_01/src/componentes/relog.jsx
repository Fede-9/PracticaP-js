import React, { Component } from 'react';

class Reloj extends Component{
    constructor(props){
        super(props)
        this.state = {
            hora: new Date().toLocaleTimeString()
        }

        setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000);

    }

    render(){
        return(
            <div>
                <h1>{this.state.hora}</h1>
            </div>
        )
    }

}

export default Reloj;
