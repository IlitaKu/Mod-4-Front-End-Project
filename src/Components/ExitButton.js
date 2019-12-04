import React, { Component } from "react";

export default class ExitButton extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <br></br>
        <br></br>
        <button
          class="positive ui button"
          onClick={() => history.push("/game")}
        >
          Play again
        </button>
        <button
          class="negative ui button"
          onClick={() => history.push("/start")}
        >
          Exit
        </button>
      </div>
    );
  }
}
