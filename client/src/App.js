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
      <div id="characters" className="container-fluid">
        <div className="row justify-content-center bg-dark text-danger">
          <div className="col-4 text-center">
            <h1 className="mt-2 border border-danger rounded pl-1 pr-1">SMASH STATS</h1>
          </div>
        </div>
        <div className="row justify-content-end bg-dark text-danger">
          <div className="col-2 text-center">
            <Characters characters={this.state.characters} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
