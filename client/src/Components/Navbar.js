import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

function NavBar() {

  return (
    <div className="row justify-content-left bg-primary text-center text-md-left" >
      <div className="col col-md-1">
        <nav className="bg-primary">
          <Link className="text-dark ml-1" to="/">
            Home
          </Link>
        </nav>
      </div>
    </div >
  );
}

export default withRouter(NavBar);