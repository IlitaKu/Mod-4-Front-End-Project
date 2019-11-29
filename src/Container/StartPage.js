import React, { Component } from "react";
import PlayerForm from "../Components/PlayerForm";

export default class StartPage extends Component {
  render() {
    return (
      <div>
        <PlayerForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
