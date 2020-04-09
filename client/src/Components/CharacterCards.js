import React, { Component } from 'react';
import CharacterCard from './CharacterCard'
import PropTypes from 'prop-types'

class CharacterCards extends Component {
  render() {
    return this.props.characters.map((character) => (
      <CharacterCard
        key={character.id}
        character={character}
      />
    ))
  }
}

CharacterCards.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterCards;