import React, { Component } from "react";
import TableCards from "./TableCards";

export default class TableComponent extends Component {
  render() {
    return (
      <div>
        <TableCards pokemons={this.props.pokemons} />
      </div>
    );
  }
}
