import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";
import Footer from "./footer";
// Code-splitting is automated for routes
import Home from "../routes/home";
import Iot from "../routes/iot";
// import Profile from '../routes/profile';
import Bas from "../routes/bas";
import Netw from "../routes/netw";
import Updates from "../routes/updates";

import Login from "../routes/login";

export default class App extends Component {
  state = {
    user: null,
    password: null,
    isAutenticated: false,
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
          <Home path="/" />
          <Bas path="/basic" />
          <Iot path="/iot" />
          <Netw path="/network" />
          <Updates path="/updates" />
          {/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
          <Login path="/login" />
        </Router>
        <Footer />
      </div>
    );
  }
}
