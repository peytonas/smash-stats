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
      Jab: ${characterStats.neutral} dmg</br>
      Jab SU: ${characterStats.neutralStartup}</br>
      Jab FAF: ${characterStats.neutralLag}</br>
      Neutral Special: ${characterStats.neutralSpecial} dmg</br>
      Neutral Special SU: ${characterStats.neutralSpecialStartup}</br>
      Neutral Special FAF: ${characterStats.neutralSpecialLag}</br>
      Side Special: ${characterStats.sideSpecial} dmg</br>
      Side Special SU: ${characterStats.sideSpecialStartup}</br>
      Side Special FAF: ${characterStats.sideSpecialLag}</br>
      Up Special: ${characterStats.upSpecial} dmg</br>
      Up Special SU: ${characterStats.upSpecialStartup}</br>
      Up Special FAF: ${characterStats.upSpecialLag}</br>
      Down Special: ${characterStats.downSpecial} dmg</br>
      Down Special SU: ${characterStats.downSpecialStartup}</br>
      Down Special FAF: ${characterStats.downSpecialLag}</br>
      Up Tilt: ${characterStats.upTilt} dmg</br>
      Up Tilt SU: ${characterStats.upTiltStartup}</br>
      Up Tilt FAF: ${characterStats.upTiltLag}</br>
      Down Tilt: ${characterStats.downTilt} dmg</br>
      Down Tilt SU: ${characterStats.downTiltStartup}</br>
      Down Tilt FAF: ${characterStats.downTiltLag}</br>
      Forward Tilt: ${characterStats.forwardTilt} dmg</br>
      Forward Tilt SU: ${characterStats.forwardTiltStartup}</br>
      Forward Tilt FAF: ${characterStats.forwardTiltLag}</br>
      Dash Attack: ${characterStats.dashAttack} dmg</br>
      Dash Attack SU: ${characterStats.dashAttackStartup}</br>
      Dash Attack FAF: ${characterStats.dashAttackLag}</br>
      Up Smash: ${characterStats.upSmash} dmg</br>
      Up Smash SU: ${characterStats.upSmashStartup}</br>
      Up Smash FAF: ${characterStats.upSmashLag}</br>
      Down Smash: ${characterStats.downSmash} dmg</br>
      Down Smash SU: ${characterStats.downSmashStartup}</br>
      Down Smash FAF: ${characterStats.downSmashLag}</br>
      Forward Smash: ${characterStats.forwardSmash} dmg</br>
      Forward Smash SU: ${characterStats.forwardSmashStartup}</br>
      Forward Smash FAF: ${characterStats.forwardSmashLag}</br>
      Neutral Air: ${characterStats.nair} dmg</br>
      NAIR SU: ${characterStats.nairStartup}</br>
      NAIR FAF: ${characterStats.nairLag}</br>
      NAIR LL: ${characterStats.nairLandingLag}</br>
      Up Air: ${characterStats.uair} dmg</br>
      UAIR SU: ${characterStats.uairStartup}</br>
      UAIR FAF: ${characterStats.uairLag}</br>
      UAIR LL: ${characterStats.uairLandingLag}</br>
      Down Air: ${characterStats.dair} dmg</br>
      DAIR SU: ${characterStats.dairStartup}</br>
      DAIR FAF: ${characterStats.dairLag}</br>
      DAIR LL: ${characterStats.dairLandingLag}</br>
      Forward Air: ${characterStats.fair} dmg</br>
      FAIR SU: ${characterStats.fairStartup}</br>
      FAIR FAF: ${characterStats.fairLag}</br>
      FAIR LL: ${characterStats.fairLandingLag}</br>
      Back Air: ${characterStats.bair} dmg</br>
      BAIR SU: ${characterStats.bairStartup}</br>
      BAIR FAF: ${characterStats.bairLag}</br>
      BAIR LL: ${characterStats.bairLandingLag}</br>
      Grab Air: ${characterStats.zair} dmg</br>
      ZAIR SU: ${characterStats.zairStartup}</br>
      ZAIR FAF: ${characterStats.zairLag}</br>
      ZAIR LL: ${characterStats.zairLandingLag}</br>
      Grab SU: ${characterStats.grabStartup}</br>
      Grab FAF: ${characterStats.grabLag}</br>
      Dash Grab SU: ${characterStats.dashGrabStartup}</br>
      Dash Grab FAF: ${characterStats.dashGrabLag}</br>
      Pummel: ${characterStats.pummel} dmg</br>
      Pummel SU: ${characterStats.pummelStartup}</br>
      Pummel FAF: ${characterStats.pummelLag}</br>
      Forward Throw: ${characterStats.forwardThrow} dmg</br>
      Forward Throw SU: ${characterStats.forwardThrowStartup}</br>
      Forward Throw FAF: ${characterStats.forwardThrowLag}</br>
      Back Throw: ${characterStats.backThrow} dmg</br>
      Back Throw SU: ${characterStats.backThrowStartup}</br>
      Back Throw FAF: ${characterStats.backThrowLag}</br>
      Up Throw: ${characterStats.upThrow} dmg</br>
      Up Throw SU: ${characterStats.upThrowStartup}</br>
      Up Throw FAF: ${characterStats.upThrowLag}</br>
      Down Throw: ${characterStats.downThrow}</br>
      Down Throw SU: ${characterStats.downThrowStartup}</br>
      Down Throw FAF: ${characterStats.downThrowLag}</br>
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