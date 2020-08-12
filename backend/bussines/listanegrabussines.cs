using System;
using System.Collections.Generic;
namespace backend.bussines
{
    public class listanegrabussines
    {
        database.listanegradatabase db=new database.listanegradatabase();
        public List<Models.TbListaNegra> Listar()
        {
             List<Models.TbListaNegra> resp=  db.Listar();

             return resp;
            
        }
        public Models.TbListaNegra Inserir(Models.TbListaNegra tabela){

            if(tabela.NmPessoa==string.Empty)
               throw new ArgumentException("Nome é obrigatorio");
            if(tabela.DsMotivo==string.Empty)
               throw new ArgumentException("Motivo é obrigatorio");

              
            db.Inserir(tabela);
            return tabela;
        }
                public Models.TbListaNegra Alterar(Models.TbListaNegra atual, Models.TbListaNegra novo)
        {
            if(novo.NmPessoa == string.Empty)
                throw new Exception("Nome é obrigatorio");
            if(novo.DsMotivo == string.Empty)
                throw new Exception("Motivo é obrigatorio");
            if(novo.DsLocal == string.Empty)
                throw new Exception("Local é obrigatorio");
            if(novo.DtInclusao > DateTime.Now)
                throw new Exception("Data nao pode maior do que a data atual");

            return db.Alterar(atual, novo);
        }

        public Models.TbListaNegra ConsultarPorId(int id)
        {
            if(id <= 0)
                throw new Exception("ID invalido");
                
            return db.ConsultarPorId(id);
        }

        public Models.TbListaNegra Deletar(Models.TbListaNegra ln)
        {
            return db.Deletar(ln);
        }
        
    }
}