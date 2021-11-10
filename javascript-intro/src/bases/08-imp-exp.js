
import heroes, { owners } from '../data/heroes'

// Regresar heroe por id
const getHeroById = (id) => heroes.find( heroe => heroe.id === id)


// Regresar heroes por propietario
const getHeroesByOwner = (owner) => heroes.filter( heroe => heroe.owner === owner)

export { getHeroById, getHeroesByOwner };

/* 
import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp"


console.log( getHeroById( 2 ) )

console.log( getHeroesByOwner( 'DC' ))

*/