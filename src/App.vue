<template>
  <PokedexLoading v-if="isLoading" />
  <div v-else class="container vh-100">
    <div v-if="showSearchAndNavbar" class="input-group px-3 py-4 search-bar">
      <span class="input-group-text bg-white border-0">
        <img src="@/assets/icons/search.svg" alt="Search" class="icon-lupa">
      </span>
      <input type="text" class="form-control p-2 border-0" id="pokemonSearch" placeholder="Search" aria-label="Search"
        v-model="searchQuery" />
    </div>

    <div class="flex-grow-1">
      <router-view :isLoading="isLoading" :loadPokemonList="loadPokemonList" :searchQuery="searchQuery" />
    </div>

    <nav div v-if="showSearchAndNavbar" class="navbar d-flex justify-content-evenly align-items-center">
      <router-link to="/list" active-class="pokedex-btn-active"
        class="pokedex-btn d-flex align-items-center justify-content-center w-25">
        <img src="@/assets/icons/list.svg" alt="List" class="navbar-icon" /> All
      </router-link>
      <router-link to="/favorites" active-class="pokedex-btn-active"
        class="pokedex-btn d-flex align-items-center justify-content-center w-25">
        <img src="@/assets/icons/fav.svg" alt="Favorites" class="navbar-icon" /> Favorites
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import PokedexLoading from "@/components/PokedexLoading.vue";
import { usePokemon } from "@/composables/usePokemon";

const route = useRoute();
const showSearchAndNavbar = computed(() => route.path === "/list" || route.path === "/favorites");

const { isLoading, loadPokemonList } = usePokemon();

const searchQuery = ref("");

watch(route, () => {
  if (route.path !== "/list" || route.path !== "/favorites") {
    searchQuery.value = "";
  }
});

onMounted(() => {
  loadPokemonList(0);
});
</script>

<style lang="scss" scoped>
@import "@/scss/custom.scss";

.search-bar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  background-color: $pokedex-bg;
}

.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: $pokedex-bg;
  border-top: 1px solid #ddd;
  z-index: 10;
  box-shadow: 0px -5px 4px 0px #0000000D;
}

.navbar-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
}

.pokedex-btn {
  min-width: 10rem;
}

@media (max-width: 991.98px) {
  .search-bar {
    max-width: 100%;
  }
}

@media (min-width: 992px) and (max-width: 1799.98px) {
  .search-bar {
    max-width: 80%;
  }
}

@media (min-width: 1800px) {
  .search-bar {
    max-width: 70%;
  }
}
</style>
