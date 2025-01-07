import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    pokemonList: [],
  }),
  actions: {
    toggleFavorite(pokemonName) {
      const index = this.favorites.findIndex((favPokemonName) => favPokemonName === pokemonName)
      if (index !== -1) {
        this.favorites.splice(index, 1)
      } else {
        this.favorites.push(pokemonName)
      }
      this.saveToLocalStorage()
    },
    isFavorite(pokemonName) {
      return this.favorites.some((favPokemonName) => favPokemonName === pokemonName)
    },
    saveToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    },
    setPokemonList(pokemonList) {
      this.pokemonList = pokemonList
    },
  },
})
