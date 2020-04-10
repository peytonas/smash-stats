import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import './SNES-bootstrap.css'
import CharacterCards from './Components/CharacterCards'
import CharacterSelect from './Components/CharacterSelect'
import Matchup from './Components/Matchup.js'

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

  resetChoices() {
    this.setState({ playerChoice: {} })
    this.setState({ opponentChoice: {} })
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
        <div className="row justify-content-center text-success">
          <div className="col-4 text-center">
            <h1 className="size mt-2 border border-success rounded pl-1 pr-1">SMASH STATS</h1>
          </div>
        </div>
        <div className="row justify-content-between text-success">
          <div className="col-2 text-left">
            <h6><b>choose two:</b></h6>
            <div className="name-scroll bg-info rounded">
              <CharacterSelect characters={this.state.characters} callBack={this.selectedNames} />
            </div>
            <div className="text-center">
              <button className="btn fab btn-success mt-1" title="clear selections" onClick={this.resetChoices.bind(this)}><i className="fas fa-trash-alt"></i></button>
              <h5 className="mt-n4"><i className="fas fa-sort-down pulse" title="scroll down!"></i></h5>
            </div>
          </div>
          <div className="col-5 text-center text-success mt-3">
            <Matchup callBack={this.selectedNames} player={this.state.playerChoice} opponent={this.state.opponentChoice} />
          </div>
          <div className="col-2 text-center">
            <h6 className="text-danger text-left"><b>character stats:</b></h6>
            <div className="card-scroll">
              <CharacterCards characters={this.state.characters} />
            </div>
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
