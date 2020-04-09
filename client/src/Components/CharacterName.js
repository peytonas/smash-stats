import React, { Component } from 'react';
import PropTypes from 'prop-types'

class CharacterName extends Component {

  selectCharacter = (character) => {
    this.props.callBack(character)
  }

  render() {
    const { name } = this.props.character
    return (
      <p onClick={this.selectCharacter.bind(this, this.props.character._id)} className="ml-1"><b>{name}</b></p>
    )
  }
}

CharacterName.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterName