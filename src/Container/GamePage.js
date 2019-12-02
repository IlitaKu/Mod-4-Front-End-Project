import React from "react";
import TableComponent from "../Components/TableComponent";

const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: [],
    displayedPokemons: [0, 1, 2, 3, 4],
    shuffledPokemons: []
  };

  //   shufflePokemons = pokemon => {
  //     for (let i = pokemon.length - 1; i > 0; i--) {
  //       const j = (Math.floor(Math.random() * (i + 1))[
  //         (pokemon[i], pokemon[j])
  //       ] = [pokemon[j], pokemon[i]]);
  //     }
  //     return pokemon;
  //   };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData =>
        this.setState({
          pokemons: pokeData
        })
      );
  };

  render() {
    // const pokemonsToDisplay = this.state.pokemons.filter((pokemon, index) =>
    //   this.state.displayedPokemons.includes(index)
    // );
    return <TableComponent pokemons={this.state.displayedPokemons} />;
  }
}
