import React, { Component } from 'react';
import './Character.css'

class Character extends Component {
  render() {
    const { name, imgUrl } = this.props.character
    return (
      <div className="col-2 text-center" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">
        <img src={imgUrl} alt="character icon" className="mb-1 mt-n3" />
        <p>{name}</p>
      </div>
    )
  }
}

export default Character