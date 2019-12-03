import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: [],
  };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData =>
        this.setState({
          pokemons: pokeData
        })
      )
  };

  render() {
    const allShuffledPokemons = this.state.pokemons.sort(() => 0.5 - Math.random())
    const allCards = allShuffledPokemons.slice(1, 30)
    const tableCards = allCards.slice(1, 10)
    const playerCards = allCards.sort(() => 0.5 - Math.random()).slice(1, 4)

<<<<<<< HEAD
    const shuffledPokemons = this.shuffleArray(this.state.pokemons);
    const randomNinePokemons = shuffledPokemons.slice(1, 10);
    const randomTwoPokemons = shuffledPokemons.slice(11, 13);
    const combineTwoArrays = [...randomNinePokemons, ...randomTwoPokemons];
    let getOneMatch = {};
    getOneMatch =
      combineTwoArrays[Math.floor(Math.random(4) * combineTwoArrays.length)];
    console.log(getOneMatch);
=======
>>>>>>> 6840909ad70716ba7c96cbf7a78587f427f02a79
    return (
      <div>
        <TableComponent pokemons={tableCards} />
        <UserComponent pokemons={playerCards} />
      </div>
    );
  }
}
