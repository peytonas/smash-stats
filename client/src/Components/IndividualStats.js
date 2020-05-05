import React, { Component } from 'react'
import './Chart.css'
import Axios from 'axios'

class PlayerChart extends Component {

  state = {
    character: {},
    characters: [],
    lagAverage: 0,
    playerLag: 0,
    playerScore: 0,
    averagePlayerScore: 0
  }

  averagePlayerScore = 0

  componentDidMount() {
    const characterId = this.props.character
    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`http://localhost:3000/api/characters/${characterId}`).then(res => {
      this.setState({
        character: res.data,
      },
        this.mountedFunctions
      );
    })
  }

  mountedFunctions() {
    this.playerScoreBuilder()
    this.playerLagCalculator()
  }

  playerScoreBuilder() {
    let score = (this.state.character.walkSpeed + this.state.character.runSpeed + this.state.character.dashSpeed + this.state.character.airSpeed + this.state.character.fallingSpeed + this.state.character.weight + this.state.character.neutral + this.state.character.forwardTilt + this.state.character.upTilt + this.state.character.downTilt + this.state.character.dashAttack + this.state.character.forwardSmash + this.state.character.upSmash + this.state.character.downSmash + this.state.character.nair + this.state.character.fair + this.state.character.bair + this.state.character.uair + this.state.character.dair + this.state.character.zair + this.state.character.pummel + this.state.character.forwardThrow + this.state.character.backThrow + this.state.character.upThrow + this.state.character.downThrow + this.state.character.floorAttackFront + this.state.character.floorAttackBack + this.state.character.floorAttackTrip + this.state.character.edgeAttack + this.state.character.neutralSpecial + this.state.character.sideSpecial + this.state.character.upSpecial + this.state.character.downSpecial) / 33;
    this.setState({ playerScore: score })
  }

  // averageScoreBuilder() {
  //   for (var c = 0; c <= this.state.characters.length; c++) {
  //     this.averagePlayerScore += ((this.state.characters[c].walkSpeed + this.state.characters[c].runSpeed + this.state.characters[c].dashSpeed + this.state.characters[c].airSpeed + this.state.characters[c].fallingSpeed + this.state.characters[c].weight + this.state.characters[c].neutral + this.state.characters[c].forwardTilt + this.state.characters[c].upTilt + this.state.characters[c].downTilt + this.state.characters[c].dashAttack + this.state.characters[c].forwardSmash + this.state.characters[c].upSmash + this.state.characters[c].downSmash + this.state.characters[c].nair + this.state.characters[c].fair + this.state.characters[c].bair + this.state.characters[c].uair + this.state.characters[c].dair + this.state.characters[c].zair + this.state.characters[c].pummel + this.state.characters[c].forwardThrow + this.state.characters[c].backThrow + this.state.characters[c].upThrow + this.state.characters[c].downThrow + this.state.characters[c].floorAttackFront + this.state.characters[c].floorAttackBack + this.state.characters[c].floorAttackTrip + this.state.characters[c].edgeAttack + this.state.characters[c].neutralSpecial + this.state.characters[c].sideSpecial + this.state.characters[c].upSpecial + this.state.characters[c].downSpecial) / 33)
  //   }
  //   this.setState({ averagePlayerScore: this.averagePlayerScore })
  // }

  playerLagCalculator() {
    var lag = ((this.state.character.forwardRollLag + this.state.character.backRollLag + this.state.character.spotDodgeLag + this.state.character.airDodgeLag) / 5)
    this.setState({ playerLag: lag });
  }

  // lagAverageCalculator() {
  //   var lag = 0
  //   for (var c in this.characters) {
  //     lag += Math.ceil((this.characters[c].forwardRollLag + this.characters[c].backRollLag + this.characters[c].spotDodgeStart + this.characters[c].spotDodgeLag + this.characters[c].airDodgeLag) / 5)
  //   }
  //   lag = Math.ceil(lag / this.characters.length)
  //   this.lagAverage = lag
  //   console.log(this.lagAverage);
  // }

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
      <div className="text-primary row justify-content-left text-center text-md-left">
        <div className="col col-md-4">
          <h3>Average FAF: {Math.floor(this.state.playerLag)}</h3>
          <h4>Damage per Attack: {this.state.playerScore.toFixed(2)}/{this.state.averagePlayerScore.toFixed(2)}</h4>
        </div>
      </div>
    )
  }
}

export default PlayerChart