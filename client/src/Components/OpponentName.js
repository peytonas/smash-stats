import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CharacterSelect.css";

class OpponentName extends Component {
  selectCharacter = (characterName) => {
    this.props.characterPasser(characterName);
  };

  render() {
    const { name } = this.props.character;
    const characterNumber = Math.floor(this.props.character.characterNumber);

    return (
      <p
        className={
          this.props.opponent.name === name ? "border-danger-name" : null
        }
        style={{ order: characterNumber }}
        onClick={this.selectCharacter.bind(this, this.props.character.name)}
      >
        <b className="ml-1">{name}</b>
      </p>
    );
  }
}

OpponentName.propTypes = {
  character: PropTypes.object.isRequired,
};

export default OpponentName;
