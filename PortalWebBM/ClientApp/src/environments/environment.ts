import { AppConfiguration } from "read-appsettings-json";

export const environment = {
  production: true,
  controller: true,

  getServiceUrl() {
    return AppConfiguration.Setting().origins;
  },

  getLoginUrl() {
    return AppConfiguration.Setting().login;
  },

  getBankUrl() {
    return AppConfiguration.Setting().bm;
  },

  getOnboardingUrl() {
    return AppConfiguration.Setting().onboarding;
  },

  getParametroLimiteMonto() {
    let valor : string = AppConfiguration.Setting().parametroLimiteMonto;
    return valor;
  },

  getParametroLimitePlazo() {
    let valor : string = AppConfiguration.Setting().parametroLimitePlazo;
    return valor;
  },

  getParametroNormativa() {
    let valor : string = AppConfiguration.Setting().parametroNormativa;
    if(valor == null){
      console.error("No se pudo obtener la variable de entorno Normativa");
    }
    return valor;
  },

  getParametroMinimoMonto() {
    let valor : string = AppConfiguration.Setting().parametroMinimoMonto;
    return valor;
  },
  getParametroMinimoPlazo() {
    let valor : string = AppConfiguration.Setting().parametroMinimoPlazo;
    return valor;
  },
  getParametroIdentificacion() {
    let valor: string = AppConfiguration.Setting().parametroIdentifValor;
    
    return valor;
  },
  getParametroTipoIdentificacion() {
    let valor: string = AppConfiguration.Setting().parametroTipoIdentif;
    
    return valor;
  },
  getTextoNormativa() {
    let valor: string = AppConfiguration.Setting().parametroNormativa;
    return valor;
  },
  getTextoCuentaValida() {
    let valor: string = AppConfiguration.Setting().parametroBodyCuentaValida;
    return valor;
  },
  getURLCuentaValida() {
    let valor: string = AppConfiguration.Setting().parametroURLLOGIN;
    return valor;
  },
  getTextoCuentaInvalida() {
    let valor: string = AppConfiguration.Setting().parametroBodyCuentaInvalida;
    return valor;
  },
  getURLCuentaInvalida() {
    let valor: string = AppConfiguration.Setting().parametroURLApertura;
    return valor;
  },
  getParametroLimitePlazoMens() {
    let valor: string = AppConfiguration.Setting().parametroLimitePlazoMensaje;
    return valor;
  },
  getParametroLimitePlazoMinMensaje() {
    let valor: string = AppConfiguration.Setting().parametroLimitePlazoMesesMinMensaje;
    return valor;
  },
  getParametroLimiteMontoMensaje() {
    let valor: string = AppConfiguration.Setting().parametroLimiteMontoMensaje;
    return valor;
  },
  getParametroLimiteMontoMensajeMin() {
    let valor: string = AppConfiguration.Setting().parametroMaxMontoMensaje;
    return valor;
  },
  getMensajePopUp() {
    let valor: string = AppConfiguration.Setting().parametroPopUp;
    if (valor == null) {
      console.error("No se pudo obtener la variable de entorno INV_MENSAJE_SIMULADOR");
    }
    return valor;
  },

  getMensualInteres() {
    let valor: string = AppConfiguration.Setting().mensualInteres;
    return valor;
  },
  getParametroInteresVencimiento() {
    let valor: string = AppConfiguration.Setting().parametroInteresVencimiento;
    return valor;
  },
  getIdCatalogoVencimiento() {
    let valor: string = AppConfiguration.Setting().parametroCatalogoVencim;
    return valor;
  }

};
