import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Footer from "./footer";
// Code-splitting is automated for routes
import Home from "../routes/home.js";
import Iot from "../routes/iot";
// import Profile from '../routes/profile';
import Basic from "../routes/bas";
import Network from "../routes/network.js";
import Updates from "../routes/updates.js";

import Login from "../routes/login.js";

export default class App extends Component {
  state = {
    user: null,
    password: null,
    isAutenticated: false,
  };

  updateAuthData = (obj) => {
    this.setState({
      user: obj.user,
      password: obj.password,
      isAutenticated: true,
    });
  };
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header isAutenticated={this.state.isAutenticated} />
        <Router onChange={this.handleRoute}>
          <Home
            path="/"
            user={this.state.user}
            password={this.state.password}
            isAutenticated={this.state.isAutenticated}
          />
          <Basic
            path="/basic"
            user={this.state.user}
            password={this.state.password}
            isAutenticated={this.state.isAutenticated}
          />
          <Iot path="/iot" />
          <Network
            path="/network"
            user={this.state.user}
            password={this.state.password}
            isAutenticated={this.state.isAutenticated}
          />
          <Updates path="/updates" />
          <Login path="/login" updateAuthData={this.updateAuthData} />
        </Router>
        <Footer />
      </div>
    );
  }
}
