import {AuditoriaModel} from './auditoria.model';

export class TipoRenovacionReqModel {
  Auditoria: AuditoriaModel;
  TipoPlazo: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.TipoPlazo = '';
  }
}
