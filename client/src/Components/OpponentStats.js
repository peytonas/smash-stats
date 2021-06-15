import React, { Component } from "react";

class OpponentStats extends Component {
  render() {
    const player = this.props.player;
    const opponent = this.props.opponent;
    return (
      <div className="col col-md-4 text-center">
        <div className="stat-size">
          {opponent.name && (
            <p
              className={
                opponent.weight === player.weight
                  ? "text-yellow border-yellow"
                  : opponent.weight > player.weight
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.weight}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutral === player.neutral
                  ? "text-yellow border-yellow"
                  : opponent.neutral > player.neutral
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutral}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutralStartup === player.neutralStartup
                  ? "text-yellow border-yellow"
                  : opponent.neutralStartup < player.neutralStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutralStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutralLag === player.neutralLag
                  ? "text-yellow border-yellow"
                  : opponent.neutralLag < player.neutralLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutralLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardTilt === player.forwardTilt
                  ? "text-yellow border-yellow"
                  : opponent.forwardTilt > player.forwardTilt
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardTilt}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardTiltStartup === player.forwardTiltStartup
                  ? "text-yellow border-yellow"
                  : opponent.forwardTiltStartup < player.forwardTiltStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardTiltStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardTiltLag === player.forwardTiltLag
                  ? "text-yellow border-yellow"
                  : opponent.forwardTiltLag < player.forwardTiltLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardTiltLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upTilt === player.upTilt
                  ? "text-yellow border-yellow"
                  : opponent.upTilt > player.upTilt
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upTilt}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upTiltStartup === player.upTiltStartup
                  ? "text-yellow border-yellow"
                  : opponent.upTiltStartup < player.upTiltStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upTiltStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upTiltLag === player.upTiltLag
                  ? "text-yellow border-yellow"
                  : opponent.upTiltLag < player.upTiltLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upTiltLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downTilt === player.downTilt
                  ? "text-yellow border-yellow"
                  : opponent.downTilt > player.downTilt
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downTilt}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downTiltStartup === player.downTiltStartup
                  ? "text-yellow border-yellow"
                  : opponent.downTiltStartup < player.downTiltStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downTiltStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downTiltLag === player.downTiltLag
                  ? "text-yellow border-yellow"
                  : opponent.downTiltLag < player.downTiltLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downTiltLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashAttack === player.dashAttack
                  ? "text-yellow border-yellow"
                  : opponent.dashAttack > player.dashAttack
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashAttack}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashAttackStartup === player.dashAttackStartup
                  ? "text-yellow border-yellow"
                  : opponent.dashAttackStartup < player.dashAttackStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashAttackStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashAttackLag === player.dashAttackLag
                  ? "text-yellow border-yellow"
                  : opponent.dashAttackLag < player.dashAttackLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashAttackLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutralSpecial === player.neutralSpecial
                  ? "text-yellow border-yellow"
                  : opponent.neutralSpecial > player.neutralSpecial
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutralSpecial}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutralSpecialStartup === player.neutralSpecialStartup
                  ? "text-yellow border-yellow"
                  : opponent.neutralSpecialStartup <
                    player.neutralSpecialStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutralSpecialStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.neutralSpecialLag === player.neutralSpecialLag
                  ? "text-yellow border-yellow"
                  : opponent.neutralSpecialLag < player.neutralSpecialLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.neutralSpecialLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.sideSpecial === player.sideSpecial
                  ? "text-yellow border-yellow"
                  : opponent.sideSpecial > player.sideSpecial
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.sideSpecial}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.sideSpecialStartup === player.sideSpecialStartup
                  ? "text-yellow border-yellow"
                  : opponent.sideSpecialStartup < player.sideSpecialStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.sideSpecialStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.sideSpecialLag === player.sideSpecialLag
                  ? "text-yellow border-yellow"
                  : opponent.sideSpecialLag < player.sideSpecialLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.sideSpecialLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSpecial === player.upSpecial
                  ? "text-yellow border-yellow"
                  : opponent.upSpecial > player.upSpecial
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSpecial}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSpecialStartup === player.upSpecialStartup
                  ? "text-yellow border-yellow"
                  : opponent.upSpecialStartup < player.upSpecialStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSpecialStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSpecialLag === player.upSpecialLag
                  ? "text-yellow border-yellow"
                  : opponent.upSpecialLag < player.upSpecialLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSpecialLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSpecial === player.downSpecial
                  ? "text-yellow border-yellow"
                  : opponent.downSpecial > player.downSpecial
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSpecial}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSpecialStartup === player.downSpecialStartup
                  ? "text-yellow border-yellow"
                  : opponent.downSpecialStartup < player.downSpecialStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSpecialStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSpecialLag === player.downSpecialLag
                  ? "text-yellow border-yellow"
                  : opponent.downSpecialLag < player.downSpecialLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSpecialLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardSmash === player.forwardSmash
                  ? "text-yellow border-yellow"
                  : opponent.forwardSmash > player.forwardSmash
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardSmash}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardSmashStartup === player.forwardSmashStartup
                  ? "text-yellow border-yellow"
                  : opponent.forwardSmashStartup < player.forwardSmashStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardSmashStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardSmashLag === player.forwardSmashLag
                  ? "text-yellow border-yellow"
                  : opponent.forwardSmashLag < player.forwardSmashLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardSmashLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSmash === player.upSmash
                  ? "text-yellow border-yellow"
                  : opponent.upSmash > player.upSmash
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSmash}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSmashStartup === player.upSmashStartup
                  ? "text-yellow border-yellow"
                  : opponent.upSmashStartup < player.upSmashStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSmashStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upSmashLag === player.upSmashLag
                  ? "text-yellow border-yellow"
                  : opponent.upSmashLag < player.upSmashLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upSmashLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSmash === player.downSmash
                  ? "text-yellow border-yellow"
                  : opponent.downSmash > player.downSmash
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSmash}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSmashStartup === player.downSmashStartup
                  ? "text-yellow border-yellow"
                  : opponent.downSmashStartup < player.downSmashStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSmashStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downSmashLag === player.downSmashLag
                  ? "text-yellow border-yellow"
                  : opponent.downSmashLag < player.downSmashLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downSmashLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.nair === player.nair
                  ? "text-yellow border-yellow"
                  : opponent.nair > player.nair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.nair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.nairStartup === player.nairStartup
                  ? "text-yellow border-yellow"
                  : opponent.nairStartup < player.nairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.nairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.nairLag === player.nairLag
                  ? "text-yellow border-yellow"
                  : opponent.nairLag < player.nairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.nairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.nairLandingLag === player.nairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.nairLandingLag < player.nairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.nairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.fair === player.fair
                  ? "text-yellow border-yellow"
                  : opponent.fair > player.fair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.fair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.fairStartup === player.fairStartup
                  ? "text-yellow border-yellow"
                  : opponent.fairStartup < player.fairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.fairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.fairLag === player.fairLag
                  ? "text-yellow border-yellow"
                  : opponent.fairLag < player.fairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.fairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.fairLandingLag === player.fairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.fairLandingLag < player.fairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.fairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.bair === player.bair
                  ? "text-yellow border-yellow"
                  : opponent.bair > player.bair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.bair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.bairStartup === player.bairStartup
                  ? "text-yellow border-yellow"
                  : opponent.bairStartup < player.bairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.bairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.bairLag === player.bairLag
                  ? "text-yellow border-yellow"
                  : opponent.bairLag < player.bairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.bairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.bairLandingLag === player.bairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.bairLandingLag < player.bairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.bairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.uair === player.uair
                  ? "text-yellow border-yellow"
                  : opponent.uair > player.uair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.uair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.uairStartup === player.uairStartup
                  ? "text-yellow border-yellow"
                  : opponent.uairStartup < player.uairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.uairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.uairLag === player.uairLag
                  ? "text-yellow border-yellow"
                  : opponent.uairLag < player.uairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.uairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.uairLandingLag === player.uairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.uairLandingLag < player.uairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.uairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dair === player.dair
                  ? "text-yellow border-yellow"
                  : opponent.dair > player.dair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dairStartup === player.dairStartup
                  ? "text-yellow border-yellow"
                  : opponent.dairStartup < player.dairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dairLag === player.dairLag
                  ? "text-yellow border-yellow"
                  : opponent.dairLag < player.dairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dairLandingLag === player.dairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.dairLandingLag < player.dairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.zair === player.zair
                  ? "text-yellow border-yellow"
                  : opponent.zair > player.zair
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.zair}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.zairStartup === player.zairStartup
                  ? "text-yellow border-yellow"
                  : opponent.zairStartup < player.zairStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.zairStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.zairLag === player.zairLag
                  ? "text-yellow border-yellow"
                  : opponent.zairLag < player.zairLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.zairLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.zairLandingLag === player.zairLandingLag
                  ? "text-yellow border-yellow"
                  : opponent.zairLandingLag < player.zairLandingLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.zairLandingLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.grabStartup === player.grabStartup
                  ? "text-yellow border-yellow"
                  : opponent.grabStartup < player.grabStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.grabStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.grabLag === player.grabLag
                  ? "text-yellow border-yellow"
                  : opponent.grabLag < player.grabLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.grabLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashGrabStartup === player.dashGrabStartup
                  ? "text-yellow border-yellow"
                  : opponent.dashGrabStartup < player.dashGrabStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashGrabStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashGrabLag === player.dashGrabLag
                  ? "text-yellow border-yellow"
                  : opponent.dashGrabLag < player.dashGrabLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashGrabLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.pivotGrabStartup === player.pivotGrabStartup
                  ? "text-yellow border-yellow"
                  : opponent.pivotGrabStartup < player.pivotGrabStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.pivotGrabStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.pivotGrabLag === player.pivotGrabLag
                  ? "text-yellow border-yellow"
                  : opponent.pivotGrabLag < player.pivotGrabLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.pivotGrabLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.pummel === player.pummel
                  ? "text-yellow border-yellow"
                  : opponent.pummel > player.pummel
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.pummel}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.pummelStartup === player.pummelStartup
                  ? "text-yellow border-yellow"
                  : opponent.pummelStartup < player.pummelStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.pummelStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.pummelLag === player.pummelLag
                  ? "text-yellow border-yellow"
                  : opponent.pummelLag < player.pummelLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.pummelLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardThrow === player.forwardThrow
                  ? "text-yellow border-yellow"
                  : opponent.forwardThrow > player.forwardThrow
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardThrow}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardThrowStartup === player.forwardThrowStartup
                  ? "text-yellow border-yellow"
                  : opponent.forwardThrowStartup < player.forwardThrowStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardThrowStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardThrowLag === player.forwardThrowLag
                  ? "text-yellow border-yellow"
                  : opponent.forwardThrowLag < player.forwardThrowLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardThrowLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.backThrow === player.backThrow
                  ? "text-yellow border-yellow"
                  : opponent.backThrow > player.backThrow
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.backThrow}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.backThrowStartup === player.backThrowStartup
                  ? "text-yellow border-yellow"
                  : opponent.backThrowStartup < player.backThrowStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.backThrowStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.backThrowLag === player.backThrowLag
                  ? "text-yellow border-yellow"
                  : opponent.backThrowLag < player.backThrowLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.backThrowLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upThrow === player.upThrow
                  ? "text-yellow border-yellow"
                  : opponent.upThrow > player.upThrow
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upThrow}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upThrowStartup === player.upThrowStartup
                  ? "text-yellow border-yellow"
                  : opponent.upThrowStartup < player.upThrowStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upThrowStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.upThrowLag === player.upThrowLag
                  ? "text-yellow border-yellow"
                  : opponent.upThrowLag < player.upThrowLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.upThrowLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downThrow === player.downThrow
                  ? "text-yellow border-yellow"
                  : opponent.downThrow > player.downThrow
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downThrow}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downThrowStartup === player.downThrowStartup
                  ? "text-yellow border-yellow"
                  : opponent.downThrowStartup < player.downThrowStartup
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downThrowStartup}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.downThrowLag === player.downThrowLag
                  ? "text-yellow border-yellow"
                  : opponent.downThrowLag < player.downThrowLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.downThrowLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.floorAttackFront === player.floorAttackFront
                  ? "text-yellow border-yellow"
                  : opponent.floorAttackFront > player.floorAttackFront
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.floorAttackFront}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.floorAttackBack === player.floorAttackBack
                  ? "text-yellow border-yellow"
                  : opponent.floorAttackBack > player.floorAttackBack
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.floorAttackBack}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.floorAttackTrip === player.floorAttackTrip
                  ? "text-yellow border-yellow"
                  : opponent.floorAttackTrip > player.floorAttackTrip
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.floorAttackTrip}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.edgeAttack === player.edgeAttack
                  ? "text-yellow border-yellow"
                  : opponent.edgeAttack > player.edgeAttack
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.edgeAttack}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.finalSmash === player.finalSmash
                  ? "text-yellow border-yellow"
                  : opponent.finalSmash > player.finalSmash
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.finalSmash}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.walkSpeed === player.walkSpeed
                  ? "text-yellow border-yellow"
                  : opponent.walkSpeed > player.walkSpeed
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.walkSpeed}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.runSpeed === player.runSpeed
                  ? "text-yellow border-yellow"
                  : opponent.runSpeed > player.runSpeed
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.runSpeed}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.dashSpeed === player.dashSpeed
                  ? "text-yellow border-yellow"
                  : opponent.dashSpeed > player.dashSpeed
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.dashSpeed}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.airSpeed === player.airSpeed
                  ? "text-yellow border-yellow"
                  : opponent.airSpeed > player.airSpeed
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.airSpeed}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.fallingSpeed === player.fallingSpeed
                  ? "text-yellow border-yellow"
                  : opponent.fallingSpeed > player.fallingSpeed
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.fallingSpeed}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.forwardRollLag === player.forwardRollLag
                  ? "text-yellow border-yellow"
                  : opponent.forwardRollLag < player.forwardRollLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.forwardRollLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.backRollLag === player.backRollLag
                  ? "text-yellow border-yellow"
                  : opponent.backRollLag < player.backRollLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.backRollLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.spotDodgeStart === player.spotDodgeStart
                  ? "text-yellow border-yellow"
                  : opponent.spotDodgeStart < player.spotDodgeStart
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.spotDodgeStart}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.spotDodgeLag === player.spotDodgeLag
                  ? "text-yellow border-yellow"
                  : opponent.spotDodgeLag < player.spotDodgeLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.spotDodgeLag}
            </p>
          )}

          {opponent.name && (
            <p
              className={
                opponent.airDodgeLag === player.airDodgeLag
                  ? "text-yellow border-yellow"
                  : opponent.airDodgeLag < player.airDodgeLag
                  ? "text-green border-green"
                  : "text-danger border-danger"
              }
            >
              {opponent.airDodgeLag}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial1}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial1Startup}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial1Lag}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial2}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial2Startup}
            </p>
          )}

          {opponent.name === "Terry" && (
            <p
              className={
                opponent.name === player.name
                  ? "text-yellow border-yellow"
                  : "text-green border-green"
              }
            >
              {opponent.superSpecial2Lag}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default OpponentStats;
