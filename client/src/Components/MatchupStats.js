import React, { Component } from 'react';
import './Matchup.css'

let terry = false;

class MatchupStats extends Component {
  nameCheck() {
    if (this.props.player.name === "Terry" || this.props.opponent.name === "Terry") {
      terry = true
    } else {
      terry = false
    }
  }
  render() {
    this.nameCheck()
    return (
      <div className="col col-md-3 text-center">
        <div className="stat-size mb-1">
          <p className="clear-border">Weight</p>
          <p className="clear-border">Jab</p>
          <p className="clear-border">Jab SU</p>
          <p className="clear-border">Jab FAF</p>
          <p className="clear-border">Forward Tilt</p>
          <p className="clear-border">Forward Tilt SU</p>
          <p className="clear-border">Forward Tilt FAF</p>
          <p className="clear-border">Up Tilt</p>
          <p className="clear-border">Up Tilt SU</p>
          <p className="clear-border">Up Tilt FAF</p>
          <p className="clear-border">Down Tilt</p>
          <p className="clear-border">Down Tilt SU</p>
          <p className="clear-border">Down Tilt FAF</p>
          <p className="clear-border">Dash Attack</p>
          <p className="clear-border">Dash Attack SU</p>
          <p className="clear-border">Dash Attack FAF</p>
          <p className="clear-border">Forward Smash</p>
          <p className="clear-border">Forward Smash SU</p>
          <p className="clear-border smaller-text">Forward Smash FAF</p>
          <p className="clear-border">Up Smash</p>
          <p className="clear-border">Up Smash SU</p>
          <p className="clear-border">Up Smash FAF</p>
          <p className="clear-border">Down Smash</p>
          <p className="clear-border">Down Smash SU</p>
          <p className="clear-border">Down Smash FAF</p>
          <p className="clear-border">Neutral Air</p>
          <p className="clear-border">NAIR SU</p>
          <p className="clear-border">NAIR FAF</p>
          <p className="clear-border">NAIR LL</p>
          <p className="clear-border">Forward Air</p>
          <p className="clear-border">FAIR SU</p>
          <p className="clear-border">FAIR FAF</p>
          <p className="clear-border">FAIR LL</p>
          <p className="clear-border">Back Air</p>
          <p className="clear-border">BAIR SU</p>
          <p className="clear-border">BAIR FAF</p>
          <p className="clear-border">BAIR LL</p>
          <p className="clear-border">Up Air</p>
          <p className="clear-border">UAIR SU</p>
          <p className="clear-border">UAIR FAF</p>
          <p className="clear-border">UAIR LL</p>
          <p className="clear-border">Down Air</p>
          <p className="clear-border">DAIR SU</p>
          <p className="clear-border">DAIR FAF</p>
          <p className="clear-border">DAIR LL</p>
          <p className="clear-border">Grab Air</p>
          <p className="clear-border">ZAIR SU</p>
          <p className="clear-border">ZAIR FAF</p>
          <p className="clear-border">ZAIR LL</p>
          <p className="clear-border">Grab SU</p>
          <p className="clear-border">Grab FAF</p>
          <p className="clear-border">Dash Grab SU</p>
          <p className="clear-border">Dash Grab FAF</p>
          <p className="clear-border">Pivot Grab SU</p>
          <p className="clear-border">Pivot Grab FAF</p>
          <p className="clear-border">Pummel</p>
          <p className="clear-border">Pummel SU</p>
          <p className="clear-border">Pummel FAF</p>
          <p className="clear-border">Forward Throw</p>
          <p className="clear-border">Forward Throw SU</p>
          <p className="clear-border">Forward Throw FAF</p>
          <p className="clear-border">Back Throw</p>
          <p className="clear-border">Back Throw SU</p>
          <p className="clear-border">Back Throw FAF</p>
          <p className="clear-border">Up Throw</p>
          <p className="clear-border">Up Throw SU</p>
          <p className="clear-border">Up Throw FAF</p>
          <p className="clear-border">Down Throw</p>
          <p className="clear-border">Down Throw SU</p>
          <p className="clear-border">Down Throw FAF</p>
          <p className="clear-border">Front Floor Attack</p>
          <p className="clear-border">Back Floor Attack</p>
          <p className="clear-border">Trip Floor Attack</p>
          <p className="clear-border">Edge Attack</p>
          <p className="clear-border">Neutral Special</p>
          <p className="clear-border">Neutral Special SU</p>
          <p className="clear-border smaller-text">Neutral Special FAF</p>
          <p className="clear-border">Side Special</p>
          <p className="clear-border">Side Special SU</p>
          <p className="clear-border">Side Special FAF</p>
          <p className="clear-border">Up Special</p>
          <p className="clear-border">Up Special SU</p>
          <p className="clear-border">Up Special FAF</p>
          <p className="clear-border">Down Special</p>
          <p className="clear-border">Down Special SU</p>
          <p className="clear-border">Down Special FAF</p>
          <p className="clear-border">Final Smash</p>
          <p className="clear-border">Walk Speed</p>
          <p className="clear-border">Run Speed</p>
          <p className="clear-border">Dash Speed</p>
          <p className="clear-border">Air Speed</p>
          <p className="clear-border">Falling Speed</p>
          <p className="clear-border">Forward Roll FAF</p>
          <p className="clear-border">Back Roll FAF</p>
          <p className="clear-border">Spot Dodge Start</p>
          <p className="clear-border">Spot Dodge FAF</p>
          <p className="clear-border">Air Dodge FAF</p>
          {terry &&
            <p className="clear-border">Power Geyser</p>}
          {terry &&
            <p className="clear-border smaller-text">Power Geyser SU</p>}
          {terry &&
            <p className="clear-border">Power Geyser FAF</p>}
          {terry &&
            <p className="clear-border">Buster Wolf</p>}
          {terry &&
            <p className="clear-border smaller-text">Buster Wolf SU</p>}
          {terry &&
            <p className="clear-border">Buster Wolf FAF</p>}
        </div>
      </div>
    )
  }
}

export default MatchupStats