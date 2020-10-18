import React, { Component } from 'react'
import Chart from "chart.js";
import 'PlayerChart.css'

class PlayerChart extends Component {

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
      <div className="col col-md-3">
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default PlayerChart