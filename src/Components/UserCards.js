import React, { Component } from "react";
import Card from "./Card";

export default class TableCards extends Component {
  render() {
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide row">
            {this.props.pokemons.map(pokemon => (
              <Card pokemon={pokemon} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
