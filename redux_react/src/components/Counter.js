import React, {Component} from 'react'

// tambien lo podemos optimizar dejandolo un componente Puro
export function Counter({counter, increment, decrement}){
    return (
        <div>
        <div>
            contador: <span>{counter}</span>
        </div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

/*
export class Counter extends Component {
// A este componente lo conectamos con redux previamente, atraves de su
// componente container, por lo cual le llegan por un lado el counter
// como props que le hemos pasado en el mapStateToProps; y le llegan los
// metodos increment y decrement que le hemos pasado en el
// mapDispatchToProps.
// Por lo que ahora toda la información le llega por sus props
// Ahora podemos decir que counter, es un componente puramente
// presentacional.

render(){
return(
<div>
<div>
contador: <span>{this.props.counter}</span>
</div>
<button onClick={this.props.increment}>+</button>
<button onClick={this.props.decrement}>-</button>
</div>
)
}
}
*/