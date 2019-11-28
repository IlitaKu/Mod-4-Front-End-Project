import React, { Component } from "react";

export default class PlayerForm extends Component {
  render() {
    return (
      <div className="ui form" onClick={e => console.log(e.target.value)}>
        <div className="inline field">
          <label>Username</label>
          <input type="text" placeholder="Username" />
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
