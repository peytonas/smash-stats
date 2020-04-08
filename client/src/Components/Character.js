import React, { Component } from 'react';
import swal from 'sweetalert2'
import './Character.css'
import PropTypes from 'prop-types'



class Character extends Component {

  async viewStats(characterStats) {
    console.log(characterStats);
    swal.fire({
      title: `<span style="color:#de4337;font-size:.8rem" className="overflow">
      <span style="font-size:1.5rem">${characterStats.name}</span> </br> 
      Weight: ${characterStats.weight} </br> 
      Walk Speed: ${characterStats.walkSpeed}</br>
      Run Speed: ${characterStats.runSpeed}</br>
      Dash Speed: ${characterStats.dashSpeed}</br>
      Air Speed: ${characterStats.airSpeed}</br>
      Falling Speed: ${characterStats.fallingSpeed}</br>
      Forward Roll Lag: ${characterStats.forwardRollLag}</br>
      Backward Roll Lag: ${characterStats.backRollLag}</br>
      Spot Dodge Start: ${characterStats.spotDodgeStart}</br>
      Air Dodge Lag: ${characterStats.airDodgeLag}</br>
      Neutral Special: ${characterStats.neutralSpecial}</br>
      Side Special: ${characterStats.sideSpecial}</br>
      Up Special: ${characterStats.upSpecial}</br>
      Down Special: ${characterStats.downSpecial}</br>
      Neutral Attack: ${characterStats.neutral}</br>
      Up Tilt: ${characterStats.upTilt}</br>
      Down Tilt: ${characterStats.downTilt}</br>
      Forward Tilt: ${characterStats.forwardTilt}</br>
      Up Tilt: ${characterStats.upTilt}</br>
      Dash Attack: ${characterStats.dashAttack}</br>
      Up Smash: ${characterStats.upSmash}</br>
      Down Smash: ${characterStats.downSmash}</br>
      Forward Smash: ${characterStats.forwardSmash}</br>
      Neutral Air: ${characterStats.nair}</br>
      Up Air: ${characterStats.uair}</br>
      Down Air: ${characterStats.dair}</br>
      Forward Air: ${characterStats.fair}</br>
      Back Air: ${characterStats.bair}</br>
      Grab Air: ${characterStats.zair}</br>
      Pummel: ${characterStats.pummel}</br>
      Forward Throw: ${characterStats.forwardThrow}</br>
      Back Throw: ${characterStats.backThrow}</br>
      Up Throw: ${characterStats.upThrow}</br>
      Down Throw: ${characterStats.downThrow}</br>
      Front Floor Attack: ${characterStats.floorAttackFront}</br>
      Back Floor Attack: ${characterStats.floorAttackBack}</br>
      Trip Floor Attack: ${characterStats.floorAttackTrip}</br>
      Edge Attack: ${characterStats.edgeAttack}</br>
      Final Smash: ${characterStats.finalSmash}
      </span >`,
      imageUrl: characterStats.imgUrl,
      imageAlt: "character icon",
      background: "#211a21",
      backdrop: "rgba(33,26,33,0.5)",
      showConfirmButton: false
    });
  }
  render() {
    const { name, imgUrl } = this.props.character
    return (
      <div className="col-2 text-center" onClick={this.viewStats.bind(this, this.props.character)}>
        <img src={imgUrl} alt="character icon" className="mb-1 mt-n3" />
        <p>{name}</p>
      </div>
    )
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
}


export default Character