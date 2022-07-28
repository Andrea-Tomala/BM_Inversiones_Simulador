export class MovimientoContableResModel {
    Prefijo: number;
    Cuenta: number;
    Transaccion: number;
    Motivo: number;
    Refere1: number;
    Refere: number;
    Monto: number;
    Hora: string;
    CodigoAgencia: number;
    CodigoAgenciaContable: number;
    Usuario: string;
    Programa: string;
    DebitoCredito: string;
    CobroPendiente: string;
    VerificaLinea: string;
    ConsultaCheque: string;
    Canal: string;
    Servicio: number;
    CodError: number;
    MensajeError: string;
  
    clear() {
      this.Prefijo  = 0;
      this.Cuenta  = 0;
      this.Transaccion  = 0;
      this.Motivo  = 0;
      this.Refere1  = 0;
      this.Monto = 0;
      this.Hora = '';
      this.CodigoAgencia = 0;
      this.CodigoAgenciaContable = 0;
      this.Usuario = '';
      this.Programa = '';
      this.DebitoCredito = '';
      this.CobroPendiente = '';
      this.VerificaLinea = '';
      this.ConsultaCheque = '';
      this.Canal = '';
      this.Servicio = 0;
      this.CodError = 0;
      this.MensajeError = '';
    }
  }