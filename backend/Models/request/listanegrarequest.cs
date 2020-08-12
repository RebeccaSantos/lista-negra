using System;

namespace backend.Models.request
{
    public class listanegrarequest
    {
        public string Nome { get; set; }
        public string Motivo { get; set; }
         public string Local { get; set; }
         public DateTime Inclusao { get; set; }
        
    }
}