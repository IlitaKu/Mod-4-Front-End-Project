import React, { Component } from "react";
import Avatar from "./Avatar";
import Score from "./Score";
export default class UserDetails extends Component {
  render() {
    return (
      <div>
        <Avatar history={this.props.history} score={this.props.score} />
        <Score />
      </div>
    );
  }
}
