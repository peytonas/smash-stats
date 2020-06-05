import React, { Component } from 'react';
import CharacterPageImage from '../Components/CharacterPageImage'
import IndividualStats from '../Components/IndividualStats'
import Navbar from '../Components/Navbar'
import '../SNES-bootstrap.css'

class CharacterPage extends Component {
  state = {
    averagePlayerScore: null,
    playerScore: null
  }

  myCallback = (averagePlayerScore, playerScore) => {
    this.setState({
      averagePlayerScore: averagePlayerScore,
      playerScore: playerScore
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <CharacterPageImage character={this.props.match.params.characterId} />
        <div className="text-primary row justify-content-between text-center text-md-left">
          <IndividualStats character={this.props.match.params.characterId} callBack={this.myCallback} />
        </div>
      </div>
    )
  }
}

export default CharacterPage