import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { apiSetup } from '../../config/api';

import logo from '../../assets/logo.svg';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    apiSetup(); // TODO: Use dispatch as argument
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/dummy">
          <button>Show dummy link</button>
        </Link>
      </div>
    );
  }
}
