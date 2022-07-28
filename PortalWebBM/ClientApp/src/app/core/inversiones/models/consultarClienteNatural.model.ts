import {ReferenciasPersonalesModel} from './referenciasPersonales.model';
import {ReferenciasBancariasModel} from './referenciasBancarias.model';
import {DatosDireccionClienteNaturalModel} from './datosDireccionClienteNatural.model';

export class ConsultarClienteNaturalModel {
    CodigoDactilar: string;
    Apellidos: string;
    Nombres: string;
    ApellidosNombres: string;
    FechaNacimiento: Date;
    LugarNacimiento: string;
    Sexo: string;
    PaisNacionalidad: string;
    EstadoCivil: string;
    ApellidosNombreCoyuge: string;
    TipoIdentificacionConyuge: string;
    IdentificacionConyuge: string;
    IndicadorVinculado: boolean;
    IndicadorFatca: boolean;
    IndicadorResidenciaFiscal: boolean;
    PaisResidenciaFiscal: string;
    NumeroResidenciaFiscal: string;
    DireccionResidenciaFiscal: string;
    TipoRelacion: string;
    ActividadEconomicaCliente: string;
    GrupoEconomico: number;
    UsuarioOficialCredito: string;
    NombreOficialCredito: string;
    CodigoOficinaOficialCredito: string;
    NombreOficinaOficialCredito: string;
    NivelAcademico: string;
    Dependientes: number;
    RelacionLaboral: string;
    Profesion: number;
    CargoLaboral: string;
    TipoVivienda: string;
    ValorVivienda: number;
    TiempoResidencia: number;
    OrigenRecursos: string;
    FechaIngresoLaboralActual: Date;
    ActividadEconomicaEmpresa: number;
    FechaInicioNegocio: Date;
    FechaJubilacion: Date;
    IndicadorOtrosIngresos: boolean;
    OtrosIngresosAnuales: number;
    FuenteOtrosIngresos: string;
    IngresosAnuales: number;
    VentasAnuales: number;
    EgresosAnuales: number;
    TotalActivos: number;
    TotalPasivos: number;
    EstadoFinanciero: string;
    IndicadorFondosTerceros: boolean;
    AgenciaCaptacion: number;
    CanalCaptacion: string;
    ReferenciasPersonales: ReferenciasPersonalesModel[];
    IndicadorReferenciasBancarias: boolean;
    ReferenciasBancarias: ReferenciasBancariasModel[];
    Direcciones: DatosDireccionClienteNaturalModel[];
    IndicadorDatosActualizados: boolean;
    FechaExpedicionCedula: Date;
    TipoCliente: string;
    PropositoRelacionComercial: string;
    TipoProductoCaptacion: number;
    ProductoCaptacion: number;
    SubProductoCaptacion: number;
  
    clear() {
        this.CodigoDactilar = '';
        this.Apellidos = '';
        this.Nombres = '';
        this.ApellidosNombres = '';
        this.FechaNacimiento = new Date();
        this.LugarNacimiento = '';
        this.Sexo = '';
        this.PaisNacionalidad = '';
        this.EstadoCivil = '';
        this.ApellidosNombreCoyuge = '';
        this.TipoIdentificacionConyuge = '';
        this.IdentificacionConyuge = '';
        this.IndicadorVinculado = false;
        this.IndicadorFatca = false;
        this.IndicadorResidenciaFiscal = false;
        this.PaisResidenciaFiscal = '';
        this.NumeroResidenciaFiscal = '';
        this.DireccionResidenciaFiscal = '';
        this.TipoRelacion = '';
        this.ActividadEconomicaCliente = '';
        this.GrupoEconomico = 0;
        this.UsuarioOficialCredito = '';
        this.NombreOficialCredito = '';
        this.CodigoOficinaOficialCredito = '';
        this.NombreOficinaOficialCredito = '';
        this.NivelAcademico = '';
        this.Dependientes = 0;
        this.RelacionLaboral = '';
        this.Profesion = 0;
        this.CargoLaboral = '';
        this.TipoVivienda = '';
        this.ValorVivienda = 0;
        this.TiempoResidencia = 0;
        this.OrigenRecursos = '';
        this.FechaIngresoLaboralActual = new Date();
        this.ActividadEconomicaEmpresa = 0;
        this.FechaInicioNegocio = new Date();
        this.FechaJubilacion = new Date();
        this.IndicadorOtrosIngresos = false;
        this.OtrosIngresosAnuales = 0;
        this.FuenteOtrosIngresos = '';
        this.IngresosAnuales = 0;
        this.VentasAnuales = 0;
        this.EgresosAnuales = 0;
        this.TotalActivos = 0;
        this.TotalPasivos = 0;
        this.EstadoFinanciero = '';
        this.IndicadorFondosTerceros = false;
        this.AgenciaCaptacion = 0;
        this.CanalCaptacion = '';
        this.ReferenciasPersonales = [];
        this.IndicadorReferenciasBancarias = false;
        this.ReferenciasBancarias = [];
        this.Direcciones = [];
        this.IndicadorDatosActualizados = false;
        this.FechaExpedicionCedula = new Date();
        this.TipoCliente = '';
        this.PropositoRelacionComercial = '';
        this.TipoProductoCaptacion = 0;
        this.ProductoCaptacion = 0;
        this.SubProductoCaptacion = 0;
    }
  }