import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: [],
    displayedPokemons: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    shuffledPokemons: []
  };

  shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

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
    const pokemonsToDisplay = this.state.pokemons.filter((pokemon, index) =>
      this.state.displayedPokemons.includes(index)
    );

    // const shuffledPokemons = this.state.pokemons[
    //   Math.floor(Math.random() * this.state.pokemons.length)
    // ];
    const shuffledPokemons = this.shuffleArray(this.state.pokemons);
    let randomEightPokemons = shuffledPokemons.slice(1, 10);
    let randomThreePokemons = shuffledPokemons.slice(1, 4);
    return (
      <div>
        <TableComponent pokemons={randomEightPokemons} />
        <UserComponent pokemons={randomThreePokemons} />
      </div>
    );
  }
}
