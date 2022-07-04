import './App.css';

// componentes
import Relog from './componentes/relog';
import Saludar from './componentes/saludar';
import Toast from './componentes/toast';
// logo
import logo from './logo.svg';

const nombre = 'Federico'


function App() {
  return (
    <div className="App">
      
      <img src={logo}  alt='logo' />
     
      
     <div>
      <Saludar
      nombre = {nombre} />
     </div>
     
     <div>
        <Toast
        nombre= {nombre} /> 
     </div>

     <div>
      <Relog />
     </div>
      

   
      

    </div>
  );
}

export default App;
