import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CharacterName from './CharacterName'

class CharacterSelect extends Component {

  render() {
    return this.props.characters.map((character) => (
      (<CharacterName
        key={character.id}
        character={character} />)
    ))
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterSelect