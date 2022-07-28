namespace PortalWebBM.Entidades
{
    public class Auditoria1
    {
        public string Identificacion { get; set; }
        //GUID o Token
        public string Ip { get; set; }
        //Numero de IP - MAC Nombre del Dispositivo
        public string UsuarioFinal { get; set; }
        public string OpcionMenu { get; set; }
        public string TokenSeccion { get; set; }
    }
}