
const nombre = "Samuel"
const apellido = "Toledo"

const nombreCompleto = `${ nombre } ${ apellido }`

function getSaludo( nombre ) {
    return `Hola ${nombre}`
}

console.log(`Saludando: ${ getSaludo(nombre) }`)
