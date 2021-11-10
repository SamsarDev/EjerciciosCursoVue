
const characters = ['Goku', 'Vegeta', 'Trunks']

const [ , , trunks , goten = 'Gothen' ] = characters

//console.log( trunks, goten )

const returnArray = () => {
    return ['ABC', 123]
}

const [ letters, numbers ] = returnArray()

console.log( letters, numbers )
