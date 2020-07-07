import React, { Component } from 'react'
// import Chart from "chart.js";
import { Chart } from "react-google-charts";
import './Chart.css'

var slice = 1

var props = { offset: 0.4, color: 'red' }

var series = `slices: ` + `{ ` + slice + `: ` + `{` + `offset: ` + props.offset + `}` + `,`

class GameChart extends Component {

  slices = [
    ["Series", 'Number of Fighters'],
    ["Super Mario Brothers", 9],
    ["Pokemon", 8],
    ["Fire Emblem", 8],
    ["The Legend of Zelda", 5],
    ["Metroid", 4],
    ["Donkey Kong Country", 3],
    ["Super Smash Bros", 3],
    ["Kirby", 3],
    ["Star Fox", 3],
    ["Kid Icarus", 3],
    ["Earth Bound", 2],
    ["Animal Crossing", 2],
    ["Castlevania", 2],
    ["Street Fighter", 2],
    ["F-Zero", 1],
    ["Ice Climbers", 1],
    ["Game & Watch", 1],
    ["Metal Gear Solid", 1],
    ["Sonic the Hedgehog", 1],
    ["Pikmin", 1],
    ["R.O.B.", 1],
    ["Mega Man", 1],
    ["Wii Fit", 1],
    ["Punch-Out", 1],
    ["Pac-Man", 1],
    ["Xenoblade Chronicles", 1],
    ["Duck Hunt", 1],
    ["Splatoon", 1],
    ["Final Fantasy", 1],
    ["Bayonetta", 1],
    ["Persona", 1],
    ["Dragon Quest", 1],
    ["Banjo-Kazooie", 1],
    ["Fatal Fury", 1],
    ["Arms", 1]]

  characterSeries() {
    var c;
    for (c = 1; c < this.slices.length; c++) {
      if (this.props.character.series === this.slices[c][0]) {
        slice = c
        break
      }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.characterSeries()
      console.log(series);
      console.log(slice);
    }, 2000)

    // const myChartRef = this.chartRef.current.getContext("2d");

    // new Chart(myChartRef, {
    //   type: "doughnut",
    //   data: {
    //     labels: ["Super Mario Brothers", "Pokemon", "Fire Emblem", "The Legend of Zelda", "Metroid", "Donkey Kong", "Kirby", "Star Fox", "Kid Icarus", "Earth Bound", "Animal Crossing", "Castlevania", "Street Fighter", "F-Zero", "Ice Climbers", "Game & Watch", "Metal Gear Solid", "Sonic the Hedgehog", "Pikmin", "ROB", "Mega Man", "Wii Fit", "Punch-Out", "Pac-Man", "Xenoblade Chronicles", "Duck Hunt", "Splatoon", "Final Fantasy", "Bayonetta", "Persona", "Dragon Quest", "Banjo-Kazooie", "Fatal Fury", "Arms"],
    //     datasets: [
    //       {
    //         label: "games",
    //         data: [9, 8, 8, 5, 4, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    //         backgroundColor: [
    //           "#e61618",
    //           "#f4d823",
    //           "#2e4b8b",
    //           "#0eb7fe",
    //           "#de4337",
    //           "#803d1a",
    //           "#f2a9b2",
    //           "#00bb3f",
    //           "#5efdff",
    //           "#ff2623",
    //           "#feee98",
    //           "#6a4c34",
    //           "#c3574e",
    //           "#ebcd60",
    //           "#9093ff",
    //           "#000000",
    //           "#888888",
    //           "#3a50f4",
    //           "#fef67e",
    //           "#ebebeb",
    //           "#7dc1de",
    //           "#f4f0ef",
    //           "#4e8a48",
    //           "#ffeb68",
    //           "#932830",
    //           "#e14dcd",
    //           "#f5863b",
    //           "#37bbe8",
    //           "#34469f",
    //           "#dc6477",
    //           "#8f72a5",
    //           "#3c6fd9",
    //           "#c34f52",
    //           "#f24420"
    //         ]
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: "Series Representation",
    //       fontColor: "#b5b6e4"
    //     },
    //     legend: {
    //       display: false
    //     },
    //     cutoutPercentage: 35,
    //     rotation: 1 * Math.PI,
    //     circumference: 1 * Math.PI
    //   }
    // });

    // characterSeries()

  }
  render() {
    return (
      <div className={"my-pretty-chart-container mr-2"}>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.slices}
          options={{
            title: 'Series Representation',
            is3D: true,
            backgroundColor: '#211a21',
            slices: { series: { offset: 0.4, color: 'red' } },
            titleTextStyle: {
              color: '#b5b6e4'
            },
            series,
            pieSliceText: 'label',
            legend: {
              textStyle: {
                color: '#b5b6e4'
              },
            }
          }
          }
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}

export default GameChart