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
        
    }
}