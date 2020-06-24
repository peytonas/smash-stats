import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    return (
      <div className="col col-md-3 text-right mr-1">
        00000{this.props.hits}
      </div >
    )
  }
}

Counter.propTypes = {
  hits: PropTypes.number.isRequired
}

export default Counter