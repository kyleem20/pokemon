import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawPokemonApi() {
  const pokemons = ProxyState.pokemonApiPokes
  let template = ''
  pokemons.forEach(p => template += `<p class="m-1 selectable" onclick="app.pokemonsController.getPokemonApiPokesByName('${p.name}')">${p.name}</p>`)
  document.getElementById('allPokemons').innerHTML = template
}

function _drawMyPokemons() {
  const pokemons = ProxyState.myPokemons
  let template = ''
  pokemons.forEach(p => template += `
  <p class="m-1 selectable" onclick="app.pokemonsController.setActive('${p.id}')">
    ${p.name}
  </p>
  `)
  // REVIEW creates a new array of all the 'prepared' spells and gets is length (count)
  // let preparedSpells = spells.filter(s => s.prepared).length
  // spells.forEach(s => template += `
  // <p class="m-1 selectable" onclick="app.spellsController.setActive('${s.id}')">
  //   ${s.name} ${s.prepared ? '<i class="text-info mdi mdi-book"></i>' : ''}
  // </p>
  // `)
  // // render if there are no spells
  // if (!template) {
  //   template = '<p class="text-grey darken-20">No Spells</p>'
  // }
  // template = `<h4 class="text-info"> ${preparedSpells} / ${spells.length}</h4>` + template
  document.getElementById('my-pokemons').innerHTML = template
}

function _drawActivePokemon() {
  let template = ''
  if (ProxyState.activePokemon) {
    template = ProxyState.activePokemon.Template
  }
  document.getElementById('active-pokemon').innerHTML = template
}

export class PokemonsController {
  constructor() {
    this.getPokemonApi()
    this.getMyPokemons()

    ProxyState.on('pokemonApiPokes', _drawPokemonApi)
    ProxyState.on('myPokemons', _drawMyPokemons)
    ProxyState.on('activePokemon', _drawActivePokemon)
  }

  async getMyPokemons() {
    try {
      await pokemonsService.getMyPokemons()
    } catch (error) {

      console.error("[Sandbox API Error]", error)
    }
  }

  async getPokemonApi() {
    try {
      await pokemonsService.getPokemonApi()
    } catch (error) {

      console.error("[Pokemon API Error]", error)
    }
  }

  async getPokemonApiPokesByName(name) {
    try {
      await pokemonsService.getPokemonApiPokesByName(name)

    } catch (error) {
      console.error("[Pokemon API Error]", error)
    }
  }
  setActive(id) {
    pokemonsService.setActive(id)
  }

}
