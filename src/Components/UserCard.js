import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    return (
      <div>
        <div className="Playing-cards">
          <div className="ui four cards">
            <a className="black card">
              <div className="image">
                <img alt="poke" src={this.props.pokemon.sprites.front} onClick={() => this.props.clickHandler(this.props.pokemon)} clicked={this.props.clicked} />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
