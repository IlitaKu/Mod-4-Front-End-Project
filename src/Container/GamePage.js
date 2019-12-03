import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: [],
    tableCards: [],
    playerCards: [],
  };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData => {
        const allShuffledPokemons = pokeData.sort(() => 0.5 - Math.random())
        const allCards = allShuffledPokemons.slice(0, 30)
        const tableCards = allCards.slice(0, 9)
        const playerCards = allCards.sort(() => 0.5 - Math.random()).slice(0, 3)

        this.setState({
          pokemons: pokeData,
          tableCards,
          playerCards,
        })
      })
  };

  clickHandler = (id) => {
    // trying to find out whether card which was clicked on in playerCards has an id which is also in the currently displayed tableCards

  }

  render() {
    return (
      <div>
        <TableComponent pokemons={this.state.tableCards} />
        <UserComponent pokemons={this.state.playerCards} clickHandler={this.clickHandler} />
      </div>
    );
  }
}
