using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PortalWebBM.Entidades.Inversiones;
using PortalWebBM.Entidades.Seguridad;
using PortalWebBM.Providers;
using PortalWebBM.utils;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PortalWebBM.Controllers
{

    [Route("api/[controller]")]
    public class RendimientoProyeccionController : ControllerBase
    {
        #region Miembros privados
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathRendimientoProyeccion, PathAutenticacion;

        #endregion

        public RendimientoProyeccionController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathRendimientoProyeccion = Configuration["PathInversion:RendimientoProyeccion"];
            PathAutenticacion = Configuration["PathInversion:Autenticacion"];
            Logger.Information("Ingresando RendimientoProyeccionController Constructor");
        }

        [HttpPost]
        public ActionResult<RendimientoProyeccionRes> Post([FromBody] RendimientoProyeccionReq req)
        {
            try
            {
                Logger.Information("Se realiza solicitud para calcular rendimiento proyeccion | Data: " + req.ToString());
                Response resp;
                if (int.Parse(Configuration["validarToken"]) == 1)
                {
                    SeguridadReq seguridad = new SeguridadReq() { Identificacion = req.Auditoria.Cliente, Ip = req.Auditoria.PuntoAcceso, TokenSeccion = req.Auditoria.NutOrigen };
                    resp = ApiPost(PathAutenticacion, seguridad);
                    if (!resp.IsSuccessful)
                    {
                        Logger.Information("Error al momento de calcular rendimiento proyeccion por validacion | Data: " + req + " | Response: " + resp.Data);
                        return BadRequest(resp.Data);
                    }
                }
                resp = ApiPost(PathRendimientoProyeccion, req);
                try
                {
                    RendimientoProyeccionRes result = Newtonsoft.Json.JsonConvert.DeserializeObject<RendimientoProyeccionRes>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(result);
                    }
                    else
                    {
                        Logger.Information("Error al momento de calcular rendimiento proyeccion | Data: " + req + " | Response: " + resp.Data);
                        return BadRequest(result);
                    }
                }
                catch (System.Exception)
                {
                    return BadRequest(resp);
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
