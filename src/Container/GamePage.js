import React from "react";
import TableComponent from "../Components/TableComponent";

const PokeAPI = "http://localhost:3002/pokemon";

export default class GamePage extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount = () => {
    fetch(PokeAPI)
      .then(result => result.json())
      .then(pokeData =>
        this.setState({
          pokemons: pokeData
        })
      );
  };

  render() {
    return <TableComponent pokemons={this.state.pokemons} />;
  }
}
