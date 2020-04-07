import React, { Component } from 'react';
import Character from './Character'
import PropTypes from 'prop-types'

class Characters extends Component {
  render() {
    return this.props.characters.map((character) => (
      <div className="row bg-dark text-danger justify-content-end">
        <Character
          key={character.id}
          character={character}
        />
      </div>
    ))
  }
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Characters;