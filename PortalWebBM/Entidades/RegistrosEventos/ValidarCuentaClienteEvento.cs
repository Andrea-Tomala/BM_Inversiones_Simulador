using System;

namespace PortalWebBM.Entidades.RegistrosEventos
{
    public class ValidarCuentaClienteEvento
    {
        public DateTime FechaEvento { get; set; }
        public string ProcesoEvento { get; set; }
        public string TipoIdentificacion { get; set; }
        public string NumeroId { get; set; }
        public string NombresCliente { get; set; }
        public string Canal { get; set; }
        public string Oficial { get; set; }
        public string Oficina { get; set; }
    }
}
