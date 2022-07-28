using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using PortalWebBM.Entidades.Parametros;
using PortalWebBM.Providers;
using PortalWebBM.utils;
using System;
using System.Collections.Generic;

namespace PortalWebBM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParametrosController : ControllerBase
    {
        #region Varibles Privadas
        readonly Client apiClient;
        private readonly ILoggerManager Logger;
        private readonly IConfiguration Configuration;
        private readonly string PathParametros, PathTiposParametros,
            PathEstadosParametros, PathIngParametro, PathActParametro;
        #endregion

        public ParametrosController(ILoggerManager logger, IConfiguration configurate)
        {
            Logger = logger;
            Configuration = configurate;
            apiClient = new Client(Logger, Configuration);
            PathParametros = Configuration["PathInversion:Parametros"];
            PathTiposParametros = Configuration["PathInversion:TiposParametros"];
            PathEstadosParametros = Configuration["PathInversion:EstadosParametro"];
            PathIngParametro = Configuration["PathInversion:IngParametro"];
            PathActParametro = Configuration["PathInversion:ActParametro"];
        }

        [HttpGet]
        [Route("GetParametros")]
        public IActionResult GetParametros()
        {
            Response resp;
            try
            {
                resp = ApiGet(PathParametros);
                try
                {
                    List<Parametros> listaParametros = JsonConvert.DeserializeObject<List<Parametros>>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(listaParametros);
                    }
                    else
                    {
                        return BadRequest(listaParametros);
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

        [HttpGet]
        [Route("GetTiposParametros")]
        public IActionResult GetTiposParametros()
        {
            Response resp;
            try
            {
                resp = ApiGet(PathTiposParametros);
                try
                {
                    List<TiposParametros> lista = JsonConvert.DeserializeObject<List<TiposParametros>>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(lista);
                    }
                    else
                    {
                        return BadRequest(lista);
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
                return BadRequest((e.InnerException ?? e).Message);
            }
        }

        [HttpGet]
        [Route("GetEstadosParametros")]
        public IActionResult GetEstadosParametros()
        {
            Response resp;
            try
            {
                resp = ApiGet(PathEstadosParametros);
                try
                {
                    List<EstadosParametros> lista = JsonConvert.DeserializeObject<List<EstadosParametros>>(resp.Data);
                    if (resp.IsSuccessful)
                    {
                        return Ok(lista);
                    }
                    else
                    {
                        return BadRequest(lista);
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
                return BadRequest((e.InnerException ?? e).Message);
            }
        }

        /*[HttpPost]
        [Route("IngParametro")]
        public ActionResult IngParametro([FromBody] Parametros parametro)
        {
            Response resp;
            try
            {
                resp = ApiPost(PathIngParametro, parametro);
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
        }

        [HttpPost]
        [Route("ActParametro")]
        public ActionResult ActParametro([FromBody] Parametros parametro)
        {
            Response resp;
            try
            {
                resp = ApiPost(PathActParametro, parametro);
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

        protected Response ApiPost(string relativePath, object request)
        {
            var response = apiClient.PostAsyncJSON(relativePath, request);
            return response;
        }

        protected Response ApiGet(string relativePath)
        {
            var response = apiClient.GetAsyncJSON(relativePath);
            return response;
        }

    }
}
