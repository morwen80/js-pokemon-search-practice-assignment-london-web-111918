// i added this


let pokeContainer = document.querySelector('#pokemon-container')
let invokePokemon = document.querySelector("#pokemon-search-input")

let POKEDECK = []

function fetchPokemon(){
  fetch("http://localhost:3000/pokemon")
  .then(response => response.json())
  .then(data => {
    POKEDECK =  data
    data.forEach(renderPokemon)
  })


invokePokemon.addEventListener('input', (event) => {
    let filteredPokemons = POKEDECK.filter(pokeObj => pokeObj.name.includes(event.target.value.toLowerCase()))
    pokeContainer.innerHTML = ""
    filteredPokemons.forEach((pokemon => renderPokemon(pokemon)))
  })
}

    const renderPokemon = (pokemon) => {
      const pokeCard = document.createElement('div')
      pokeCard.innerHTML +=`
      <div class='pokemon-card'>
        <div class="pokemon-frame">
          <h1 class="center-text">${pokemon.name}</h1>
            <div class="pokemon-image">
              <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
            </div>
        </div>
      </div>
        `
      document.querySelector('#pokemon-container').appendChild(pokeCard)
      }

fetchPokemon()

//  ********** //

function flipCard(){
  imageNode = event.target
  id = event.target.dataset.id
    if (imageNode.src.includes("back") {
      imageNode.src = // front
    }) else {
      image.src = //back
    }
}
