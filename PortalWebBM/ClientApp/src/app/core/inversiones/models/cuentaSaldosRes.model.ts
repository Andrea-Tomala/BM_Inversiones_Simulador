export class CuentaSaldosResModel {
    NumeroCuenta: string;
    Nombre: string;
    SaldoDisponible: string;
  
    clear() {
      this.NumeroCuenta = '';
      this.Nombre = '';
      this.SaldoDisponible = '';
    }
  }