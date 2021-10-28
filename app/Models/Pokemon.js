
export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    // this.index = data.index || ''
    this.name = data.name
    // this.nickName = data.nickName
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    // this.img = data.img || data.sprites?.join('\n\n')

  }

  get Template() {
    return `
     <div class="w-75 bg-white elevation-1 p-3 d-flex flex-column">
          <div class="text-center">
            <h3>${data.name}</h3>
            <p><b>Nickname: </b>n/a</p>
            <p><b>Weight:</b> ${data.weight} | <b>Height:</b> ${data.height}</p>
            <p><b>Types:</b> ${data.types} </p>
          </div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg" alt="pokemon">
          <div class="d-flex justify-content-between justify-self-end mt-auto">
            <div>
              <input type="checkbox" name="caught" id="caught">
              <label for="prepared">Caught</label>
            </div>
            ${this.Button}
          </div>
        </div>
    `

  }




  get Button() {
    if (this.index) {
      return '<button class="btn btn-success" onclick="app.pokemonsController.addPokemon()">Catch</button>'
    }

    return `<button class="btn btn-danger" onclick="app.pokemonsController.removePokemon()">Release</button>`
  }
}