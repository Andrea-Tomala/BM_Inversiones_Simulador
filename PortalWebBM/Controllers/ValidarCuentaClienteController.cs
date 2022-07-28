using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using PortalWebBM.Entidades.Cliente;
using PortalWebBM.Entidades.Seguridad;
using PortalWebBM.Providers;
using PortalWebBM.utils;
using System;

namespace PortalWebBM.Controllers
{
    [Route("api/[controller]")]
    public class ValidarCuentaClienteController : ControllerBase
    {
        #region Variables Privadas
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathValidarCuentaCliente, PathAutenticacion;
        #endregion

        public ValidarCuentaClienteController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathValidarCuentaCliente = Configuration["PathInversion:ValidarCuentaCliente"];
            PathAutenticacion = Configuration["PathInversion:Autenticacion"];
            Logger.Information("Ingresando ValidarCuentaClienteController Constructor");
        }

        [HttpPost]
        public ActionResult<ConsultarClienteNaturalRes> Post([FromBody] ConsultarClienteNaturalReq req)
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
                resp = ApiPost(PathValidarCuentaCliente, req);
                try
                {
                    ConsultarClienteNaturalRes ClienteNatural = JsonConvert.DeserializeObject<ConsultarClienteNaturalRes>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(ClienteNatural);
                    }
                    else
                    {
                        return BadRequest(ClienteNatural);
                    }
                }
                catch (Exception)
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
