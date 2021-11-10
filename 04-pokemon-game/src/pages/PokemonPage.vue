<template>
    <div v-if="!pokemon">
        <h1>Espere por favor ... </h1>
    </div>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>

        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
        />
        <PokemonOptions 
            :pokemons="pokemonArr" 
            @selection="checkAnswer" 
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </template>

    </div>
      
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonsArray() {
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer = true

            if ( this.pokemon.id === selectedId ) {
                this.message = `Correcto, es ${ this.pokemon.name }!`
            } else {
                this.message = `Oops!, Era ${ this.pokemon.name }.`
            }
        },
        newGame() {            
            this.pokemonArr = []
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''

            this.mixPokemonsArray()
        }
    },
    mounted() {
        this.mixPokemonsArray()
    }
}
</script>