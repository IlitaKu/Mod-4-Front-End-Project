import React, { Component } from "react";

export default class ScoreCard extends Component {
  render() {
    const { playersScore } = this.props;
    return (
      <div className="score-form">
        <h1>Highscore</h1>
        <div className="score-board">
          {playersScore.map(game => (
            <li key={game.id}>
              {game.username}: {game.score} points
            </li>
          ))}
        </div>
      </div>
    );
  }
}
