import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types'

class CharacterCardColumn extends Component {
  render() {
    return this.props.characters.map((character) => (
      <CharacterCard
        key={character.id}
        character={character}
      />
    ))
  }
}

CharacterCardColumn.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterCardColumn;