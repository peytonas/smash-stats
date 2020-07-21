import React, { Component } from 'react'
import './Chart.css'
import './IndividualStats.css'

class IndividualStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterMobility: 0,
      characterDmg: 0,
      rosterDmgAverages: [],
      rosterMobilityAverages: [],
      rosterRanks: [],
      rosterDmgAverage: 0,
      rosterMobilityAverage: 0,
      characterRank: 0
    }
    setTimeout(() => {
      this.averageFunctions()
      this.playerFunctions()
      this.rosterRankCalculator()
      this.sortRanks()
      this.sortMobility()
      this.sortDamage()
      this.characterRank()
    }, 1000)
  }
  averageFunctions() {
    this.averageDmgCalculator()
    this.averageMobilityCalculator()
  }

  playerFunctions() {
    this.playerDmgCalculator()
    this.playerMobilityCalculator()
  }

  playerDmgCalculator() {
    let score = (this.props.character.neutral + this.props.character.forwardTilt + this.props.character.upTilt + this.props.character.downTilt + this.props.character.dashAttack + this.props.character.forwardSmash + this.props.character.upSmash + this.props.character.downSmash + this.props.character.nair + this.props.character.fair + this.props.character.bair + this.props.character.uair + this.props.character.dair + this.props.character.zair + this.props.character.pummel + this.props.character.forwardThrow + this.props.character.backThrow + this.props.character.upThrow + this.props.character.downThrow + this.props.character.floorAttackFront + this.props.character.floorAttackBack + this.props.character.floorAttackTrip + this.props.character.edgeAttack + this.props.character.neutralSpecial + this.props.character.sideSpecial + this.props.character.upSpecial + this.props.character.downSpecial) / 27;

    this.setState({ characterDmg: score })
  }

  playerMobilityCalculator() {
    var mobility = (this.props.character.weight + this.props.character.forwardRollLag + this.props.character.backRollLag + this.props.character.spotDodgeLag + this.props.character.airDodgeLag + this.props.character.downThrowLag + this.props.character.upThrowLag + this.props.character.backThrowLag + this.props.character.forwardThrowLag + this.props.character.pummelLag + this.props.character.zairLag + this.props.character.bairLag + this.props.character.fairLag + this.props.character.dairLag + this.props.character.uairLag + this.props.character.nairLag + this.props.character.forwardSmashLag + this.props.character.downSmashLag + this.props.character.upSmashLag + this.props.character.dashAttackLag + this.props.character.forwardTiltLag + this.props.character.downTiltLag + this.props.character.upTiltLag + this.props.character.downSpecialLag + this.props.character.upSpecialLag + this.props.character.sideSpecialLag + this.props.character.neutralSpecialLag + this.props.character.neutralLag + this.props.character.neutralStartup + this.props.character.forwardTiltStartup + this.props.character.upTiltStartup + this.props.character.downTiltStartup + this.props.character.dashAttackStartup + this.props.character.forwardSmashStartup + this.props.character.upSmashStartup + this.props.character.downSmashStartup + this.props.character.nairStartup + this.props.character.fairStartup + this.props.character.bairStartup + this.props.character.uairStartup + this.props.character.dairStartup + this.props.character.zairStartup + this.props.character.pummelStartup + this.props.character.forwardThrowStartup + this.props.character.backThrowStartup + this.props.character.upThrowStartup + this.props.character.downThrowStartup + this.props.character.neutralSpecialStartup + this.props.character.sideSpecialStartup + this.props.character.upSpecialStartup + this.props.character.downSpecialStartup - (this.props.character.walkSpeed + this.props.character.runSpeed + this.props.character.dashSpeed + this.props.character.airSpeed + this.props.character.fallingSpeed)) / 56

    this.setState({ characterMobility: mobility });
  }

  averageDmgCalculator() {
    var score = 0

    for (var c in this.props.roster) {
      var playerScore = (this.props.roster[c].neutral + this.props.roster[c].forwardTilt + this.props.roster[c].upTilt + this.props.roster[c].downTilt + this.props.roster[c].dashAttack + this.props.roster[c].forwardSmash + this.props.roster[c].upSmash + this.props.roster[c].downSmash + this.props.roster[c].nair + this.props.roster[c].fair + this.props.roster[c].bair + this.props.roster[c].uair + this.props.roster[c].dair + this.props.roster[c].zair + this.props.roster[c].pummel + this.props.roster[c].forwardThrow + this.props.roster[c].backThrow + this.props.roster[c].upThrow + this.props.roster[c].downThrow + this.props.roster[c].floorAttackFront + this.props.roster[c].floorAttackBack + this.props.roster[c].floorAttackTrip + this.props.roster[c].edgeAttack + this.props.roster[c].neutralSpecial + this.props.roster[c].sideSpecial + this.props.roster[c].upSpecial + this.props.roster[c].downSpecial) / 27

      score += playerScore;

      this.state.rosterDmgAverages.push(playerScore)
    }
    score = score / this.props.roster.length

    this.setState({ rosterDmgAverage: score })
  }

  averageMobilityCalculator() {
    var mobility = 0

    for (var c in this.props.roster) {
      var characterMobility = (this.props.roster[c].weight + this.props.roster[c].forwardRollLag + this.props.roster[c].backRollLag + this.props.roster[c].spotDodgeLag + this.props.roster[c].airDodgeLag + this.props.roster[c].downThrowLag + this.props.roster[c].upThrowLag + this.props.roster[c].backThrowLag + this.props.roster[c].forwardThrowLag + this.props.roster[c].pummelLag + this.props.roster[c].zairLag + this.props.roster[c].bairLag + this.props.roster[c].fairLag + this.props.roster[c].dairLag + this.props.roster[c].uairLag + this.props.roster[c].nairLag + this.props.roster[c].forwardSmashLag + this.props.roster[c].downSmashLag + this.props.roster[c].upSmashLag + this.props.roster[c].dashAttackLag + this.props.roster[c].forwardTiltLag + this.props.roster[c].downTiltLag + this.props.roster[c].upTiltLag + this.props.roster[c].downSpecialLag + this.props.roster[c].upSpecialLag + this.props.roster[c].sideSpecialLag + this.props.roster[c].neutralSpecialLag + this.props.roster[c].neutralLag + this.props.roster[c].neutralStartup + this.props.roster[c].forwardTiltStartup + this.props.roster[c].upTiltStartup + this.props.roster[c].downTiltStartup + this.props.roster[c].dashAttackStartup + this.props.roster[c].forwardSmashStartup + this.props.roster[c].upSmashStartup + this.props.roster[c].downSmashStartup + this.props.roster[c].nairStartup + this.props.roster[c].fairStartup + this.props.roster[c].bairStartup + this.props.roster[c].uairStartup + this.props.roster[c].dairStartup + this.props.roster[c].zairStartup + this.props.roster[c].pummelStartup + this.props.roster[c].forwardThrowStartup + this.props.roster[c].backThrowStartup + this.props.roster[c].upThrowStartup + this.props.roster[c].downThrowStartup + this.props.roster[c].neutralSpecialStartup + this.props.roster[c].sideSpecialStartup + this.props.roster[c].upSpecialStartup + this.props.roster[c].downSpecialStartup - (this.props.roster[c].walkSpeed + this.props.roster[c].runSpeed + this.props.roster[c].dashSpeed + this.props.roster[c].airSpeed + this.props.roster[c].fallingSpeed)) / 56

      this.setState({ characterMobility: mobility })

      mobility += characterMobility

      this.state.rosterMobilityAverages.push(characterMobility)
    }
    mobility = mobility / this.props.roster.length

    this.setState({ rosterMobilityAverage: Math.floor(mobility) })
  }

  rosterRankCalculator() {
    for (var c in this.props.roster) {
      var rank = 0

      var characterDmg = (this.props.roster[c].neutral + this.props.roster[c].forwardTilt + this.props.roster[c].upTilt + this.props.roster[c].downTilt + this.props.roster[c].dashAttack + this.props.roster[c].forwardSmash + this.props.roster[c].upSmash + this.props.roster[c].downSmash + this.props.roster[c].nair + this.props.roster[c].fair + this.props.roster[c].bair + this.props.roster[c].uair + this.props.roster[c].dair + this.props.roster[c].zair + this.props.roster[c].pummel + this.props.roster[c].forwardThrow + this.props.roster[c].backThrow + this.props.roster[c].upThrow + this.props.roster[c].downThrow + this.props.roster[c].floorAttackFront + this.props.roster[c].floorAttackBack + this.props.roster[c].floorAttackTrip + this.props.roster[c].edgeAttack + this.props.roster[c].neutralSpecial + this.props.roster[c].sideSpecial + this.props.roster[c].upSpecial + this.props.roster[c].downSpecial)

      var characterMobility = (this.props.roster[c].weight + this.props.roster[c].forwardRollLag + this.props.roster[c].backRollLag + this.props.roster[c].spotDodgeLag + this.props.roster[c].airDodgeLag + this.props.roster[c].downThrowLag + this.props.roster[c].upThrowLag + this.props.roster[c].backThrowLag + this.props.roster[c].forwardThrowLag + this.props.roster[c].pummelLag + this.props.roster[c].zairLag + this.props.roster[c].bairLag + this.props.roster[c].fairLag + this.props.roster[c].dairLag + this.props.roster[c].uairLag + this.props.roster[c].nairLag + this.props.roster[c].forwardSmashLag + this.props.roster[c].downSmashLag + this.props.roster[c].upSmashLag + this.props.roster[c].dashAttackLag + this.props.roster[c].forwardTiltLag + this.props.roster[c].downTiltLag + this.props.roster[c].upTiltLag + this.props.roster[c].downSpecialLag + this.props.roster[c].upSpecialLag + this.props.roster[c].sideSpecialLag + this.props.roster[c].neutralSpecialLag + this.props.roster[c].neutralLag + this.props.roster[c].neutralStartup + this.props.roster[c].forwardTiltStartup + this.props.roster[c].upTiltStartup + this.props.roster[c].downTiltStartup + this.props.roster[c].dashAttackStartup + this.props.roster[c].forwardSmashStartup + this.props.roster[c].upSmashStartup + this.props.roster[c].downSmashStartup + this.props.roster[c].nairStartup + this.props.roster[c].fairStartup + this.props.roster[c].bairStartup + this.props.roster[c].uairStartup + this.props.roster[c].dairStartup + this.props.roster[c].zairStartup + this.props.roster[c].pummelStartup + this.props.roster[c].forwardThrowStartup + this.props.roster[c].backThrowStartup + this.props.roster[c].upThrowStartup + this.props.roster[c].downThrowStartup + this.props.roster[c].neutralSpecialStartup + this.props.roster[c].sideSpecialStartup + this.props.roster[c].upSpecialStartup + this.props.roster[c].downSpecialStartup - (this.props.roster[c].walkSpeed + this.props.roster[c].runSpeed + this.props.roster[c].dashSpeed + this.props.roster[c].airSpeed + this.props.roster[c].fallingSpeed))

      var dmg = (characterDmg / 27)

      var mobility = (characterMobility / 56)

      rank = dmg - (mobility * .1)

      this.state.rosterRanks.push(rank)
    }
  }

  sortRanks() {
    var ranks = this.state.rosterRanks
    ranks.sort((a, b) => a - b)

    this.setState({ rosterRanks: ranks })
  }

  sortMobility() {
    var mobility = this.state.rosterMobilityAverages
    mobility.sort((a, b) => a - b)

    this.setState({ rosterMobilityAverages: mobility })
  }

  sortDamage() {
    var damage = this.state.rosterDmgAverages
    damage.sort((a, b) => a - b)

    this.setState({ rosterDmgAverages: damage })
  }

  characterRank() {
    var rank = this.state.characterDmg - (this.state.characterMobility * .1)

    for (var c = 0; c < this.state.rosterRanks.length; c++) {
      if (rank === this.state.rosterRanks[c]) {
        var newRank = this.state.rosterRanks.length - c
        this.setState({ characterRank: newRank })
      }
    }
  }

  render() {
    return (
      <div className="col col-md-5 mobile-font stat-border ml-md-1 text-success">
        <h6 className="mt-1">Rank:&nbsp;<span>{this.state.characterRank}</span></h6>
        <h6>DPA/Average DPA:&nbsp;
        <span className={this.state.characterDmg > this.state.rosterDmgAverage ? "text-green" : "text-danger"}>
            {this.state.characterDmg.toFixed(2)}</span>/{this.state.rosterDmgAverage.toFixed(2)}
        </h6>
        <h6>Mobility/Roster Average Mobility:&nbsp;
        <span className={this.state.characterMobility > this.state.rosterMobilityAverage ? "text-danger" : "text-green"}>
            {Math.floor(this.state.characterMobility)}</span>/{this.state.rosterMobilityAverage}
        </h6>
      </div>
    )
  }
}

export default IndividualStats