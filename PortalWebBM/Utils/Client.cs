using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using PortalWebBM.Providers;
using System;
using System.Net;
using System.Net.Http;

namespace PortalWebBM.utils
{
    public class Client
    {
        private HttpClient _httpClientApi;
        private readonly IConfiguration Configuration;
        private readonly ILoggerManager Log;
        private readonly string baseUrl;

        public Client(ILoggerManager logger, IConfiguration configurate)
        {
            Log = logger;
            Configuration = configurate;
            // Obtiene la url de la Api
            baseUrl = Configuration["urlApi"];
        }

        public Response GetAsyncJSON(string relativePath)
        {
            string responseData = "";
            Response response = new Response();

            try
            {
                Log.Information("Comunicandose con " + baseUrl + relativePath.Replace("\n", ""));
                var gettask = ClientApi.GetAsync(baseUrl + relativePath);
                gettask.Wait();

                HttpResponseMessage apiResponse = gettask.Result;

                if (apiResponse.IsSuccessStatusCode)
                {
                    responseData = apiResponse.Content.ReadAsStringAsync().Result;
                    if (!string.IsNullOrWhiteSpace(responseData))
                    {
                        response.IsSuccessful = true;
                        response.Data = responseData;
                    }
                }
                else
                {
                    response.IsSuccessful = false;
                    response.Data = responseData;
                    Log.Information(response.Data);
                }
            }
            catch (ArgumentNullException e)
            {
                Log.Error("Parametro Null", e);
                throw;
            }
            catch (Exception e)
            {
                Log.Error(e.Message, e);
                throw;
            }
            finally
            {
                _httpClientApi = null;
            }

            return response;
        }

        public Response PostAsyncJSON(string relativePath, object body)
        {
            Response response = new Response();
            try
            {
                var myContent = JsonConvert.SerializeObject(body);
                Log.InformationParams("Comunicandose con " + baseUrl + relativePath.Replace("\n", "") + " PARAMETROS: {0}", myContent);
                var stringContent = new StringContent(myContent, System.Text.Encoding.UTF8, "application/json");
                var taskpost = ClientApi.PostAsync(baseUrl + relativePath, stringContent);
                taskpost.Wait();

                HttpResponseMessage apiResponse = taskpost.Result;

                string responseData;
                if (apiResponse.IsSuccessStatusCode)
                {
                    Log.Information("Consumo Exitoso. " + relativePath);
                    responseData = apiResponse.Content.ReadAsStringAsync().Result;
                    if (!string.IsNullOrWhiteSpace(responseData))
                    {
                        response.IsSuccessful = true;
                        response.Data = responseData;
                    }
                }
                else
                {
                    Log.Information("Consumo con Error. " + relativePath);
                    responseData = apiResponse.Content.ReadAsStringAsync().Result;
                    response.IsSuccessful = false;
                    response.Data = responseData;
                    Log.Information(response.Data);
                }
            }
            catch (ArgumentNullException e)
            {
                Log.Error("Parametro Null", e);
                throw;
            }
            catch (Exception e)
            {
                if(((e.InnerException ?? e).Source ?? "").Equals("System.Net.Http"))
                {
                    Log.Error("Consumo con Error. " + relativePath, e);
                    response.IsSuccessful = false;
                    response.Data = "Servicio no disponible.";
                }
                else
                {
                    Log.Error(e.Message, e);
                    throw;
                }
            }
            finally
            {
                _httpClientApi = null;
            }
            return response;
        }
        // HttpClient para Api Servicios Web
        public HttpClient ClientApi
        {
            get
            {
                var httpClientHandler = new HttpClientHandler();
                httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, sslPolicyErrors) =>
                {
                    return true;
                };
                if (_httpClientApi == null)
                {
                    _httpClientApi = new HttpClient(httpClientHandler);
                }
                // Url Api
                _httpClientApi.BaseAddress = new Uri(baseUrl);
                return _httpClientApi;
            }
        }
    }
}
