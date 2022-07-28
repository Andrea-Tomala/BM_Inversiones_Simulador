import {AuditoriaModel} from './auditoria.model';

export class ConsultarInversionReqModel {
  Auditoria: AuditoriaModel;
  TipoIdentificacion: string;
  Identificacion: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.TipoIdentificacion = '';
    this.Identificacion = '';
  }
}