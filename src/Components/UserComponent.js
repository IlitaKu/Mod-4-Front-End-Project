import React, { Component } from "react";
import UserCards from "./UserCards";
import UserDetails from "./UserDetails";

export default class UserComponent extends Component {
  render() {
    return (
      <div>
        <UserCards
          pokemons={this.props.pokemons}
          clickHandler={this.props.clickHandler}
        />
        <br></br>
        <UserDetails
          history={this.props.history}
          score={this.props.score}
          lives={this.props.lives}
        />
      </div>
    );
  }
}
