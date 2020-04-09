import React, { Component } from 'react';
import './Matchup.css'



class Matchup extends Component {

  render() {
    return (
      <div className="row justify-content-between text-primary">
        <div className="col-4 text-center">
          <p>{this.props.player.name}</p>
          <img src={this.props.player.imgUrl} alt="character icon" className="mt-n1" />
        </div>
        <div className="col-4 text-center">
          <p>{this.props.opponent.name}</p>
          <img src={this.props.opponent.imgUrl} alt="character icon" className="mt-n1" />
        </div>
      </div>
    )
  }
}

export default Matchup