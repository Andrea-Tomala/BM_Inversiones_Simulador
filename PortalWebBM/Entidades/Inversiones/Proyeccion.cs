namespace PortalWebBM.Entidades.Inversiones
{
    public class Proyeccion
    {
        public int Plazo { get; set; }
        public decimal Tasa { get; set; }
        public decimal InteresGanar { get; set; }
        public decimal InteresRecibir { get; set; }
        public decimal Impuesto { get; set; }
        public decimal TotalRecibir { get; set; }
    }
}
