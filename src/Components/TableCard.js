import React, { Component } from "react";

export default class TableCard extends Component {
  render() {
    return (
      <div>
        <div className="Playing-cards">
          <div className="ui four cards">
            <a className="black card">
              <div className="image">
                <img alt="poke" src={this.props.pokemon.sprites.front} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}