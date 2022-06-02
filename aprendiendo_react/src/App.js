import './App.css';

import React, {Component} from 'react';

import logo from './logo.svg';

// El nombre de la función es el nombre del componente
// function Hello (props){
//   return <h2>{props.title}</h2>
//   }
  


class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      funcion,
      objetoInfo
      } = this.props
      const mappedNumbers = arrayOfNumbers.map(funcion);
      return( 
      <div>
        <p> Funcion: {mappedNumbers.join(', ')}</p>
        <p>{objetoInfo.name +' '+objetoInfo.apellido}</p>
        <p>title</p>
      </div>
    )
  
  }
}


class Hello extends Component {
  render() {
  return <h2> {this.props.title} </h2>
  }
}

class Contador extends Component {
  constructor(){
  super();
  this.state = {contador:0}
  setInterval(()=>this.setState({contador:this.state.contador+1}),1000)
  }
  render(){
  return <ContadorNumero numero={this.state.contador} />
  }
  }
  
  class ContadorNumero extends Component {
  render(){
  return <b>{this.props.numero}</b>;
  }
  }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text
          arrayOfNumbers = {[2,4,6,8]}
          objetoInfo = {{name:'Juan',apellido:'Perez'}}
          funcion = {p => p*p}
          text='Aprenderemos mucho mas de React 2'/>

        <Hello
        title = 'Bienvenidos a React'
        />

        <Contador/>
          
      </header>
    </div>
  );
}

export default App;
