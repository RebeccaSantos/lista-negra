using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

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
    }
}