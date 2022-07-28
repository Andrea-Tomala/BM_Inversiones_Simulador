export class RendimientoModel {
  tasa: number;
  interesGanar: number;
  impuesto: number;
  interesRecibir: number;
  totalPag: number;

  clear() {
    this.tasa = 0;
    this.interesGanar = 0;
    this.impuesto = 0;
    this.interesRecibir = 0;
    this.totalPag = 0;
  }
}
