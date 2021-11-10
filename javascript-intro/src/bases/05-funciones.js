
/*
// Evitar usarlo, debido a que permite reasignar el valor de saludar

function saludar( nombre ) {
    return `Hola ${ nombre }`
} 
*/

/* const saludar = function( nombre ) {
    return `Hola ${ nombre }`
} */

const saludar = ( nombre = 'Peter' ) => `Hola ${ nombre }`

const nombre = "Tony"

//console.log( saludar(nombre) )

const getUser = () => ({ 
    uid: "#2dasd", 
    username: "Tony001" 
})

const heroes =[
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

const heroExist = ( id ) => ( heroes.some( heroe => heroe.id === id ) )

const getHero = ( id ) => {
    const heroExist = heroes.some( heroe => heroe.id === id)

    if ( heroExist ) {
        const { name } = heroes.find( heroe => heroe.id === id)
        return name
    } else {
        throw new Error("El heroe no existe")
        return Error
    }
}

console.log( getHero(3) )
