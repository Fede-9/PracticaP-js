const NAME_DATA_KEY = 'dblocal'

const saveTolocal = (entrada) =>{
    let dato = JSON.stringify(entrada)
    localStorage.setItem(NAME_DATA_KEY)

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
    

    getAll(){
        return new Promise((resolve, reject)=>{
            resolve(this.listaUsuarios)
        })
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
servicioUsuario.add({name:'Juan'});

const algo = servicioUsuario.getAll().then(dato => console.log(dato)).catch(e => console.log('No pudimos recuperar'))
console.log('fin del programa...')