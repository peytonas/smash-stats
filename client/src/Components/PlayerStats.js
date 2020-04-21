import React, { Component } from 'react';

class PlayerStats extends Component {

  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
      <div className="col col-md-4 text-center">
        <div className="stat-size">
          {player.name && <p className={player.weight >= opponent.weight ? "text-green border-green" : "text-danger border-danger"}>{player.weight}</p>}
          {player.name && <p className={player.walkSpeed >= opponent.walkSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.walkSpeed}</p>}
          {player.name && <p className={player.runSpeed >= opponent.runSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.runSpeed}</p>}
          {player.name && <p className={player.dashSpeed >= opponent.dashSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.dashSpeed}</p>}
          {player.name && <p className={player.airSpeed >= opponent.airSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.airSpeed}</p>}
          {player.name && <p className={player.fallingSpeed >= opponent.fallingSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.fallingSpeed}</p>}
          {player.name && <p className={opponent.forwardRollLag >= player.forwardRollLag ? "text-green border-green" : "text-danger border-danger"}>{player.forwardRollLag}</p>}
          {player.name && <p className={opponent.backRollLag >= player.backRollLag ? "text-green border-green" : "text-danger border-danger"}>{player.backRollLag}</p>}
          {player.name && <p className={player.spotDodgeStart >= opponent.spotDodgeStart ? "text-green border-green" : "text-danger border-danger"}>{player.spotDodgeStart}</p>}
          {player.name && <p className={opponent.spotDodgeLag >= player.spotDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{player.spotDodgeLag}</p>}
          {player.name && <p className={opponent.airDodgeLag >= player.airDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{player.airDodgeLag}</p>}
          {player.name && <p className={player.neutralSpecial >= opponent.neutralSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.neutralSpecial}</p>}
          {player.name && <p className={player.sideSpecial >= opponent.sideSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.sideSpecial}</p>}
          {player.name && <p className={player.upSpecial >= opponent.upSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.upSpecial}</p>}
          {player.name && <p className={player.downSpecial >= opponent.downSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.downSpecial}</p>}
          {player.name && <p className={player.neutral >= opponent.neutral ? "text-green border-green" : "text-danger border-danger"}>{player.neutral}</p>}
          {player.name && <p className={player.upTilt >= opponent.upTilt ? "text-green border-green" : "text-danger border-danger"}>{player.upTilt}</p>}
          {player.name && <p className={player.downTilt >= opponent.downTilt ? "text-green border-green" : "text-danger border-danger"}>{player.downTilt}</p>}
          {player.name && <p className={player.forwardTilt >= opponent.forwardTilt ? "text-green border-green" : "text-danger border-danger"}>{player.forwardTilt}</p>}
          {player.name && <p className={player.dashAttack >= opponent.dashAttack ? "text-green border-green" : "text-danger border-danger"}>{player.dashAttack}</p>}
          {player.name && <p className={player.upSmash >= opponent.upSmash ? "text-green border-green" : "text-danger border-danger"}>{player.upSmash}</p>}
          {player.name && <p className={player.downSmash >= opponent.downSmash ? "text-green border-green" : "text-danger border-danger"}>{player.downSmash}</p>}
          {player.name && <p className={player.forwardSmash >= opponent.forwardSmash ? "text-green border-green" : "text-danger border-danger"}>{player.forwardSmash}</p>}
          {player.name && <p className={player.nair >= opponent.nair ? "text-green border-green" : "text-danger border-danger"}>{player.nair}</p>}
          {player.name && <p className={player.uair >= opponent.uair ? "text-green border-green" : "text-danger border-danger"}>{player.uair}</p>}
          {player.name && <p className={player.dair >= opponent.dair ? "text-green border-green" : "text-danger border-danger"}>{player.dair}</p>}
          {player.name && <p className={player.fair >= opponent.fair ? "text-green border-green" : "text-danger border-danger"}>{player.fair}</p>}
          {player.name && <p className={player.bair >= opponent.bair ? "text-green border-green" : "text-danger border-danger"}>{player.bair}</p>}
          {player.name && <p className={player.zair >= opponent.zair ? "text-green border-green" : "text-danger border-danger"}>{player.zair}</p>}
          {player.name && <p className={player.pummel >= opponent.pummel ? "text-green border-green" : "text-danger border-danger"}>{player.pummel}</p>}
          {player.name && <p className={player.forwardThrow >= opponent.forwardThrow ? "text-green border-green" : "text-danger border-danger"}>{player.forwardThrow}</p>}
          {player.name && <p className={player.backThrow >= opponent.backThrow ? "text-green border-green" : "text-danger border-danger"}>{player.backThrow}</p>}
          {player.name && <p className={player.upThrow >= opponent.upThrow ? "text-green border-green" : "text-danger border-danger"}>{player.upThrow}</p>}
          {player.name && <p className={player.downThrow >= opponent.downThrow ? "text-green border-green" : "text-danger border-danger"}>{player.downThrow}</p>}
          {player.name && <p className={player.floorAttackFront >= opponent.floorAttackFront ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackFront}</p>}
          {player.name && <p className={player.floorAttackBack >= opponent.floorAttackBack ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackBack}</p>}
          {player.name && <p className={player.floorAttackTrip >= opponent.floorAttackTrip ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackTrip}</p>}
          {player.name && <p className={player.edgeAttack >= opponent.edgeAttack ? "text-green border-green" : "text-danger border-danger"}>{player.edgeAttack}</p>}
          {player.name && <p className={player.finalSmash >= opponent.finalSmash ? "text-green border-green" : "text-danger border-danger"}>{player.finalSmash}</p>}
        </div>
      </div>
    )
  }
}

export default PlayerStats