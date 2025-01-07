import axios from 'axios'

const API_BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemonList = async (limit, offset) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon`, {
      params: { limit, offset },
    })
    return response.data
  } catch (error) {
    console.error('Error al obtener la lista de Pokémon: ', error)
    throw error
  }
}

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`)
    return response.data
  } catch (error) {
    console.error(`Error al obtener los detalles del Pokémon "${name}": `, error)
    throw error
  }
}
