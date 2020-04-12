import React, { Component } from 'react';
import './Matchup.css'

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
          <div className="col-4 text-center">
            <div className="stat-size">
              <p>{player.series}</p>
              <p className={player.weight >= opponent.weight ? "text-green" : "text-danger"}>{player.weight}</p>
              <p className={player.walkSpeed >= opponent.walkSpeed ? "text-green" : "text-danger"}>{player.walkSpeed}</p>
              <p className={player.runSpeed >= opponent.runSpeed ? "text-green" : "text-danger"}>{player.runSpeed}</p>
              <p className={player.dashSpeed >= opponent.dashSpeed ? "text-green" : "text-danger"}>{player.dashSpeed}</p>
              <p className={player.airSpeed >= opponent.airSpeed ? "text-green" : "text-danger"}>{player.airSpeed}</p>
              <p className={player.fallingSpeed >= opponent.fallingSpeed ? "text-green" : "text-danger"}>{player.fallingSpeed}</p>
              <p className={player.forwardRollLag >= opponent.forwardRollLag ? "text-green" : "text-danger"}>{player.forwardRollLag}</p>
              <p className={player.backRollLag >= opponent.backRollLag ? "text-green" : "text-danger"}>{player.backRollLag}</p>
              <p className={player.spotDodgeStart >= opponent.spotDodgeStart ? "text-green" : "text-danger"}>{player.spotDodgeStart}</p>
              <p className={player.spotDodgeLag >= opponent.spotDodgeLag ? "text-green" : "text-danger"}>{player.spotDodgeLag}</p>
              <p className={player.airDodgeLag >= opponent.airDodgeLag ? "text-green" : "text-danger"}>{player.airDodgeLag}</p>
              <p>{player.neutralSpecial}</p>
              <p>{player.sideSpecial}</p>
              <p>{player.upSpecial}</p>
              <p>{player.downSpecial}</p>
              <p>{player.neutral}</p>
              <p>{player.upTilt}</p>
              <p>{player.downTilt}</p>
              <p>{player.forwardTilt}</p>
              <p>{player.dashAttack}</p>
              <p>{player.upSmash}</p>
              <p>{player.downSmash}</p>
              <p>{player.forwardSmash}</p>
              <p>{player.nair}</p>
              <p>{player.uair}</p>
              <p>{player.dair}</p>
              <p>{player.fair}</p>
              <p>{player.bair}</p>
              <p>{player.zair}</p>
              <p>{player.pummel}</p>
              <p>{player.forwardThrow}</p>
              <p>{player.backThrow}</p>
              <p>{player.upThrow}</p>
              <p>{player.downThrow}</p>
              <p>{player.floorAttackFront}</p>
              <p>{player.floorAttackBack}</p>
              <p>{player.floorAttackTrip}</p>
              <p>{player.edgeAttack}</p>
              <p>{player.finalSmash}</p>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="stat-size">
              <p>Series</p>
              <p>Weight</p>
              <p>Walk Speed</p>
              <p>Run Speed</p>
              <p>Dash Speed</p>
              <p>Air Speed</p>
              <p>Falling Speed</p>
              <p>Forward Roll Lag</p>
              <p>Back Roll Lag</p>
              <p>Spot Dodge Start</p>
              <p>Spot Dodge Lag</p>
              <p>Air Dodge Lag</p>
              <p>Neutral Special</p>
              <p>Side Special</p>
              <p>Up Special</p>
              <p>Down Special</p>
              <p>Neutral Attack</p>
              <p>Up Tilt</p>
              <p>Down Tilt</p>
              <p>Forward Tilt</p>
              <p>Dash Attack</p>
              <p>Up Smash</p>
              <p>Down Smash</p>
              <p>Forward Smash</p>
              <p>Neutral Air</p>
              <p>Up Air</p>
              <p>Down Air</p>
              <p>Forward Air</p>
              <p>Back Air</p>
              <p>Grab Air</p>
              <p>Pummel</p>
              <p>Forward Throw</p>
              <p>Back Throw</p>
              <p>Up Throw</p>
              <p>Down Throw</p>
              <p>Front Floor Attack</p>
              <p>Back Floor Attack</p>
              <p>Trip Floor Attack</p>
              <p>Edge Attack</p>
              <p>Final Smash</p>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="stat-size">
              <p>{opponent.series}</p>
              <p className={opponent.weight >= player.weight ? "text-green" : "text-danger"}>{opponent.weight}</p>
              <p className={opponent.walkSpeed >= player.walkSpeed ? "text-green" : "text-danger"}>{opponent.walkSpeed}</p>
              <p className={opponent.runSpeed >= player.runSpeed ? "text-green" : "text-danger"}>{opponent.runSpeed}</p>
              <p className={opponent.dashSpeed >= player.dashSpeed ? "text-green" : "text-danger"}>{opponent.dashSpeed}</p>
              <p className={opponent.airSpeed >= player.airSpeed ? "text-green" : "text-danger"}>{opponent.airSpeed}</p>
              <p className={opponent.fallingSpeed >= player.fallingSpeed ? "text-green" : "text-danger"}>{opponent.fallingSpeed}</p>
              <p className={opponent.forwardRollLag >= player.forwardRollLag ? "text-green" : "text-danger"}>{opponent.forwardRollLag}</p>
              <p className={opponent.backRollLag >= player.backRollLag ? "text-green" : "text-danger"}>{opponent.backRollLag}</p>
              <p className={opponent.spotDodgeStart >= player.spotDodgeStart ? "text-green" : "text-danger"}>{opponent.spotDodgeStart}</p>
              <p className={opponent.spotDodgeLag >= player.spotDodgeLag ? "text-green" : "text-danger"}>{opponent.spotDodgeLag}</p>
              <p className={opponent.airDodgeLag >= player.airDodgeLag ? "text-green" : "text-danger"}>{opponent.airDodgeLag}</p>
              <p>{opponent.neutralSpecial}</p>
              <p>{opponent.sideSpecial}</p>
              <p>{opponent.upSpecial}</p>
              <p>{opponent.downSpecial}</p>
              <p>{opponent.neutral}</p>
              <p>{opponent.upTilt}</p>
              <p>{opponent.downTilt}</p>
              <p>{opponent.forwardTilt}</p>
              <p>{opponent.dashAttack}</p>
              <p>{opponent.upSmash}</p>
              <p>{opponent.downSmash}</p>
              <p>{opponent.forwardSmash}</p>
              <p>{opponent.nair}</p>
              <p>{opponent.uair}</p>
              <p>{opponent.dair}</p>
              <p>{opponent.fair}</p>
              <p>{opponent.bair}</p>
              <p>{opponent.zair}</p>
              <p>{opponent.pummel}</p>
              <p>{opponent.forwardThrow}</p>
              <p>{opponent.backThrow}</p>
              <p>{opponent.upThrow}</p>
              <p>{opponent.downThrow}</p>
              <p>{opponent.floorAttackFront}</p>
              <p>{opponent.floorAttackBack}</p>
              <p>{opponent.floorAttackTrip}</p>
              <p>{opponent.edgeAttack}</p>
              <p>{opponent.finalSmash}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Matchup