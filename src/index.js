// const API_URL = 'http://localhost:3000/pokemons'
// // const pokeListEl = document.querySelector('#poke-list')
// const pokeFormEl = document.querySelector('#pokemon-search-input')
// const pokeNameInputEl = document.querySelector('[name="poke-name"]')
// const pokeImageInputEl = document.querySelector('[name="poke-image"]')
// const pokeShow = document.getElementById('pokemon-container');
//
//
//
//
// document.addEventListener("DOMContentLoaded", () => {
//   const taskList = new TaskList();
//   taskFormEl.addEventListener('submit', (event) => taskList.handleFormSubmit(event, taskList))
// });
// //   // console.log(POKEMON)
// //
// //   function fetchPokemon() {
// //     fetch(`http://localhost:3000/pokemon`)
// //     .then(response => response.json())
// //     .then(data => data.forEach(renderSinglePokemon))
// //   }
// // })
// //
// // // const filteredPk = POKEMON.filter(poke => po)
// // const pokeSpace = document.getElementyById('pokemon-container')
// //
// //   const renderSinglePokemon = (pokemon) => {
// //     const pokeEl = document.createElement('div')
// //     pokeEl.className = 'pokemon-card'
// //
// //     const pokeFrame = docum
// //
// //
// //     pokeEl.innerHTML = `
// //       <h1>${pokemon.name}</h1>
// //       <img src="${pokemon.sprites.front}">
// //       `
// //     pokeListEl.appendChild(pokeEl)
//
//
//
//
// function getPokemons () {
// fetch(API_URL)
//   .then(response => response.json())
//   .then(data => { data.forEach(renderSinglePokemon)})
// }
//
// const renderSinglePokemon = (pokemon) => {
// const pokeEl = document.createElement('div')
// pokeEl.className = 'pokemon-card'
// pokeEl.innerHTML = `
//   <!-- <img src="${pokemon.image}" /> -->
//   <h2>${pokemon.name}</h2>
// `
// pokeListEl.appendChild(pokeEl)
// }
//
// pokeFormEl.addEventListener('submit', handleFormSubmit)
//
// function handleFormSubmit (event) {
// event.preventDefault()
//
// const newPokemon = {
//   name: pokeNameInputEl.value,
//   // image: pokeImageInputEl.value
// }
//
// console.log('new pokemon', newPokemon)
// renderSinglePokemon(newPokemon)
// savePokemonToApi(newPokemon)
// }
//
// // const savePokemonToApi = (pokemon) => {
// // fetch(API_URL, {
// //   method: 'POST',
// //   headers: {
// //     "Content-Type":"application/json"
// //   },
// //   body: JSON.stringify(pokemon)
// // }).then(console.log)
// // }
//
// getPokemons()
//
// })
