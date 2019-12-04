import React, { Component } from "react";
import PlayerForm from "../Components/PlayerForm";
import App from "../App.css";
export default class StartPage extends Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>PokeAct</h1>
        <div>
          <PlayerForm history={this.props.history} />
        </div>
      </div>
    );
  }
}
