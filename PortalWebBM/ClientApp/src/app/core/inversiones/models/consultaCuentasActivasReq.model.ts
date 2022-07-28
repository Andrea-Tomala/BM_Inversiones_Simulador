import {AuditoriaModel} from './auditoria.model';

export class ConsultaCuentasActivasReqModel {
  Auditoria: AuditoriaModel;
  TipoIdentificacion: string;
  Identificacion: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.TipoIdentificacion = '';
    this.Identificacion = '';
  }
}