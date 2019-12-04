import React, { Component } from "react";
import TableCard from "./TableCard";

export default class TableCards extends Component {
  render() {
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide row">
            {this.props.pokemons.map(pokemon => (
              <TableCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

