
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123546,
        lat: 1024.251,
        lmg: 10.54872,
    }
}

// Spread operator
const persona2 = { ...persona }
persona2.nombre = 'Peter'

console.log( persona )
console.log( persona2 )
