import React ,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ListaNegraApi from '../../Services/ListaNegraApi';

const api = new ListaNegraApi();

export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [motivo, setMotivo] = useState('');
    const [local, setLocal] = useState('');
    const [inclusao, setInclusao] = useState('');
    const [foto, setFoto] = useState('');

    const salvarClick = async () => {
        const resp = await api.cadastrar({
                                nome: nome,
                                foto:foto,
                                motivo: motivo,
                                local: local,
                                inclusao: inclusao
                                
                           });

        toast.dark('Cadastrado com sucesso!!');
    }

    return(
        <div>

            <div>
                <div>
                    <p>
                        Cadastre alguém na lista negra!
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
                    <label>Foto : </label>
                    <input type="file"
                        value={foto}
                        onChange={(e) => setFoto(e.target.files[0])}/>
                </div>
                <div>
                    <label>Data : </label>
                    <input type="date"
                        value={inclusao}
                        onChange={(e) => setInclusao(e.target.value)}/>
                </div>

                <div>
                    <button onClick={salvarClick}>
                        <p>Cadastrar</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

