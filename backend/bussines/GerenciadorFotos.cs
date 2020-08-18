using System;
using Microsoft.AspNetCore.Http;
using System.IO;
namespace backend.bussines
{
    public class GerenciadorFoto
    {
        public string GerarNome(string nome)
        {
           string novoNome=Guid.NewGuid().ToString();
           novoNome =novoNome+Path.GetExtension(nome);
           return novoNome;
        }
        public void SalvarFoto(string nome, IFormFile foto)
        {
            string caminhofoto=Path.Combine(AppContext.BaseDirectory,"Storage","Fotos",nome);
            using(FileStream fs=new FileStream(caminhofoto,FileMode.Create))
            {
                foto.CopyTo(fs);
            }

        }
        public byte[] LerFoto(string nome)
        {
            string caminhofoto=Path.Combine(AppContext.BaseDirectory,"Storage","Fotos",nome);
            byte[] foto=File.ReadAllBytes(caminhofoto);
             return foto;
        }
        public string GerarContentType(string nome)
        {
            string extensao=System.IO.Path.GetExtension(nome).Replace(".","");
            string ContentType="application/"+extensao;
            return ContentType;
        }
    }
} 