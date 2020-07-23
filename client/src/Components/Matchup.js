import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MatchupStats from './MatchupStats'
import PlayerStats from './PlayerStats'
import OpponentStats from './OpponentStats';
import './Matchup.css'

class Matchup extends Component {
  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
      <div className="col-12 col-md-5 text-center mt-4">
        <div className="row justify-content-between text-primary">
          <div className="col col-md-4 text-md-center">
            <h6><b>{player.name}</b></h6>
            <nav>
              <Link to={`/character/${player.id}`}>
                {player.name && <img src={player.iconUrl} alt="player icon" className="mb-1 border-danger-icon bg-secondary" />}
              </Link>
            </nav>
          </div>
          <div className="col col-md-2 text-center align-self-center">
            <h1 className="vs text-danger">vs</h1>
          </div>
          <div className="col col-md-4 text-center">
            <h6><b>{opponent.name}</b></h6>
            <nav>
              <Link to={`/character/${opponent.id}`}>
                {opponent.name && <img src={opponent.iconUrl} alt="opponent icon" className="mb-1 border-danger-icon bg-secondary" />}
              </Link>
            </nav>
          </div>
        </div>
        <div className="row justify-content-between text-primary stat-scroll">
          <PlayerStats player={player} opponent={opponent} />
          <MatchupStats player={player} opponent={opponent} />
          <OpponentStats player={player} opponent={opponent} />
        </div>
        <h5><i className="fas fa-sort-down pulse text-primary mt-n2" title="scroll down!"></i></h5>
      </div>
    )
  }
}

export default withRouter(Matchup)