import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ListaNegraApi from '../../Services/ListaNegraApi';
import { useParams } from 'react-router-dom';

const api = new ListaNegraApi();


export default function Alterar(props) {

    const lnId = useParams().id; 
    const ln = props.location.state;
    const [nome, setNome] = useState(ln.nome);
    const n = ln.nome;
    const [motivo, setMotivo] = useState(ln.motivo);
    const [local, setLocal] = useState(ln.local);
    const [inclusao, setInclusao] = useState(ln.inclusao);

    const alterarClick = async (id) => {
        try {
            console.log(id);
            const resp = await api.alterar(id, {
                                    nome: nome,
                                    motivo: motivo,
                                    local: local,
                                    inclusao: inclusao
                               });
    
            toast.dark('Alterado');
        } catch (e) {
            toast.error(e.response.data.mensagem)
        }
    }

    return(
        <div>
            <div>
                <div>
                    <p>
                        Alterando "{n}" para
                    </p>
                </div>

                <div>
                    <label>Nome : </label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}/>
                </div>

                <div>
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        onChange={(e) => setMotivo(e.target.value)}/>
                </div>

                <div>
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}/>
                </div>

                <div>
                    <label>Data : </label>
                    <input type="date"
                        value={inclusao}
                        onChange={(e) => setInclusao(e.target.value)}/>
                </div>

                <div>
                    <button onClick={() => alterarClick(lnId)}>
                        <p>Alterar</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}