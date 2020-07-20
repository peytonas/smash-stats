import React, { Component } from 'react'
import './Chart.css'
import './IndividualStats.css'

class IndividualStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterLag: 0,
      characterDmg: 0,
      characterPercentile: 0,
      rosterDmgAverages: [],
      rosterDmgAverage: 0,
      rosterLagAverage: 0,
    }
    setTimeout(() => {
      this.averageFunctions()
      this.playerFunctions()
      // this.percentRank(this.state.rosterDmgAverages, this.state.characterDmg)
    }, 1000)
  }
  averageFunctions() {
    this.averageScoreBuilder()
    this.lagAverageCalculator()
  }

  playerFunctions() {
    this.playerScoreBuilder()
    this.playerLagCalculator()
  }

  playerScoreBuilder() {
    let score = (this.props.character.walkSpeed + this.props.character.runSpeed + this.props.character.dashSpeed + this.props.character.airSpeed + this.props.character.fallingSpeed + this.props.character.weight + this.props.character.neutral + this.props.character.forwardTilt + this.props.character.upTilt + this.props.character.downTilt + this.props.character.dashAttack + this.props.character.forwardSmash + this.props.character.upSmash + this.props.character.downSmash + this.props.character.nair + this.props.character.fair + this.props.character.bair + this.props.character.uair + this.props.character.dair + this.props.character.zair + this.props.character.pummel + this.props.character.forwardThrow + this.props.character.backThrow + this.props.character.upThrow + this.props.character.downThrow + this.props.character.floorAttackFront + this.props.character.floorAttackBack + this.props.character.floorAttackTrip + this.props.character.edgeAttack + this.props.character.neutralSpecial + this.props.character.sideSpecial + this.props.character.upSpecial + this.props.character.downSpecial + this.props.character.neutralStartup + this.props.character.forwardTiltStartup + this.props.character.upTiltStartup + this.props.character.downTiltStartup + this.props.character.dashAttackStartup + this.props.character.forwardSmashStartup + this.props.character.upSmashStartup + this.props.character.downSmashStartup + this.props.character.nairStartup + this.props.character.fairStartup + this.props.character.bairStartup + this.props.character.uairStartup + this.props.character.dairStartup + this.props.character.zairStartup + this.props.character.pummelStartup + this.props.character.forwardThrowStartup + this.props.character.backThrowStartup + this.props.character.upThrowStartup + this.props.character.downThrowStartup + this.props.character.floorAttackFront + this.props.character.floorAttackBack + this.props.character.floorAttackTrip + this.props.character.edgeAttack + this.props.character.neutralSpecialStartup + this.props.character.sideSpecialStartup + this.props.character.upSpecialStartup + this.props.character.downSpecialStartup) / 60;
    this.setState({ characterDmg: score })
  }

  playerLagCalculator() {
    var lag = ((this.props.character.forwardRollLag + this.props.character.backRollLag + this.props.character.spotDodgeLag + this.props.character.airDodgeLag + this.props.character.downThrowLag + this.props.character.upThrowLag + this.props.character.backThrowLag + this.props.character.forwardThrowLag + this.props.character.pummelLag + this.props.character.zairLag + this.props.character.bairLag + this.props.character.fairLag + this.props.character.dairLag + this.props.character.uairLag + this.props.character.nairLag + this.props.character.forwardSmashLag + this.props.character.downSmashLag + this.props.character.upSmashLag + this.props.character.dashAttackLag + this.props.character.forwardTiltLag + this.props.character.downTiltLag + this.props.character.upTiltLag + this.props.character.downSpecialLag + this.props.character.upSpecialLag + this.props.character.sideSpecialLag + this.props.character.neutralSpecialLag + this.props.character.neutralLag) / 27)
    this.setState({ characterLag: lag });
  }

  averageScoreBuilder() {
    var score = 0
    for (var c in this.props.roster) {
      var playerScore = (this.props.roster[c].walkSpeed + this.props.roster[c].runSpeed + this.props.roster[c].dashSpeed + this.props.roster[c].airSpeed + this.props.roster[c].fallingSpeed + this.props.roster[c].weight + this.props.roster[c].neutral + this.props.roster[c].forwardTilt + this.props.roster[c].upTilt + this.props.roster[c].downTilt + this.props.roster[c].dashAttack + this.props.roster[c].forwardSmash + this.props.roster[c].upSmash + this.props.roster[c].downSmash + this.props.roster[c].nair + this.props.roster[c].fair + this.props.roster[c].bair + this.props.roster[c].uair + this.props.roster[c].dair + this.props.roster[c].zair + this.props.roster[c].pummel + this.props.roster[c].forwardThrow + this.props.roster[c].backThrow + this.props.roster[c].upThrow + this.props.roster[c].downThrow + this.props.roster[c].floorAttackFront + this.props.roster[c].floorAttackBack + this.props.roster[c].floorAttackTrip + this.props.roster[c].edgeAttack + this.props.roster[c].neutralSpecial + this.props.roster[c].sideSpecial + this.props.roster[c].upSpecial + this.props.roster[c].downSpecial + this.props.roster[c].walkSpeed + this.props.roster[c].runSpeed + this.props.roster[c].dashSpeed + this.props.roster[c].airSpeed + this.props.roster[c].fallingSpeed + this.props.roster[c].weight + this.props.roster[c].neutralStartup + this.props.roster[c].forwardTiltStartup + this.props.roster[c].upTiltStartup + this.props.roster[c].downTiltStartup + this.props.roster[c].dashAttackStartup + this.props.roster[c].forwardSmashStartup + this.props.roster[c].upSmashStartup + this.props.roster[c].downSmashStartup + this.props.roster[c].nairStartup + this.props.roster[c].fairStartup + this.props.roster[c].bairStartup + this.props.roster[c].uairStartup + this.props.roster[c].dairStartup + this.props.roster[c].zairStartup + this.props.roster[c].pummelStartup + this.props.roster[c].forwardThrowStartup + this.props.roster[c].backThrowStartup + this.props.roster[c].upThrowStartup + this.props.roster[c].downThrowStartup + this.props.roster[c].floorAttackFront + this.props.roster[c].floorAttackBack + this.props.roster[c].floorAttackTrip + this.props.roster[c].edgeAttack + this.props.roster[c].neutralSpecialStartup + this.props.roster[c].sideSpecialStartup + this.props.roster[c].upSpecialStartup + this.props.roster[c].downSpecialStartup) / 60
      score += playerScore;
      this.state.rosterDmgAverages.push(playerScore)
    }
    score = score / this.props.roster.length
    this.setState({ rosterDmgAverage: score })
  }

  //FIXME update once roster stats are all finalized
  lagAverageCalculator() {
    var lag = 0
    for (var c in this.props.roster) {
      var characterLag = (this.props.roster[c].forwardRollLag + this.props.roster[c].backRollLag + this.props.roster[c].spotDodgeLag + this.props.roster[c].airDodgeLag + this.props.roster[c].downThrowLag + this.props.roster[c].upThrowLag + this.props.roster[c].backThrowLag + this.props.roster[c].forwardThrowLag + this.props.roster[c].pummelLag + this.props.roster[c].zairLag + this.props.roster[c].bairLag + this.props.roster[c].fairLag + this.props.roster[c].dairLag + this.props.roster[c].uairLag + this.props.roster[c].nairLag + this.props.roster[c].forwardSmashLag + this.props.roster[c].downSmashLag + this.props.roster[c].upSmashLag + this.props.roster[c].dashAttackLag + this.props.roster[c].forwardTiltLag + this.props.roster[c].downTiltLag + this.props.roster[c].upTiltLag + this.props.roster[c].downSpecialLag + this.props.roster[c].upSpecialLag + this.props.roster[c].sideSpecialLag + this.props.roster[c].neutralSpecialLag + this.props.roster[c].neutralLag) / 27
      this.setState({ characterLag: lag })
      lag += characterLag
    }
    lag = lag / this.props.roster.length
    this.setState({ rosterLagAverage: Math.floor(lag) })
  }

  componentDidMount() {
  }

  // Returns the percentile of the given value in a sorted numeric array.
  // percentRank(arr, v) {
  //   var percentile;
  //   if (typeof v !== 'number') throw new TypeError('v must be a number');
  //   for (var i = 0, l = arr.length; i < l; i++) {
  //     if (v <= arr[i]) {
  //       while (i < l && v === arr[i]) i++;
  //       if (i === 0) return 0;
  //       if (v !== arr[i - 1]) {
  //         i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
  //       }
  //       console.log(i / l)
  //       percentile = i / l
  //       this.setState({ characterPercentile: percentile })
  //       // return i / l;
  //     }
  //   }
  //   console.log(1);
  //   return 1;
  // }

  render() {
    return (
      <div className="col col-md-5 mobile-font stat-border ml-md-1 text-success">
        <h6 className="mt-1">Percentile:&nbsp;<span>{this.state.characterPercentile}</span></h6>
        <h6>DPA/Average DPA:&nbsp;
        <span className={this.state.characterDmg > this.state.rosterDmgAverage ? "text-green" : "text-danger"}>
            {this.state.characterDmg.toFixed(2)}</span>/{this.state.rosterDmgAverage.toFixed(2)}
        </h6>
        <h6>Average FAF/Roster Average FAF:&nbsp;
        <span className={this.state.characterLag > this.state.rosterLagAverage ? "text-danger" : "text-green"}>
            {Math.floor(this.state.characterLag)}</span>/{this.state.rosterLagAverage}
        </h6>
      </div>
    )
  }
}

export default IndividualStats