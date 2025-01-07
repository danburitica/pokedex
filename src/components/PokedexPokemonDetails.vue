<template>
  <div class="modal fade" :id="`pokemonModal-${pokemonName}`" tabindex="-1" aria-labelledby="pokemonModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header position-relative p-0">
          <img src="@/assets/background.svg" alt="Modal Background" class="w-100 h-100 object-fit-cover" />
          <img v-if="pokemonDetails?.pokemonImage" :src="pokemonDetails.pokemonImage" alt="Pokemon"
            class="pokemon-image-header position-absolute" />
          <img src="@/assets/icons/close.svg" alt="Close"
            class="close-icon ms-auto position-absolute top-0 end-0 mt-3 me-3" data-bs-dismiss="modal"
            aria-label="Close" />
        </div>
        <div class="modal-body">
          <template v-if="pokemonDetails">
            <p class="border-bottom p-3 pokedex-subtitle fw-medium"><span class="fw-bold">Name:</span> {{
              capitalizeFirstLetter(pokemonDetails.name) }}</p>
            <p class="border-bottom p-3 pokedex-subtitle fw-medium"><span class="fw-bold">Weight:</span> {{
              pokemonDetails.weight }}</p>
            <p class="border-bottom p-3 pokedex-subtitle fw-medium"><span class="fw-bold">Height:</span> {{
              pokemonDetails.height }}</p>
            <p class="border-bottom p-3 pokedex-subtitle fw-medium"><span class="fw-bold">Types:</span> {{
              pokemonTypes
            }}</p>
          </template>
          <template v-else>
            <p>Loading Pokémon details...</p>
          </template>
        </div>
        <div class="modal-footer border-0 justify-content-around">
          <button class="pokedex-btn pokedex-btn-active" @click="copyToClipboard">Share to my friends</button>
          <img :src="favoriteIcon" alt="Favorite" class="fav-icon" @click="toggleFavorite" />
        </div>
      </div>
    </div>
  </div>

  <div class="toast-container position-fixed p-3 bottom-0 start-50 translate-middle-x mb-4">
    <div id="successToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-body text-center">
        Content copied to clipboard!
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useFavoritesStore } from "@/stores/favorites";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';


const props = defineProps({
  pokemonName: {
    type: String,
    required: true,
  },
  pokemonDetails: {
    type: Object,
    default: null,
  },
});

const store = useFavoritesStore();

const isFavorite = computed(() => store.isFavorite(props.pokemonName));
const favoriteIcon = computed(() =>
  isFavorite.value
    ? "/src/assets/icons/fav-active.svg"
    : "/src/assets/icons/fav-disabled.svg"
);
const pokemonTypes = computed(() => {
  if (!props.pokemonDetails || !props.pokemonDetails.types) return "";
  return props.pokemonDetails.types
    .map((typeInfo) => capitalizeFirstLetter(typeInfo.type.name))
    .join(", ");
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function toggleFavorite() {
  store.toggleFavorite(props.pokemonName);
}
async function copyToClipboard() {
  try {
    const content = `Name: ${capitalizeFirstLetter(props.pokemonDetails.name)}, Weight: ${props.pokemonDetails.weight}, Height: ${props.pokemonDetails.height}, Types: ${pokemonTypes.value}`;
    await navigator.clipboard.writeText(content);

    const toast = new bootstrap.Toast(document.getElementById('successToast'));
    toast.show();
  } catch (err) {
    console.error("Error copying to clipboard:", err);
  }
}
</script>

<style scoped>
.fav-icon {
  width: 2.8rem;
  height: 2.8rem;
}

.close-icon,
.fav-icon {
  cursor: pointer;
}

.modal-header {
  height: 25vh;
}

.pokemon-image-header {
  height: 90%;
  left: 50%;
  transform: translate(-50%);
}

.border-bottom {
  width: 80%;
  margin: 0 auto;
}
</style>
