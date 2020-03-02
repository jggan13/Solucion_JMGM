import React, {Fragment} from 'react';

function Alert({mensaje}){
    
    return(
        <Fragment>
            <div class="alert alert-primary" role="alert">
                {mensaje}
            </div>
        </Fragment>
    )
}

export default Alert;