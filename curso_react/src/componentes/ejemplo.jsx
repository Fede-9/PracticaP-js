import React, { Fragment } from 'react';

const JsxAccion = () => {

    // const saludo = 'Hola jsx'
    const temperatura = 21;
    return(
        <Fragment>

        <h2>Frio o calor??</h2>
        <h4> 
            { temperatura > 20 ? 'hace calorr' : 'hace frioooo'} 
        </h4>

        </Fragment>
              
    );
}

export default JsxAccion;
