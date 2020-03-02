import React, {Fragment} from 'react';

function Pago({pago}){

    const {valor, fecha} = pago;
    console.log(pago);
    
    return(
        <Fragment>
            <tr>
                <td>{fecha}</td>
                <td>{valor}</td>
            </tr>
        </Fragment>
    )
}

export default Pago;