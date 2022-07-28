namespace PortalWebBM.Entidades.Cliente
{
    public class ConsultarClienteNaturalReq
    {
        public Auditoria Auditoria { get; set; }

        public string TipoIdentificacion { get; set; }
        public string NumeroIdentificacion { get; set; }
    }
}
