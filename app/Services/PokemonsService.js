import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonApi, sandboxApi } from "./AxiosService.js"
class PokemonsService {

  async getPokemonApi() {
    const res = await pokemonApi.get('')
    ProxyState.pokemonApiPokes = res.data.results
    console.log(res.data)
  }

  async getMyPokemons() {
    const res = await sandboxApi.get('')
    console.log(res.data)
    const pokemons = res.data.map(p => new Pokemon(p))
    ProxyState.myPokemons = pokemons
  }

  setActive(id) {
    const pokemon = ProxyState.myPokemons.find(p => p.id == id)
    ProxyState.activePokemon = pokemon
  }

  async getPokemonApiPokesByName(name) {
    const res = await pokemonApi.get(name)
    const pokemon = new Pokemon(res.data)
    ProxyState.activePokemon = pokemon
  }

}

export const pokemonsService = new PokemonsService();

