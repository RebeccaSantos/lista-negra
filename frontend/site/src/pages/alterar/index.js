import React, { useState } from 'react';

import ListaNegraForm from '../../components/ListaNegraForm'

export default function Alterar(props) {

    return(
        <div>
            <ListaNegraForm 
                titulo="Altere"
                mostrarFoto={false}
                novo={false}
                state={props.location.state}
            />
        </div>
    );
}