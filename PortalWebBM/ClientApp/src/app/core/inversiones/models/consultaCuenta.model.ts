export class ConsultaCuentaModel {
    Prefijo: string;
    Cuenta: string;
  
    clear() {
      this.Prefijo = '';
      this.Cuenta = '';
    }
  }