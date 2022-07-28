import {AuditoriaModel} from './auditoria.model';

export class CuentaSaldoReqModel {
  Auditoria: AuditoriaModel;
  Cuenta: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.Cuenta = '';
  }
}
