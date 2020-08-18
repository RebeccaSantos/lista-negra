import React,{useState,useRef,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';
import ListaNegraApi from '../../Services/ListaNegraApi';

const api = new ListaNegraApi();

export default function Consultar(){
    const loadingBar = useRef(null);

    const [registros, setRegistros] = useState([]);

    const consultarClick = async () => {
         try {
            loadingBar.current.continuousStart();
            const lns = await api.consultar();
            setRegistros([...lns]);
            loadingBar.current.complete();
             
         } catch (e) {
             toast.error(e.response.data.mensagem)
         }

        
    }

    const deletarClick = async (id) => {   
        try{
            const resp = await api.deletar(id);
            toast.dark('Deletado da Lista Negra!', {
            position: "bottom-right"});
            consultarClick();
        }
        catch(e){
            toast.error(e.response.data.mensagem)
        }
    }
    useEffect(() => {
        consultarClick();
    }, [])

    return(
        <div>
            <LoadingBar color='darkred' 
                        ref={loadingBar} />

            <div>

                <div>
                    <div>
                        <p>
                            Você esta na lista negra? acha que nao?<br/> click em consultar pra ter certeza rsrsrsr :
                        </p>
                    </div>
                    <div>
                        <button onClick={consultarClick}>
                            Consultar
                        </button>
                    </div>
                </div>

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Foto</th>
                                <th>Motivo</th>
                                <th>Local</th>
                                <th>Data de Inclusão</th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {registros.map(registro => 
                                <tr key={registro.id}>
                                    <th>#{registro.id}</th>
                                    <td>{registro.nome}</td>
                                    <td>
                                   <img src={api.buscarImagem(registro.foto)} alt="" height="32" />
                                    </td>
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