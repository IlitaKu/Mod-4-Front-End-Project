import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: []
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
    const allShuffledPokemons = this.state.pokemons.sort(
      () => 0.5 - Math.random()
    );
    const allCards = allShuffledPokemons.slice(1, 30);
    const tableCards = allCards.slice(1, 10);
    const playerCards = allCards.sort(() => 0.5 - Math.random()).slice(1, 4);

    return (
      <div>
        <TableComponent pokemons={tableCards} />
        <UserComponent pokemons={playerCards} />
      </div>
    );
  }
}
