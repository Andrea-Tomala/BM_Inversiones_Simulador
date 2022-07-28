using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PortalWebBM.Entidades.Inversiones;
using PortalWebBM.Entidades.Seguridad;
using PortalWebBM.Providers;
using PortalWebBM.utils;
using System;

namespace PortalWebBM.Controllers
{
    [ApiController]
    [Route("api/")]
    public class WsInversionesController : ControllerBase
    {
        #region Variables Privadas
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathTablero, PathInversion, PathConsultaInversion, PathAutenticacion;
        #endregion

        public WsInversionesController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathTablero = Configuration["PathInversion:Tablero"];
            PathInversion = Configuration["PathInversion:Inversion"];
            PathConsultaInversion = Configuration["PathInversion:ConsultaInversion"];
            PathAutenticacion = Configuration["PathInversion:Autenticacion"];
            Logger.Information("Ingresando WsInversionesController Constructor");
        }


        /*[HttpPost]
        [Route("ConsultarTablero")]
        public ActionResult ConsultarTablero([FromBody] ConsultarTableroReq request)
        {
            Response resp;
            try
            {
                resp = ApiPost(PathTablero, request);
                if (resp.IsSuccessful)
                {
                    return Ok(resp.Data);
                }
                else
                {
                    return BadRequest(resp.Data);
                }
            }
            catch (Exception e)
            {
                return BadRequest((e.InnerException ?? e).Message);
            }
        }*/

        [HttpPost]
        [Route("CalcularInversion")]
        public ActionResult CalcularInversion([FromBody] RendimientoProyeccionReqCalcInv request)
        {
            Response resp;
            try
            {
                resp = ApiPost(PathInversion, request);
                if (resp.IsSuccessful)
                {
                    return Ok(resp.Data);
                }
                else
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

        /*[HttpPost]
        [Route("ConsultarInversion")]
        public ActionResult ConsultarInversion([FromBody] ConsultarInversionReq req)
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
                resp = ApiPost(PathConsultaInversion, req);
                if (resp.IsSuccessful)
                {
                    return Ok(resp.Data);
                }
                else
                {
                    return BadRequest(resp.Data);
                }
            }
            catch (System.Exception e)
            {
                Logger.Error(e.Message, e);
                return BadRequest((e.InnerException ?? e).Message);
            }
        }*/

        protected Response ApiPost(string relativePath, object request)
        {
            var response = apiClient.PostAsyncJSON(relativePath, request);
            return response;
        }
    }
}