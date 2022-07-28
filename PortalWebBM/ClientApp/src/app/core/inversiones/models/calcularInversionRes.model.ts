export class CalcularInversionResModel {
  Tasa: number;
  InteresGanar: number;
  Impuesto: number;
  InteresRecibir: number;
  TotalPag: number;
  DiasPlazoFinal: number;
  FechaEmision: Date;
  FechaVencimiento: Date;

  clear() {
    this.Tasa = 0;
    this.InteresGanar = 0;
    this.Impuesto = 0;
    this.InteresRecibir = 0;
    this.TotalPag = 0;
    this.DiasPlazoFinal = 0;
    this.FechaEmision = new Date();
    this.FechaVencimiento = new Date();
  }
}
