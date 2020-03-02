import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function Pay(props) {
console.log(props);
const idss = props.match.params.id;
  const [valor, setValor] = useState(0);
  const [fecha, setfecha] = useState('');
  let mostrar;

  const pagar = () => {
    
    let url = `http://localhost:50663/api/values`;

    if(valor && valor > 0) {

      axios.post(url, JSON.stringify({
        idFactura: Number = idss,
        valor: Number = valor,
        fecha:Date = fecha
      }))
          .then(response => {
              console.log(response);
              Swal.fire(response.data);
          })
          .catch(error => {
              console.log(error);
      }); 

    } else{
      Swal.fire('Valor debe ser mayor a 0, vacio o negativo!')
    }


  }

  return (
      <Fragment>
          <div className="row mt-5">
              <div className="col-4">
                <input onChange={(e) => setfecha(e.target.value)} className="form-control" type="date"></input>
              </div>
              <div className="col-4">
                <input  onChange={(e) => setValor(e.target.value)} className="form-control" type="number"></input>
              </div>
              <div className="col-4">
                <button onClick={pagar} className="btn btn-primary">Pagar</button>
              </div>
          </div>
          
      </Fragment>
  );
}

export default Pay;