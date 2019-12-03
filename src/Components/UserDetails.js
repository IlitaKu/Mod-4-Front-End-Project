import React, { Component } from "react";
import Avatar from "./Avatar";
export default class UserDetails extends Component {
  render() {
    return (
      <div>
        <Avatar history={this.props.history} />
      </div>
    );
  }
}
