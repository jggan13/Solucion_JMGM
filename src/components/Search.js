import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Facturas from '../components/Facturas';
import Pagos from '../components/Pagos';

import {
} from "react-router-dom";


function Search() {

    const [numerofactura, setNumerofactura ] = useState(0);
    const [detalles, setdetalles ] = useState([]);
    const [pagos, setPagos ] = useState([]);
    const [response, setResponse] = useState(0);
    const [totalPagar, settotalPagar] = useState(0);
    
    const buscarfactura = async  () => {

        let url =`http://localhost:50663/api/values/${numerofactura}`;

         await axios.get(url)
            .then(response => {
                setdetalles(response.data.Detalles)
                setResponse(1)
                setPagos(response.data.Pagos)
                settotalPagar(response.data.totalPagar);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
        }); 
    }


    const mostrar = response === 0 ? null :  <Facturas detalles={detalles}/> ;
    const mostrarPagos = response === 0 ? null :  <Pagos id={numerofactura} totalPagar={totalPagar} pagos={pagos}/> ;
    
    //setResponse(0);

  return (
      <Fragment>
          <h1 className="mt-5">Buscar Factura</h1>
          <div className="row mt-5">
              <div className="col-4">
                  <label>Numero Factura</label>
                  <input className="form-control" onChange={ (e) => setNumerofactura(e.target.value)} type="text" name="numerofactura"/>
                  <br></br>
                  <button onClick={ buscarfactura } className="form-control btn btn-primary">Buscar</button>
              </div>
              <div className="col-8">
                  
                  {mostrar}

              </div>
          </div>

          <div className="row mt-5">
              <div className="col-12">
                  { mostrarPagos}
              </div>
          </div>
          
          
          
      </Fragment>
  );
}

export default Search;