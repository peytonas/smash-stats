import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Counter extends Component {
  render() {
    return (
      <div className="col col-md-2 text-right mr-md-1">
        00000{this.props.hits}
        {/* <div className="row mt-n3">
          <div className="col col-md-6 footer-text mt-3 mt-md-2 text-center">All rights reserved. Super Smash Bros and Nintendo are registered trademarks of Nintendo of America.</div>
        </div> */}
      </div >
    )
  }
}

Counter.propTypes = {
  hits: PropTypes.number.isRequired
}

export default Counter