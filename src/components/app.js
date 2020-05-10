import { h/*, Component*/ } from "preact";
import { useState } from "preact/hooks";
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

// export default class App extends Component {
const App = () => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAutenticated, setIsAutenticated] = useState(false);
  // state = {
  //   user: null,
  //   password: null,
  //   isAutenticated: false,
  // };

  const updateAuthData = (obj) => {
    setUser(obj.user);
    setPassword(obj.password);
    setIsAutenticated(true);
  };
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  // const handleRoute = (e) => {
  //   this.currentUrl = e.url;
  // };

  // render() {
  return (
    <div id="app">
      <Header isAutenticated={isAutenticated} />
      <Router /* onChange={this.handleRoute} */>
        <Home
          path="/"
          user={user}
          password={password}
          isAutenticated={isAutenticated}
        />
        <Basic
          path="/basic"
          user={user}
          password={password}
          isAutenticated={isAutenticated}
        />
        <Iot path="/iot" />
        <Network
          path="/network"
          user={user}
          password={password}
          isAutenticated={isAutenticated}
        />
        <Updates path="/updates" />
        <Login path="/login" updateAuthData={updateAuthData} />
      </Router>
      <Footer />
    </div>
  );
  // }
};

export default App;