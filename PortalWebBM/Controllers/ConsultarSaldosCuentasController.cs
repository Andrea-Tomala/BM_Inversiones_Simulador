using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PortalWebBM.Entidades.ConsultaCuentas;
using PortalWebBM.Entidades.Seguridad;
using PortalWebBM.Providers;
using PortalWebBM.utils;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PortalWebBM.Controllers
{
    [Route("api/[controller]")]
    public class ConsultarSaldosCuentasController : ControllerBase
    {
        #region Variables Privadas
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathConsultaSaldoCuenta, PathAutenticacion;
        #endregion

        public ConsultarSaldosCuentasController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathConsultaSaldoCuenta = Configuration["PathInversion:ConsultaSaldoCuenta"];
            PathAutenticacion = Configuration["PathInversion:Autenticacion"];
            Logger.Information("Ingresando ConsultarSaldosCuentasController Constructor");
        }
        // POST api/<controller>
        [HttpPost]
        public ActionResult<CuentaSaldoRes> Post([FromBody]CuentaSaldoReq req)
        {
            try
            {
                Response resp;
                if (int.Parse(Configuration["validarToken"]) == 1)
                {
                    SeguridadReq seguridad = new SeguridadReq() { Identificacion = req.Auditoria.Cliente, Ip = req.Auditoria.PuntoAcceso, TokenSeccion = req.Auditoria.NutOrigen };
                    resp = ApiPost(PathAutenticacion, seguridad);
                    if (!resp.IsSuccessful)
                    {
                        return BadRequest(resp.Data);
                    }
                }
                resp = ApiPost(PathConsultaSaldoCuenta, req);
                CuentaSaldoRes CuentaSaldo = Newtonsoft.Json.JsonConvert.DeserializeObject<CuentaSaldoRes>(resp.Data);
                if (resp.IsSuccessful)
                {
                    return Ok(CuentaSaldo);
                }
                else
                {
                    return BadRequest(CuentaSaldo);
                }
            }
            catch (ArgumentNullException a)
            {
                Logger.Error(a.Message, a);
                return BadRequest((a.InnerException ?? a).Message);
            }
            catch (Exception e)
            {
                Logger.Error(e.Message, e);
                return BadRequest((e.InnerException ?? e).Message);
            }
        }

        protected Response ApiPost(string relativePath, object request)
        {
            var response = apiClient.PostAsyncJSON(relativePath, request);
            return response;
        }
    }
}
