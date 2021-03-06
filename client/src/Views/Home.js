import React, { Component } from "react";
import Axios from "axios";
import swal from "sweetalert2";
import "../SWITCH-bootstrap.css";
import CharacterCardColumn from "../Components/CharacterCardColumn";
import PlayerSelectTable from "../Components/PlayerSelectTable";
import OpponentSelectTable from "../Components/OpponentSelectTable";
import Matchup from "../Components/Matchup";
import Key from "../Components/Key";

class Home extends Component {
  state = {
    roster: [],
    playerChoice: {},
    opponentChoice: {},
  };

  constructor(props) {
    super(props);
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
    api.get(`/characters`).then((res) => {
      this.setState({ roster: res.data });
    });
  }

  selectedPlayer = (characterName) => {
    for (var c in this.state.roster) {
      if (this.state.roster[c].name === characterName) {
        this.setState({ playerChoice: this.state.roster[c] });
      }
    }
  };

  selectedOpponent = (characterName) => {
    for (var c in this.state.roster) {
      if (this.state.roster[c].name === characterName) {
        this.setState({ opponentChoice: this.state.roster[c] });
      }
    }
  };

  viewInfo() {
    swal.fire({
      title: `<span style="color:#de4337;font-size:1.1rem">
              <span style="font-size:1.6rem; font-weight:bold">A note on the numbers:</span> </br> 
              &middot; Stats seen here are based on the most recent SSBU patch notes and other official or semi-official websites. </br>
              &middot; Most statistics that were made up of multiple numbers (multi-hit attacks, damage over time, etc...), including frame counts, were averaged and/or rounded, based on my best interpretation of the attack and character. This was in order to arrive at a single number with the intent of both showing the character at their best, as well as to give an accurate idea of what you will typically experience with the character. </br>
              &middot; Generally, statistics that included sweet-spots, sour-spots, clean vs late damage, etc... I used the sweet-spot/clean damage with the intent to show the characters at their best and what you will typically experience with the character. </br>
              &middot; Any other "discrepancies" or differences came down to a need for rounding and wanting to give each statistic a single number to work with, while also remaining true to the spirit of the character and the individual attack. </br>
              &middot; Finally, I don't main every character and I'm sure there are potentially better ways to interpret or add to these stats, and deeper/more thorough stats will be forthcoming. With that said... </br>
              <span style="font-size:1rem";>Feedback, support, and contributions are welcome!
              @UnbrandedLemon on Twitter or <a href="https://github.com/peytonas/smash-stats" target="_blank">Github</a>.</span> </br>
              </span>`,
      background: "#211a21",
      backdrop: "rgba(33,26,33,0.3)",
      showConfirmButton: false,
      showCloseButton: true,
    });
  }

  resetChoices() {
    this.setState({ playerChoice: {} });
    this.setState({ opponentChoice: {} });
  }

  render() {
    return (
      <div id="characters" className="container-fluid">
        <div className="row text-primary">
          <div className="order-2 order-md-1 col col-md-1 align-self-center text-center">
            <i
              className="far fa-question-circle pointer text-info"
              onClick={this.viewInfo.bind(this)}
            ></i>
          </div>
          <div className="order-1 order-lg-2 col-12 col-md-8 col-lg-4 offset-md-1 offset-lg-3 text-center">
            <h1 className="size mt-2 border border-primary rounded pl-1 pr-1">
              SMASH STATS
            </h1>
          </div>
        </div>
        <div className="row justify-content-center justify-content-md-between text-info">
          <div className="col col-md-3 col-lg-2 text-center text-md-left">
            <p className="text-info text-left">
              <b>Player:</b>
            </p>
            <div className="name-scroll bg-secondary flexBox mt-n2">
              <PlayerSelectTable
                characters={this.state.roster}
                characterPasser={this.selectedPlayer}
                player={this.state.playerChoice}
              />
            </div>
            <p className="mt-1 text-info text-left">
              <b>Opponent:</b>
            </p>
            <div className="name-scroll bg-secondary flexBox mt-n2">
              <OpponentSelectTable
                characters={this.state.roster}
                characterPasser={this.selectedOpponent}
                opponent={this.state.opponentChoice}
              />
            </div>
            <div>
              <button
                className="btn fab btn-info mt-1"
                title="clear selections"
                onClick={this.resetChoices.bind(this)}
              >
                <i className="fa fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <Matchup
            player={this.state.playerChoice}
            opponent={this.state.opponentChoice}
          />
          <div className="col-4 col-md-3 col-lg-2 text-center text-danger">
            <h6 className="text-center text-md-left">
              <b>Character Stats:</b>
            </h6>
            <div className="card-scroll flexBox">
              <CharacterCardColumn characters={this.state.roster} />
            </div>
            <h5>
              <i className="fas fa-sort-down pulse" title="scroll down!"></i>
            </h5>
          </div>
        </div>
        <Key />
      </div>
    );
  }
}

export default Home;
