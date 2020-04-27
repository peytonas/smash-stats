import React, { Component } from 'react'
import Chart from "chart.js";
import './Chart.css'

class PlayerChart extends Component {
  player = this.props.player
  lagAverage = 0

  playerScoreBuilder() {
    var playerScore = (this.props.player.walkSpeed + this.props.player.runSpeed + this.props.player.dashSpeed + this.props.player.airSpeed + this.props.player.fallingSpeed + this.props.player.weight + this.props.player.neutral + this.props.player.forwardTilt + this.props.player.upTilt + this.props.player.downTilt + this.props.player.dashAttack + this.props.player.forwardSmash + this.props.player.upSmash + this.props.player.downSmash + this.props.player.nair + this.props.player.fair + this.props.player.bair + this.props.player.uair + this.props.player.dair + this.props.player.zair + this.props.player.pummel + this.props.player.forwardThrow + this.props.player.backThrow + this.props.player.upThrow + this.props.player.downThrow + this.props.player.floorAttackFront + this.props.player.floorAttackBack + this.props.player.floorAttackTrip + this.props.player.edgeAttack + this.props.player.neutralSpecial + this.props.player.sideSpecial + this.props.player.upSpecial + this.props.player.downSpecial) / 33;
    var playerScoreRounded = playerScore.toFixed(2)
    console.log(playerScoreRounded);
  }

  averageScoreBuilder() {
    var averageScore = 0
    for (var c in this.props.characters) {
      averageScore += Math.ceil((this.props.characters[c].walkSpeed + this.props.characters[c].runSpeed + this.props.characters[c].dashSpeed + this.props.characters[c].airSpeed + this.props.characters[c].fallingSpeed + this.props.characters[c].weight + this.props.characters[c].neutral + this.props.characters[c].forwardTilt + this.props.characters[c].upTilt + this.props.characters[c].downTilt + this.props.characters[c].dashAttack + this.props.characters[c].forwardSmash + this.props.characters[c].upSmash + this.props.characters[c].downSmash + this.props.characters[c].nair + this.props.characters[c].fair + this.props.characters[c].bair + this.props.characters[c].uair + this.props.characters[c].dair + this.props.characters[c].zair + this.props.characters[c].pummel + this.props.characters[c].forwardThrow + this.props.characters[c].backThrow + this.props.characters[c].upThrow + this.props.characters[c].downThrow + this.props.characters[c].floorAttackFront + this.props.characters[c].floorAttackBack + this.props.characters[c].floorAttackTrip + this.props.characters[c].edgeAttack + this.props.characters[c].neutralSpecial + this.props.characters[c].sideSpecial + this.props.characters[c].upSpecial + this.props.characters[c].downSpecial) / 33)
    }
    averageScore = averageScore / this.props.characters.length
    var averageScoreRounded = averageScore.toFixed(2)
    console.log(averageScoreRounded);
  }

  playerLagCalculator() {
    var lag = 0
    lag += Math.ceil((this.props.player.forwardRollLag + this.props.player.backRollLag + this.props.player.spotDodgeStart + this.props.player.spotDodgeLag + this.props.player.airDodgeLag) / 5)
    this.lagAverage = lag
    console.log(this.lagAverage);
  }

  lagAverageCalculator() {
    var lag = 0
    for (var c in this.props.characters) {
      lag += Math.ceil((this.props.characters[c].forwardRollLag + this.props.characters[c].backRollLag + this.props.characters[c].spotDodgeStart + this.props.characters[c].spotDodgeLag + this.props.characters[c].airDodgeLag) / 5)
    }
    lag = Math.ceil(lag / this.props.characters.length)
    this.lagAverage = lag
    console.log(this.lagAverage);
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

  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Player Percentile", "Opponent Percentile"],
        datasets: [
          {
            label: "games",
            data: [1, 2],
            backgroundColor: [
              "#000000", "#de4337"
            ],
            borderColor: [

            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Player Percentile",
          fontColor: "#b5b6e4"
        },
        legend: {
          display: false
        }
      }
    });
  }
  render() {
    return (
      <div className="text-primary">
        <canvas
          onClick={this.averageScoreBuilder.bind(this)}
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default PlayerChart