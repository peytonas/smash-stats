import React, { Component } from 'react'
import Axios from 'axios'
import CharacterPageImage from '../Components/CharacterPageImage'
import IndividualStats from '../Components/IndividualStats'
import Navbar from '../Components/Navbar'
import GameChart from '../Components/GameRepresentationChart'
import "./CharacterPage.css"

class CharacterPage extends Component {
  state = {
    character: {},
    roster: [],
    // averageDamage: null,
    // playerDamage: null,
    // averageLag: null,
    // playerLag: null
  }

  componentDidMount() {
    const characterId = this.props.match.params.characterId

    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com' || 'http://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 6000,
      withCredentials: true
    })

    api.get(`http://localhost:3000/api/characters/${characterId}`)
      .then(res => {
        this.setState({ character: res.data, },
        );
      })

    api.get(`/characters`)
      .then(res => {
        this.setState({ roster: res.data },
        );
      })
  }

  // myCallback = (averageDamage, playerDamage, averageLag, playerLag) => {
  //   this.setState({
  //     averageDamage: averageDamage,
  //     playerDamage: playerDamage,
  //     averageLag: averageLag,
  //     playerLag: playerLag
  //   })
  // }

  render() {
    return (
      <div className="character-container">
        <Navbar />
        <CharacterPageImage character={this.props.match.params.characterId} />
        <div className="text-primary row justify-content-between text-center text-md-left">
          <IndividualStats character={this.state.character} roster={this.state.roster} />
        </div>
        <div className="text-primary row justify-content-around justify-content-md-end">
          <GameChart character={this.state.character} />
        </div>
      </div>
    )
  }
}

export default CharacterPage