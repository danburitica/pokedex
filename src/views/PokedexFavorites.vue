<template>
  <div class="container content-router-view">
    <p v-if="favoritesStore.favorites.length === 0" class="pokedex-subtitle fw-bold text-center mt-5 ">
      No favorites found. Start adding some!
    </p>
    <PokedexEmptyList v-else-if="!filteredPokemonList.length" />
    <PokedexItemList v-else v-for="pokemon in filteredPokemonList" :key="pokemon" :pokemon="{ name: pokemon }" />
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
  searchQuery: {
    type: String,
    required: true,
  }
});

const favoritesStore = useFavoritesStore();

const filteredPokemonList = computed(() => {
  if (!props.searchQuery) {
    return favoritesStore.favorites;
  }
  return favoritesStore.favorites.filter(pokemon =>
    pokemon.toLowerCase().includes(props.searchQuery.toLowerCase())
  );
});
</script>
