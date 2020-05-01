import React, { Component } from 'react';
import '../SNES-bootstrap.css'
import './CharacterPage.css'
import Axios from 'axios'

class CharacterPage extends Component {

  state = {
    character: {},
  };

  async componentDidMount() {
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
      <div>
        <div className="row justify-content-center">
          <h1 className="text-danger mt-4"><b>{character.name}</b></h1>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col">
            <img className="large-img" src={character.imgUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterPage