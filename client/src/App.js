import React, { Component } from 'react';
import Axios from 'axios';
import swal from 'sweetalert2'
import './App.css';
import './SNES-bootstrap.css'
import CharacterCards from './Components/CharacterCards'
import CharacterSelect from './Components/CharacterSelect'
import Matchup from './Components/Matchup.js'

class App extends Component {
  state = {
    characters: [],
    playerChoice: {},
    opponentChoice: {},
  }

  selectedNames = (playerId, opponentId) => {
    let base = window.location.host.includes('localhost:8080') ? '//localhost:8080/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/characters/${playerId}`)
      .then(res => {
        this.setState({ playerChoice: res.data });
      })
    api.get(`/characters/${opponentId}`)
      .then(res => {
        this.setState({ opponentChoice: res.data });
      })
  }

  viewInfo() {
    swal.fire({
      title: `<span style="color:#de4337;font-size:1.1rem">
              <span style="font-size:1.6rem; font-weight:bold">A note on the numbers:</span> </br> 
              &middot; Most of the stats seen here are official numbers based on the most recent SSBU patch notes and other official or semi-official websites. </br>
              &middot; Any statistics that were made up of multiple numbers (multi-hit attacks, damage over time, etc...) were
              averaged, based on my best interpretation to arrive at a single number. </br>
              &middot; Any statistics that included sweet-spots, sour-spots, clean vs late damage, etc... I used the
              sweet-spot/clean damage. </br>
              &middot; Any other "discrepancies" came down to a need for rounding and wanting to give each statistic a single number to work with. </br>
              <span style="font-size:1rem";>Feedback on how to improve their interpretations is welcome!</span> </br>
             <span style="font-size:.5rem">I do not own any of the characters, images, or statistics found here.</span>
              </span>`,
      background: "#211a21",
      backdrop: "rgba(33,26,33,0.3)",
      showConfirmButton: false
    });
  }

  resetChoices() {
    console.log(process.env.PORT);

    this.setState({ playerChoice: {} })
    this.setState({ opponentChoice: {} })
  }

  componentDidMount() {
    let base = window.location.host.includes('localhost:8080') ? '//localhost:8080/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/characters`)
      .then(res => {
        this.setState({ characters: res.data });
      }).catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div id="characters" className="container-fluid">
        <div className="row text-success">
          <div className="col-1 align-self-center">
            <i className="far fa-question-circle pointer" onClick={this.viewInfo.bind(this)}></i>
          </div>
          <div className=" offset-3 col-4 text-center">
            <h1 className="size mt-2 border border-success rounded pl-1 pr-1">SMASH STATS</h1>
          </div>
        </div>
        <div className="row justify-content-between text-success">
          <div className="col-2 text-left">
            <h6><b>choose two:</b></h6>
            <div className="name-scroll bg-info rounded">
              <CharacterSelect characters={this.state.characters} characterPasser={this.selectedNames} />
            </div>
            <div className="text-center">
              <button className="btn fab btn-success mt-1" title="clear selections" onClick={this.resetChoices.bind(this)}><i className="fas fa-trash-alt"></i></button>
              <h5 className="mt-n4"><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
            </div>
          </div>
          <div className="col-5 text-center text-success mt-3">
            <Matchup callBack={this.selectedNames} player={this.state.playerChoice} opponent={this.state.opponentChoice} />
            <h5><i className="fas fa-sort-down pulse text-primary" title="scroll down!"></i></h5>
          </div>
          <div className="col-2 text-center text-danger col-height">
            <h6 className="text-danger text-left"><b>character stats:</b></h6>
            <div className="card-scroll">
              <CharacterCards characters={this.state.characters} />
            </div>
            <h5><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
