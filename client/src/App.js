import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import './SNES-bootstrap.css'
import Characters from './Components/Characters'

class App extends Component {
  state = {
    characters: []
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
      <div id="characters">
        <div className="row justify-content-center bg-dark text-danger">
          <h1 className="border border-danger rounded mt-1">SMASH STATS</h1>
        </div>
        <Characters characters={this.state.characters} />
      </div>
    )
  }
}

export default App;
