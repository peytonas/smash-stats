import React, { Component } from 'react';
import Counter from '../Components/Counter.js'
import Axios from 'axios';

class Footer extends Component {

  state = {
    hitsId: "",
    hits: 0
  }

  componentDidMount() {
    let base = window.location.host.includes('localhost:8080' || 'https://ssb-stats.herokuapp.com') ? '//localhost:3000/' : '/'
    let api = Axios.create({
      baseURL: base + 'api/',
      timeout: 3000,
      withCredentials: true
    })
    api.get(`/hits`)
      .then(res => {
        this.setState({ hitsId: res.data[0]._id })
        this.setState({ hits: res.data[0].hits })
      })
  }

  render() {
    return (
      <footer className="row justify-content-between bg-primary fixed-bottom text-center text-md-left">
        <div className="col col-md-3">
          <a href="https://twitter.com/UnbrandedLemon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter ml-2 text-success"></i></a>
          <a href="https://www.youtube.com/channel/UCkQmM3FZJXlOo3cf2n-MwEQ" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube ml-2 text-success"></i></a>
          <a href="https://venmo.com/Peyton-Sonnefeld" target="_blank" rel="noopener noreferrer"><i className="fa fa-heartbeat ml-2 text-success"></i></a>
        </div>
        <Counter hits={this.state.hits} />
      </footer>
    )
  }
}

export default Footer