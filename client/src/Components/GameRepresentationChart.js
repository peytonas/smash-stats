import React, { Component } from 'react'
import Chart from "chart.js";
import './Chart.css'

class GameChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Super Mario Brothers", "Pokemon", "Fire Emblem", "The Legend of Zelda", "Metroid", "Donkey Kong", "Kirby", "Star Fox", "Kid Icarus", "Earth Bound", "Animal Crossing", "Castlevania", "Street Fighter", "F-Zero", "Ice Climbers", "Game & Watch", "Metal Gear Solid", "Sonic the Hedgehog", "Pikmin", "ROB", "Mega Man", "Wii Fit", "Punch-Out", "Pac-Man", "Xenoblade Chronicles", "Duck Hunt", "Splatoon", "Final Fantasy", "Bayonetta", "Persona", "Dragon Quest", "Banjo-Kazooie", "Fatal Fury"],
        datasets: [
          {
            label: "games",
            data: [9, 8, 8, 5, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "#e61618",
              "#f4d823",
              "#2e4b8b",
              "#0eb7fe",
              "#de4337",
              "#803d1a",
              "#f2a9b2",
              "#00bb3f",
              "#5efdff",
              "#ff2623",
              "#feee98",
              "#6a4c34",
              "#c3574e",
              "#ebcd60",
              "#9093ff",
              "#000000",
              "#888888",
              "#3a50f4",
              "#fef67e",
              "#ebebeb",
              "#7dc1de",
              "#f4f0ef",
              "#4e8a48",
              "#ffeb68",
              "#932830",
              "#e14dcd",
              "#f5863b",
              "#37bbe8",
              "#34469f",
              "#dc6477",
              "#8f72a5",
              "#3c6fd9",
              "#c34f52"
            ],
            borderColor: [
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
              "#211a21",
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Series Representation",
          fontColor: "#b5b6e4"
        },
        legend: {
          display: false
        },
        cutoutPercentage: 25,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    });
  }
  render() {
    return (
      <div className="text-primary col col-md-4">
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    )
  }
}

export default GameChart