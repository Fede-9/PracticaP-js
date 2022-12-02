import React, {useState} from 'react'
import '../CSS/Formulario.css'

const Formulario = (props) => {

    const [input, setInput] = useState('');

    const manejarCambio = (e) => {
        setInput(e.target.value)
        
        
    }

    const manejarEnvio = (e) => {
        e.preventDefault()
        const tareaNueva = {
            id: Math.floor(Math.random() * 999999),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva)
        
    }

    return (
        <form className='tarea-formulario' onSubmit={manejarEnvio}>
            <input type="text" className='tarea-input' placeholder='Ingrese tarea...' name='texto' onChange={manejarCambio} />
            <button className='tarea-boton'>Agregar</button>

        </form>
      );
}
 
export default Formulario;