import React, { Fragment } from 'react';

import {

} from "react-router-dom";

import Detalle from '../components/Detalle';

function Facturas( {detalles} ) {
   
  return (
      <Fragment>
          <table className="table">
              <thead className="thead-dark">
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>cantidad</th>
                  <th>Total</th>
              </thead>
              <tbody>
                  
                {
                    detalles.map((detalle, indice) => (
                        <Detalle key ={detalle.idDetalle} detalle={detalle}/>
                    ))
                }
             </tbody>
          </table>
      </Fragment>
  );
}

export default Facturas;