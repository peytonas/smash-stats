import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CharacterName from './CharacterName'
import swal from 'sweetalert2'

const Toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500
})

class CharacterSelect extends Component {

  state = {
    characters: []
  }

  sendNames = (playerChoice, opponentChoice) => {
    this.props.characterPasser(playerChoice, opponentChoice)
    this.setState({ characters: [] })
  }

  selectedName = (characterId) => {
    this.state.characters.push(characterId)
    if (this.state.characters.length === 2 || this.state.characters.length >= 2) {
      Toast.fire({
        icon: 'success',
        title: '2/2'
      })
      this.sendNames(this.state.characters[0], this.state.characters[1])
    } else {
      Toast.fire({
        icon: 'success',
        title: '1/2'
      })
    }
  }

  render() {
    return this.props.characters.map((character) => (
      (<CharacterName
        key={character.id}
        character={character} characterPasser={this.selectedName} />)
    ))
  }
}

CharacterSelect.propTypes = {
  characters: PropTypes.array.isRequired
}

export default CharacterSelect