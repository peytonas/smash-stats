import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './CharacterSelect.css'

class CharacterName extends Component {

  selectCharacter = (characterId) => {
    this.props.characterPasser(characterId)
  }


  render() {
    const { name } = this.props.character
    return (
      <p className={this.props.player.name === name ? "border-green" : null || this.props.opponent.name === name ? "border-danger" : null} onClick={this.selectCharacter.bind(this, this.props.character._id)}><b className="ml-1">{name}</b></p>
    )
  }
}

CharacterName.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterName