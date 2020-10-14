import React, { Component } from "react";
import "./IndividualStats.css";

class IndividualStats extends Component {
  render() {
    return (
      <div className="col col-md-4 mobile-font stat-border ml-md-1 text-info">
        <h6 className="mt-1">
          Damage Rank:&nbsp;<span>{this.props.stateProp.playerDamageRank}</span>
          &nbsp; Mobility Rank:&nbsp;
          <span>{this.props.stateProp.playerMobilityRank}</span>
        </h6>
        <h6>
          DPA/Average DPA:&nbsp;
          <span
            className={
              this.props.stateProp.characterDmg >
              this.props.stateProp.rosterDmgAverage
                ? "text-green"
                : "text-danger"
            }
          >
            {this.props.stateProp.characterDmg.toFixed(2)}
          </span>
          /{this.props.stateProp.rosterDmgAverage.toFixed(2)}
        </h6>
        <h6>
          Mobility/Average Mobility:&nbsp;
          <span
            className={
              this.props.stateProp.characterMobility >
              this.props.stateProp.rosterMobilityAverage
                ? "text-danger"
                : "text-green"
            }
          >
            {this.props.stateProp.characterMobility.toFixed(2)}
          </span>
          /{this.props.stateProp.rosterMobilityAverage.toFixed(2)}
        </h6>
      </div>
    );
  }
}

export default IndividualStats;
