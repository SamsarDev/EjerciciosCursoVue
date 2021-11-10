import { getHeroById } from "./bases/08-imp-exp"


const getHeroByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout(() => {
            const hero = getHeroById( id )

            if ( hero ) {
                resolve( hero )
            } else {
                reject( new Error('Heroe no existe') )
            }
        }, 1000);
    });
}

getHeroByIdAsync( 100 )
    .then( console.log )
    .catch( console.log )




/* console.log('Inicio')

new Promise( ( resolve, reject) => { 
    console.log('Cuerpo de la promesa')

    resolve('Promesa resuelta')
    //reject('Promesa resuelta con error')
})
.then( console.log )
.catch( console.log )


console.log('Fin') */
