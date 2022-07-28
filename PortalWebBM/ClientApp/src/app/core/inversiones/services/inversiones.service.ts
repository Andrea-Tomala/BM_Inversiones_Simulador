import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ActualizarInversionModel } from '../models/actualizarInversionReq.model';
import { ConsultaCuentasActivasReqModel } from '../models/consultaCuentasActivasReq.model';
import { ConsultaCuentasActivasResModel } from '../models/consultaCuentasActivasRes.model';
import { ConsultarClienteNaturalReqModel } from '../models/consultarClienteNaturalReq.model';
import { ConsultarClienteNaturalResModel } from '../models/consultarClienteNaturalRes.model';
import { ConsultarInversionReqModel } from '../models/consultarInversionReq.model';
import { ConsultarTableroReqModel } from '../models/consultarTableroReq.model';
import { CrearInversionReqModel } from '../models/crearInversionReq.model';
import { CuentaSaldoReqModel } from '../models/cuentaSaldoReq.model';
import { CuentaSaldosResModel } from '../models/cuentaSaldosRes.model';
import { EstadosParametrosModel } from '../models/estadosParametros.model';
import { FrecuenciaPagoReqModel } from '../models/frecuenciaPagoReq.model';
import { OtpReqModel } from '../models/otpReq.model';
import { OtpResModel } from '../models/otpRes.model';
import { ParametrosModel } from '../models/parametros.model';
import { RendimientoProyeccionReqModel } from '../models/rendimientoProyeccionReq.model';
import { RendimientoProyeccionResModel } from '../models/rendimientoProyeccionRes.model';
import { SeguridadReqModel } from '../models/seguridadReq.model';
import { TipoRenovacionReqModel } from '../models/tipoRenovacionReq.model';
import { TiposParametrosModel } from '../models/tiposParametros.model';

@Injectable({
  providedIn: 'root'
})
export class InversionesService {

  private readonly consultaCuentasActivasURL: string = '/api/ConsultaCuentasActivas';
  private readonly autenticacionURL: string = '/api/Autenticacion';
  private readonly autenticacionAbiertaURL: string = '/api/AutenticacionAbierta';
  private readonly catalogoURL: string = '/api/Catalogo';
  private readonly parametroURL: string = '/api/Parametros';
  private readonly rendimientoProyeccionURL: string = '/api/RendimientoProyeccion';
  private readonly actualizaInversionURL: string = '/api/ActualizarInversion';
  private readonly consultaSaldoCuentaURL: string = '/api/ConsultarSaldosCuentas';
  private readonly validarCuentaClienteURL: string = '/api/ValidarCuentaCliente';
  private readonly crearInversionURL: string = '/api/CrearInversion';
  private readonly generarNuevaOtpURL: string = '/api/GenerarNuevaOTP';
  private readonly generaTermCondicionesURL: string = '/api/GeneraTerminosCondiciones';
  private readonly consultarTableroURL: string = '/api/ConsultarTablero';
  private readonly calcularInversionURL: string = '/api/CalcularInversion';
  private readonly consultarInversionURL: string = '/api/ConsultarInversion';

  constructor(private http: HttpClient) { }

  Autenticacion(body: SeguridadReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.autenticacionURL}`;
    return this.http.post(endpointUrl, body);
  }

  AutenticacionAbierta(body: string): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.autenticacionAbiertaURL}`;
    return this.http.post(endpointUrl, '\"' + body + '\"', { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  ActualizarInversion(body: ActualizarInversionModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.actualizaInversionURL}`;
    return this.http.post(endpointUrl, body);
  }

  GetFrecuenciaPagos(body: FrecuenciaPagoReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.catalogoURL + '/FrecuenciaPago'}`;
    return this.http.post(endpointUrl, body);
  }

  GetTiposRenovacion(body: TipoRenovacionReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.catalogoURL + '/TipoRenovacion'}`;
    return this.http.post(endpointUrl, body);
  }

  GetParametros(): Observable<ParametrosModel[]> {
    const endpointUrl = `${environment.getServiceUrl() + this.parametroURL + '/GetParametros'}`;
    return this.http.get<ParametrosModel[]>(endpointUrl);
  }

  GetTiposParametros(): Observable<TiposParametrosModel[]> {
    const endpointUrl = `${environment.getServiceUrl() + this.parametroURL + '/GetTiposParametros'}`;
    return this.http.get<TiposParametrosModel[]>(endpointUrl);
  }

  GetEstadosParametros(): Observable<EstadosParametrosModel[]> {
    const endpointUrl = `${environment.getServiceUrl() + this.parametroURL + '/GetEstadosParametros'}`;
    return this.http.get<EstadosParametrosModel[]>(endpointUrl);
  }

  CrearParametro(body: ParametrosModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.parametroURL + '/IngParametro'}`;
    return this.http.post(endpointUrl, body);
  }

  ActualizarParametro(body: ParametrosModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.parametroURL + '/ActParametro'}`;
    return this.http.post(endpointUrl, body);
  }

  RendimientoProyeccion(body: RendimientoProyeccionReqModel): Observable<RendimientoProyeccionResModel> {
    const endpointUrl = `${environment.getServiceUrl() + this.rendimientoProyeccionURL}`;
    return this.http.post<RendimientoProyeccionResModel>(endpointUrl, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' }) });
  }

  ConsultarCuentasActivas(body: ConsultaCuentasActivasReqModel): Observable<ConsultaCuentasActivasResModel[]> {
    const endpointUrl = `${environment.getServiceUrl() + this.consultaCuentasActivasURL}`;
    return this.http.post<ConsultaCuentasActivasResModel[]>(endpointUrl, body);
  }

  ConsultarSalCuentas(body: CuentaSaldoReqModel): Observable<CuentaSaldosResModel> {
    const endpointUrl = `${environment.getServiceUrl() + this.consultaSaldoCuentaURL}`;
    return this.http.post<CuentaSaldosResModel>(endpointUrl, body);
  }

  CrearInversion(body: CrearInversionReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.crearInversionURL}`;
    return this.http.post(endpointUrl, body);
  }

  GenerarNuevaOTP(body: OtpReqModel): Observable<OtpResModel> {
    const endpointUrl = `${environment.getServiceUrl() + this.generarNuevaOtpURL}`;
    return this.http.post<OtpResModel>(endpointUrl, body);
  }

  GeneraTermCondiciones(): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.generaTermCondicionesURL}`;
    return this.http.get<any>(endpointUrl);
  }

  ValidarCuentaCliente(body: ConsultarClienteNaturalReqModel): Observable<ConsultarClienteNaturalResModel> {
    const endpointUrl = `${environment.getServiceUrl() + this.validarCuentaClienteURL}`;
    return this.http.post<ConsultarClienteNaturalResModel>(endpointUrl, body);
  }

  ConsultarTablero(body: ConsultarTableroReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.consultarTableroURL}`;
    return this.http.post(endpointUrl, body);
  }

  CalcularInversion(body: RendimientoProyeccionReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.calcularInversionURL}`;
    return this.http.post(endpointUrl, body);
  }

  ConsultarInversion(body: ConsultarInversionReqModel): Observable<any> {
    const endpointUrl = `${environment.getServiceUrl() + this.consultarInversionURL}`;
    return this.http.post(endpointUrl, body);
  }
}
