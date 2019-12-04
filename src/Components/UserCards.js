import React, { Component } from "react";
import UserCard from "./UserCard";

export default class UserCards extends Component {
  render() {
    return (
      <div>
        <div className="ui grid container">
          <div className="four wide row">
            {this.props.pokemons.map(pokemon => (
              <UserCard key={pokemon.name} pokemon={pokemon} clickHandler={this.props.clickHandler} clicked={this.props.clicked} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
