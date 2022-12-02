import {createStore} from 'redux'
const contador = document.getElementById('contador')
const incrementar = document.getElementById('incrementar')
const decrementar = document.getElementById('decrementar')

const INITIAL_STATE = {
counter:0
}

// de esta forma la primera vez que se ejecute va a tener un estado inicial
// y va a recibir un action especial ({type: "@@redux/INITa.1.6.c.q.k"})
// por eso esencial que tengamos un estado inicial

function counterApp(state = INITIAL_STATE,action){ //nuestro reducers
    console.log(state,action);

    // Observar que nunca mutamos el objeto state, solo lo estamos cosultando y atraves de el generar un objeto nuevo, esta es la base para que react funcione correctamente 

    switch(action.type){
        case 'INCREMENT':
        return {
        counter: state.counter+1
        }
        case 'DECREMENT':
        return {
        counter: state.counter-1
        }
        default: // esta condicion en necesaria, ya que siempre tenemos que retornar algo
        return state;
        }
}

    // de esta forma creamos el store, y le pasamos el reducers que se encargara de generar los nuevos
    // estados de acuerdo a la action que le pasemos.
    const store = createStore(counterApp);
    store.subscribe(()=>{ // ESTE METODO SE EJECUTA CADA VEZ QUE SE GENERE UN NUEVO STATE
    // nos suscribimos a un evento, cada vez que ocurra un cambio en el state
    const state = store.getState()
    console.log('state changed',state);
    contador.innerText = state.counter;
    })
    
    incrementar.addEventListener('click',()=>{
    store.dispatch({
    type:'INCREMENT'
    })
    })
    decrementar.addEventListener('click',()=>{
    store.dispatch({
    type:'DECREMENT'
    })
    })