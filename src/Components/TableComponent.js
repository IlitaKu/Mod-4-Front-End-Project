import React, { Component } from "react";
import TableCards from "./TableCards";

export default class TableComponent extends Component {
  // state = {
  //   timerOn: true,
  //   seconds: 5
  // };
  // componentDidUpdate() {
  //   this.myInterval = setInterval(() => {
  //     const { seconds } = this.state;
  //     if (seconds > 0) {
  //       this.setState(({ seconds }) => ({
  //         seconds: seconds - 1
  //       }));
  //     }
  //     if (seconds === 0) {
  //       this.setState({
  //         timerOn: !this.state.timerOn
  //       });
  //     }
  //   }, 1000);
  // }

  // rerenderTableCards = () => {
  //   const { timerOn } = this.state;
  //   if (timerOn === false) {
  //     this.forceUpdate();
  //   }
  // };

  render() {
    const { seconds, setTimer } = this.props;
    return (
      <div>
        <button className="timer" onClick={() => setTimer()}>
          Start Game
        </button>
        <h1>Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}</h1>
        <TableCards pokemons={this.props.pokemons} />
      </div>
    );
  }
}
