const NAME_DATA_KEY = 'dblocal'

const saveTolocal = (entrada) =>{
    let dato = JSON.stringify(entrada)
    localStorage.setItem(NAME_DATA_KEY,dato)

}

const getLocal = () => {
    let data = localStorage.getItem(NAME_DATA_KEY)
    if (!data) return []
    return JSON.parse(data)
}

console.log(localStorage.name)

class ServicioUsuario{
    constructor(){
        this.listaUsuarios = getLocal()
    }
    
    async getAll(){
        return this.listaUsuarios
    }

    add(usuario){
        return new Promise((response, reject)=>{
            this.listaUsuarios.push(usuario)
            saveTolocal(this.listaUsuarios)
            response(usuario)
        })
    }
        
}

let servicioUsuario = new ServicioUsuario();
// servicioUsuario.add({name:'Juan'});

const mostrarLista = async () =>{
    try{
        await servicioUsuario.add({name:'Federico'})
        let dato = await servicioUsuario.getAll();
        console.log(dato)
        return dato;
    }catch(e){
        return new Error('error interno')
    }

}

mostrarLista();
console.log('fin del programa...')