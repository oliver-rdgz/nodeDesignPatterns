import * as loggerModule from './export.mjs'
console.log(loggerModule)
console.log(loggerModule.default)

/* no se puede importar de la siguiente forma porque fallará:
import { default } from './export.mjs'
*/