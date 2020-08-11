import React,{useState,useRef} from 'react';
import LoadingBar from 'react-top-loading-bar';
import ListaNegraApi from '../../Services/ListaNegraApi';

const api = new ListaNegraApi();

export default function Consultar(){
    const loadingBar = useRef(null);

    const [registros, setRegistros] = useState([])

    const consultarClick = async () => {
        loadingBar.current.continuousStart();

        const lns = await api.consultar()
        setRegistros([...lns])

        loadingBar.current.complete();
    }

    return (
        <div>
            <LoadingBar
                height={4}
                color='#f11946'
                ref={loadingBar}
                />

            <h1>Consultar na Lista Negra</h1>

            <div>
                <button onClick={consultarClick}> Consultar </button>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Motivo</th>
                            <th>Inclusão</th>
                        </tr>
                    </thead>

                    <tbody>
                        {registros.map(item => 
                            <tr key={item.id}>
                                <th>#{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.motivo}</td>
                                <td> {new Date(item.inclusao).toLocaleString() }</td>
                            </tr>    
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}