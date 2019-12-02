import React, { Component } from "react";

export default class Avatar extends Component {
  state = {
    playerNames: []
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/players")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          playerNames: data
        })
      );
  };

  render() {
    const arrayOfNames = this.state.playerNames;
    const userName = arrayOfNames.map(user => user.username);
    const lastName = userName[userName.length - 1];
    return (
      <div className="avatar">
        <div className="ui card">
          <div className="image">
            <img
              alt="avatar"
              src="https://samdanversreviews.files.wordpress.com/2014/09/costume-pika.png"
            />
          </div>
          <div className="avatar">
            <div class="content">
              <a className="header">{lastName}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
