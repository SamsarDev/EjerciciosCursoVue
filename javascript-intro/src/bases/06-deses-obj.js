
const person = {
    name: 'Tony',
    age: 45,
    codeName: 'IronMan'
}

const { name, age, codeName, power = "No powers" } = person

/* 
console.log( name )
console.log( age )
console.log( codeName )
console.log( power )
 */

const createHero = ({ name, age, codeName, power = "No powers" }) => ({
    id: 123456,
    name,
    age,
    codeName,
    power
})

console.log( createHero( person ))
