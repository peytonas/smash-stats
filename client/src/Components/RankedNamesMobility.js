import React, { Component } from "react";
import PropTypes from "prop-types";

class RankedNamesMobility extends Component {
  render() {
    const { name } = this.props.character;
    // const mobilityRank = this.props.mobilityAverages.indexOf()
    return (
      <p className="ml-1">
        {this.props.index}. {name}
      </p>
    );
  }
}

RankedNamesMobility.propTypes = {
  character: PropTypes.object.isRequired,
};

export default RankedNamesMobility;
