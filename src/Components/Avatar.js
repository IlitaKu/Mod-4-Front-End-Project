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
    const { score, lives } = this.props;
    const arrayOfNames = this.state.playerNames;
    const userName = arrayOfNames.map(user => user.username);
    const lastName = userName[userName.length - 1];
    return (
      <div className="avatar">
        <div className="ui centered card">
          <div className="image">
            <img
              className="ui avatar image"
              alt="avatar"
              src="https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png"
            />
          </div>
          <div className="avatar">
            <div className="content">
              <a className="Name-header">{lastName}</a>
              <br></br>
              <a className="Score-header">Score:{score}</a>
              <br></br>
              <a className="lives-header">Lives:{lives}</a>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
