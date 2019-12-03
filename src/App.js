import React, { Component } from "react";
import StartPage from "./Container/StartPage";
import GamePage from "./Container/GamePage";
import HighscorePage from "./Container/HighscorePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <StartPage />
        <GamePage history={this.props.history} />
        <HighscorePage />
      </div>
    );
  }
}
