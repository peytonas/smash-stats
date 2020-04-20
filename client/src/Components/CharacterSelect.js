import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CharacterName from './CharacterName'
import './CharacterSelect.css'

class CharacterSelect extends Component {
  sendName = (characterChoice) => {
    this.props.characterPasser(characterChoice)
  }
  render() {
    return this.props.characters.map((character) => (
      (<CharacterName
        key={character.id}
        character={character} characterPasser={this.sendName} />)
    ))
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterSelect