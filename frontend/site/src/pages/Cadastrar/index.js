import React ,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ListaNegraForm from "../../components/ListaNegraForm";

export default function Cadastrar() {
    

    return(
        <div>
            <ListaNegraForm 
                titulo="Cadastre"
                mostrarFoto={true} 
                novo={true} />
        </div>
    );
}

