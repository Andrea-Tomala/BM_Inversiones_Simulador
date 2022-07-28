using log4net;
using log4net.Config;
using System;
using System.IO;
using System.Reflection;
using System.Xml;

namespace PortalWebBM.Providers
{
    public interface ILoggerManager
    {
        void Information(string message);
        void Error(string message, Exception e);
        void InformationParams(string message, object p);
    }

    public class LoggerManager : ILoggerManager
    {
        private readonly ILog _logger = LogManager.GetLogger(typeof(LoggerManager));

        public LoggerManager()
        {
            try
            {
                XmlDocument log4netConfig = new XmlDocument();

                using (var fs = File.OpenRead("log4net.config"))
                {
                    log4netConfig.Load(fs);
                    var repo = LogManager.CreateRepository(Assembly.GetEntryAssembly(), typeof(log4net.Repository.Hierarchy.Hierarchy));
                    XmlConfigurator.Configure(repo, log4netConfig["log4net"]);
                    _logger.Info("Log System Initialized");
                }
            }
            catch (Exception ex)
            {
                _logger.Error("Error", ex);
            }
        }
        public void Information(string message)
        {
            _logger.InfoFormat(message);
        }

        public void Error(string message, Exception e)
        {
            _logger.Error(message, e);
        }

        public void InformationParams(string message, object p)
        {
            _logger.InfoFormat(message, p);
        }
    }
}
