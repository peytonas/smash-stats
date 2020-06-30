import React, { Component } from 'react'
import './Chart.css'
import Axios from 'axios'
import '../Components/IndividualStats.css'

class IndividualStats extends Component {
  state = {
    character: {},
    characterLag: 0,
    characterDmg: 0,
    roster: [],
    rosterDmgAverages: [],
    rosterDmgAverage: 0,
    rosterLagAverage: 0,
  }

  componentDidMount() {
    const characterId = this.props.character

    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com' || 'http://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 6000,
      withCredentials: true
    })

    api.get(`http://localhost:3000/api/characters/${characterId}`).then(res => {
      this.setState({
        character: res.data,
      },
        this.playerFunctions
      );
    })

    api.get(`/characters`)
      .then(res => {
        this.setState({ roster: res.data },
          this.averageFunctions
        );
      })
  }

  averageFunctions() {
    this.averageScoreBuilder()
    this.lagAverageCalculator()
  }

  playerFunctions() {
    this.playerScoreBuilder()
    this.playerLagCalculator()
    this.passToParent()
  }

  passToParent = () => {
    var averagePlayerScore = this.state.averagePlayerScore
    var playerScore = this.state.playerScore
    this.props.callBack(averagePlayerScore, playerScore)
  }

  playerScoreBuilder() {
    let score = (this.state.character.walkSpeed + this.state.character.runSpeed + this.state.character.dashSpeed + this.state.character.airSpeed + this.state.character.fallingSpeed + this.state.character.weight + this.state.character.neutral + this.state.character.forwardTilt + this.state.character.upTilt + this.state.character.downTilt + this.state.character.dashAttack + this.state.character.forwardSmash + this.state.character.upSmash + this.state.character.downSmash + this.state.character.nair + this.state.character.fair + this.state.character.bair + this.state.character.uair + this.state.character.dair + this.state.character.zair + this.state.character.pummel + this.state.character.forwardThrow + this.state.character.backThrow + this.state.character.upThrow + this.state.character.downThrow + this.state.character.floorAttackFront + this.state.character.floorAttackBack + this.state.character.floorAttackTrip + this.state.character.edgeAttack + this.state.character.neutralSpecial + this.state.character.sideSpecial + this.state.character.upSpecial + this.state.character.downSpecial + this.state.character.neutralStartup + this.state.character.forwardTiltStartup + this.state.character.upTiltStartup + this.state.character.downTiltStartup + this.state.character.dashAttackStartup + this.state.character.forwardSmashStartup + this.state.character.upSmashStartup + this.state.character.downSmashStartup + this.state.character.nairStartup + this.state.character.fairStartup + this.state.character.bairStartup + this.state.character.uairStartup + this.state.character.dairStartup + this.state.character.zairStartup + this.state.character.pummelStartup + this.state.character.forwardThrowStartup + this.state.character.backThrowStartup + this.state.character.upThrowStartup + this.state.character.downThrowStartup + this.state.character.floorAttackFront + this.state.character.floorAttackBack + this.state.character.floorAttackTrip + this.state.character.edgeAttack + this.state.character.neutralSpecialStartup + this.state.character.sideSpecialStartup + this.state.character.upSpecialStartup + this.state.character.downSpecialStartup) / 60;
    this.setState({ characterDmg: score })
  }

  playerLagCalculator() {
    var lag = ((this.state.character.forwardRollLag + this.state.character.backRollLag + this.state.character.spotDodgeLag + this.state.character.airDodgeLag + this.state.character.downThrowLag + this.state.character.upThrowLag + this.state.character.backThrowLag + this.state.character.forwardThrowLag + this.state.character.pummelLag + this.state.character.zairLag + this.state.character.bairLag + this.state.character.fairLag + this.state.character.dairLag + this.state.character.uairLag + this.state.character.nairLag + this.state.character.forwardSmashLag + this.state.character.downSmashLag + this.state.character.upSmashLag + this.state.character.dashAttackLag + this.state.character.forwardTiltLag + this.state.character.downTiltLag + this.state.character.upTiltLag + this.state.character.downSpecialLag + this.state.character.upSpecialLag + this.state.character.sideSpecialLag + this.state.character.neutralSpecialLag + this.state.character.neutralLag) / 27)
    this.setState({ characterLag: lag });
  }

  averageScoreBuilder() {
    var score = 0
    for (var c in this.state.roster) {
      var playerScore = (this.state.roster[c].walkSpeed + this.state.roster[c].runSpeed + this.state.roster[c].dashSpeed + this.state.roster[c].airSpeed + this.state.roster[c].fallingSpeed + this.state.roster[c].weight + this.state.roster[c].neutral + this.state.roster[c].forwardTilt + this.state.roster[c].upTilt + this.state.roster[c].downTilt + this.state.roster[c].dashAttack + this.state.roster[c].forwardSmash + this.state.roster[c].upSmash + this.state.roster[c].downSmash + this.state.roster[c].nair + this.state.roster[c].fair + this.state.roster[c].bair + this.state.roster[c].uair + this.state.roster[c].dair + this.state.roster[c].zair + this.state.roster[c].pummel + this.state.roster[c].forwardThrow + this.state.roster[c].backThrow + this.state.roster[c].upThrow + this.state.roster[c].downThrow + this.state.roster[c].floorAttackFront + this.state.roster[c].floorAttackBack + this.state.roster[c].floorAttackTrip + this.state.roster[c].edgeAttack + this.state.roster[c].neutralSpecial + this.state.roster[c].sideSpecial + this.state.roster[c].upSpecial + this.state.roster[c].downSpecial + this.state.roster[c].walkSpeed + this.state.roster[c].runSpeed + this.state.roster[c].dashSpeed + this.state.roster[c].airSpeed + this.state.roster[c].fallingSpeed + this.state.roster[c].weight + this.state.roster[c].neutralStartup + this.state.roster[c].forwardTiltStartup + this.state.roster[c].upTiltStartup + this.state.roster[c].downTiltStartup + this.state.roster[c].dashAttackStartup + this.state.roster[c].forwardSmashStartup + this.state.roster[c].upSmashStartup + this.state.roster[c].downSmashStartup + this.state.roster[c].nairStartup + this.state.roster[c].fairStartup + this.state.roster[c].bairStartup + this.state.roster[c].uairStartup + this.state.roster[c].dairStartup + this.state.roster[c].zairStartup + this.state.roster[c].pummelStartup + this.state.roster[c].forwardThrowStartup + this.state.roster[c].backThrowStartup + this.state.roster[c].upThrowStartup + this.state.roster[c].downThrowStartup + this.state.roster[c].floorAttackFront + this.state.roster[c].floorAttackBack + this.state.roster[c].floorAttackTrip + this.state.roster[c].edgeAttack + this.state.roster[c].neutralSpecialStartup + this.state.roster[c].sideSpecialStartup + this.state.roster[c].upSpecialStartup + this.state.roster[c].downSpecialStartup) / 60
      score += playerScore;
      this.state.rosterDmgAverages.push(playerScore)
    }
    score = score / this.state.roster.length
    this.setState({ rosterDmgAverage: score })
  }

  //FIXME update once roster stats are all finalized
  lagAverageCalculator() {
    var lag = 0
    for (var c in this.state.roster) {
      var characterLag = (this.state.roster[c].forwardRollLag + this.state.roster[c].backRollLag + this.state.roster[c].spotDodgeStart + this.state.roster[c].spotDodgeLag + this.state.roster[c].airDodgeLag) / 5
      lag += characterLag
    }
    lag = lag / this.state.roster.length
    this.setState({ rosterLagAverage: Math.floor(lag) })
  }

  // Returns the percentile of the given value in a sorted numeric array.
  // percentRank(arr, v) {
  //   if (typeof v !== 'number') throw new TypeError('v must be a number');
  //   for (var i = 0, l = arr.length; i < l; i++) {
  //     if (v <= arr[i]) {
  //       while (i < l && v === arr[i]) i++;
  //       if (i === 0) return 0;
  //       if (v !== arr[i - 1]) {
  //         i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
  //       }
  //       console.log(i / l)
  //       return i / l;
  //     }
  //   }
  //   console.log(1);
  //   return 1;
  // }

  render() {
    return (
      <div className="col col-md-6">
        <h5>{this.state.character.name} Average FAF/Fighter Average:
        <span className={this.state.characterLag > this.state.rosterLagAverage ? "text-danger" : "text-green"}> {Math.floor(this.state.characterLag)}</span>
        /
       {this.state.rosterLagAverage}
        </h5>
        <h5>{this.state.character.name} DPA/Average DPA:
        <span className={this.state.characterDmg > this.state.rosterDmgAverage ? "text-green" : "text-danger"}> {this.state.characterDmg.toFixed(2)}</span>
        /
        {this.state.rosterDmgAverage.toFixed(2)}
        </h5>
      </div>
    )
  }
}

export default IndividualStats