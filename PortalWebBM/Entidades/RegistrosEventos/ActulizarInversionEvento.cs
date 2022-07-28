using System;

namespace PortalWebBM.Entidades.RegistrosEventos
{
    public class ActulizarInversionEvento
    {
        public string ProcesoEvento { get; set; }
        public string TipoIdentificacion { get; set; }
        public string NumeroId { get; set; }
        public string NombresCliente { get; set; }
        public string Canal { get; set; }
        public decimal Monto { get; set; }
        public DateTime FechaEvento { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime FechaVecimiento { get; set; }
        public string TipoRenovacion { get; set; }
        public string CuentaCredito { get; set; }
    }
}
