import React ,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

import ListaNegraApi from '../../Services/ListaNegraApi';

const api = new ListaNegraApi();

export default function ListaNegraForm(props) {

    const [id, SetId] = useState('');
    const [nome, SetNome] = useState('');
    const [motivo, SetMotivo] = useState('');
    const [local, SetLocal] = useState('');
    const [inclusao, SetInclusao] = useState('');
    const [foto, SetFoto] = useState();
    

    const salvarClick = async () => {
        try {

            if (props.novo === true) {

                const resp = await api.cadastrar({
                            nome: nome,
                            foto:foto,
                            motivo: motivo,
                            local: local,
                            inclusao: inclusao
                });
                toast.dark('Cadastrado com sucesso!!');

                                        

            } else {
                const resp = await api.alterar(id, {
                    nome: nome,
                    motivo: motivo,
                    local: local,
                    inclusao: inclusao
               });

               toast.dark('Alterado');
            }
            
        } catch (e) {
            if(e.response.data.mensagem)
                toast.error(e.response.data.mensagem)
            else
                toast.error('ocorreu um erro,tente denovo seu panaca')
        }
    }

    return(
        <div>

            <div>
                <div>
                    <p>
                        {props.titulo} alguém na lista negra!
                    </p>
                </div>

                <div>
                    <label>Nome : </label>
                    <input type="text"
                        value={nome}
                        onChange={(e) => SetNome(e.target.value)}/>
                </div>

                <div>
                    <label>Motivo : </label>
                    <input type="text"
                        value={motivo}
                        onChange={(e) => SetMotivo(e.target.value)}/>
                </div>

                <div>
                    <label>Local : </label>
                    <input type="text"
                        value={local}
                        onChange={(e) => SetLocal(e.target.value)}/>
                </div>

                {props.mostrarFoto && 
                <div>
                    <label>Foto : </label>
                    <input type="file"
                        onChange={e => SetFoto(e.target.files[0])}/>
                        
                </div>
                }

                <div>
                    <label>Data : </label>
                    <input type="date"
                        value={inclusao}
                        onChange={(e) => SetInclusao(e.target.value)}/>
                </div>

                <div>
                    <button onClick={salvarClick}>
                        <p>{props.titulo}</p>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

