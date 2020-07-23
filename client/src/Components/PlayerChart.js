import React, { Component } from 'react'
import Chart from "chart.js";

class PlayerChart extends Component {

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
        labels: ["Player Average", "Roster Average"],
        datasets: [
          {
            label: "games",
            data: [1, 4],
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
          text: "Player vs Roster",
          fontColor: "#b5b6e4"
        },
        responsive: true,
        legend: {
          display: false
        }
      }
    });
  }
  render() {
    return (
      <div className="col col-md-3 mt-n5">
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default PlayerChart