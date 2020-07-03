import React, { Component } from 'react';

class Key extends Component {

  render() {
    return (
      <div className="row text-primary stat-scroll">
        <div className="col-12 text-center text-success mt-md-2">
          <p className="text-success stat-size">SU = "Startup (frames)" | FAF = "First Active Frame" | LL = "Landing Lag"</p>
        </div>
      </div>
    )
  }
}

export default Key