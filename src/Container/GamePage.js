import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    shuffledPokemons: [],
    tablePokemons: [],
    playerPokemons: [],
    
  };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData =>
        this.shuffleData(pokeData))
  };

  shuffleData = (pokeData) => {
    let i = pokeData.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pokeData[i];
      pokeData[i] = pokeData[j];
      pokeData[j] = temp;
    }
    this.setState({
      shuffledPokemons: [...this.state.shuffledPokemons, pokeData]
    })
    this.setGameCards()
  };


  setGameCards = () => {
    const shuffledPoke = this.state.shuffledPokemons;
    const tableCards = shuffledPoke.slice(1, 10);
    const playerCards = shuffledPoke.slice(11, 13)
    this.setState({
      tablePokemons: [...this.state.tablePokemons, tableCards],
      playerPokemons: [...this.state.playerPokemons, playerCards]
    })
  }

  

  // setPokeState = (shuffleArray) => {
  //   this.setState({
  //     pokemons: this.shuffleArray()
  //   })
  // }
 
  // setTableCards = randomNinePokemons => {
  //   this.setState({
  //     tablePokemons: [...this.state.tablePokemons, randomNinePokemons]
  //   });
  // };

  render() {
    console.log('shuffled', this.state.shuffledPokemons)
    // const userPokemonsToDisplay = this.state.shuffledPokemons.filter((pokemon, index) =>
    //   this.state.userPokemons.includes(index)
    // );

    // const shuffledPokemons = this.shuffleArray(this.state.pokemons);
    // const randomNinePokemons = shuffledPokemons.slice(1, 10);
    // const randomTwoPokemons = shuffledPokemons.slice(11, 13);
    // const combineTwoArrays = [...randomNinePokemons, ...randomTwoPokemons];
    // let getOneMatch = {};
    // getOneMatch =
    //   combineTwoArrays[Math.floor(Math.random() * combineTwoArrays.length)];
    // console.log(getOneMatch);
    return (
      <div>
        {/* <TableComponent pokemons={randomNinePokemons} />
        <UserComponent pokemons={randomTwoPokemons} /> */}
      </div>
    );
  }
}
