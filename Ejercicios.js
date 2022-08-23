function convertirTexto() {
    //Crear una funcion para generar el hash de un texto como numero entero
    //Usando métodos ya establecidos
    //Aqui tu codigo
}

function convertirTexto(txt) {
    if (typeof txt == 'string'){
        if(!txt.length){ return null}
        var texto = txt.split('')
        return texto.reduce((h, c) => (c.charCodeAt(0)+h))
    }else return "Error: Ingrese un texto"

}
console.log(convertirTexto('HOLA'))

function HashTable() {
    //      Hash Table
    //      Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
    //      Para guardar un valor asociado a una key (string):
    //    - Correr la key a través de una función hash para transformarla a un número entero.
    //    - Establecer el par llave/valor en tu tabla hash -- Usa un set
    //    - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
    //      Aqui tu codigo

}

function HashTable() {

    const diccionario = new Map();

    diccionario.set("Saludo", "Acción y efecto de saludar.")
    diccionario.set("Imágen", "Figura, representación, semejanza y apariencia de algo.")
    diccionario.set("Clave", "Código de signos convenidos para la transmisión de mensajes secretos o privados.")
    diccionario.set("Puerta", "Hueco o abertura regular en una pared, una cerca, una verja, etc., desde el suelo hasta una altura conveniente, que se usa para entrar y salir.")

    return diccionario
}

const Tabla = HashTable()

console.log (Tabla.get("Puerta"))