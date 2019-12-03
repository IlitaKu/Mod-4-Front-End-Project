import React, { Component } from "react";
import UserCards from "./UserCards";
import UserDetails from "./UserDetails";

export default class UserComponent extends Component {
  render() {
    return (
      <div>
        <UserCards pokemons={this.props.pokemons} clickHandler={this.props.clickHandler} score={this.props.score} />
        <UserDetails history={this.props.history} />
      </div>
    );
  }
}
