<template>
  <div class="container content-router-view">
    <PokedexEmptyList v-if="!filteredPokemonList.length" />
    <PokedexItemList v-else v-for="pokemon in filteredPokemonList" :key="pokemon.name" :pokemon="pokemon" />
    <div class="d-flex justify-content-center p-3">
      <button v-if="!isLoading && !searchQuery" @click="loadPokemonList(pokemonList.length)"
        class="pokedex-btn pokedex-btn-warning">
        Load More Pokémon
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useFavoritesStore } from "@/stores/favorites";
import PokedexItemList from "@/components/PokedexItemList.vue";
import PokedexEmptyList from "@/components/PokedexEmptyList.vue";

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true,
  },
  loadPokemonList: {
    type: Function,
    required: true,
  },
  searchQuery: {
    type: String,
    required: true,
  }
});

const store = useFavoritesStore();

const pokemonList = computed(() => store.pokemonList);

const filteredPokemonList = computed(() => {
  if (!props.searchQuery) {
    return pokemonList.value;
  }
  return pokemonList.value.filter(pokemon =>
    pokemon.name.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});
</script>

<style scoped>
@media (min-width: 992px) {
  .content-router-view {
    max-width: 85%;
  }
}
</style>
