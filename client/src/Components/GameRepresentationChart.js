import React, { Component } from 'react'
import { Chart } from "react-google-charts";

class GameChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      series: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  }

  slice = 1;
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
    for (c = 0; c < this.slices.length; c++) {
      if (this.props.character.series === this.slices[c][0]) {
        this.slice = c - 1
        const newArr = this.state.series.slice(0, 36);
        newArr[this.slice] = { offset: 0.2 }
        this.setState({ series: newArr })
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.characterSeries()
    }, 2000)
  }

  render() {
    return (
      <div className={"my-pretty-chart-container mr-md-2 mt-md-n5"}>
        <Chart
          className="fill"
          height={'400px'}
          chartType="PieChart"
          loader={<div>Loading Chart...</div>}
          data={this.slices}
          options={{
            title: 'Series Representation',
            is3D: true,
            backgroundColor: '#211a21',
            titleTextStyle: {
              color: '#b5b6e4'
            },
            pieSliceText: 'label',
            slices: this.state.series,
            legend: {
              position: 'none'
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