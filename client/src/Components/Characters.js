import React, { Component } from 'react';
import Character from './Character'

class Characters extends Component {
  render() {
    return this.props.characters.map((character) => (
      <div className="row bg-dark text-danger justify-content-end">
        <Character
          key={character.id}
          character={character} />
      </div>
    ))
  }
}

export default Characters;