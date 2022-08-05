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
    console.log(myModule) // resultado: { publicFoo: [Function: publicFoo], publicBar: [Function: publicBar] }

    console.log(myModule.privateFoo, myModule.privateBar)// resultado: undefined undefined

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

setTimeout(() => {
    module.exports = function() {
        console.log('esto está mal, muyyyyy mal')
    }
    }, 100);


