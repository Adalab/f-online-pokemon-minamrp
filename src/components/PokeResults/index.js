import React, { Component } from 'react';

class PokeResults extends Component {

    render() {
        const { pokemonData } = this.props;
        console.log(pokemonData);
        return (
        <section className="app__pokemon">
            <ul className="pokemon__list">
                {pokemonData.map(pokemon => {
                    return (
                        <li key={pokemon.id} className="pokemon__item">
                            <div>{pokemon.name}</div>
                            
                        </li>
                    );
                })}
            </ul>
        </section>

        );
    }
}

export default PokeResults;