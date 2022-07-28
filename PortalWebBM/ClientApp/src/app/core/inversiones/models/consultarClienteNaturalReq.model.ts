import {AuditoriaModel} from './auditoria.model';

export class ConsultarClienteNaturalReqModel {
    Auditoria: AuditoriaModel;
    TipoIdentificacion: string;
    NumeroIdentificacion: string;
    EsBeneficiario: boolean;
    EsClienteBanco: boolean;
    TieneCuentasActivas:boolean;
    EsPEPS:boolean;
    EsListaNegra:boolean;
    DatosActualizados: boolean;
  
    clear() {
      this.Auditoria = new AuditoriaModel();
      this.TipoIdentificacion = '';
      this.NumeroIdentificacion = '';
      this.EsBeneficiario = false;
      this.EsClienteBanco = false;
      this.TieneCuentasActivas = false;
      this.EsPEPS = false;
      this.EsListaNegra = false;
      this.DatosActualizados = false;
    }
  }