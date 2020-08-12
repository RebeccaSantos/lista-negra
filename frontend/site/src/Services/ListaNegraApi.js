import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:5000'
})

export default class ListaNegraApi {


    async cadastrar(ln) {
        const resp = await api.post('/ln', ln);
        console.log(resp);
        return resp;
    }

    async consultar() {
        const resp = await api.get('/ln');
        console.log(resp.data)
        return resp.data;
    }
    async alterar(id, ln) {
        const resp = await api.put(`/ln/${id}`, ln);
        return resp;
    }

    async deletar(id) {
        const resp = await api.delete(`/ln/${id}`);
        return resp;
    }
}