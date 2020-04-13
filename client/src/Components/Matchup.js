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
      <div>
        <div className="row justify-content-between text-primary">
          <div className="col-4 text-center">
            <h6><b>{player.name}</b></h6>
            <img src={player.imgUrl} className="mt-n1" />
          </div>
          <div className="col-2 text-center">
            <h1 className="vs text-danger">vs</h1>
          </div>
          <div className="col-4 text-center">
            <h6><b>{opponent.name}</b></h6>
            <img src={opponent.imgUrl} className="mt-n1" />
          </div>
        </div>
        <div className="row justify-content-between text-primary stat-scroll">
          <PlayerStats player={player} opponent={opponent} />
          <MatchupStats />
          <OpponentStats player={player} opponent={opponent} />
        </div>
      </div>
    )
  }
}

export default Matchup