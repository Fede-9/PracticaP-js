import './App.css';


import Componente from './componentes/componente'
import Estado from './componentes/estado'
import Propiedades from './componentes/propiedades'
import RenderizadoCondicional from './componentes/renderizadoCondicional'
import RenderizadoElemento from './componentes/renderizadoElemento'


function App() {
  return (
    <div className="App">
 
      <Componente 
      mensaje='aguante boca' />
      
     <hr></hr>
     
     <Propiedades 
      candena="Esto es una cadena de texto"
      numero={34}
      booleano={true} 
      arreglo={[1,2,3]}
      objeto={{nombre:'Fede', apellido:'Cometto'}}
      funcion={num => num * num}
      elementoReact={<i>Esto es un elemento React</i>}
      componenteReact={<Componente mensaje='Soy un componenete pasado como props'/>} />
      
      <hr></hr>

      <Estado />

      <hr></hr>

      <RenderizadoCondicional />

      <hr></hr> 
  

      
      
     
    </div>
  );
}

export default App;
