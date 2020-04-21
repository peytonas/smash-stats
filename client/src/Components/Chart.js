import React, { Component } from 'react'
import Chart from "chart.js";
import './Chart.css'

export default class GameChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Super Mario Brothers", "Donkey Kong", "The Legend of Zelda", "Metroid", "Kirby", "Star Fox", "Pokemon", "Earth Bound", "F-Zero",],
        datasets: [
          {
            label: "games",
            data: [3, 1, 1, 1, 1, 1, 2, 1, 1],
            backgroundColor: [
              "#e61618",
              "#803d1a",
              "#0eb7fe",
              "#de4337",
              "#f2a9b2",
              "#00bb3f",
              "#f4d823",
              "#015bcc",
              "#ebcd60"
            ],
            borderColor: [
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc",
              "#cec9cc"
            ]
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }
  render() {
    return (
      <div>
        <p className="chart-text">character representation</p>
        <canvas
          // className="w-md-50 h-md-50"
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}