import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CharacterName extends Component {

  async selectCharacter(characterName) {
    console.log(characterName);
  }

  render() {
    const { name } = this.props.character
    return (
      <p onClick={this.selectCharacter.bind(this, this.props.character.name)}>{name}</p>
    )
  }
}

CharacterName.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterName