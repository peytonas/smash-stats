import React, { Component } from 'react';
import swal from 'sweetalert2'
import './CharacterCard.css'
import PropTypes from 'prop-types'

class CharacterCard extends Component {

  async viewStats(characterStats) {
    swal.fire({
      title: `<span style="color:#b5b6e4;font-size:.7rem" className="overflow">
      <span style="font-size:1.5rem; font-weight:bold">${characterStats.name}</span> </br> 
      Series: ${characterStats.series}</br>
      Introduced: ${characterStats.introduced}</br>
      Smash Number: ${characterStats.characterNumber}</br>
      Weight: ${characterStats.weight}</br> 
      Neutral Attack: ${characterStats.neutral} dmg</br>
      Neutral Special: ${characterStats.neutralSpecial} dmg</br>
      Side Special: ${characterStats.sideSpecial} dmg</br>
      Up Special: ${characterStats.upSpecial} dmg</br>
      Down Special: ${characterStats.downSpecial} dmg</br>
      Up Tilt: ${characterStats.upTilt} dmg</br>
      Down Tilt: ${characterStats.downTilt} dmg</br>
      Forward Tilt: ${characterStats.forwardTilt} dmg</br>
      Dash Attack: ${characterStats.dashAttack} dmg</br>
      Up Smash: ${characterStats.upSmash} dmg</br>
      Down Smash: ${characterStats.downSmash} dmg</br>
      Forward Smash: ${characterStats.forwardSmash} dmg</br>
      Neutral Air: ${characterStats.nair} dmg</br>
      Up Air: ${characterStats.uair} dmg</br>
      Down Air: ${characterStats.dair} dmg</br>
      Forward Air: ${characterStats.fair} dmg</br>
      Back Air: ${characterStats.bair} dmg</br>
      Grab Air: ${characterStats.zair} dmg</br>
      Pummel: ${characterStats.pummel} dmg</br>
      Forward Throw: ${characterStats.forwardThrow} dmg</br>
      Back Throw: ${characterStats.backThrow} dmg</br>
      Up Throw: ${characterStats.upThrow} dmg</br>
      Down Throw: ${characterStats.downThrow} dmg</br>
      Front Floor Attack: ${characterStats.floorAttackFront} dmg</br>
      Back Floor Attack: ${characterStats.floorAttackBack} dmg</br>
      Trip Floor Attack: ${characterStats.floorAttackTrip} dmg</br>
      Edge Attack: ${characterStats.edgeAttack} dmg</br>
      Final Smash: ${characterStats.finalSmash} dmg</br>
      Walk Speed: ${characterStats.walkSpeed} </br>
      Run Speed: ${characterStats.runSpeed} </br>
      Dash Speed: ${characterStats.dashSpeed} </br>
      Air Speed: ${characterStats.airSpeed} </br>
      Falling Speed: ${characterStats.fallingSpeed} </br>
      Forward Roll Lag (FAF): ${characterStats.forwardRollLag}</br>
      Back Roll Lag (FAF): ${characterStats.backRollLag}</br>
      Spot Dodge Startup: ${characterStats.spotDodgeStart}</br>
      Spot Dodge Lag (FAF): ${characterStats.spotDodgeLag}</br>
      Air Dodge Lag (FAF): ${characterStats.airDodgeLag}</br>
      </span >`,
      imageUrl: characterStats.iconUrl,
      imageAlt: "character icon",
      background: "#211a21",
      backdrop: "rgba(33,26,33,0.5)",
      showConfirmButton: false,
      showCloseButton: true
    });
  }
  render() {
    const { name, iconUrl } = this.props.character
    const characterNumber = Math.floor(this.props.character.characterNumber)

    return (
      <div className="cards text-danger" style={{ order: characterNumber }} onClick={this.viewStats.bind(this, this.props.character)}>
        <img src={iconUrl} alt="character icon" className="mt-1" />
        <p className="cardName mt-1"><b>{name}</b></p>
      </div>
    )
  }
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
}

export default CharacterCard;