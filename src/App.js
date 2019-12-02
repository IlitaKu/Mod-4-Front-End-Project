import React, { Component } from "react";
import StartPage from "./Container/StartPage";
import GamePage from "./Container/GamePage";
import App from "./App.css";

export default class extends Component {
  render() {
    return (
      <div>
        <GamePage history={this.props.history} />
      </div>
    );
  }
}
