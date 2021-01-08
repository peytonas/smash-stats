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
  constructor(state) {
    super(state);
    this.state = {
      character: {},
      roster: [],
      characterNames: [],
      rosterNamesAndDamageAverages: [],
      rosterNamesAndMobilityAverages: [],
      characterMobility: 0,
      characterDamage: 0,
      rosterDamageAverage: 0,
      rosterMobilityAverage: 0,
      playerMobilityRank: 0,
      playerDamageRank: 0,
      rosterDamageAverages: [],
      rosterMobilityAverages: []
    };
    setTimeout(() => {
      this.rosterDamageCalculator();
      this.rosterMobilityCalculator();
      this.playerDamageCalculator();
      this.playerMobilityCalculator();
      this.sortRosterMobility();
      this.sortRosterDamage();
      this.playerMobilityRank();
      this.playerDamageRank();
    }, 1500);

    const characterId = state.match.params.characterId;

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

  playerDamageCalculator() {
    let score =
      (this.state.character.neutral +
        this.state.character.forwardTilt +
        this.state.character.upTilt +
        this.state.character.downTilt +
        this.state.character.dashAttack +
        this.state.character.forwardSmash +
        this.state.character.upSmash +
        this.state.character.downSmash +
        this.state.character.nair +
        this.state.character.fair +
        this.state.character.bair +
        this.state.character.uair +
        this.state.character.dair +
        this.state.character.zair +
        this.state.character.pummel +
        this.state.character.forwardThrow +
        this.state.character.backThrow +
        this.state.character.upThrow +
        this.state.character.downThrow +
        this.state.character.floorAttackFront +
        this.state.character.floorAttackBack +
        this.state.character.floorAttackTrip +
        this.state.character.edgeAttack +
        this.state.character.neutralSpecial +
        this.state.character.sideSpecial +
        this.state.character.upSpecial +
        this.state.character.downSpecial) /
      27;

    this.setState({ characterDamage: score });
  }

  playerMobilityCalculator() {
    var mobility =
      (this.state.character.weight +
        this.state.character.forwardRollLag +
        this.state.character.backRollLag +
        this.state.character.spotDodgeLag +
        this.state.character.airDodgeLag +
        this.state.character.downThrowLag +
        this.state.character.upThrowLag +
        this.state.character.backThrowLag +
        this.state.character.forwardThrowLag +
        this.state.character.pummelLag +
        this.state.character.zairLag +
        this.state.character.bairLag +
        this.state.character.fairLag +
        this.state.character.dairLag +
        this.state.character.uairLag +
        this.state.character.nairLag +
        this.state.character.forwardSmashLag +
        this.state.character.downSmashLag +
        this.state.character.upSmashLag +
        this.state.character.dashAttackLag +
        this.state.character.forwardTiltLag +
        this.state.character.downTiltLag +
        this.state.character.upTiltLag +
        this.state.character.downSpecialLag +
        this.state.character.upSpecialLag +
        this.state.character.sideSpecialLag +
        this.state.character.neutralSpecialLag +
        this.state.character.neutralLag +
        this.state.character.neutralStartup +
        this.state.character.forwardTiltStartup +
        this.state.character.upTiltStartup +
        this.state.character.downTiltStartup +
        this.state.character.dashAttackStartup +
        this.state.character.forwardSmashStartup +
        this.state.character.upSmashStartup +
        this.state.character.downSmashStartup +
        this.state.character.nairStartup +
        this.state.character.fairStartup +
        this.state.character.bairStartup +
        this.state.character.uairStartup +
        this.state.character.dairStartup +
        this.state.character.zairStartup +
        this.state.character.pummelStartup +
        this.state.character.forwardThrowStartup +
        this.state.character.backThrowStartup +
        this.state.character.upThrowStartup +
        this.state.character.downThrowStartup +
        this.state.character.neutralSpecialStartup +
        this.state.character.sideSpecialStartup +
        this.state.character.upSpecialStartup +
        this.state.character.downSpecialStartup -
        (this.state.character.walkSpeed +
          this.state.character.runSpeed +
          this.state.character.dashSpeed +
          this.state.character.airSpeed +
          this.state.character.fallingSpeed)) /
      56;

    this.setState({ characterMobility: mobility });
  }

  rosterDamageCalculator() {
    var score = 0;

    for (var c in this.state.roster) {
      var playerScore =
        (this.state.roster[c].neutral +
          this.state.roster[c].forwardTilt +
          this.state.roster[c].upTilt +
          this.state.roster[c].downTilt +
          this.state.roster[c].dashAttack +
          this.state.roster[c].forwardSmash +
          this.state.roster[c].upSmash +
          this.state.roster[c].downSmash +
          this.state.roster[c].nair +
          this.state.roster[c].fair +
          this.state.roster[c].bair +
          this.state.roster[c].uair +
          this.state.roster[c].dair +
          this.state.roster[c].zair +
          this.state.roster[c].pummel +
          this.state.roster[c].forwardThrow +
          this.state.roster[c].backThrow +
          this.state.roster[c].upThrow +
          this.state.roster[c].downThrow +
          this.state.roster[c].floorAttackFront +
          this.state.roster[c].floorAttackBack +
          this.state.roster[c].floorAttackTrip +
          this.state.roster[c].edgeAttack +
          this.state.roster[c].neutralSpecial +
          this.state.roster[c].sideSpecial +
          this.state.roster[c].upSpecial +
          this.state.roster[c].downSpecial) /
        27;

      score += playerScore;

      this.state.rosterDamageAverages.push(playerScore);
      this.state.characterNames.push(this.state.roster[c].name)
    }
    score = score / this.state.roster.length;

    this.setState({ rosterDamageAverage: score });
  }

  rosterMobilityCalculator() {
    var mobility = 0;

    for (var c in this.state.roster) {
      var characterMobility =
        (this.state.roster[c].weight +
          this.state.roster[c].forwardRollLag +
          this.state.roster[c].backRollLag +
          this.state.roster[c].spotDodgeLag +
          this.state.roster[c].airDodgeLag +
          this.state.roster[c].downThrowLag +
          this.state.roster[c].upThrowLag +
          this.state.roster[c].backThrowLag +
          this.state.roster[c].forwardThrowLag +
          this.state.roster[c].pummelLag +
          this.state.roster[c].zairLag +
          this.state.roster[c].bairLag +
          this.state.roster[c].fairLag +
          this.state.roster[c].dairLag +
          this.state.roster[c].uairLag +
          this.state.roster[c].nairLag +
          this.state.roster[c].forwardSmashLag +
          this.state.roster[c].downSmashLag +
          this.state.roster[c].upSmashLag +
          this.state.roster[c].dashAttackLag +
          this.state.roster[c].forwardTiltLag +
          this.state.roster[c].downTiltLag +
          this.state.roster[c].upTiltLag +
          this.state.roster[c].downSpecialLag +
          this.state.roster[c].upSpecialLag +
          this.state.roster[c].sideSpecialLag +
          this.state.roster[c].neutralSpecialLag +
          this.state.roster[c].neutralLag +
          this.state.roster[c].neutralStartup +
          this.state.roster[c].forwardTiltStartup +
          this.state.roster[c].upTiltStartup +
          this.state.roster[c].downTiltStartup +
          this.state.roster[c].dashAttackStartup +
          this.state.roster[c].forwardSmashStartup +
          this.state.roster[c].upSmashStartup +
          this.state.roster[c].downSmashStartup +
          this.state.roster[c].nairStartup +
          this.state.roster[c].fairStartup +
          this.state.roster[c].bairStartup +
          this.state.roster[c].uairStartup +
          this.state.roster[c].dairStartup +
          this.state.roster[c].zairStartup +
          this.state.roster[c].pummelStartup +
          this.state.roster[c].forwardThrowStartup +
          this.state.roster[c].backThrowStartup +
          this.state.roster[c].upThrowStartup +
          this.state.roster[c].downThrowStartup +
          this.state.roster[c].neutralSpecialStartup +
          this.state.roster[c].sideSpecialStartup +
          this.state.roster[c].upSpecialStartup +
          this.state.roster[c].downSpecialStartup -
          (this.state.roster[c].walkSpeed +
            this.state.roster[c].runSpeed +
            this.state.roster[c].dashSpeed +
            this.state.roster[c].airSpeed +
            this.state.roster[c].fallingSpeed)) /
        56;

      mobility += characterMobility;

      this.state.rosterMobilityAverages.push(characterMobility);
    }
    mobility = mobility / this.state.roster.length;

    this.setState({ rosterMobilityAverage: mobility });
  }

  sortRosterMobility() {
    var mobility = this.state.rosterMobilityAverages;
    var names = this.state.characterNames
    var namesAndAverages = this.state.rosterNamesAndMobilityAverages

    for (var j in mobility) {
      namesAndAverages.push({'name': names[j], 'mobility': mobility[j]})
    }
    namesAndAverages.sort((a, b) => a.mobility-b.mobility)

    this.setState({ rosterNamesAndMobilityAverages: namesAndAverages });
  }

  sortRosterDamage() {
    var damage = this.state.rosterDamageAverages;
    var names = this.state.characterNames
    var namesAndAverages = this.state.rosterNamesAndDamageAverages

    for (var j in damage) {
      namesAndAverages.push({'name': names[j], 'damage': damage[j]})
    }
    namesAndAverages.sort((a, b) => a.damage-b.damage)

    this.setState({ rosterNamesAndDamageAverages: namesAndAverages })
  }

  playerMobilityRank() {
    var name = this.state.character.name;
    var namesAndAverages = this.state.rosterNamesAndMobilityAverages
    var rank

    for (var c = 0; c < namesAndAverages.length; c++) {
      if (name === namesAndAverages[c].name) {
        rank = c + 1;
        this.setState({ playerMobilityRank: rank });
      }
    }
  }

  playerDamageRank() {
    var name = this.state.character.name;
    var namesAndAverages = this.state.rosterNamesAndDamageAverages
    var rank;

    for (var c = 0; c < namesAndAverages.length; c++) {
      if (name === namesAndAverages[c].name) {
        rank = this.state.rosterNamesAndDamageAverages.length - c;
        this.setState({ playerDamageRank: rank });
      }
    }
  }

  render() {
    return (
      <div className="character-container">
        <Navbar />
        <div className="mt-xl-5">
        <CharacterPageImage character={this.state.character}/>
        </div>
        <div className="text-primary row text-center text-md-left">
          <IndividualStats
            character={this.state.character}
            roster={this.state.roster}
            stateProp={this.state}
          />
        </div>
        <div className="text-primary row justify-content-md-left">
          <div className="col-md">
            <div className="row">
              <div className="rankings-scroll overflow col col-md-2 mobile-font stat-border ml-md-1 mr-md-1 text-info mt-1">
                <h6>Damage Rankings:</h6>
              <RosterDPA
                damageAverages={this.state.rosterNamesAndDamageAverages}
                />
              </div>
              <div className="rankings-scroll overflow col col-md-2 mobile-font stat-border ml-md-1 mr-md-1 text-info mt-1">
                <h6>Mobility Rankings:</h6>
              <RosterMobility
                  mobilityAverages={this.state.rosterNamesAndMobilityAverages} />
                </div>
              <div className="col-md-5">
                <GameChart character={this.state.character} />
              </div>
            </div>
          </div>
        </div>
        <div className="text-primary row justify-content-md-left mt-n2">
          <div className="col-2 text-center">
            <i
            className="fas fa-sort-down pulse text-info"
            title="scroll down!"></i>
          </div>
          <div className="col-2 text-center">
            <i
            className="fas fa-sort-down pulse text-info"
            title="scroll down!"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterPage;
