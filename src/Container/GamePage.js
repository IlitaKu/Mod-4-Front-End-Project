import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
import API from "../adapters/API";
const PokeAPI = "http://localhost:3002/pokemon";
const GAMES_URL = 'http://localhost:3000/games'

export default class GamePage extends React.Component {

  state = {
    allPokemons: [],
    playerId: [], 
    tableCards: [],
    playerCards: [],
    playerScore: 0,
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
          allPokemons: pokeData,
          tableCards,
          playerCards,
        })
        this.getAllPlayers()
      })
  };

  getAllPlayers = () => {
    return fetch("http://localhost:3000/players")
      .then(resp => resp.json())
      .then(data => {
        const playerIds = data.map(player => player.id);
        const lastId = playerIds[playerIds.length - 1];

        this.setState({
          playerId: lastId
        })
      })
  };

  sendScoreToBackend = () => {
    const scoreObject = {
      score: this.state.playerScore,
      player_id: this.state.playerId
    }
    API.post(GAMES_URL, scoreObject)
  }

  clickHandler = (pokemon) => {
    if (this.state.tableCards.includes(pokemon)) {
      this.setState({ 
        playerScore: this.state.playerScore + 10
      }, () => this.sendScoreToBackend())
    } else {
      this.setState({
        playerScore: this.state.playerScore - 10      
      }, () => this.sendScoreToBackend())
    }
  }

  render() {
    return (
      <div>
        <TableComponent pokemons={this.state.tableCards} />
        <UserComponent pokemons={this.state.playerCards} clickHandler={this.clickHandler} score={this.state.playerScore} />
      </div>
    );
  }
}
