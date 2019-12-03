import React, { Component } from "react";
import Card from "./Card";

export default class UserCards extends Component {
  render() {
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide row">
            {this.props.pokemons.map(pokemon => (
              <Card key={pokemon.name} pokemon={pokemon} clickHandler={this.props.onClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
