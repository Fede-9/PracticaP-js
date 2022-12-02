import React, { Component } from "react";

class FormControlado extends Component {

    constructor() {
        super();
        this.refnombre = null;
        this.refemail = null;
        this.reftelefono = null;
        this.refterminos = null;
        //Recordar que this es un puntero al contexto actual (objecto)
        // this.handleForm = this.handleForm.bind(this);

        this.state = {
            nombre: 'Ciro',
            email: 'ciro@gmail.com',
            telefono:'123456',
            terminos: false
        }
    }

    reset() {
        this.setState({
            nombre: '',
            email: '',
            telefono:'',
            terminos: false
        });
    }

    handleForm(event) {
        event.preventDefault();
        // Primitivo, Forma 1
        //let usuario = document.getElementById('usuario');
        //let clave = document.getElementById('clave');
        //let terminos = document.getElementById('terminos');
        //console.log(usuario.value, clave.value, terminos.checked );

        // Con ref, Forma 2
        //   console.log(this.refusuario.value, this.refclave.value, this.refterminos.checked );
        //   this.reset();
    }

    handleForm2 = (event) => {
        event.preventDefault();
        const { nombre, email, telefono, terminos } = this.state;
        // Tercera: formularios controlados
        //console.log(this.refusuario.value, this.refclave.value, this.refterminos.checked );

        console.log({nombre, email, telefono, terminos});
        this.reset();
    }

    handleChangeNombre = (event) => {
        this.setState({ nombre: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangeTelefono = (event) => {
        this.setState({ telefono: event.target.value });
    }

    handleChangeTerminos = (event) => {
        this.setState({ terminos: event.target.checked });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleForm2}>

                    <label htmlFor="nombre">Nombre:</label>
                    {
                        // Para ordenar Ctr + Shif + P -> Order
                    }
                    <input
                        id="nombre"
                        onChange={this.handleChangeNombre}
                        placeholder='Nombre'
                        ref={x => this.refnombre = x}
                        type="text"
                        value={this.state.nombre}
                    />

                    <label htmlFor="email">Email:</label>
                    <input ref={x => this.refeamil = x}
                        value={this.state.email}
                        id="email"
                        type="text"
                        placeholder='Email'
                        onChange={this.handleChangeEmail}
                    />

                    <label htmlFor="telefono">Telefono:</label>
                    <input ref={x => this.reftelefono = x}
                        value={this.state.telefono}
                        id="telefono"
                        type="text"
                        placeholder='Telefono'
                        onChange={this.handleChangeTelefono}
                    />

                    <div>
                        <label htmlFor="terminos">Aceptar Terminos</label>
                        <input ref={x => this.refterminos = x}
                            onChange={this.handleChangeTerminos}
                            checked={this.state.terminos} id="terminos" type="checkbox"/>
                    </div>

                    <input type="submit" value='Guardar' />
                </form>

            </div>
        )
    }
}

export default FormControlado;