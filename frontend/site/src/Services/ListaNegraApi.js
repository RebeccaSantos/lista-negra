import axios from 'axios';

const api=axios.create({
    baseURL:'http://localhost:5000'
})

export default class ListaNegraApi {


    async cadastrar(ln) {
        let formdata=new FormData();
        formdata.append('nome',ln.nome);
        formdata.append('motivo',ln.motivo);
        formdata.append('local',ln.local);
        formdata.append('inclusao',ln.inclusao);
        formdata.append('foto',ln.foto);

        

        const resp = await api.post('/ln',formdata,{
            headers:{'content-type': 'multipart/form-data'}
        });
        console.log(resp);
        return resp;
    }
    buscarImagem(foto) {
        const urlFoto = api.defaults.baseURL + '/listanegra/foto/' + foto;
        console.log(urlFoto);

        return urlFoto;
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