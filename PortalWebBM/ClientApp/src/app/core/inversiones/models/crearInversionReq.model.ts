import {AuditoriaModel} from './auditoria.model';
import { BeneficiarioModel } from './beneficiario.model';
import { CuentaCreditoModel } from './cuentaCredito.model';
import { CuentasDebitoModel } from './cuentasDebito.model';

export class CrearInversionReqModel {
  Auditoria: AuditoriaModel;
  CanalCaptacion: string;
  TipoIdentificacion: string;
  Identificacion: string;
  Nombres: string;
  Email: string;
  CuentasADebitar: CuentasDebitoModel[];
  MontoInvertir: number;
  DiasPlazo: number;
  Tasa: number;
  Impuesto: number;
  InteresRecibir: number;
  InteresGanar: number;
  AgregarBeneficiario: boolean;
  Beneficiarios: BeneficiarioModel[];
  CuentaAcreditar: CuentaCreditoModel;
  PagoInteres: string;
  VencimientoInversion: string;
  FecEmision: Date;
  FecVencimiento: Date;
  AceptacionContrato: boolean;
  ReferenciaOTP: string;
  CodigoOTP: string;
  CodigoOficinaOficialCredito: string;

  clear() {
    this.Auditoria = new AuditoriaModel();
    this.CanalCaptacion = '';
    this.TipoIdentificacion = '';
    this.Identificacion = '';
    this.Nombres = '';
    this.Email = '';
    this.CuentasADebitar = [];
    this.MontoInvertir = 0;
    this.DiasPlazo = 0;
    this.Tasa = 0;
    this.Impuesto = 0;
    this.InteresRecibir = 0;
    this.InteresGanar = 0;
    this.AgregarBeneficiario = false;
    this.Beneficiarios = [];
    this.CuentaAcreditar= new CuentaCreditoModel();
    this.PagoInteres = '';
    this.VencimientoInversion = '';
    this.FecEmision = new Date();
    this.FecVencimiento = new Date();
    this.AceptacionContrato = false;
    this.ReferenciaOTP = '';
    this.CodigoOTP = '';
    this.CodigoOficinaOficialCredito = '';
  }
}