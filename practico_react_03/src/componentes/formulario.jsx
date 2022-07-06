import {Component} from 'react';

class AltaUsuario extends Component {

    constructor(){
      super();
      this.refusuario=null;
      this.refclave=null;
      this.refterminos=null;
      // Recordar que this es un puntero al contexto actual (objecto)
      this.handleForm = this.handleForm.bind(this);
  
      this.state={
        usuario:'pedro',
        clave:'3',
        terminos:false
      }
  
    }
  
    reset(){
      this.setState({
        usuario:'',
        clave:'',
        terminos:false
      });
    }
  
    handleForm(event){
      event.preventDefault();
      // Primitivo, Forma 1
      //let usuario = document.getElementById('usuario');
      //let clave = document.getElementById('clave');
      //let terminos = document.getElementById('terminos');
      //console.log(usuario.value, clave.value, terminos.checked );
  
      // Con ref, Forma 2
      console.log(this.refusuario.value, this.refclave.value, this.refterminos.checked );
      this.reset();
    }
  
    handleForm2= (event)=> {
      event.preventDefault();
      const {usuario,clave,terminos} = this.state;
      // Tercera: formularios controlados
      //console.log(this.refusuario.value, this.refclave.value, this.refterminos.checked );
  
      console.log(usuario, clave, terminos );
      this.reset();
  
  
    }
  
    handleChangeUsuario = (event)=>{
      this.setState({usuario:event.target.value});
    }
  
    handleChangeClave = (event)=>{
      this.setState({clave:event.target.value});
    }
  
    handleChangeTerminos = (event)=>{
      this.setState({terminos:event.target.checked});
    }
  
  
  
    render(){
      return(
        <form onSubmit={this.handleForm2}>
  
          <label htmlFor="usuario">Nombre de Usuario:</label>
          {
            // Para ordenar Ctr + Shif + P -> Order
          }
          <input 
            id="usuario" 
            onChange={this.handleChangeUsuario}
            placeholder='Usuario'
            ref={x=>this.refusuario=x} 
            type="text" 
            value={this.state.usuario}
          />
  
          <label htmlFor="clave">Clave usuario:</label>
          <input ref={x=>this.refclave=x} value={this.state.clave} id="clave" type="password" 
          placeholder='Clave'
          onChange={this.handleChangeClave}
          />
          <div>
  
          <label htmlFor="terminos">Aceptar Terminos</label>
          <input ref={x=>this.refterminos=x}
          onChange={this.handleChangeTerminos} 
          checked={this.state.terminos} id="terminos" type="checkbox"/>
  
          </div>
  
          <input type="submit" value='Guardar' />        
        </form>
      )
    }
  }
  
  export default AltaUsuario;