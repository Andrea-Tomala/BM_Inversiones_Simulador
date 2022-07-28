export class BeneficiarioModel {
  TipoIdent: string;
  Cedula: string;
  Nombres: string;

  clear() {
    this.TipoIdent = '';
    this.Cedula = '';
    this.Nombres = '';
  }
}