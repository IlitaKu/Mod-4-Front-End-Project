import React, { Component } from "react";

export default class PlayerForm extends Component {
  state = {
    playernames: " "
  };

  handleChange = e => {
    this.setState({
      playernames: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/players", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.playernames
      })
    }).then(() => this.props.history.push("/game"));
  };

  render() {
    return (
      <div className="player-form">
        <div className="ui form">
          <div className="field">
            <form onSubmit={this.handleSubmit}>
              <div class="field">
                <label>Player Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Playername"
                  value={this.state.playernames}
                  onChange={this.handleChange}
                />
              </div>
              <input type="submit" value="Click here to catch'em all" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// fetch('http://localhost:3000/players', {method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
// },
//         body: JSON.stringify({
//    username: 'KickSomeASS'
// })
// })
//     .then(res => res.json())
//     .then(username => console.log(username))
