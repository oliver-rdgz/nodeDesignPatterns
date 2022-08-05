//Como funciona nodejs


//La I/O es lento (I = input (entrada),  O = output (salida))
/*
    El output y el input son las operaciones mas lentas para la pc. Basicamente la pc pierde mucho tiempo mientras busca la información sea en el disco duro o en el internet, para luego mostrarsela al usuario. 

    Y el input en muchas ocasiones es proporcionada por una persona real y como sabemos una persona real es mas lenta que una computadora.
*/


//Blocking I/O
/*
    Bloqueo de I/O, lo que pasa es que en un servidor normal los usuarios pueden hacer varias conexiones y cada conexión es una peteición que debe ser procesada, entonces ¿que pasa cuando pedimos datos a la base de datos? lo que pasa es que se bloque el hilo de procesamiento haciendo que el procesador tenga que esperar a que los datos de la base de datos lleguen para luego procesarlo y enviarle una respuesta a la petición del usuario.

    Como se puede ver se genera un bloque ya que las peticiones que van llegando al servidor no se ejecutan de manera inmediata, sino que les toca esperar a las peticiones anteriores finalizen para que las nuevas peticiones puedan ser procesadas.
*/



//Non-blocking I/O
/*
  Ummm aqui los procesos no tienen nada que ver con esperar datos, ni recursos, ni nada, el proceso no espera nada, si el recurso o dato no ha llegado para cuando es requerido se envia una respuesta predefinida.
*/



//Event demultiplexing
/*
    Si no está familiarizado con el término, en telecomunicaciones, la multiplexación se refiere al método mediante el cual múltiples señales se combinan en una para que puedan transmitirse fácilmente a través de un medio con capacidad limitada. La demultiplexación se refiere a la operación opuesta, mediante la cual la señal se divide nuevamente en sus componentes originales. Ambos términos se usan en otras áreas (por ejemplo, procesamiento de video) para describir la operación general de combinar cosas diferentes en una sola y viceversa. <--- explicación del libro
*/



//The reactor pattern
/*
    el patron reactor lo que busca es que un controlador en este caso un callback este asociado a una operación I/O 
*/


//