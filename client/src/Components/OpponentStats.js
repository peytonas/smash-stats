import React, { Component } from 'react';

class OpponentStats extends Component {
  render() {
    const player = this.props.player
    const opponent = this.props.opponent
    return (
      <div className="col col-md-4 text-center">
        <div className="stat-size">
          {opponent.name && <p className={opponent.weight === player.weight ? "text-yellow border-yellow" : opponent.weight > player.weight ? "text-green border-green" : "text-danger border-danger"}>{opponent.weight}</p>}
          {opponent.name && <p className={opponent.neutral === player.neutral ? "text-yellow border-yellow" : opponent.neutral > player.neutral ? "text-green border-green" : "text-danger border-danger"}>{opponent.neutral}</p>}
          {opponent.name && <p className={opponent.neutralStartup === player.neutralStartup ? "text-yellow border-yellow" : opponent.neutralStartup > player.neutralStartup ? "text-green border-green" : "text-danger border-danger"}>{opponent.neutralStartup}</p>}
          {opponent.name && <p className={opponent.neutralBaseKnockback === player.neutralBaseKnockback ? "text-yellow border-yellow" : opponent.neutralBaseKnockback > player.neutralBaseKnockback ? "text-green border-green" : "text-danger border-danger"}>{opponent.neutralBaseKnockback}</p>}
          {opponent.name && <p className={opponent.neutralSpecial === player.neutralSpecial ? "text-yellow border-yellow" : opponent.neutralSpecial > player.neutralSpecial ? "text-green border-green" : "text-danger border-danger"}>{opponent.neutralSpecial}</p>}
          {opponent.name && <p className={opponent.sideSpecial === player.sideSpecial ? "text-yellow border-yellow" : opponent.sideSpecial > player.sideSpecial ? "text-green border-green" : "text-danger border-danger"}>{opponent.sideSpecial}</p>}
          {opponent.name && <p className={opponent.upSpecial === player.upSpecial ? "text-yellow border-yellow" : opponent.upSpecial > player.upSpecial ? "text-green border-green" : "text-danger border-danger"}>{opponent.upSpecial}</p>}
          {opponent.name && <p className={opponent.downSpecial === player.downSpecial ? "text-yellow border-yellow" : opponent.downSpecial > player.downSpecial ? "text-green border-green" : "text-danger border-danger"}>{opponent.downSpecial}</p>}
          {opponent.name && <p className={opponent.upTilt === player.upTilt ? "text-yellow border-yellow" : opponent.upTilt > player.upTilt ? "text-green border-green" : "text-danger border-danger"}>{opponent.upTilt}</p>}
          {opponent.name && <p className={opponent.downTilt === player.downTilt ? "text-yellow border-yellow" : opponent.downTilt > player.downTilt ? "text-green border-green" : "text-danger border-danger"}>{opponent.downTilt}</p>}
          {opponent.name && <p className={opponent.forwardTilt === player.forwardTilt ? "text-yellow border-yellow" : opponent.forwardTilt > player.forwardTilt ? "text-green border-green" : "text-danger border-danger"}>{opponent.forwardTilt}</p>}
          {opponent.name && <p className={opponent.dashAttack === player.dashAttack ? "text-yellow border-yellow" : opponent.dashAttack > player.dashAttack ? "text-green border-green" : "text-danger border-danger"}>{opponent.dashAttack}</p>}
          {opponent.name && <p className={opponent.upSmash === player.upSmash ? "text-yellow border-yellow" : opponent.upSmash > player.upSmash ? "text-green border-green" : "text-danger border-danger"}>{opponent.upSmash}</p>}
          {opponent.name && <p className={opponent.downSmash === player.downSmash ? "text-yellow border-yellow" : opponent.downSmash > player.downSmash ? "text-green border-green" : "text-danger border-danger"}>{opponent.downSmash}</p>}
          {opponent.name && <p className={opponent.forwardSmash === player.forwardSmash ? "text-yellow border-yellow" : opponent.forwardSmash > player.forwardSmash ? "text-green border-green" : "text-danger border-danger"}>{opponent.forwardSmash}</p>}
          {opponent.name && <p className={opponent.nair === player.nair ? "text-yellow border-yellow" : opponent.nair > player.nair ? "text-green border-green" : "text-danger border-danger"}>{opponent.nair}</p>}
          {opponent.name && <p className={opponent.uair === player.uair ? "text-yellow border-yellow" : opponent.uair > player.uair ? "text-green border-green" : "text-danger border-danger"}>{opponent.uair}</p>}
          {opponent.name && <p className={opponent.dair === player.dair ? "text-yellow border-yellow" : opponent.dair > player.dair ? "text-green border-green" : "text-danger border-danger"}>{opponent.dair}</p>}
          {opponent.name && <p className={opponent.fair === player.fair ? "text-yellow border-yellow" : opponent.fair > player.fair ? "text-green border-green" : "text-danger border-danger"}>{opponent.fair}</p>}
          {opponent.name && <p className={opponent.bair === player.bair ? "text-yellow border-yellow" : opponent.bair > player.bair ? "text-green border-green" : "text-danger border-danger"}>{opponent.bair}</p>}
          {opponent.name && <p className={opponent.zair === player.zair ? "text-yellow border-yellow" : opponent.zair > player.zair ? "text-green border-green" : "text-danger border-danger"}>{opponent.zair}</p>}
          {opponent.name && <p className={opponent.pummel === player.pummel ? "text-yellow border-yellow" : opponent.pummel > player.pummel ? "text-green border-green" : "text-danger border-danger"}>{opponent.pummel}</p>}
          {opponent.name && <p className={opponent.forwardThrow === player.forwardThrow ? "text-yellow border-yellow" : opponent.forwardThrow > player.forwardThrow ? "text-green border-green" : "text-danger border-danger"}>{opponent.forwardThrow}</p>}
          {opponent.name && <p className={opponent.backThrow === player.backThrow ? "text-yellow border-yellow" : opponent.backThrow > player.backThrow ? "text-green border-green" : "text-danger border-danger"}>{opponent.backThrow}</p>}
          {opponent.name && <p className={opponent.upThrow === player.upThrow ? "text-yellow border-yellow" : opponent.upThrow > player.upThrow ? "text-green border-green" : "text-danger border-danger"}>{opponent.upThrow}</p>}
          {opponent.name && <p className={opponent.downThrow === player.downThrow ? "text-yellow border-yellow" : opponent.downThrow > player.downThrow ? "text-green border-green" : "text-danger border-danger"}>{opponent.downThrow}</p>}
          {opponent.name && <p className={opponent.floorAttackFront === player.floorAttackFront ? "text-yellow border-yellow" : opponent.floorAttackFront > player.floorAttackFront ? "text-green border-green" : "text-danger border-danger"}>{opponent.floorAttackFront}</p>}
          {opponent.name && <p className={opponent.floorAttackBack === player.floorAttackBack ? "text-yellow border-yellow" : opponent.floorAttackBack > player.floorAttackBack ? "text-green border-green" : "text-danger border-danger"}>{opponent.floorAttackBack}</p>}
          {opponent.name && <p className={opponent.floorAttackTrip === player.floorAttackTrip ? "text-yellow border-yellow" : opponent.floorAttackTrip > player.floorAttackTrip ? "text-green border-green" : "text-danger border-danger"}>{opponent.floorAttackTrip}</p>}
          {opponent.name && <p className={opponent.edgeAttack === player.edgeAttack ? "text-yellow border-yellow" : opponent.edgeAttack > player.edgeAttack ? "text-green border-green" : "text-danger border-danger"}>{opponent.edgeAttack}</p>}
          {opponent.name && <p className={opponent.finalSmash === player.finalSmash ? "text-yellow border-yellow" : opponent.finalSmash > player.finalSmash ? "text-green border-green" : "text-danger border-danger"}>{opponent.finalSmash}</p>}
          {opponent.name && <p className={opponent.walkSpeed === player.walkSpeed ? "text-yellow border-yellow" : opponent.walkSpeed > player.walkSpeed ? "text-green border-green" : "text-danger border-danger"}>{opponent.walkSpeed}</p>}
          {opponent.name && <p className={opponent.runSpeed === player.runSpeed ? "text-yellow border-yellow" : opponent.runSpeed > player.runSpeed ? "text-green border-green" : "text-danger border-danger"}>{opponent.runSpeed}</p>}
          {opponent.name && <p className={opponent.dashSpeed === player.dashSpeed ? "text-yellow border-yellow" : opponent.dashSpeed > player.dashSpeed ? "text-green border-green" : "text-danger border-danger"}>{opponent.dashSpeed}</p>}
          {opponent.name && <p className={opponent.airSpeed === player.airSpeed ? "text-yellow border-yellow" : opponent.airSpeed > player.airSpeed ? "text-green border-green" : "text-danger border-danger"}>{opponent.airSpeed}</p>}
          {opponent.name && <p className={opponent.fallingSpeed === player.fallingSpeed ? "text-yellow border-yellow" : opponent.fallingSpeed > player.fallingSpeed ? "text-green border-green" : "text-danger border-danger"}>{opponent.fallingSpeed}</p>}
          {opponent.name && <p className={opponent.forwardRollLag === player.forwardRollLag ? "text-yellow border-yellow" : opponent.forwardRollLag > player.forwardRollLag ? "text-green border-green" : "text-danger border-danger"}>{opponent.forwardRollLag}</p>}
          {opponent.name && <p className={opponent.backRollLag === player.backRollLag ? "text-yellow border-yellow" : opponent.backRollLag > player.backRollLag ? "text-green border-green" : "text-danger border-danger"}>{opponent.backRollLag}</p>}
          {opponent.name && <p className={opponent.spotDodgeStart === player.spotDodgeStart ? "text-yellow border-yellow" : opponent.spotDodgeStart > player.spotDodgeStart ? "text-green border-green" : "text-danger border-danger"}>{opponent.spotDodgeStart}</p>}
          {opponent.name && <p className={opponent.spotDodgeLag === player.spotDodgeLag ? "text-yellow border-yellow" : opponent.spotDodgeLag > player.spotDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{opponent.spotDodgeLag}</p>}
          {opponent.name && <p className={opponent.airDodgeLag === player.airDodgeLag ? "text-yellow border-yellow" : opponent.airDodgeLag > player.airDodgeLag ? "text-green border-green" : "text-danger border-danger"}>{opponent.airDodgeLag}</p>}
        </div>
      </div>
    )
  }
}

export default OpponentStats

