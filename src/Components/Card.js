import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="image">
          <h2>{this.props.pokemon.name} </h2>
          <img alt="Pokemon" src={this.props.pokemon.sprites.front} />
        </div>
      </div>
    );
  }
}
