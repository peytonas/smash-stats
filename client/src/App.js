import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import './SNES-bootstrap.css'
import CharacterCards from './Components/CharacterCards'
import CharacterSelect from './Components/CharacterSelect'
import Matchup from './Components/Matchup'

class App extends Component {
  state = {
    characters: [],
    playerChoice: {},
    opponentChoice: {}
  }

  selectedNames = (playerId, opponentId) => {
    console.log("Player:", playerId, "Opponent:"
      , opponentId);
    Axios.get(`http://localhost:3000/api/characters/${playerId}`)
      .then(res => {
        this.setState({ playerChoice: res.data });
      })
    Axios.get(`http://localhost:3000/api/characters/${opponentId}`)
      .then(res => {
        this.setState({ opponentChoice: res.data });
      })
  }

  componentDidMount() {
    Axios.get('http://localhost:3000/api/characters')
      .then(res => {
        this.setState({ characters: res.data });
      }).catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <div id="characters" className="container-fluid">
        <div className="row justify-content-center text-danger">
          <div className="col-4 text-center">
            <h1 className="mt-2 border border-danger rounded pl-1 pr-1">SMASH STATS</h1>
          </div>
        </div>
        <div className="row justify-content-between text-danger">
          <div className="col-2 text-left">
            <h6><b>Choose your character:</b></h6>
            <div className="name-scroll bg-info rounded">
              <CharacterSelect characters={this.state.characters} callBack={this.selectedNames} />
            </div>
            <div className="text-center">
              <h5 className="mt-n1"><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
            </div>
          </div>
          <div className="col-5 text-center text-danger mt-3">
            <h2>MATCHUP</h2>
            <Matchup callBack={this.selectedNames} />
          </div>
          <div className="col-2 text-center">
            <h6><b>character stats:</b></h6>
            <CharacterCards characters={this.state.characters} />
          </div>
        </div>
        <div className="row justify-content-end text-danger">
          <div className="col-2 text-center">
            <h5 className="mt-n1"><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
