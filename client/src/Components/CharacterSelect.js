import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CharacterName from './CharacterName'

class CharacterSelect extends Component {
  sendName = (characterChoice) => {
    this.props.characterPasser(characterChoice)
  }
  render() {
    return this.props.characters.map((character) => (
      (<CharacterName
        key={character.id}
        character={character} characterPasser={this.sendName} player={this.props.player} opponent={this.props.opponent} />)
    ))
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterSelect