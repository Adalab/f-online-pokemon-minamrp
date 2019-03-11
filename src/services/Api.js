const URL = "http://pokeapi.salestock.net/api/v2/pokemon?limit025";

const getPokemons = () =>
  fetch(URL)
    .then(res => res.json());
    
export {
    getPokemons,
};