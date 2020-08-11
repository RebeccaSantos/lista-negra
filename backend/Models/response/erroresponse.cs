namespace backend.Models.response
{
    public class erroresponse
    {
        public int Erro { get; set; }
        public string Mensagem { get; set; }
        public erroresponse(int erro,string Mensagem){
            this.Erro=erro;
            this.Mensagem=Mensagem;
        }
    }
}