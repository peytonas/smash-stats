import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlayerName from './PlayerName'

class PlayerSelectTable extends Component {
  sendName = (characterChoice) => {
    this.props.characterPasser(characterChoice)
  }

  render() {
    return this.props.characters.map((character) => (
      (
        <PlayerName
          key={character.id}
          character={character} characterPasser={this.sendName} player={this.props.player} />)
    ))
  }
}

PlayerSelectTable.propTypes = {
  characters: PropTypes.array.isRequired
}

export default PlayerSelectTable