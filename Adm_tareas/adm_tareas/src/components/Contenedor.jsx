import React, {useState} from 'react'
import Formulario from './Formulario';
import '../CSS/Contenedor.css'
import Tarea from './Tarea'

const Contenedor = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizadas = [tarea, ...tareas];
            setTareas(tareaActualizadas);
        }
        
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada
            }

                return tarea
            });
            setTareas(tareasActualizadas)
    }

    return ( 
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tareas-contenedor'>
                
                {
                    tareas.map((tarea) =>(
                        <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto} completada={tarea.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>
                    ))
                }

            </div>
        </>
     );
}
 
export default Contenedor;