import React, { Component } from 'react';
import '../SNES-bootstrap.css'
import Axios from 'axios'

class CharacterPage extends Component {

  state = {
    character: {},
  };

  async componentDidMount() {
    console.log("mounted");
    await this.getCharacter();
  }

  async getCharacter() {
    const characterId = this.props.match.params.characterId
    Axios.get(`http://localhost:3000/api/characters/${characterId}`).then(res => {
      this.setState({
        character: res.data,
      });
    })
  }

  render() {
    const character = this.state.character
    return (
      <div className="row justify-content-center">
        <h1 className="text-danger mt-4">{character.name}</h1>
      </div>
    )
  }
}

export default CharacterPage