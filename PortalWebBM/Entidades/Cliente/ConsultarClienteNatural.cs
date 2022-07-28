using System;
using System.Collections.Generic;

namespace PortalWebBM.Entidades.Cliente
{
    public class ConsultarClienteNatural
    {
        public string CodigoDactilar { get; set; }
        public string Apellidos { get; set; }
        public string Nombres { get; set; }
        public string ApellidosNombres { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string LugarNacimiento { get; set; }
        public string Sexo { get; set; }
        public string PaisNacionalidad { get; set; }
        public string EstadoCivil { get; set; }
        public string ApellidosNombresConyuge { get; set; }
        public string TipoIdentifacionConyuge { get; set; }
        public string IdenficacionConyuge { get; set; }
        public bool IndicadorVinculado { get; set; }
        public bool IndicadorFatca { get; set; }
        public bool IndicadorResidenciaFiscal { get; set; }
        public string PaisResidenciaFiscal { get; set; }
        public string NumeroResidenciaFiscal { get; set; }
        public string DireccionResidenciaFiscal { get; set; }
        public string TipoRelacion { get; set; }
        public string ActividadEconomicaCliente { get; set; }
        public int GrupoEconomico { get; set; }
        public string UsuarioOficialCredito { get; set; }
        public string NombreOficialCredito { get; set; }
        public string CodigoOficinaOficialCredito { get; set; }
        public string NombreOficinaOficialCredito { get; set; }
        public string NivelAcademico { get; set; }
        public int Dependientes { get; set; }
        public string RelacionLaboral { get; set; }
        public int Profesion { get; set; }
        public string CargoLaboral { get; set; }
        public string TipoVivienda { get; set; }
        public decimal ValorVivienda { get; set; }
        public int TiempoResidencia { get; set; }
        public string OrigenRecursos { get; set; }
        public Nullable<DateTime> FechaIngresoLaboralActual { get; set; }
        public int ActividadEconomicaEmpresa { get; set; }
        public Nullable<DateTime> FechaInicioNegocio { get; set; }
        public Nullable<DateTime> FechaJubilacion { get; set; }
        public bool IndicadorOtrosIngresos { get; set; }
        public decimal OtrosIngresosAnuales { get; set; }
        public string FuenteOtrosIngresos { get; set; }
        public decimal IngresosAnuales { get; set; }
        public decimal VentasAnuales { get; set; }
        public decimal EgresosAnuales { get; set; }
        public decimal TotalActivos { get; set; }
        public decimal TotalPasivos { get; set; }
        public string EstadoFinanciero { get; set; }
        public bool IndicadorFondosTerceros { get; set; }
        public int AgenciaCaptacion { get; set; }
        public string CanalCaptacion { get; set; }
        public List<ReferenciasPersonalesOut> ReferenciasPersonales { get; set; }
        public bool IndicadorReferenciasBancarias { get; set; }
        public List<ReferenciasBancariasOut> ReferenciasBancarias { get; set; }
        public List<DatosDireccionClienteNatural> Direcciones { get; set; }
        public bool IndicadorDatosActualizados { get; set; }
        public DateTime FechaExpedicionCedula { get; set; }
        public string TipoCliente { get; set; }
        public string PropositoRelacionComercial { get; set; }
        public int TipoProductoCaptacion { get; set; }
        public int ProductoCaptacion { get; set; }
        public int SubProductoCaptacion { get; set; }
    }
}
