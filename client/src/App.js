import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import './SNES-bootstrap.css'
import Links from './Components/Links'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import CharacterPage from './Components/CharacterPage';

class App extends Component {
  render() {
    return (
      <div id="characters" className="container-fluid">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/character/:characterId' component={CharacterPage} />
        <Links />
      </div>
    )
  }
}

export default withRouter(App);