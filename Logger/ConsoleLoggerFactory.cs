﻿using Logger;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger
{
    public class ConsoleLoggerFactory : ILoggerFactory
    {
        //internal ConsoleLoggerFactory() { }

        public ILogger CreateLogger()
        {
            return new ConsoleLogger();
        }
        public ILogger CreateLogger(LogLevel lvl)
        {
            return new ConsoleLogger(lvl);
        }


    }
}
