using Microsoft.Extensions.Configuration;

namespace PortalWebBM.Helper
{
    public class Configuracion
    {

        private readonly string _url;
        private readonly string _urlBank;
        private readonly string _allowedOrigins;
        public Configuracion()
        {
            ConfigurationBuilder builder = (ConfigurationBuilder)new ConfigurationBuilder()
                  .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);
            IConfiguration configuration = builder.Build();
            _url = configuration["urlApi"];
            _urlBank = configuration["urlBank"];
            _allowedOrigins = configuration["origins"];
        }
        public string Url { get { return _url; } }
        public string BankUrl { get { return _urlBank; } }
        public string AllowedOrigins { get { return _allowedOrigins; } }

    }
}
