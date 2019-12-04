import React, { Component } from "react";
import TableCards from "./TableCards";

export default class TableComponent extends Component {
  render() {
    const { seconds, setTimer } = this.props;
    return (
      <div>
        <button className="ui positive button" onClick={() => setTimer()}>
          Start Game
        </button>
        <h1>
          <i class="clock icon"></i> {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <TableCards pokemons={this.props.pokemons} />
      </div>
    );
  }
}
