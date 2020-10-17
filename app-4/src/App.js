import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
 app-4/src/Login.js
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(name) {
    this.setState({ username: name });
  }

  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }

  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.handleUsernameChange(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.handlePasswordChange(e.target.value)}
          type="text"
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;