// const logger = require('./3modulos.js')
// logger.info('This is an informational message')
// logger.verbose('This is a verbose message')

/*
    Resultado:
        info: This is an informational message
        verbose: This is a verbose message
*/


//<----------------------------------------------->
// const logger = require('./3modulos.js')
// logger('información de la información')
// logger.verbose('Verbose de la verbosea');
/*
    Resultado: 
        info: información de la información
        verbose: Verbose de la verbosea
*/

//<----------------------------------------------->
// const Logger = require('./3modulos.js')
// const dbLogger = new Logger('DB')
// dbLogger.info('This is an informational message')
// const accessLogger = new Logger('ACCESS')
// accessLogger.verbose('This is a verbose message')

/*
    Resultado:
        [DB] info: This is an informational message
        [ACCESS] verbose: This is a verbose message
*/


//<----------------------------------------------->

// const logger = require('./3modulos.js')
// logger.log('This is an informational message')

// const customLogger = new logger.constructor('CUSTOM')
// customLogger.log('This is an informational message of the new instance')



//<----------------------------------------------->

// require('./3ejemplos2')
// const logger = require('./3modulos.js')
// logger.customMessage()


//<----------------------------------------------->

import * as loggerModule from './3modulos.mjs'
console.log(loggerModule)

/*
Resultado: 
[Module: null prototype] {
  DEFAULT_LEVEL: 'info',
  LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
  Logger: [class Logger],
  log: [Function: log]
}
*/