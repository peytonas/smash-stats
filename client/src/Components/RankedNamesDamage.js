import React, { Component } from "react";
import PropTypes from "prop-types";

class RankedNamesDamage extends Component {
  render() {
    const { name } = this.props.character;
    // const damageRank = this.props.damageAverages.indexOf({name})
    return (
      <p className="ml-1">
        {this.props.index}. {name}
      </p>
    );
  }
}

RankedNamesDamage.propTypes = {
  character: PropTypes.object.isRequired,
};

export default RankedNamesDamage;
