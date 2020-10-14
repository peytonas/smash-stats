import React, { Component } from "react";
import Axios from "axios";
import CharacterPageImage from "../Components/CharacterPageImage";
import IndividualStats from "../Components/IndividualStats";
import RosterDPA from "../Components/RosterDPA";
import RosterMobility from "../Components/RosterMobility";
import Navbar from "../Components/Navbar";
import GameChart from "../Components/GameRepresentationChart";
import "./CharacterPage.css";

class CharacterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      roster: [],
    };
    const characterId = this.props.match.params.characterId;

    let base = window.location.host.includes(
      "localhost:8080" || "https://ssb-stats.herokuapp.com"
    )
      ? "//localhost:3000/"
      : "/";
    let api = Axios.create({
      baseURL: base + "api/",
      timeout: 6000,
      withCredentials: true,
    });

    api.get(`/characters/${characterId}`).then((res) => {
      this.setState({ character: res.data });
    });

    api.get(`/characters`).then((res) => {
      this.setState({ roster: res.data });
    });
  }

  render() {
    return (
      <div className="character-container">
        <Navbar />
        <CharacterPageImage character={this.state.character} />
        <div className="text-primary row text-center text-md-left">
          <IndividualStats
            character={this.state.character}
            roster={this.state.roster}
          />
        </div>
        <div className="text-primary row justify-content-md-left">
          <div className="col-md">
            <div className="row">
              <RosterDPA />
              <RosterMobility />
              <div className="col-md-5">
                <GameChart character={this.state.character} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterPage;
