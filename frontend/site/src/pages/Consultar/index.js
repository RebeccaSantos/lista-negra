import React,{useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import ListaNegraApi from '../../Services/ListaNegraApi';

const api = new ListaNegraApi();

export default function Consultar(){
    const loadingBar = useRef(null);

    const [registros, setRegistros] = useState([]);

    const consultarClick = async () => {
        loadingBar.current.continuousStart();

        const lns = await api.consultar();
        setRegistros([...lns]);
        
        loadingBar.current.complete();
    }

    const deletarClick = async (id) => {   
        const resp = await api.deletar(id);
        toast.dark('Deletado da Lista Negra!', {
            position: "bottom-right"});
        consultarClick();
    }

    return(
        <div>
            <LoadingBar color='darkred' 
                        ref={loadingBar} />

            <div>

                <div>
                    <div>
                        <p>
                            Consulte quem está na lista negra :
                        </p>
                    </div>
                    <div>
                        <button onClick={consultarClick}>
                            Consultar
                        </button>
                    </div>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Motivo</th>
                                <th>Local</th>
                                <th>Data de Inclusão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registros.map(registro => 
                                <tr key={registro.id}>
                                    <th>#{registro.id}</th>
                                    <td>{registro.nome}</td>
                                    <td>{registro.motivo}</td>
                                    <td>{registro.local}</td>
                                    <td>{new Date(`${registro.inclusao}`).toLocaleDateString()}</td>
                                    <td><button>
                                            <Link to={{
                                                pathname: `/alterar/${registro.id}`,
                                                state: {
                                                    nome: registro.nome,
                                                    motivo: registro.motivo,
                                                    local: registro.local,
                                                    inclusao: registro.inclusao
                                                }
                                            }}>Alterar</Link>
                                        </button>
                                    </td>
                                    <td><button
                                                onClick={() => deletarClick(registro.id)}>
                                                    Deletar
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}