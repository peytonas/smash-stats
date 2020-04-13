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
              <p className={player.neutralSpecial >= opponent.neutralSpecial ? "text-green" : "text-danger"}>{player.neutralSpecial}</p>
              <p className={player.sideSpecial >= opponent.sideSpecial ? "text-green" : "text-danger"}>{player.sideSpecial}</p>
              <p className={player.upSpecial >= opponent.upSpecial ? "text-green" : "text-danger"}>{player.upSpecial}</p>
              <p className={player.downSpecial >= opponent.downSpecial ? "text-green" : "text-danger"}>{player.downSpecial}</p>
              <p className={player.neutral >= opponent.neutral ? "text-green" : "text-danger"}>{player.neutral}</p>
              <p className={player.upTilt >= opponent.upTilt ? "text-green" : "text-danger"}>{player.upTilt}</p>
              <p className={player.downTilt >= opponent.downTilt ? "text-green" : "text-danger"}>{player.downTilt}</p>
              <p className={player.forwardTilt >= opponent.forwardTilt ? "text-green" : "text-danger"}>{player.forwardTilt}</p>
              <p className={player.dashAttack >= opponent.dashAttack ? "text-green" : "text-danger"}>{player.dashAttack}</p>
              <p className={player.upSmash >= opponent.upSmash ? "text-green" : "text-danger"}>{player.upSmash}</p>
              <p className={player.downSmash >= opponent.downSmash ? "text-green" : "text-danger"}>{player.downSmash}</p>
              <p className={player.forwardSmash >= opponent.forwardSmash ? "text-green" : "text-danger"}>{player.forwardSmash}</p>
              <p className={player.nair >= opponent.nair ? "text-green" : "text-danger"}>{player.nair}</p>
              <p className={player.uair >= opponent.uair ? "text-green" : "text-danger"}>{player.uair}</p>
              <p className={player.dair >= opponent.dair ? "text-green" : "text-danger"}>{player.dair}</p>
              <p className={player.fair >= opponent.fair ? "text-green" : "text-danger"}>{player.fair}</p>
              <p className={player.bair >= opponent.bair ? "text-green" : "text-danger"}>{player.bair}</p>
              <p className={player.zair >= opponent.zair ? "text-green" : "text-danger"}>{player.zair}</p>
              <p className={player.pummel >= opponent.pummel ? "text-green" : "text-danger"}>{player.pummel}</p>
              <p className={player.forwardThrow >= opponent.forwardThrow ? "text-green" : "text-danger"}>{player.forwardThrow}</p>
              <p className={player.backThrow >= opponent.backThrow ? "text-green" : "text-danger"}>{player.backThrow}</p>
              <p className={player.upThrow >= opponent.upThrow ? "text-green" : "text-danger"}>{player.upThrow}</p>
              <p className={player.downThrow >= opponent.downThrow ? "text-green" : "text-danger"}>{player.downThrow}</p>
              <p className={player.floorAttackFront >= opponent.floorAttackFront ? "text-green" : "text-danger"}>{player.floorAttackFront}</p>
              <p className={player.floorAttackBack >= opponent.floorAttackBack ? "text-green" : "text-danger"}>{player.floorAttackBack}</p>
              <p className={player.floorAttackTrip >= opponent.floorAttackTrip ? "text-green" : "text-danger"}>{player.floorAttackTrip}</p>
              <p className={player.edgeAttack >= opponent.edgeAttack ? "text-green" : "text-danger"}>{player.edgeAttack}</p>
              <p className={player.finalSmash >= opponent.finalSmash ? "text-green" : "text-danger"}>{player.finalSmash}</p>
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
              <p className={opponent.neutralSpecial >= player.neutralSpecial ? "text-green" : "text-danger"}>{opponent.neutralSpecial}</p>
              <p className={opponent.sideSpecial >= player.sideSpecial ? "text-green" : "text-danger"}>{opponent.sideSpecial}</p>
              <p className={opponent.upSpecial >= player.upSpecial ? "text-green" : "text-danger"}>{opponent.upSpecial}</p>
              <p className={opponent.downSpecial >= player.downSpecial ? "text-green" : "text-danger"}>{opponent.downSpecial}</p>
              <p className={opponent.neutral >= player.neutral ? "text-green" : "text-danger"}>{opponent.neutral}</p>
              <p className={opponent.upTilt >= player.upTilt ? "text-green" : "text-danger"}>{opponent.upTilt}</p>
              <p className={opponent.downTilt >= player.downTilt ? "text-green" : "text-danger"}>{opponent.downTilt}</p>
              <p className={opponent.forwardTilt >= player.forwardTilt ? "text-green" : "text-danger"}>{opponent.forwardTilt}</p>
              <p className={opponent.dashAttack >= player.dashAttack ? "text-green" : "text-danger"}>{opponent.dashAttack}</p>
              <p className={opponent.upSmash >= player.upSmash ? "text-green" : "text-danger"}>{opponent.upSmash}</p>
              <p className={opponent.downSmash >= player.downSmash ? "text-green" : "text-danger"}>{opponent.downSmash}</p>
              <p className={opponent.forwardSmash >= player.forwardSmash ? "text-green" : "text-danger"}>{opponent.forwardSmash}</p>
              <p className={opponent.nair >= player.nair ? "text-green" : "text-danger"}>{opponent.nair}</p>
              <p className={opponent.uair >= player.uair ? "text-green" : "text-danger"}>{opponent.uair}</p>
              <p className={opponent.dair >= player.dair ? "text-green" : "text-danger"}>{opponent.dair}</p>
              <p className={opponent.fair >= player.fair ? "text-green" : "text-danger"}>{opponent.fair}</p>
              <p className={opponent.bair >= player.bair ? "text-green" : "text-danger"}>{opponent.bair}</p>
              <p className={opponent.zair >= player.zair ? "text-green" : "text-danger"}>{opponent.zair}</p>
              <p className={opponent.pummel >= player.pummel ? "text-green" : "text-danger"}>{opponent.pummel}</p>
              <p className={opponent.forwardThrow >= player.forwardThrow ? "text-green" : "text-danger"}>{opponent.forwardThrow}</p>
              <p className={opponent.backThrow >= player.backThrow ? "text-green" : "text-danger"}>{opponent.backThrow}</p>
              <p className={opponent.upThrow >= player.upThrow ? "text-green" : "text-danger"}>{opponent.upThrow}</p>
              <p className={opponent.downThrow >= player.downThrow ? "text-green" : "text-danger"}>{opponent.downThrow}</p>
              <p className={opponent.floorAttackFront >= player.floorAttackFront ? "text-green" : "text-danger"}>{opponent.floorAttackFront}</p>
              <p className={opponent.floorAttackBack >= player.floorAttackBack ? "text-green" : "text-danger"}>{opponent.floorAttackBack}</p>
              <p className={opponent.floorAttackTrip >= player.floorAttackTrip ? "text-green" : "text-danger"}>{opponent.floorAttackTrip}</p>
              <p className={opponent.edgeAttack >= player.edgeAttack ? "text-green" : "text-danger"}>{opponent.edgeAttack}</p>
              <p className={opponent.finalSmash >= player.finalSmash ? "text-green" : "text-danger"}>{opponent.finalSmash}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Matchup