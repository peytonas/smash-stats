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

          {player.name && <p className={player.neutralLag === opponent.neutralLag ? "text-yellow border-yellow" : player.neutralLag > opponent.neutralLag ? "text-green border-green" : "text-danger border-danger"}>{player.neutralLag}</p>}

          {player.name && <p className={player.neutralSpecial === opponent.neutralSpecial ? "text-yellow border-yellow" : player.neutralSpecial > opponent.neutralSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.neutralSpecial}</p>}

          {player.name && <p className={player.neutralSpecialStartup === opponent.neutralSpecialStartup ? "text-yellow border-yellow" : player.neutralSpecialStartup > opponent.neutralSpecialStartup ? "text-green border-green" : "text-danger border-danger"}>{player.neutralSpecialStartup}</p>}

          {player.name && <p className={player.neutralSpecialLag === opponent.neutralSpecialLag ? "text-yellow border-yellow" : player.neutralSpecialLag > opponent.neutralSpecialLag ? "text-green border-green" : "text-danger border-danger"}>{player.neutralSpecialLag}</p>}

          {player.name && <p className={player.sideSpecial === opponent.sideSpecial ? "text-yellow border-yellow" : player.sideSpecial > opponent.sideSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.sideSpecial}</p>}

          {player.name && <p className={player.sideSpecialStartup === opponent.sideSpecialStartup ? "text-yellow border-yellow" : player.sideSpecialStartup > opponent.sideSpecialStartup ? "text-green border-green" : "text-danger border-danger"}>{player.sideSpecialStartup}</p>}

          {player.name && <p className={player.sideSpecialLag === opponent.sideSpecialLag ? "text-yellow border-yellow" : player.sideSpecialLag > opponent.sideSpecialLag ? "text-green border-green" : "text-danger border-danger"}>{player.sideSpecialLag}</p>}

          {player.name && <p className={player.upSpecial === opponent.upSpecial ? "text-yellow border-yellow" : player.upSpecial > opponent.upSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.upSpecial}</p>}

          {player.name && <p className={player.upSpecialStartup === opponent.upSpecialStartup ? "text-yellow border-yellow" : player.upSpecialStartup > opponent.upSpecialStartup ? "text-green border-green" : "text-danger border-danger"}>{player.upSpecialStartup}</p>}

          {player.name && <p className={player.upSpecialLag === opponent.upSpecialLag ? "text-yellow border-yellow" : player.upSpecialLag > opponent.upSpecialLag ? "text-green border-green" : "text-danger border-danger"}>{player.upSpecialLag}</p>}

          {player.name && <p className={player.downSpecial === opponent.downSpecial ? "text-yellow border-yellow" : player.downSpecial > opponent.downSpecial ? "text-green border-green" : "text-danger border-danger"}>{player.downSpecial}</p>}

          {player.name && <p className={player.downSpecialStartup === opponent.downSpecialStartup ? "text-yellow border-yellow" : player.downSpecialStartup > opponent.downSpecialStartup ? "text-green border-green" : "text-danger border-danger"}>{player.downSpecialStartup}</p>}

          {player.name && <p className={player.downSpecialLag === opponent.downSpecialLag ? "text-yellow border-yellow" : player.downSpecialLag > opponent.downSpecialLag ? "text-green border-green" : "text-danger border-danger"}>{player.downSpecialLag}</p>}

          {player.name && <p className={player.upTilt === opponent.upTilt ? "text-yellow border-yellow" : player.upTilt > opponent.upTilt ? "text-green border-green" : "text-danger border-danger"}>{player.upTilt}</p>}

          {player.name && <p className={player.upTiltStartup === opponent.upTiltStartup ? "text-yellow border-yellow" : player.upTiltStartup > opponent.upTiltStartup ? "text-green border-green" : "text-danger border-danger"}>{player.upTiltStartup}</p>}

          {player.name && <p className={player.upTiltLag === opponent.upTiltLag ? "text-yellow border-yellow" : player.upTiltLag > opponent.upTiltLag ? "text-green border-green" : "text-danger border-danger"}>{player.upTiltLag}</p>}

          {player.name && <p className={player.downTilt === opponent.downTilt ? "text-yellow border-yellow" : player.downTilt > opponent.downTilt ? "text-green border-green" : "text-danger border-danger"}>{player.downTilt}</p>}

          {player.name && <p className={player.downTiltStartup === opponent.downTiltStartup ? "text-yellow border-yellow" : player.downTiltStartup > opponent.downTiltStartup ? "text-green border-green" : "text-danger border-danger"}>{player.downTiltStartup}</p>}

          {player.name && <p className={player.downTiltLag === opponent.downTiltLag ? "text-yellow border-yellow" : player.downTiltLag > opponent.downTiltLag ? "text-green border-green" : "text-danger border-danger"}>{player.downTiltLag}</p>}

          {player.name && <p className={player.forwardTilt === opponent.forwardTilt ? "text-yellow border-yellow" : player.forwardTilt > opponent.forwardTilt ? "text-green border-green" : "text-danger border-danger"}>{player.forwardTilt}</p>}

          {player.name && <p className={player.forwardTiltStartup === opponent.forwardTiltStartup ? "text-yellow border-yellow" : player.forwardTiltStartup > opponent.forwardTiltStartup ? "text-green border-green" : "text-danger border-danger"}>{player.forwardTiltStartup}</p>}

          {player.name && <p className={player.forwardTiltLag === opponent.forwardTiltLag ? "text-yellow border-yellow" : player.forwardTiltLag > opponent.forwardTiltLag ? "text-green border-green" : "text-danger border-danger"}>{player.forwardTiltLag}</p>}

          {player.name && <p className={player.dashAttack === opponent.dashAttack ? "text-yellow border-yellow" : player.dashAttack > opponent.dashAttack ? "text-green border-green" : "text-danger border-danger"}>{player.dashAttack}</p>}

          {player.name && <p className={player.dashAttackStartup === opponent.dashAttackStartup ? "text-yellow border-yellow" : player.dashAttackStartup > opponent.dashAttackStartup ? "text-green border-green" : "text-danger border-danger"}>{player.dashAttackStartup}</p>}

          {player.name && <p className={player.dashAttackLag === opponent.dashAttackLag ? "text-yellow border-yellow" : player.dashAttackLag > opponent.dashAttackLag ? "text-green border-green" : "text-danger border-danger"}>{player.dashAttackLag}</p>}

          {player.name && <p className={player.upSmash === opponent.upSmash ? "text-yellow border-yellow" : player.upSmash > opponent.upSmash ? "text-green border-green" : "text-danger border-danger"}>{player.upSmash}</p>}

          {player.name && <p className={player.upSmashStartup === opponent.upSmashStartup ? "text-yellow border-yellow" : player.upSmashStartup > opponent.upSmashStartup ? "text-green border-green" : "text-danger border-danger"}>{player.upSmashStartup}</p>}

          {player.name && <p className={player.upSmashLag === opponent.upSmashLag ? "text-yellow border-yellow" : player.upSmashLag > opponent.upSmashLag ? "text-green border-green" : "text-danger border-danger"}>{player.upSmashLag}</p>}

          {player.name && <p className={player.downSmash === opponent.downSmash ? "text-yellow border-yellow" : player.downSmash > opponent.downSmash ? "text-green border-green" : "text-danger border-danger"}>{player.downSmash}</p>}

          {player.name && <p className={player.downSmashStartup === opponent.downSmashStartup ? "text-yellow border-yellow" : player.downSmashStartup > opponent.downSmashStartup ? "text-green border-green" : "text-danger border-danger"}>{player.downSmashStartup}</p>}

          {player.name && <p className={player.downSmashLag === opponent.downSmashLag ? "text-yellow border-yellow" : player.downSmashLag > opponent.downSmashLag ? "text-green border-green" : "text-danger border-danger"}>{player.downSmashLag}</p>}

          {player.name && <p className={player.forwardSmash === opponent.forwardSmash ? "text-yellow border-yellow" : player.forwardSmash > opponent.forwardSmash ? "text-green border-green" : "text-danger border-danger"}>{player.forwardSmash}</p>}

          {player.name && <p className={player.forwardSmashStartup === opponent.forwardSmashStartup ? "text-yellow border-yellow" : player.forwardSmashStartup > opponent.forwardSmashStartup ? "text-green border-green" : "text-danger border-danger"}>{player.forwardSmashStartup}</p>}

          {player.name && <p className={player.forwardSmashLag === opponent.forwardSmashLag ? "text-yellow border-yellow" : player.forwardSmashLag > opponent.forwardSmashLag ? "text-green border-green" : "text-danger border-danger"}>{player.forwardSmashLag}</p>}

          {player.name && <p className={player.nair === opponent.nair ? "text-yellow border-yellow" : player.nair > opponent.nair ? "text-green border-green" : "text-danger border-danger"}>{player.nair}</p>}

          {player.name && <p className={player.nairStartup === opponent.nairStartup ? "text-yellow border-yellow" : player.nairStartup > opponent.nairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.nairStartup}</p>}

          {player.name && <p className={player.nairLandingLag === opponent.nairLandingLag ? "text-yellow border-yellow" : player.nairLandingLag > opponent.nairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.nairLandingLag}</p>}

          {player.name && <p className={player.nairAutoCancel === opponent.nairAutoCancel ? "text-yellow border-yellow" : player.nairAutoCancel > opponent.nairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.nairAutoCancel}</p>}

          {player.name && <p className={player.uair === opponent.uair ? "text-yellow border-yellow" : player.uair > opponent.uair ? "text-green border-green" : "text-danger border-danger"}>{player.uair}</p>}

          {player.name && <p className={player.uairStartup === opponent.uairStartup ? "text-yellow border-yellow" : player.uairStartup > opponent.uairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.uairStartup}</p>}

          {player.name && <p className={player.uairLandingLag === opponent.uairLandingLag ? "text-yellow border-yellow" : player.uairLandingLag > opponent.uairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.uairLandingLag}</p>}

          {player.name && <p className={player.uairAutoCancel === opponent.uairAutoCancel ? "text-yellow border-yellow" : player.uairAutoCancel > opponent.uairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.uairAutoCancel}</p>}

          {player.name && <p className={player.dair === opponent.dair ? "text-yellow border-yellow" : player.dair > opponent.dair ? "text-green border-green" : "text-danger border-danger"}>{player.dair}</p>}

          {player.name && <p className={player.dairStartup === opponent.dairStartup ? "text-yellow border-yellow" : player.dairStartup > opponent.dairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.dairStartup}</p>}

          {player.name && <p className={player.dairLandingLag === opponent.dairLandingLag ? "text-yellow border-yellow" : player.dairLandingLag > opponent.dairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.dairLandingLag}</p>}

          {player.name && <p className={player.dairAutoCancel === opponent.dairAutoCancel ? "text-yellow border-yellow" : player.dairAutoCancel > opponent.dairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.dairAutoCancel}</p>}

          {player.name && <p className={player.fair === opponent.fair ? "text-yellow border-yellow" : player.fair > opponent.fair ? "text-green border-green" : "text-danger border-danger"}>{player.fair}</p>}

          {player.name && <p className={player.fairStartup === opponent.fairStartup ? "text-yellow border-yellow" : player.fairStartup > opponent.fairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.fairStartup}</p>}

          {player.name && <p className={player.fairLandingLag === opponent.fairLandingLag ? "text-yellow border-yellow" : player.fairLandingLag > opponent.fairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.fairLandingLag}</p>}

          {player.name && <p className={player.fairAutoCancel === opponent.fairAutoCancel ? "text-yellow border-yellow" : player.fairAutoCancel > opponent.fairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.fairAutoCancel}</p>}

          {player.name && <p className={player.bair === opponent.bair ? "text-yellow border-yellow" : player.bair > opponent.bair ? "text-green border-green" : "text-danger border-danger"}>{player.bair}</p>}

          {player.name && <p className={player.bairStartup === opponent.bairStartup ? "text-yellow border-yellow" : player.bairStartup > opponent.bairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.bairStartup}</p>}

          {player.name && <p className={player.bairLandingLag === opponent.bairLandingLag ? "text-yellow border-yellow" : player.bairLandingLag > opponent.bairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.bairLandingLag}</p>}

          {player.name && <p className={player.bairAutoCancel === opponent.bairAutoCancel ? "text-yellow border-yellow" : player.bairAutoCancel > opponent.bairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.bairAutoCancel}</p>}

          {player.name && <p className={player.zair === opponent.zair ? "text-yellow border-yellow" : player.zair > opponent.zair ? "text-green border-green" : "text-danger border-danger"}>{player.zair}</p>}

          {player.name && <p className={player.zairStartup === opponent.zairStartup ? "text-yellow border-yellow" : player.zairStartup > opponent.zairStartup ? "text-green border-green" : "text-danger border-danger"}>{player.zairStartup}</p>}

          {player.name && <p className={player.zairLandingLag === opponent.zairLandingLag ? "text-yellow border-yellow" : player.zairLandingLag > opponent.zairLandingLag ? "text-green border-green" : "text-danger border-danger"}>{player.zairLandingLag}</p>}

          {player.name && <p className={player.zairAutoCancel === opponent.zairAutoCancel ? "text-yellow border-yellow" : player.zairAutoCancel > opponent.zairAutoCancel ? "text-green border-green" : "text-danger border-danger"}>{player.zairAutoCancel}</p>}

          {player.name && <p className={player.pummel === opponent.pummel ? "text-yellow border-yellow" : player.pummel > opponent.pummel ? "text-green border-green" : "text-danger border-danger"}>{player.pummel}</p>}

          {player.name && <p className={player.pummelStartup === opponent.pummelStartup ? "text-yellow border-yellow" : player.pummelStartup > opponent.pummelStartup ? "text-green border-green" : "text-danger border-danger"}>{player.pummelStartup}</p>}

          {player.name && <p className={player.forwardThrow === opponent.forwardThrow ? "text-yellow border-yellow" : player.forwardThrow > opponent.forwardThrow ? "text-green border-green" : "text-danger border-danger"}>{player.forwardThrow}</p>}

          {player.name && <p className={player.forwardThrowStartup === opponent.forwardThrowStartup ? "text-yellow border-yellow" : player.forwardThrowStartup > opponent.forwardThrowStartup ? "text-green border-green" : "text-danger border-danger"}>{player.forwardThrowStartup}</p>}

          {player.name && <p className={player.forwardThrowLag === opponent.forwardThrowLag ? "text-yellow border-yellow" : player.forwardThrowLag > opponent.forwardThrowLag ? "text-green border-green" : "text-danger border-danger"}>{player.forwardThrowLag}</p>}

          {player.name && <p className={player.backThrow === opponent.backThrow ? "text-yellow border-yellow" : player.backThrow > opponent.backThrow ? "text-green border-green" : "text-danger border-danger"}>{player.backThrow}</p>}

          {player.name && <p className={player.backThrowStartup === opponent.backThrowStartup ? "text-yellow border-yellow" : player.backThrowStartup > opponent.backThrowStartup ? "text-green border-green" : "text-danger border-danger"}>{player.backThrowStartup}</p>}

          {player.name && <p className={player.backThrowLag === opponent.backThrowLag ? "text-yellow border-yellow" : player.backThrowLag > opponent.backThrowLag ? "text-green border-green" : "text-danger border-danger"}>{player.backThrowLag}</p>}

          {player.name && <p className={player.upThrow === opponent.upThrow ? "text-yellow border-yellow" : player.upThrow > opponent.upThrow ? "text-green border-green" : "text-danger border-danger"}>{player.upThrow}</p>}

          {player.name && <p className={player.upThrowStartup === opponent.upThrowStartup ? "text-yellow border-yellow" : player.upThrowStartup > opponent.upThrowStartup ? "text-green border-green" : "text-danger border-danger"}>{player.upThrowStartup}</p>}

          {player.name && <p className={player.upThrowLag === opponent.upThrowLag ? "text-yellow border-yellow" : player.upThrowLag > opponent.upThrowLag ? "text-green border-green" : "text-danger border-danger"}>{player.upThrowLag}</p>}

          {player.name && <p className={player.downThrow === opponent.downThrow ? "text-yellow border-yellow" : player.downThrow > opponent.downThrow ? "text-green border-green" : "text-danger border-danger"}>{player.downThrow}</p>}

          {player.name && <p className={player.downThrowStartup === opponent.downThrowStartup ? "text-yellow border-yellow" : player.downThrowStartup > opponent.downThrowStartup ? "text-green border-green" : "text-danger border-danger"}>{player.downThrowStartup}</p>}

          {player.name && <p className={player.downThrowLag === opponent.downThrowLag ? "text-yellow border-yellow" : player.downThrowLag > opponent.downThrowLag ? "text-green border-green" : "text-danger border-danger"}>{player.downThrowLag}</p>}

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