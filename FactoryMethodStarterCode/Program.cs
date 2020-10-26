using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Logger;
using System.Configuration;

namespace FactoryMethodStarterCode
{
    class Program
    {
        static void Main(string[] args)
        {
            ILoggerFactory factory = LoadFactory("ConsoleFactory");
            ILogger logger_1 = factory.CreateLogger();
            ILogger logger_2 = factory.CreateLogger(LogLevel.ERROR);

            // No longer able to new a ConsoleLogger
            //ConsoleLogger test = new ConsoleLogger();

            logger_1.Log("Log Message");
            logger_2.Log(LogLevel.WARN, "Should not see this");
            logger_2.Log(LogLevel.ERROR, "Error Message");
            logger_2.Log(LogLevel.FATAL, "Fatal Message");

            ILoggerFactory ffactory = LoadFactory("FileFactory");
            ILogger flogger_1 = ffactory.CreateLogger();
            ILogger flogger_2 = ffactory.CreateLogger(LogLevel.ERROR);
           
            flogger_1.Log("Log message");
            flogger_2.Log(LogLevel.WARN, "Should not see this");
            flogger_2.Log(LogLevel.ERROR, "Error Message");
            flogger_2.Log(LogLevel.FATAL, "Fatal Message");

            //ConsoleLoggerFactory f = new ConsoleLoggerFactory();
        }

        private static ILoggerFactory LoadFactory(string factoryName)
        {
            string factoryTypeAsString = ConfigurationManager.AppSettings[factoryName];
            Type factoryType = Type.GetType(factoryTypeAsString);
            return (ILoggerFactory)Activator.CreateInstance(factoryType);
        }

    }
}
