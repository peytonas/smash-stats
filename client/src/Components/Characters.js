import React, { Component } from 'react';
import Character from './Character'
import PropTypes from 'prop-types'

class Characters extends Component {
  render() {
    return this.props.characters.map((character) => (
      <Character
        key={character.id}
        character={character}
      />
    ))
  }
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Characters;