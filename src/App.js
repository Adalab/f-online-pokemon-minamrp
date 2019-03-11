import React, { Component } from 'react';
import './App.css';
import { getPokemons } from "./services/Api";
import Search from "./components/Search";
import PokeResults from "./components/PokeResults";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
      pokemonDetail: []
    }
  }


  componentDidMount() {

    getPokemons().then(data => {
      const results = data.results;

      Promise.all(results)
        .then(responses => {
          responses.forEach(response =>
            this.setState(prevState => {
              const newState = {
                pokemonData: prevState.pokemonData.concat(response)
              };
              return newState;
            }))
    })
    this.getPokemonDetail()
  
  })
 
}

getPokemonDetail(){
  console.log("getp", this.state.pokemonData)
  this.state.pokemonData.forEach(item=>{
    this.setState(prevState=> {
      const newState ={
        pokemonDetail: prevState.pokemonDetail.concat(item.url)
      };
      return newState;
    })})

  }

render() {
  const {pokemonData}= this.state;
  console.log(pokemonData);

  
  return (
    <div className="App">
      <Search />
      <PokeResults pokemonData={pokemonData} />
    </div>
  );
}
}

export default App;
