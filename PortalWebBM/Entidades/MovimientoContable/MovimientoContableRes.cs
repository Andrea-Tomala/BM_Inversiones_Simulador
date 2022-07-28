namespace PortalWebBM.Entidades.MovimientoContable
{
    public class MovimientoContableRes
    {
        public int Prefijo { get; set; }
        public int Cuenta { get; set; }
        public int Transaccion { get; set; }
        public int Motivo { get; set; }
        public int Refere1 { get; set; }
        public int Refere { get; set; }
        public decimal Monto { get; set; }
        public string Hora { get; set; }
        public int CodigoAgencia { get; set; }
        public int CodigoAgenciaContable { get; set; }
        public string Usuario { get; set; }
        public string Programa { get; set; }
        public string DebitoCredito { get; set; }
        public string CobroPendiente { get; set; }
        public string VerificaLinea { get; set; }
        public string ConsultaCheque { get; set; }
        public string Canal { get; set; }
        public int Servicio { get; set; }
        public int CodError { get; set; }
        public string MensajeError { get; set; }
    }
}
