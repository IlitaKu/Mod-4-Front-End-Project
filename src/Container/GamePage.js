import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: [],
    userPokemons: [0, 1, 2],
    tablePokemons: []
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

  setTableCards = randomNinePokemons => {
    this.setState({
      tablePokemons: [...this.state.tablePokemons, randomNinePokemons]
    });
  };

  render() {
    const userPokemonsToDisplay = this.state.pokemons.filter((pokemon, index) =>
      this.state.userPokemons.includes(index)
    );

    const shuffledPokemons = this.shuffleArray(this.state.pokemons);
    const randomNinePokemons = shuffledPokemons.slice(1, 10);

    // const randomThreePokemons =
    //   randomNinePokemons[
    //     Math.floor(Math.random() * randomEightPokemons.length)
    //   ]
    return (
      <div>
        <TableComponent pokemons={randomNinePokemons} />
        <UserComponent pokemons={userPokemonsToDisplay} />
      </div>
    );
  }
}
