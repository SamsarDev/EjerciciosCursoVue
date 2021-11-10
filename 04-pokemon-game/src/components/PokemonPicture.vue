<template>
  <div class="pokemon-container">

    <img 
      :src="imgSrc" 
      class="pokemon-shadow" 
      alt="pokemon" 
    />
    <img
      v-if="showPokemon"
      :src="imgSrc"
      class="fade-in"
      alt="pokemon"
    />

  </div>
</template>

<script>
//const max_of_pokemons_in_api = 600;

export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      default: 1,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
      required: true,
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon-container {
  height: 200px;
  position: relative;
  img {
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    -webkit-user-drag: none;
    &.pokemon-shadow {
      filter: brightness(0);
    }
  }
}
</style>