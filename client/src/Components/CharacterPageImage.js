import React, { Component } from 'react';
import '../SNES-bootstrap.css'
import '../Views/CharacterPage.css'
import Axios from 'axios'

class CharacterPageImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterSkinNumber: 1,
      currentSkin: null
    }
  }

  async cycleImage() {
    if (this.state.characterSkinNumber === 1) {
      this.setState({ currentSkin: this.props.character.imgUrl1 })
    }
    if (this.state.characterSkinNumber === 2) {
      this.setState({ currentSkin: this.props.character.imgUrl2 })
    }
    if (this.state.characterSkinNumber === 3) {
      this.setState({ currentSkin: this.props.character.imgUrl3 })
    }
    if (this.state.characterSkinNumber === 4) {
      this.setState({ currentSkin: this.props.character.imgUrl4 })
    }
    if (this.state.characterSkinNumber === 5) {
      this.setState({ currentSkin: this.props.character.imgUrl5 })
    }
    if (this.state.characterSkinNumber === 6) {
      this.setState({ currentSkin: this.props.character.imgUrl6 })
    }
    if (this.state.characterSkinNumber === 7) {
      this.setState({ currentSkin: this.props.character.imgUrl7 })
    }
    if (this.state.characterSkinNumber === 8) {
      this.setState({ currentSkin: this.props.character.imgUrl8 })
    }
  }

  async cycleUp() {
    this.setState({
      characterSkinNumber: this.state.characterSkinNumber < 8 ? this.state.characterSkinNumber += 1 : this.state.characterSkinNumber >= 8 ? this.state.characterSkinNumber = 1 : null
    })
    this.cycleImage();
  }

  async cycleDown() {
    this.setState({
      characterSkinNumber: this.state.characterSkinNumber > 1 ? this.state.characterSkinNumber -= 1 : this.state.characterSkinNumber <= 1 ? this.state.characterSkinNumber = 8 : null
    })
    this.cycleImage();
  }

  render() {
    const character = this.props.character
    return (
      <div>
        <div className="row justify-content-center">
          <h1 className="text-danger mt-4"><b>{character.name}</b></h1>
        </div>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col col-md-1 text-danger">
            <i className="fas fa-caret-left pulse pointer" onClick={this.cycleDown.bind(this)}></i>
          </div>
          <div className="col col-md-4">
            <img className="small-img" alt="character icon" src={character.iconUrl} />
            <img className="large-img" alt="character" src={this.state.currentSkin || this.props.character.imgUrl1} />
          </div>
          <div className="col col-md-1 text-danger">
            <i className="fas fa-caret-right pulse pointer" onClick={this.cycleUp.bind(this)}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterPageImage