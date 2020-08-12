using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;


namespace backend.database
{
    public class listanegradatabase
    { 
        Models.lndbContext ctx=new Models.lndbContext();
        public List<Models.TbListaNegra> Listar()
        {
              List<Models.TbListaNegra> lista=ctx.TbListaNegra.ToList();
              return lista;
        }
        public Models.TbListaNegra Inserir(Models.TbListaNegra tabela)
        {
            ctx.Add(tabela);
            ctx.SaveChanges();
            
            return tabela;
        }
        public Models.TbListaNegra Alterar(Models.TbListaNegra atual, Models.TbListaNegra novo)
        {
            atual.NmPessoa = novo.NmPessoa;
            atual.DsMotivo = novo.DsMotivo;
            atual.DsLocal = novo.DsLocal;
            atual.DtInclusao = novo.DtInclusao;
            
            ctx.SaveChanges();

            return atual;
        }
        public Models.TbListaNegra ConsultarPorId(int id)
        {
          Models.TbListaNegra resp= ctx.TbListaNegra.First(x=>x.IdListaNegra==id);
          return resp;
        }
        
        public Models.TbListaNegra Deletar(Models.TbListaNegra ln)
        {
           
            ctx.Remove(ln);
            ctx.SaveChanges();

            return ln;
        }
    }
}