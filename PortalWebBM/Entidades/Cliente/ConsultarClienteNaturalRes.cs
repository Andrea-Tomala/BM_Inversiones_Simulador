using System;

namespace PortalWebBM.Entidades.Cliente
{
    public class ConsultarClienteNaturalRes
    {
        //public string Apellidos { get; set; }
        //public string Nombres { get; set; }
        public string ApellidosNombres { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public bool IndicadorDatosActualizados { get; set; }
        public string CodigoOficinaOficialCredito { get; set; }
        public string NombreOficialCredito { get; set; }
        public string Email { get; set; }
    }
}
