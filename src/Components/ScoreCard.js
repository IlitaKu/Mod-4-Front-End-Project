import React, { Component } from "react";

export default class ScoreCard extends Component {
  render() {
    const { playersScore } = this.props;
    return (
      <div>
        <h1>Highscore</h1>
        <div>
          <ol>
            {playersScore.map(game => (
              <li key={game.id}>
                {game.username}: {game.score} points
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
