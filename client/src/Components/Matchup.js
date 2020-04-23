import React, { Component } from 'react';
import MatchupStats from './MatchupStats'
import PlayerStats from './PlayerStats'
import './Matchup.css'
import OpponentStats from './OpponentStats';

class Matchup extends Component {

  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
      <div className="col-12 col-md-5 text-center text-success mt-3">
        <div className="row justify-content-between text-primary">
          <div className="col col-md-4 text-md-center">
            <h6><b>{player.name}</b></h6>
            {player.name && <img src={player.imgUrl} alt="player icon" className="mt-n1" />}
          </div>
          <div className="col col-md-2 text-center align-self-center">
            <h1 className="vs text-danger">vs</h1>
          </div>
          <div className="col col-md-4 text-center">
            <h6><b>{opponent.name}</b></h6>
            {opponent.name && <img src={opponent.imgUrl} alt="opponent icon" className="mt-n1" />}
          </div>
        </div>
        <div className="row justify-content-between text-primary stat-scroll">
          <PlayerStats player={player} opponent={opponent} />
          <MatchupStats player={player} opponent={opponent} />
          <OpponentStats player={player} opponent={opponent} />
        </div>
        <h5><i className="fas fa-sort-down pulse text-primary" title="scroll down!"></i></h5>
      </div>
    )
  }
}

export default Matchup