import React, { Component } from "react";
import PropTypes from "prop-types";
import OpponentName from "./OpponentName";

class OpponentSelectTable extends Component {
  sendName = (characterChoice) => {
    this.props.characterPasser(characterChoice);
  };
  render() {
    return this.props.characters.map((character) => (
      <OpponentName
        key={character.name}
        character={character}
        characterPasser={this.sendName}
        opponent={this.props.opponent}
      />
    ));
  }
}

OpponentSelectTable.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default OpponentSelectTable;
