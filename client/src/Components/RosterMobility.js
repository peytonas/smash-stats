import React, { Component } from "react";
import PropTypes from "prop-types";
import RankedNamesMobility from './RankedNamesMobility'

class RosterMobility extends Component {
  render() {
    var n = 1
    return this.props.mobilityAverages.map((character) => (
      <RankedNamesMobility
        index={n++}
        key={character.name}
        character={character}
        mobilityAverages={this.props.mobilityAverages}/>
    ));
  }
}

RosterMobility.propTypes = {
  mobilityAverages: PropTypes.array.isRequired,
};

export default RosterMobility;
