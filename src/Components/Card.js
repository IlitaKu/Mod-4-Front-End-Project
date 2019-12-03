import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="Playing-cards">
          <div className="ui four cards">
            <a className="black card">
              <div className="image">
                <img alt="poke" src={this.props.pokemon.sprites.front} onClick={() => this.props.clickHandler(this.props.pokemon.id)} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
