using System;

namespace backend.Models.response
{
    public class listanegraresponse
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Motivo { get; set; }
        public string Local  { get; set;}
        public DateTime? Inclusao { get; set; }
        public string Foto { get; set; }
    }
}