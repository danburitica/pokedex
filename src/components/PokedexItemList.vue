<template>
  <div class="pokedex-item d-flex align-items-center justify-content-between">
    <span class="pokedex-title" data-bs-toggle="modal" :data-bs-target="`#pokemonModal-${pokemon.name}`"
      @click="loadPokemonDetails">{{
        capitalizeFirstLetter(pokemon.name) }}</span>
    <img v-if="isFavorite" src="@/assets/icons/fav-active.svg" alt="Favorite" class="fav-icon"
      @click="toggleFavorite" />
    <img v-else src="@/assets/icons/fav-disabled.svg" alt="Favorite" class="fav-icon" @click="toggleFavorite" />
  </div>
  <PokedexPokemonDetails :pokemonName="pokemon.name" :pokemonDetails="pokemonDetails" />
</template>

<script setup>
import { useFavoritesStore } from "@/stores/favorites";
import { computed, ref } from "vue";
import PokedexPokemonDetails from "./PokedexPokemonDetails.vue";
import { fetchPokemonDetails } from "@/utils/pokeapi";

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const store = useFavoritesStore();
const isFavorite = computed(() => store.isFavorite(props.pokemon.name));

const pokemonDetails = ref(null);

async function loadPokemonDetails() {
  pokemonDetails.value = null;
  try {
    const details = await fetchPokemonDetails(props.pokemon.name);
    details.pokemonImage = details.sprites.other["official-artwork"].front_default;
    pokemonDetails.value = details;
  } catch (error) {
    console.error("Error loading Pokémon details:", error);
  }
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toggleFavorite() {
  store.toggleFavorite(props.pokemon.name);
}
</script>

<style scoped>
.pokedex-item {
  background-color: white;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
}

.pokedex-item:hover {
  transform: scale(1.02);
  background-color: #e8e8e8;
}

.pokedex-title {
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
}

.fav-icon {
  width: 2.8rem;
  height: 2.8rem;
}
</style>
