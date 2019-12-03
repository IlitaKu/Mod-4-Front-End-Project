import React, { Component } from "react";
const GAMES_URL = "http://localhost:3000/games";
const PLAYERS_URL = "http://localhost:3000/players";
const HIGHSCORE_URL = "http://localhost:3000/highscore";

export default class HighscorePage extends Component {

  state = {
    data: [],
  }

  componentDidMount = () => {
    fetch(HIGHSCORE_URL)
    .then(resp => resp.json())
    .then(scoreData => {
      this.setState({
        data: scoreData
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Highscore</h1>
        <div className="score-list">
          <ol>
            {
              this.state.data.map(game => <li key={game.id}>{game.username}: {game.score} points</li>)
            }
          </ol>
        </div>
      </div>
    );
  }
}
