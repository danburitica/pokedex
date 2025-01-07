import { ref } from 'vue'
import { fetchPokemonList } from '@/utils/pokeapi'
import { useFavoritesStore } from '@/stores/favorites'

export function usePokemon() {
  const pokemonList = ref([])
  const isLoading = ref(false)
  const store = useFavoritesStore()

  const loadPokemonList = async (offset, limit = 20) => {
    if (isLoading.value) return
    isLoading.value = true

    try {
      const data = await fetchPokemonList(limit, offset)
      pokemonList.value = [...pokemonList.value, ...data.results]
      store.setPokemonList(pokemonList.value)
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    pokemonList,
    isLoading,
    loadPokemonList,
  }
}
