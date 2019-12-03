import React, { Component } from "react";

export default class Score extends Component {
  render() {
    console.log(this.props.score)
    return (
      <div>
        <div className="content">Score Count</div>
      </div>
    );
  }
}
