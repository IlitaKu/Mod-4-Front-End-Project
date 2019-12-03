import React, { Component } from "react";
import TableCards from "./TableCards";

export default class TableComponent extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };
  render() {
    return (
      <div>
        <TableCards pokemons={this.props.pokemons} />
      </div>
    );
  }
}
