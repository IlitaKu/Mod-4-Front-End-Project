import React, { Component } from "react";
import PlayerForm from "../Components/PlayerForm";

export default class StartPage extends Component {

  render() {
    return (
      <div>
        <PlayerForm 
          history={this.props.history} 
        />
      </div>
    );
  }
}
