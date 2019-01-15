function fetchPokemon(){
  fetch("http://localhost:3000/pokemon")
  .then(response => response.json())
  .then(data => {
    if (pokeInput.value !== "" {
      filterPokemon(data)
    }
    data.forEach((pokemon_hash) => )
  })



const pokeInput = document.querySelector("#pokemon-search-input")
function filterPokemon(array){
  array.filter((pokemon_hash) => {
    pokemon_has.name.includes(pokeInput.value.toLowerCase())

  })
}


function flipCard(){
  imageNode = event.target
  id = event.target.dataset.id
    if (imageNode.src.includes("back") {
      imageNode.src = // front
    }) else {
      image.src = //back
    }
}
