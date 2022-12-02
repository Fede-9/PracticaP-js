import { Fragment, useState } from 'react';

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')

    const handleNombre = (e) =>{
        const valor = e.target.value
        // console.log(valor)
        setNombre(valor)
    }

    const handleEmail = (e) =>{
        const valor = e.target.value
        setEmail(valor)
        
    }

    const handleTelefono = (e) =>{
        const valor = e.target.value
        setTelefono(valor)
        
    }
      

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log({nombre:nombre, email:email, telefono:telefono})
     
    }


    return (
        <>
        <div className='container p-4'>
            <div className='container w-50'>
                <div>
                    <form className='form-group' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre" className='p-2'>Nombre</label>
                            <input 
                            type="text" 
                            id='nombre' 
                            className='form-control'
                            // name='nombre' 
                            // value={nombre}
                            onChange={handleNombre}
                             />
                        </div>
                        <div>

                            <label htmlFor="email" className='p-2'>Email</label>
                            <input 
                            type="text" 
                            id='email' 
                            // name='email'  
                            // value={email}
                            onChange={handleEmail}
                            className='form-control'/>
                        </div>
                        <div>

                            <label htmlFor="telefono" className='p-2'>Telefono</label>
                            <input 
                            type="text" 
                            id='telefono' 
                            // name='telefono'  
                            // value={telefono}
                            onChange={handleTelefono}
                            className='form-control'/>
                        </div>
                        <div>

                            <label htmlFor="check" className='p-2'>Terminos y condiciones.</label>
                            <input type="checkbox" id='check'/>
                        </div>
                        <div>

                            <button type="submit" className='btn btn-success '>Enviar</button>
                        </div>
                    </form>
                   
                    
                </div>
            </div>
        </div>
        </>
      );
}
 
export default Formulario;