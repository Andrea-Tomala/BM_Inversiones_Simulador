import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormBuilder, Validators } from "@angular/forms";
import { ParametrosModel } from "./core/inversiones/models/parametros.model";
import { environment } from "src/environments/environment";
import { InversionesService } from "./core/inversiones/services/inversiones.service";

@Component({
  selector: "body[iRoute]",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  title = "iRoute";
  public ParametrosInversiones: Array<any> = [];
  public LimiteMonto: number;
  public LimitePlazo: number;
  public MinimoMonto: number;
  public MinimoPlazo: number;
  public SIM_IDENTIFICACION_VALUE: string;
  public SIM_TIPO_IDENTIFICACION_VALUE: string;
  public textoNormativa: string;
  public textoCuentaValidada: string;
  public urlLoginValido: string;
  public textoCuentaInvalida: string;
  public urlAperturaCuenta: string;
  public mensaje_LimitePlazo: string;
  public mensaje_LimitePlazoMin: string;
  public mensaje_LimiteMonto: string;
  public mensaje_minLimiteMonto: string;
  public ID_CATALOGO_PAGO_MENSUAL: string;
  public pagoInteres_vencimiento: string;
  public idCatalogoVencim: string;
  public MensajePopup: string = "Hemos validado su información, para realizar la contratación del Depósito a plazo en línea haga click en el siguiente botón.";
  constructor(
    public dialog: MatDialog,
    private inversionService: InversionesService,
  ) {}

  ngOnInit() {
    this.consultarParametrosInversiones();
  }


  
  public consultarParametrosInversiones(){
    
    this.inversionService.GetParametros().subscribe((data: any) => {
      console.log(data);
      this.ParametrosInversiones = data;

      let parametroLimiteMonto = this.obtenerParametro(environment.getParametroLimiteMonto());
      this.LimiteMonto = parametroLimiteMonto == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MONTO_MAX")?.valor ?? "INV_MONTO_MAX" : Number(parametroLimiteMonto);

      let parametroLimitePlazo = this.obtenerParametro(environment.getParametroLimitePlazo());
      this.LimitePlazo = parametroLimitePlazo == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_PLAZO_MAX")?.valor ?? "INV_PLAZO_MAX" : Number(parametroLimitePlazo);

      let parametroMinimoMonto = this.obtenerParametro(environment.getParametroMinimoMonto());
      this.MinimoMonto = parametroMinimoMonto == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MONTO_MIN")?.valor ?? "INV_MONTO_MIN" : Number(parametroMinimoMonto);

      let parametroMinimoPlazo = this.obtenerParametro(environment.getParametroMinimoPlazo());
      this.MinimoPlazo = parametroMinimoPlazo == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_PLAZO_MIN")?.valor ?? "INV_PLAZO_MIN" : Number(parametroMinimoPlazo);

      let parametroIdentifValor = this.obtenerParametro(environment.getParametroIdentificacion());
      this.SIM_IDENTIFICACION_VALUE = parametroIdentifValor == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "SIM_IDENTIFICACION_VALUE")?.valor ?? "SIM_IDENTIFICACION_VALUE" : String(parametroIdentifValor);

      let parametroTipoIdentif = this.obtenerParametro(environment.getParametroTipoIdentificacion());
      this.SIM_TIPO_IDENTIFICACION_VALUE = parametroTipoIdentif == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "SIM_TIPO_IDENTIFICACION_VALUE")?.valor ?? "SIM_TIPO_IDENTIFICACION_VALUE" : String(parametroTipoIdentif);
      console.log(this.SIM_IDENTIFICACION_VALUE);

      let parametroNormativa = this.obtenerParametro(environment.getTextoNormativa());
      this.textoNormativa = parametroNormativa == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_TEXTO_NORMATIVA")?.valor ?? "INV_TEXTO_NORMATIVA" : String(parametroNormativa);
      
      let parametroBodyCuentaValida = this.obtenerParametro(environment.getTextoCuentaValida());
      this.textoCuentaValidada = parametroBodyCuentaValida == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MENSAJE_SIMULADOR")?.valor ?? "INV_MENSAJE_SIMULADOR" : String(parametroBodyCuentaValida);

      let parametroURLLOGIN = this.obtenerParametro(environment.getURLCuentaValida());
      this.urlLoginValido = parametroURLLOGIN == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "URL_LOGIN")?.valor ?? "URL_LOGIN" : String(parametroURLLOGIN);
 
      let parametroBodyCuentaInvalida = this.obtenerParametro(environment.getTextoCuentaInvalida());
      this.textoCuentaInvalida = parametroBodyCuentaInvalida == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "INV_MENSAJE_SIM_APERTURA")?.valor ?? "INV_MENSAJE_SIM_APERTURA" : String(parametroBodyCuentaInvalida);

      let parametroURLApertura = this.obtenerParametro(environment.getTextoCuentaInvalida());
      this.urlAperturaCuenta = parametroURLApertura == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "URL_ONBOARDING")?.valor ?? "URL_ONBOARDING" : String(parametroURLApertura);

      let parametroLimitePlazoMensaje = this.obtenerParametro(environment.getParametroLimitePlazoMens());
      this.mensaje_LimitePlazo = parametroLimitePlazoMensaje == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "MENSAJE_MAXIMO_MESES")?.valor ?? "MENSAJE_MAXIMO_MESES" : String(parametroLimitePlazoMensaje);

      let parametroLimitePlazoMesesMinMensaje = this.obtenerParametro(environment.getParametroLimitePlazoMinMensaje());
      this.mensaje_LimitePlazoMin = parametroLimitePlazoMesesMinMensaje == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "MENSAJE_MINIMO_MESES")?.valor ?? "MENSAJE_MINIMO_MESES" : String(parametroLimitePlazoMesesMinMensaje);

      let parametroLimiteMontoMensaje = this.obtenerParametro(environment.getParametroLimiteMontoMensaje());
      this.mensaje_LimiteMonto = parametroLimiteMontoMensaje == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "MENSAJE_MONTO_MAXIMO")?.valor ?? "MENSAJE_MONTO_MAXIMO" : String(parametroLimiteMontoMensaje);

      let parametroMaxMontoMensaje = this.obtenerParametro(environment.getParametroLimiteMontoMensajeMin());
      this.mensaje_minLimiteMonto = parametroMaxMontoMensaje == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "MENSAJE_MONTO_MINIMO")?.valor ?? "MENSAJE_MONTO_MINIMO" : Number(parametroMaxMontoMensaje);

      let mensajePopup = this.obtenerParametro(environment.getMensajePopUp());
      this.MensajePopup = mensajePopup == "" ? "Hemos validado su información, para realizar la contratación del Depósito a plazo en línea haga click en el siguiente botón." : String(mensajePopup);
      localStorage.setItem('params', this.MensajePopup);

      let mensualInteres = this.obtenerParametro(environment.getMensualInteres());
      this.ID_CATALOGO_PAGO_MENSUAL = mensualInteres == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "ID_CATALOGO_PAGO_MENSUAL")?.valor ?? "ID_CATALOGO_PAGO_MENSUAL" : String(mensualInteres);

      let parametroInteresVencimiento = this.obtenerParametro(environment.getParametroInteresVencimiento());
      this.pagoInteres_vencimiento = parametroInteresVencimiento == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "V")?.valor ?? "V" : Number(parametroInteresVencimiento);

      let parametroCatalogoVencim = this.obtenerParametro(environment.getIdCatalogoVencimiento());
      this.idCatalogoVencim = parametroCatalogoVencim == "" ? this.ParametrosInversiones.find(p => p.nombreParametro == "ID_CATALOGO_PAGO_VENCIM")?.valor ?? "ID_CATALOGO_PAGO_VENCIM" : String(parametroCatalogoVencim);
    },
    error => {
     
    });
  }

  public obtenerParametro(nombre: string) : string {
    let parametro: ParametrosModel = this.ParametrosInversiones.find( parametro => parametro.nombreParametro === nombre);
    return parametro == null ? "" : parametro.valor;
  }

}
