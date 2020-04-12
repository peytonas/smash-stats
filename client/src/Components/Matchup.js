import React, { Component } from 'react';
import './Matchup.css'



class Matchup extends Component {

  render() {
    return (
      <div className="row justify-content-between text-primary">
        <div className="col-4 text-center">
          <h5><b>{this.props.player.name}</b></h5>
          <img src={this.props.player.imgUrl} className="mt-n1" />
        </div>
        <div className="col-2 text-center align-self-center">
          <h1 className="vs text-danger">vs</h1>
        </div>
        <div className="col-4 text-center">
          <h5><b>{this.props.opponent.name}</b></h5>
          <img src={this.props.opponent.imgUrl} className="mt-n1" />
        </div>
      </div>
    )
  }
}

export default Matchup