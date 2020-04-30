import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';

function NavBar() {

  return (
    <footer className="row justify-content-between bg-primary text-center text-md-left">
      <div className="col col-md-3">
        <nav className="bg-primary">
          <Link className="text-dark" to="/">
            Home
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default withRouter(NavBar);