import React, { Component } from "react";
import PropTypes from "prop-types";
import RankedNamesDamage from './RankedNamesDamage'

class RosterDPA extends Component {
  render() {
    var n = 1
    return this.props.damageAverages.slice(0).reverse().map((character) => (
      <RankedNamesDamage
        index={n++}
        key={character.name}
        character={character}
        damageAverages={this.props.damageAverages}/>
    ));
  }
}

RosterDPA.propTypes = {
  damageAverages: PropTypes.array.isRequired,
};

export default RosterDPA;
