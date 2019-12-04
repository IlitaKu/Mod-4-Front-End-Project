import React, { Component } from "react";
import UserCards from "./UserCards";
import UserDetails from "./UserDetails";

export default class UserComponent extends Component {
  render() {
    return (
      <div>
        <div>
          Which one of your cards is matching? Click on either of the 3!
        </div>
        <UserCards
          pokemons={this.props.pokemons}
          clickHandler={this.props.clickHandler}
        />
        <br></br>
        <UserDetails
          history={this.props.history}
          score={this.props.score}
          lives={this.props.lives}
          clicked={this.props.clicked}
        />
      </div>
    );
  }
}
