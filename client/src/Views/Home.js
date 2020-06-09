import React, { Component } from 'react';
import Axios from 'axios';
import swal from 'sweetalert2'
import '../SNES-bootstrap.css'
import CharacterCardColumn from '../Components/CharacterCardColumn'
import PlayerSelectTable from '../Components/PlayerSelectTable'
import OpponentSelectTable from '../Components/OpponentSelectTable'
import Matchup from '../Components/Matchup'

class Home extends Component {
  state = {
    characters: [],
    playerChoice: {},
    opponentChoice: {},
  }

  selectedPlayer = (characterId) => {
    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/characters/${characterId}`)
      .then(res => {
        this.setState({ playerChoice: res.data });
      })
  }

  selectedOpponent = (characterId) => {
    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/characters/${characterId}`)
      .then(res => {
        this.setState({ opponentChoice: res.data });
      })
  }

  viewInfo() {
    swal.fire({
      title: `<span style="color:#de4337;font-size:1.1rem">
              <span style="font-size:1.6rem; font-weight:bold">A note on the numbers:</span> </br> 
              &middot; Stats seen here are based on the most recent SSBU patch notes and other official or semi-official websites. </br>
              &middot; Most statistics that were made up of multiple numbers (multi-hit attacks, damage over time, etc...), including frame counts, were averaged and/or rounded, based on my best interpretation of the attack and character. This was in order to arrive at a single number with the intent of both showing the character at their best, as well as to give an accurate idea of what you will typically experience with the character. </br>
              &middot; Generally, statistics that included sweet-spots, sour-spots, clean vs late damage, etc... I used the sweet-spot/clean damage with the intent to show the characters at their best and what you will typically experience with the character. </br>
              &middot; Any other "discrepancies" or differences came down to a need for rounding and wanting to give each statistic a single number to work with, while also remaining true to the spirit of the character and the individual attack. </br>
              &middot; Finally, I don't main every character and I'm sure there are potentially better ways to interpret or add to these stats, and deeper/more thorough stats will be forthcoming. With that said... </br>
              <span style="font-size:1rem";>Feedback, support, and contributions are welcome!
              @UnbrandedLemon on Twitter or <a href="https://github.com/peytonas/smash-stats" target="_blank">Github</a>.</span> </br>
             <span style="font-size:.5rem">I do not own any of the characters, images, or statistics found here.</span>
              </span>`,
      background: "#211a21",
      backdrop: "rgba(33,26,33,0.3)",
      showConfirmButton: false,
      showCloseButton: true
    });
  }

  resetChoices() {
    this.setState({ playerChoice: {} })
    this.setState({ opponentChoice: {} })
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
      <div id="characters" className="container-fluid">
        <div className="row text-primary">
          <div className="order-2 order-md-1 col col-md-1 align-self-center text-center">
            <i className="far fa-question-circle pointer text-success" onClick={this.viewInfo.bind(this)}></i>
          </div>
          <div className="order-1 order-md-2 col-12 offset-md-3 col-md-4 text-center">
            <h1 className="size mt-4 border border-primary rounded pl-1 pr-1">SMASH STATS</h1>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-between text-success">
          <div className="col-4 col-md-2 text-center text-md-left">
            <p className="text-primary">Player:</p>
            <div className="name-scroll bg-info rounded flexBox mt-n2">
              <PlayerSelectTable characters={this.state.characters} characterPasser={this.selectedPlayer} player={this.state.playerChoice} className={"flexBox"} />
            </div>
            <p className="mt-1 text-primary">Opponent:</p>
            <div className="name-scroll bg-info rounded flexBox mt-n2">
              <OpponentSelectTable characters={this.state.characters} characterPasser={this.selectedOpponent} opponent={this.state.opponentChoice} className={"flexBox"} />
            </div>
            <div>
              <button className="btn fab btn-success mt-1" title="clear selections" onClick={this.resetChoices.bind(this)}><i className="fa fa-trash-alt"></i></button>
            </div>
          </div>
          <Matchup player={this.state.playerChoice} opponent={this.state.opponentChoice} />
          <div className="col-4 col-md-2 text-center text-danger">
            <h6 className="text-danger text-center text-md-left"><b>Character Stats:</b></h6>
            <div className="card-scroll flexBox">
              <CharacterCardColumn characters={this.state.characters} className={"flexBox"} />
            </div>
            <h5><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
          </div>
        </div>
        <div className="row justify-content-left text-center text-md-left">
        </div>
      </div>
    )
  }
}

export default Home;