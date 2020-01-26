import React from "react";
import Pokemon from "./Pokemon";
import "../styles.css";

export default class Pokemons extends React.Component {
  state = { pokemons: [] };
  fetchPokemonData = pokemon => {
    let url = pokemon.url;
    fetch(url)
      .then(response => response.json())
      .then(pokeData => {
        this.setState(previousState => ({
          pokemons: [...previousState.pokemons, pokeData]
        }));
        console.log(this.state);
      });
  };
  fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => response.json())
      .then(allpokemon => {
        allpokemon.results.forEach(pokemon => {
          this.fetchPokemonData(pokemon);
        });
      });
  };
  componentDidMount() {
    this.fetchPokemons();
  }

  render() {
    return (
      <div className="Pokemons">
        {this.state.pokemons.map((pokemon, index) => (
          <div key={index}>
            <Pokemon
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          </div>
        ))}
      </div>
    );
  }
}
