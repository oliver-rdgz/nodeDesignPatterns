//Modulos


//La necesidad de los modulos

/*
-Tener una forma de dividir el código base en varios archivos.

-Permitir la reutilización de código en diferentes proyectos.

-Encapsulación (u ocultación de información).

-Gestión de dependencias.


Es importante aclarar la distinción entre un módulo y un sistema de módulos. Podemos definir un módulo como la unidad real de software, mientras que un sistema de módulos es la sintaxis y las herramientas que nos permiten definir módulos y usarlos dentro de nuestros proyectos. <--- explicación del libro
*/


//Sistemas de módulos en JavaScript y Node.js
/*
    Node desde sus origenes utilizó el sistema de modulos llamado COMMONJS. Luego el estandar de Javascript creo otro sistema de modulos llamado Module ESM o modulos ECMAscript.

    El libro trata de que entendamos los dos sistemas, pero ellos solo van a utilizar el COMMONJS durante este capitulo y durante el resto del libro van a utilizar el ESM, para que se nos haga mas facil utilizar todas las funcionalidades y el potencial del ESM.
*/

//<---------------------------------------->
//El sistema de módulos y sus patrones.
/*
    analicemos un patrón genérico que ayuda a ocultar información y que usaremos para construir un sistema de módulo simple, que es el patrón de módulo revelador.

    //The revealing module pattern (El sistema de módulos y sus patrones.)
        Basicamente el javascript para el navegador presentaba un problema con los namespacing lo que es un nombre que que sirve para identificar una variable, función clase, etc... lo que pasaba con el namespacing es que se podian repetir en dos scripts diferentes ya que el scripts de una pagina web se ejecutaba de forma global, probocando que si una libreria tenia el mismo nombre asignado en una función de la misma forma que tu lo tienes en un script puede ocasionar un error al momento de ejecutar el codigo.

    Una de las soluciones para el problema es el patrón de módulo revelador (The revealing module pattern) que se puede apreciar de la siguiente forma:

*/


const myModule = (() => {
        const privateFoo = () => {}
        const privateBar = []
        const exported = {
            publicFoo: () => {},
            publicBar: () => {}
        }
        return exported
    })() // once the parenthesis here are parsed, the function
    // will be invoked

    // console.log(myModule) 
    // resultado: { publicFoo: [Function: publicFoo], publicBar: [Function: publicBar] }

    // console.log(myModule.privateFoo, myModule.privateBar)
    // resultado: undefined undefined

    //En el código anterior, la variable myModule contiene solo la API exportada, mientras que el resto del contenido del módulo es prácticamente inaccesible desde el exterior. <--- explicación del libro

    /**
    Resumamos dos de los conceptos principales de la especificación CommonJS:
        • require es una función que le permite importar un módulo desde el local
        sistema de archivos
        • exports y module.exports son variables especiales que se pueden usar para exportar
        funcionalidad pública del módulo actual
     */


// <-------------------------------------------------->
// const fs = require('fs');
//Un cargador de módulos casero
//Comencemos por crear una función que cargue el contenido de un módulo, lo envuelva en un ámbito privado y lo evalúe:

// function loadModule (filename, module, require) {
//     const wrappedSrc = `(function (module, exports, require) {
//     ${fs.readFileSync(filename, 'utf8')}
//     })(module, module.exports, require)`
//     eval(wrappedSrc)
// }

// //Ahora implementemos la función require() :

// function require (moduleName) {
//     console.log(`Require invoked for module: ${moduleName}`)
//     const id = require.resolve(moduleName) // (1)
//     if (require.cache[id]) { // (2)
//         return require.cache[id].exports
//     }
//     // module metadata
//     const module = { // (3)
//         exports: {},
//         id
//     }
//     // Update the cache
//     require.cache[id] = module // (4)
//     // load the module
//     loadModule(id, module, require) // (5)
//     // return exported variables
//     return module.exports // (6)
// }

// require.cache = {}
// require.resolve = (moduleName) => {
// /* resolve a full module id from the moduleName */
// }

// const dependency = require('./anotherModule.js')
// // a private function
// function log() {
//     console.log(`Well done ${dependency.username}`)
// }
// // the API to be exported for public use
// module.exports.run = () => {
//     log()
// }


//<-------------------------->
//La función require es síncrona
/* 
    Como el require() de node es sincronico significa que el module.exports tambien es sincronico lo cual no indica que el siguiente codigo es correcto
*/

// setTimeout(() => {
//     module.exports = function() {
//         console.log('esto está mal, muyyyyy mal')
//     }
//     }, 100);

    //The resolving algorithm (Algoritmo de resolución)

    /*
    Basicamente nos preguntan como se hace para que varios paquetes dependan de un paquete y el paquete esté instalado con diferentes versiones.

    Aqui se pone turbio todo, porque para explicarlo se necesita un poco de ayuda. Vamos a ayudarnos de un ejemplo:

    Vamos a decir que P1, P2 y P3 son paquetes de node que tu instalas en tu proyecto, pero todos ellos dependen de un paquete llamado P4, pero P1 tiene instalada la version 2 de P4, P2 tiene instalada la version 3 de P4 y P3 tiene instalada la version 1 de P4, ¿Como se hace para que cada versión de P4 corra en cada paquete sin causarle problema a los otros paquetes? Pues facil cada paquete P1, P2 y P3 tiene su propio node_modules que les permite instalar sus paquetes independientemente de nuestro node_modules y de otros paquetes.
    */

    //The module cache (modulo cache)
    /*
    Basicamente los modulos son son cargados y evaluados solo cuando se llaman por primera vez ya que, despues de que son llamados por primera vez son guardados en la memoria cache y cuando se hace una llamada al modulo, el modulo es llamado desde la memoria cache, se puede llamar la memoria cache por la variable "require.cache".
    */

    //Circular dependencies
    /*
    joder aqui usuaron hasta dibujitos para explicar, esto es muy dificil de explicar solo con palabras.
    */


    //Module definition patterns (patrones de definición de modulo)
    /*
    Los patrones mas utilizados y que se van a analizar son :
        named exports
        exporting functions 
        classes and instances
        monkey patching.
    */

    //named exports
    /*
    realizar exportaciones con el nombre exports ejemplo:
    */

    // exports.info = (message) => {
    //     console.log(`info: ${message}`)
    // }
    // exports.verbose = (message) => {
    //     console.log(`verbose: ${message}`)
    // }

    //Exporting a function (Exportando una función)
    /* 
        es utilizar el module.exports para exportar una función, ejemplo:
    */

    // module.exports = (message) => {
    //     console.log(`info: ${message}`)
    // }

    //El patron anterior se puede extender de la siguiente manera, permitiendo exportar una función principal y además funciones secundarias o avanzadas, ejemplo:
    
    // module.exports.verbose = (message) => {
    //     console.log(`verbose: ${message}`)
    // }

    /*
    Un modulo debe ser single-responsibility principle (SRP), eso quiere decir que el modulo debe exportar una unica función que haga una cosa bien hecha, sin la necesidad de de funciones secundarias.
    */


    //Exporting a class (Exportando clases)
    /*
        exportar una clase es un patron de diseño que te permite crear  diferentes instancias mediante el constructor, ejemplo:
    */

    // class Logger {
    //     constructor (name) {
    //         this.name = name
    //     }
    //     log (message) {
    //         console.log(`[${this.name}] ${message}`)
    //     }
    //     info (message) {
    //         this.log(`info: ${message}`)
    //     }
    //     verbose (message) {
    //         this.log(`verbose: ${message}`)
    //     }
    // }
    // module.exports = Logger



    //Exporting an instance (Exportando una instancia)
    /*
        El patron es solo exportar una instancia de una clase, permitiendo exportar la misma instancia en todos los modulos donde sea llamado, el cual tiene un parecido al patron sigleton ya que se puede instanciar varias veces dentro un mismo modulo, esto genera que el instancia no sea unica, ejemplo:
    */
    // class Logger {
    //     constructor (name) {
    //         this.count = 0
    //         this.name = name
    //     }
    //     log (message) {
    //         this.count++
    //         console.log('[' + this.name + '] ' + message)
    //     }
    // }
    // module.exports = new Logger('DEFAULT')



//Modifying other modules or the global scope (Modificar otros módulos o el ámbito global)
/*
    Un módulo puede modificar otros módulos u objetos en el ámbito global; bueno, esto se llama monkey patching, ejemplo:
*/

// module.exports = {
//     customMessage: function () {
//         console.log('This is a old functionality')
//     }
// }

//Modulo ESM (ECMAScript)
/*
    los modulos ESM tienen lo mejor de los sistemas de modulos anteriors los cuales son Commonjs y AMD, tambien la dependencia ciclica y los modulos asincronos.

    el siguiente codigo no es valido para el sistema de modulo ESM
*/

// if (condition) {
//     import module1 from 'module1'
//     } else {
//     import module2 from 'module2'
// }

/* mientras que en el sistema de modulo Commonjs, el codigo anterior seria perfectamente valido */


// exports a function as `log`
export function log (message) {
    console.log(message)
}
    // exports a constant as `DEFAULT_LEVEL`
    export const DEFAULT_LEVEL = 'info'
    // exports an object as `LEVELS`
    export const LEVELS = {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5
    }
    // exports a class as `Logger`
    export class Logger {
        constructor (name) {
            this.name = name
        }
        log (message) {
            console.log(`[${this.name}] ${message}`)
        }
    }

