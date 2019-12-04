import React, { Component } from "react";
import Avatar from "./Avatar";
import Score from "./Score";
export default class UserDetails extends Component {
  render() {
    return (
      <div>
        <Avatar history={this.props.history} />
        <Score score={this.props.score} />
        <h3>Lives left: {this.props.lives}</h3>
      </div>
    );
  }
}
