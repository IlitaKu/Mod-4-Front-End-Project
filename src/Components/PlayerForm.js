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
    });
  };

  render() {
    return (
      <div className="ui form" onSubmit={this.handleSubmit}>
        <div className="inline field">
          <form>
            <label>
              Player name:
              <input
                type="text"
                name="name"
                placeholder="PlayerName"
                value={this.state.playernames}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Game Start" />
          </form>
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
