import React, { Component } from 'react';
import Axios from 'axios'
import CharacterPageImage from '../Components/CharacterPageImage'
import IndividualStats from '../Components/IndividualStats'
import '../SNES-bootstrap.css'

class CharacterPage extends Component {
  state = {
    characters: [],
  }

  componentDidMount() {
    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/characters`)
      .then(res => {
        this.setState({ characters: res.data });
      })
  }

  render() {
    return (
      <div>
        <CharacterPageImage character={this.props.match.params.characterId} />
        <IndividualStats character={this.props.match.params.characterId} characters={this.state.characters} />
      </div>
    )
  }
}

export default CharacterPage