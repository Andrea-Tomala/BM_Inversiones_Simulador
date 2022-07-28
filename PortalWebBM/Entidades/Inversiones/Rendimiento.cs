using Newtonsoft.Json;

namespace PortalWebBM.Entidades.Inversiones
{
    [JsonObject]
    public class Rendimiento
    {
        public decimal Tasa { get; set; }
        public decimal InteresGanar { get; set; }
        public decimal Impuesto { get; set; }
        public decimal InteresRecibir { get; set; }
        public decimal TotalPag { get; set; }

    }
}
