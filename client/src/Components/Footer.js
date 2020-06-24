import React, { Component } from 'react';
import Counter from '../Components/Counter.js'
import Axios from 'axios';

let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
let api = Axios.create({
  baseURL: base + 'api/',
  timeout: 6000,
  withCredentials: true
})

class Footer extends Component {

  state = {
    hitsObject: {}
  }

  getHits() {
    api.get(`/hits`)
      .then(res => {
        this.setState({ hitsObject: res.data[0] })
        this.editHits()
      })
  }

  editHits() {
    this.setState({ hitsObject: { _id: this.state.hitsObject._id, hits: this.state.hitsObject.hits + 1 } })
    api.put(`/hits/${this.state.hitsObject._id}`, this.state.hitsObject)
  }

  componentDidMount() {
    this.getHits()
  }

  render() {
    return (
      <footer className="row justify-content-between bg-primary fixed-bottom text-center text-md-left">
        <div className="col col-md-3">
          <a href="https://twitter.com/UnbrandedLemon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter ml-2 text-success"></i></a>
          <a href="https://www.youtube.com/channel/UCkQmM3FZJXlOo3cf2n-MwEQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube ml-2 text-success"></i></a>
          <a href="https://venmo.com/Peyton-Sonnefeld" target="_blank" rel="noopener noreferrer"><i className="fa fa-heartbeat ml-2 text-success"></i></a>
        </div>
        <Counter hits={this.state.hitsObject.hits} />
      </footer>
    )
  }
}

export default Footer