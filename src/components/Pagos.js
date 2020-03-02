import React, { Fragment, useState } from 'react';
import Pago from './Pago';
import Alert from './Alert';

import {
    withRouter
} from "react-router-dom";


function Facturas( {pagos, history, id, totalPagar} ) {
   

   let message = `El saldo a pagar es ${totalPagar}`;

   
   const pagar = () => {
     history.push('/pay/' + id, { id: id });
   }

   //console.log(id)
   const alerta = pagos.length <= 0 ? <Alert mensaje = "NO HAY PAGOS RECIBIDOS"/>: null;
  return (
      <Fragment>
          <table className="table">
              <thead className="thead-dark">
                  <th>Fecha</th>
                  <th>Valor</th>
              </thead>
              <tbody>
                {
                    pagos.map((pago, indice) => (
                        <Pago key ={pagos.idPagos} pago={pago}/>
                    ))
                }
             </tbody>
          </table>
         <div className="row">
            
             <div className="col-6">
             {alerta}
             </div>
             <div className="col-3">
             <Alert mensaje = {message}/>
            </div>
            <div className="col-3">
             <button className="btn btn-primary" onClick={ pagar }>Pagar</button>
             </div>
         </div>
        
      </Fragment>
  );
}

export default withRouter(Facturas);