import React, { Component } from 'react';

class PlayerStats extends Component {
  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
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
    )
  }
}

export default PlayerStats