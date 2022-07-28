export class ProyeccionModel {
  plazo: number;
  tasa: number;
  interesGanar: number;
  interesRecibir: number;
  impuesto: number;
  totalRecibir: number;

  clear() {
    this.plazo = 0;
    this.tasa = 0;
    this.interesGanar = 0;
    this.interesRecibir = 0;
    this.impuesto = 0;
    this.totalRecibir = 0;
  }
}
