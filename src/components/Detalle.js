import React from 'react';

function Detalle({detalle}){

    const {producto, cantidad, precioUnitario, total} = detalle;
    
    return(
            <tr>
                <td>{producto}</td>
                <td>{precioUnitario}</td>
                <td>{cantidad}</td>
                <td>{total}</td>
            </tr>
    )
}

export default Detalle;