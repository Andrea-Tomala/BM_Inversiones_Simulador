using System;

namespace PortalWebBM.Entidades.RegistrosEventos
{
    public class CrearInversionEvento
    {
        public DateTime FechaEvento { get; set; }
        public string ProcesoEvento { get; set; }
        public string Canal { get; set; }
        public string TipoIdentificacion { get; set; }
        public string NumeroId { get; set; }
        public string NombresCliente { get; set; }
        public string Oficial { get; set; }
        public string Oficina { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public DateTime FechaCancelacion { get; set; }
        public int Plazo { get; set; }
        public decimal Monto { get; set; }
        public decimal InteresGanar { get; set; }
        public decimal Impuesto { get; set; }
        public decimal ValorNetoRecibir { get; set; }
        public decimal InteresRecibir { get; set; }
        public string CuentaCredito { get; set; }
        public string TipoRenovacion { get; set; }
    }
}
