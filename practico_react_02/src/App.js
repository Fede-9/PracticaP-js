import './App.css';

import CalculaEdad from './componentes/edad'
import Lista from './componentes/lista'

const lista = [{
  nombre:'Federico',
  apellido:'Cometto',
  edad:23
},
{
  nombre:'Ciro',
  apellido:'Morales',
  edad:15
},
{
  nombre:'Lucas',
  apellido:'Saby',
  edad:22
}]

function App() {
  return (
    <div className="App">

      <div>
        <Lista 
        lista={lista} />
      </div>

      <div>
        <CalculaEdad
        edad={78} />
      </div>
      
    </div>
  );
}

export default App;
