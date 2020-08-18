using System;
using Microsoft.AspNetCore.Http;

namespace backend.Models.request
{
    public class listanegrarequest
    {
        
        public IFormFile Foto { get; set; }
        public string Nome { get; set; }
        public string Motivo { get; set; }
        public string Local { get; set; }
        public DateTime Inclusao { get; set; }
        
    }
}