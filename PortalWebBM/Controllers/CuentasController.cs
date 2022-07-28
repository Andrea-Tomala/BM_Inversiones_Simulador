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
    [Route("api/ConsultaCuentasActivas")]
    public class CuentasController : ControllerBase
    {
        #region Variables Privadas
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathConsultarCuentasActivas, PathAutenticacion;
        #endregion

        public CuentasController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathConsultarCuentasActivas = Configuration["PathInversion:ConsultarCuentasActivas"];
            PathAutenticacion = Configuration["PathInversion:Autenticacion"];
            Logger.Information("Ingresando CuentasController Constructor");
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult<System.Collections.Generic.List<ConsultaCuentasActivasRes>> Post([FromBody] ConsultaCuentasActivasReq req)
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
                resp = ApiPost(PathConsultarCuentasActivas, req);
                try
                {
                    System.Collections.Generic.List<ConsultaCuentasActivasRes> result =
                        Newtonsoft.Json.JsonConvert.DeserializeObject<System.Collections.Generic.List<ConsultaCuentasActivasRes>>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(result);
                    }
                    else
                    {
                        return BadRequest(result);
                    }
                }
                catch (System.Exception)
                {
                    return BadRequest(resp.Data);
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
