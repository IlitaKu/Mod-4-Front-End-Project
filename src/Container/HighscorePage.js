import React, { Component } from "react";
import ScoreCard from "../Components/ScoreCard";
import ExitButton from "../Components/ExitButton";
const GAMES_URL = "http://localhost:3000/games";
const PLAYERS_URL = "http://localhost:3000/players";
const HIGHSCORE_URL = "http://localhost:3000/highscore";

export default class HighscorePage extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    fetch(HIGHSCORE_URL)
      .then(resp => resp.json())
      .then(scoreData => {
        this.setState({
          data: scoreData
        });
      });
  };

  render() {
    return (
      <div>
        <ExitButton history={this.props.history} />
        <ScoreCard playersScore={this.state.data} />
      </div>
    );
  }
}
