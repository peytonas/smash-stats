import React, { Component } from 'react';

class PlayerStats extends Component {
  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
      <div className="col col-md-4 text-center">
        <div className="stat-size">
          {player.name && <p className={player.weight === opponent.weight ? "text-yellow border-yellow" : player.weight > opponent.weight ? "text-green border-green" : "text-danger border-danger"}>{player.weight}</p>}
          {player.name && <p className={player.neutral === opponent.neutral ? "text-yellow border-yellow" : player.neutral > opponent.neutral ? "text-green border-green" : "text-danger border-danger"}>{player.neutral}</p>}
          {player.name && <p className={player.neutralStartup === opponent.neutralStartup ? "text-yellow border-yellow" : player.neutralStartup > opponent.neutralStartup ? "text-green border-green" : "text-danger border-danger"}>{player.neutralStartup}</p>}
          {player.name && <p className={player.neutralBaseKnockback === opponent.neutralBaseKnockback ? "text-yellow border-yellow" : player.neutralBaseKnockback > opponent.neutralBaseKnockback ? "text-green border-green" : "text-danger border-danger"}>{player.neutralBaseKnockback}</p>}
          {player.name && <p className={player.neutralSpecial === opponent.neutralSpecial ? "text-yellow border-yellow" : player.neutralSpecial > opponent.neutralSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.neutralSpecial}</p>}
          {player.name && <p className={player.sideSpecial === opponent.sideSpecial ? "text-yellow border-yellow" : player.sideSpecial > opponent.sideSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.sideSpecial}</p>}
          {player.name && <p className={player.upSpecial === opponent.upSpecial ? "text-yellow border-yellow" : player.upSpecial > opponent.upSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.upSpecial}</p>}
          {player.name && <p className={player.downSpecial === opponent.downSpecial ? "text-yellow border-yellow" : player.downSpecial > opponent.downSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.downSpecial}</p>}
          {player.name && <p className={player.upTilt === opponent.upTilt ? "text-yellow border-yellow" : player.upTilt > opponent.upTilt ? "text-green border-green" : "text-danger border-danger"}>{player.upTilt}</p>}
          {player.name && <p className={player.downTilt === opponent.downTilt ? "text-yellow border-yellow" : player.downTilt > opponent.downTilt ? "text-green border-green" : "text-danger border-danger"}>{player.downTilt}</p>}
          {player.name && <p className={player.forwardTilt === opponent.forwardTilt ? "text-yellow border-yellow" : player.forwardTilt > opponent.forwardTilt ? "text-green border-green" : "text-danger border-danger"}>{player.forwardTilt}</p>}
          {player.name && <p className={player.dashAttack === opponent.dashAttack ? "text-yellow border-yellow" : player.dashAttack > opponent.dashAttack ? "text-green border-green" : "text-danger border-danger"}>{player.dashAttack}</p>}
          {player.name && <p className={player.upSmash === opponent.upSmash ? "text-yellow border-yellow" : player.upSmash > opponent.upSmash ? "text-green border-green" : "text-danger border-danger"}>{player.upSmash}</p>}
          {player.name && <p className={player.downSmash === opponent.downSmash ? "text-yellow border-yellow" : player.downSmash > opponent.downSmash ? "text-green border-green" : "text-danger border-danger"}>{player.downSmash}</p>}
          {player.name && <p className={player.forwardSmash === opponent.forwardSmash ? "text-yellow border-yellow" : player.forwardSmash > opponent.forwardSmash ? "text-green border-green" : "text-danger border-danger"}>{player.forwardSmash}</p>}
          {player.name && <p className={player.nair === opponent.nair ? "text-yellow border-yellow" : player.nair > opponent.nair ? "text-green border-green" : "text-danger border-danger"}>{player.nair}</p>}
          {player.name && <p className={player.uair === opponent.uair ? "text-yellow border-yellow" : player.uair > opponent.uair ? "text-green border-green" : "text-danger border-danger"}>{player.uair}</p>}
          {player.name && <p className={player.dair === opponent.dair ? "text-yellow border-yellow" : player.dair > opponent.dair ? "text-green border-green" : "text-danger border-danger"}>{player.dair}</p>}
          {player.name && <p className={player.fair === opponent.fair ? "text-yellow border-yellow" : player.fair > opponent.fair ? "text-green border-green" : "text-danger border-danger"}>{player.fair}</p>}
          {player.name && <p className={player.bair === opponent.bair ? "text-yellow border-yellow" : player.bair > opponent.bair ? "text-green border-green" : "text-danger border-danger"}>{player.bair}</p>}
          {player.name && <p className={player.zair === opponent.zair ? "text-yellow border-yellow" : player.zair > opponent.zair ? "text-green border-green" : "text-danger border-danger"}>{player.zair}</p>}
          {player.name && <p className={player.pummel === opponent.pummel ? "text-yellow border-yellow" : player.pummel > opponent.pummel ? "text-green border-green" : "text-danger border-danger"}>{player.pummel}</p>}
          {player.name && <p className={player.forwardThrow === opponent.forwardThrow ? "text-yellow border-yellow" : player.forwardThrow > opponent.forwardThrow ? "text-green border-green" : "text-danger border-danger"}>{player.forwardThrow}</p>}
          {player.name && <p className={player.backThrow === opponent.backThrow ? "text-yellow border-yellow" : player.backThrow > opponent.backThrow ? "text-green border-green" : "text-danger border-danger"}>{player.backThrow}</p>}
          {player.name && <p className={player.upThrow === opponent.upThrow ? "text-yellow border-yellow" : player.upThrow > opponent.upThrow ? "text-green border-green" : "text-danger border-danger"}>{player.upThrow}</p>}
          {player.name && <p className={player.downThrow === opponent.downThrow ? "text-yellow border-yellow" : player.downThrow > opponent.downThrow ? "text-green border-green" : "text-danger border-danger"}>{player.downThrow}</p>}
          {player.name && <p className={player.floorAttackFront === opponent.floorAttackFront ? "text-yellow border-yellow" : player.floorAttackFront > opponent.floorAttackFront ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackFront}</p>}
          {player.name && <p className={player.floorAttackBack === opponent.floorAttackBack ? "text-yellow border-yellow" : player.floorAttackBack > opponent.floorAttackBack ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackBack}</p>}
          {player.name && <p className={player.floorAttackTrip === opponent.floorAttackTrip ? "text-yellow border-yellow" : player.floorAttackTrip > opponent.floorAttackTrip ? "text-green border-green" : "text-danger border-danger"}>{player.floorAttackTrip}</p>}
          {player.name && <p className={player.edgeAttack === opponent.edgeAttack ? "text-yellow border-yellow" : player.edgeAttack > opponent.edgeAttack ? "text-green border-green" : "text-danger border-danger"}>{player.edgeAttack}</p>}
          {player.name && <p className={player.finalSmash === opponent.finalSmash ? "text-yellow border-yellow" : player.finalSmash > opponent.finalSmash ? "text-green border-green" : "text-danger border-danger"}>{player.finalSmash}</p>}
          {player.name && <p className={player.walkSpeed === opponent.walkSpeed ? "text-yellow border-yellow" : player.walkSpeed > opponent.walkSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.walkSpeed}</p>}
          {player.name && <p className={player.runSpeed === opponent.runSpeed ? "text-yellow border-yellow" : player.runSpeed > opponent.runSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.runSpeed}</p>}
          {player.name && <p className={player.dashSpeed === opponent.dashSpeed ? "text-yellow border-yellow" : player.dashSpeed > opponent.dashSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.dashSpeed}</p>}
          {player.name && <p className={player.airSpeed === opponent.airSpeed ? "text-yellow border-yellow" : player.airSpeed > opponent.airSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.airSpeed}</p>}
          {player.name && <p className={player.fallingSpeed === opponent.fallingSpeed ? "text-yellow border-yellow" : player.fallingSpeed > opponent.fallingSpeed ? "text-green border-green" : "text-danger border-danger"}>{player.fallingSpeed}</p>}
          {player.name && <p className={player.forwardRollLag === opponent.forwardRollLag ? "text-yellow border-yellow" : player.forwardRollLag > opponent.forwardRollLag ? "text-green border-green" : "text-danger border-danger"}>{player.forwardRollLag}</p>}
          {player.name && <p className={player.backRollLag === opponent.backRollLag ? "text-yellow border-yellow" : player.backRollLag > opponent.backRollLag ? "text-green border-green" : "text-danger border-danger"}>{player.backRollLag}</p>}
          {player.name && <p className={player.spotDodgeStart === opponent.spotDodgeStart ? "text-yellow border-yellow" : player.spotDodgeStart > opponent.spotDodgeStart ? "text-green border-green" : "text-danger border-danger"}>{player.spotDodgeStart}</p>}
          {player.name && <p className={player.spotDodgeLag === opponent.spotDodgeLag ? "text-yellow border-yellow" : player.spotDodgeLag > opponent.spotDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{player.spotDodgeLag}</p>}
          {player.name && <p className={player.airDodgeLag === opponent.airDodgeLag ? "text-yellow border-yellow" : player.airDodgeLag > opponent.airDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{player.airDodgeLag}</p>}
        </div>
      </div>
    )
  }
}

export default PlayerStats