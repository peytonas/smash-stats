import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CharacterName from './CharacterName'

class CharacterSelect extends Component {

  state = {
    characters: []
  }

  sendNames = (playerChoice, opponentChoice) => {
    this.props.callBack(playerChoice, opponentChoice)
    this.setState({ characters: [] })
  }

  selectedName = (characterId) => {
    this.state.characters.push(characterId)
    console.log(characterId);
    if (this.state.characters.length === 2 || this.state.characters.length >= 2) {
      alert("picked your characters")
      this.sendNames(this.state.characters[0], this.state.characters[1])
    }
  }
  render() {
    return this.props.characters.map((character) => (
      (<CharacterName
        key={character.id}
        character={character} callBack={this.selectedName} />)
    ))
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterSelect