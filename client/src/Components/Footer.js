import React, { Component } from "react";
import Counter from "../Components/Counter.js";
import "./Footer.css";
import Axios from "axios";

let base = window.location.host.includes(
  "localhost:8080" || "https://ssb-stats.herokuapp.com"
)
  ? "//localhost:3000/"
  : "/";
let api = Axios.create({
  baseURL: base + "api/",
  timeout: 6000,
  withCredentials: true,
});

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitsObject: {},
    };
  }

  getHits() {
    api.get(`/hits`).then((res) => {
      this.setState({ hitsObject: res.data[0] });
      this.editHits();
    });
  }

  editHits() {
    this.setState({
      hitsObject: {
        _id: this.state.hitsObject._id,
        hits: this.state.hitsObject.hits + 1,
      },
    });
    api.put(`/hits/${this.state.hitsObject._id}`, this.state.hitsObject);
  }

  componentDidMount() {
    this.getHits();
  }

  render() {
    return (
      <footer className="fixed-bottom">
        <div className="row justify-content-between bg-primary text-center text-md-left mb-md-n1">
          <div className="col-4 col-md-2 text-left">
            <a
              href="https://twitter.com/UnbrandedLemon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter ml-2 text-dark"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCkQmM3FZJXlOo3cf2n-MwEQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-youtube ml-2 text-dark"></i>
            </a>
            <a
              href="https://venmo.com/Peyton-Sonnefeld"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-heartbeat ml-2 text-dark"></i>
            </a>
          </div>
          <Counter hits={this.state.hitsObject.hits} />
        </div>
        <div className="row justify-content-between bg-primary text-center text-md-left">
          <div className="col footer-text text-center">
            All rights reserved. Super Smash Bros, its characters, and Nintendo
            are registered trademarks of Nintendo of America.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
