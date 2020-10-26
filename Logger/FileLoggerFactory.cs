﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logger
{
    public class FileLoggerFactory : ILoggerFactory
    {
        //internal FileLoggerFactory() { }
        public ILogger CreateLogger()
        {
            return new FileLogger();
        }

        public ILogger CreateLogger(LogLevel lvl)
        {
            return new FileLogger(lvl);
        }
    }
}
