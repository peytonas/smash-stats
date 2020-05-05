import React, { Component } from 'react';
import CharacterPageImage from '../Components/CharacterPageImage'
import IndividualStats from '../Components/IndividualStats'
import '../SNES-bootstrap.css'

class CharacterPage extends Component {

  render() {
    return (
      <div>
        <CharacterPageImage character={this.props.match.params.characterId} />
        <IndividualStats character={this.props.match.params.characterId} />
      </div>
    )
  }
}

export default CharacterPage