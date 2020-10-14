import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import "./SWITCH-bootstrap.css";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import CharacterPage from "./Views/CharacterPage";

class App extends Component {
  render() {
    return (
      <div id="characters" className="container-fluid">
        <Route exact path="/" component={Home} />
        <Route exact path="/character/:characterId" component={CharacterPage} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
