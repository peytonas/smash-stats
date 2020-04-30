import React, { Component } from 'react';

class Links extends Component {

  render() {
    return (
      <footer className="row justify-content-left bg-primary fixed-bottom text-center text-md-left">
        <div className="col col-md-3">
          <a href="https://twitter.com/UnbrandedLemon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter ml-2 text-success"></i></a>
          <a href="https://www.youtube.com/channel/UCkQmM3FZJXlOo3cf2n-MwEQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube ml-2 text-success"></i></a>
          <a href="https://venmo.com/Peyton-Sonnefeld" target="_blank"><i className="fa fa-heartbeat ml-2 text-success"></i></a>
        </div>
      </footer>
    )
  }
}

export default Links