import React, { Component } from "react";
import Card from "./Card";

export default class TableCards extends Component {
  render() {
    return (
      <div>
        {this.props.pokemons.map(pokemon => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}
