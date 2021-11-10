<template>
  <div class="options-container">
    <ul>
      <li 
        v-for="pokemon in pokemons" 
        :key="pokemon.id"
        @click="$emit( 'selection', pokemon.id )"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PokemonOptions",
  props: {
    pokemons: {
      type: Array,
      default: [],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.options-container {
  display: flex;
  justify-content: center;
  ul {
    list-style-type: none;
    li {
      background-color: white;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      margin-bottom: 10px;
      width: 250px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>