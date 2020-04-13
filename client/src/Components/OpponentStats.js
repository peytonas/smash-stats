import React, { Component } from 'react';

class OpponentStats extends Component {
  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
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
    )
  }
}

export default OpponentStats

