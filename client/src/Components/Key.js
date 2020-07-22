import React, { Component } from 'react';

class Key extends Component {
  render() {
    return (
      <div className="row text-info stat-scroll">
        <div className="col-12 text-center mt-md-2">
          <p className="stat-size text-primary">SU = "Startup (frames)" | FAF = "First Active Frame" | LL = "Landing Lag"</p>
        </div>
      </div>
    )
  }
}

export default Key