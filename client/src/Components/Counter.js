import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="col col-md-2 text-right mr-md-1">
        00000{this.props.hits}
      </div >
    )
  }
}

export default Counter