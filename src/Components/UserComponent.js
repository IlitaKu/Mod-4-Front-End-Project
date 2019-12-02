import React, { Component } from "react";
import UserCards from "./UserCards";

export default class UserComponent extends Component {
  render() {
    return (
      <div>
        <UserCards pokemons={this.props.pokemons} />
      </div>
    );
  }
}
