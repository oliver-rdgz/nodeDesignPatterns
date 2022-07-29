//filosofia de nodejs

//Núcleo pequeño
/*
El nucleo de node se debe tener algunas reglas, una de ellas es tener el conjunto de funcionalidades lo más pequeño posible y aquello que no pertenece al nucleo de node es dejado a userland (userspace), este userland son los modulos externos que no pertenecen al core de node.

Esto hace que el codigo fuente de node tenga las funcionalidades principales y muy reducidas, permitiendo que una solución que desarrolle la comunidad no haga crecer el codigo funte de node, sino que lo hace mantenible y escalable.
*/


//Módulos pequeños
/*
Es el bloque de construcción para crear aplicaciones y bibliotecas reutilizables. En
Node.js, uno de los principios más evangelizados es diseñar módulos (y paquetes) pequeños.

Tener módulos más pequeños y más enfocados una sola tarea permite a todos compartir o reutilizar incluso el código más pequeño; es el principio Don't Repeat Yourself (DRY) aplicado a un nivel completamente nuevo.
*/