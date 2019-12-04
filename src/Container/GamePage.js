import React from "react";
import TableComponent from "../Components/TableComponent";
import UserComponent from "../Components/UserComponent";
import API from "../adapters/API";
const PokeAPI = "http://localhost:3002/pokemon";
const GAMES_URL = "http://localhost:3000/games";

export default class GamePage extends React.Component {
  state = {
    allPokemons: [],
    playerId: [],
    tableCards: [],
    playerCards: [],
    playerScore: 0,
    timerOn: true,
    seconds: 1,
    index: 0,
    allCards: [],
    lives: 3,
    clicked: false,
  };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData => {
        const allShuffledPokemons = pokeData.sort(() => 0.5 - Math.random());
        const allCards = allShuffledPokemons.slice(0, 30);
        const tableCards = allCards.slice(
          this.state.index,
          this.state.index + 9
        );
        const playerCards = allCards
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        this.setState({
          allPokemons: pokeData,
          tableCards,
          playerCards,
          allCards,
          index: this.state.index + 9
        });
      });
    this.getAllPlayers();
  };

  setTimer = () => {
    setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState({
          seconds: seconds - 1
        });
      }
      if (seconds === 0) {
        if (this.state.index + 9 <= this.state.allCards.length) {
          this.setState({
            clicked: false,
            seconds: 1,
            tableCards: this.state.allCards.slice(
              this.state.index,
              this.state.index + 9
            ),
            playerCards: this.state.allCards
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
          });
        }
      }
    }, 1000);
    if (this.state.lives === 0) return;
  };

  getAllPlayers = () => {
    return fetch("http://localhost:3000/players")
      .then(resp => resp.json())
      .then(data => {
        const playerIds = data.map(player => player.id);
        const lastId = playerIds[playerIds.length - 1];

        this.setState({
          playerId: lastId
        });
      });
  };

  sendScoreToBackend = () => {
    const scoreObject = {
      score: this.state.playerScore,
      player_id: this.state.playerId
    };
    API.post(GAMES_URL, scoreObject);
  };

  clickHandler = pokemon => {
    if (this.state.tableCards.includes(pokemon)) {
      this.setState({
        playerScore: this.state.playerScore + 10,
        clicked: true
      });
    } else {
      this.setState(
        {
          playerScore: this.state.playerScore - 10,
          lives: this.state.lives - 1,
          clicked: true
        },
        () => this.loseLives()
      );
    }
  };

  oneClickOnly = pokemon => {
    if (this.state.clicked) {
      return;
    } else {
      this.clickHandler(pokemon);
    }
  }
 

  loseLives = () => {
    if (this.state.scores < 0 && this.state.lives > 0)
      this.setState({
        lives: 0
      });
    if (this.state.lives < 0)
      this.setState({
        lives: 0
      });
    if (this.state.lives === 0) {
      //do not let it be less than 0
      this.sendScoreToBackend();
      setTimeout(() => this.props.history.push("/highscore"), 1000);
    }
  };

  render() {
    return (
      <div>
        <TableComponent
          pokemons={this.state.tableCards}
          seconds={this.state.seconds}
          setTimer={this.setTimer}
        />
        <UserComponent
          pokemons={this.state.playerCards}
          clickHandler={this.oneClickOnly}
          score={this.state.playerScore}
          lives={this.state.lives}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}
