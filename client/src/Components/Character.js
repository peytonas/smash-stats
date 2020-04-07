import React, { Component } from 'react';
import './Character.css'
import PropTypes from 'prop-types'

class Character extends Component {

  async viewStats(characterStats) {
    console.log(characterStats.name);
    console.log(characterStats.nair);

  }
  render() {
    const { name, imgUrl } = this.props.character
    return (
      <div className="col-2 text-center">
        <img src={imgUrl} alt="character icon" className="mb-1 mt-n3" />
        <p onClick={this.viewStats.bind(this, this.props.character)}>{name}</p>
      </div>
    )
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
}


export default Character