import React, { Component } from 'react';
import '../Views/CharacterPage.css'

class CharacterPageImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterSkinNumber: 1,
      currentSkin: null
    }
  }

  async cycleImage() {
    var skin1 = this.props.character.imgUrl1
    var skin2 = this.props.character.imgUrl2
    var skin3 = this.props.character.imgUrl3
    var skin4 = this.props.character.imgUrl4
    var skin5 = this.props.character.imgUrl5
    var skin6 = this.props.character.imgUrl6
    var skin7 = this.props.character.imgUrl7
    var skin8 = this.props.character.imgUrl8

    if (this.state.characterSkinNumber === 1) {
      this.setState({ currentSkin: skin1 })
    }
    if (this.state.characterSkinNumber === 2) {
      this.setState({ currentSkin: skin2 })
    }
    if (this.state.characterSkinNumber === 3) {
      this.setState({ currentSkin: skin3 })
    }
    if (this.state.characterSkinNumber === 4) {
      this.setState({ currentSkin: skin4 })
    }
    if (this.state.characterSkinNumber === 5) {
      this.setState({ currentSkin: skin5 })
    }
    if (this.state.characterSkinNumber === 6) {
      this.setState({ currentSkin: skin6 })
    }
    if (this.state.characterSkinNumber === 7) {
      this.setState({ currentSkin: skin7 })
    }
    if (this.state.characterSkinNumber === 8) {
      this.setState({ currentSkin: skin8 })
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
          <div className="col offset-4 text-center">
            <h1 className="text-danger mt-4"><b>{character.name}</b></h1>
          </div>
          <div className="col">
            <img className="series-img" alt="series icon" src={character.seriesIconUrl}/>
          </div>
        </div>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col col-md-1 text-primary">
            <i className="fas fa-caret-left fa-3x pulse pointer" onClick={this.cycleDown.bind(this)}></i>
          </div>
          <div className="col col-md-4">
            <img className="small-img" alt="character icon" src={character.iconUrl} />
            <img className="large-img" alt="character" src={this.state.currentSkin || this.props.character.imgUrl1} />
          </div>
          <div className="col col-md-1 text-primary">
            <i className="fas fa-caret-right fa-3x pulse pointer" onClick={this.cycleUp.bind(this)}></i>
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterPageImage