import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { apiSetup } from '../../config/api';
import { actionCreators as authActions, propTypes as authPropTypes } from '../../redux/authHandlers';

import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    apiSetup(this.props.dispatch);
    if (this.props.loading) {
      this.props.dispatch(authActions.init());
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.props.currentUser ? this.props.currentUser.email : 'Guest'}</h2>
        </div>
        <Link to="/dummy">
          <button>Show dummy route</button>
        </Link>
      </div>
    );
  }
}

App.propTypes = {
  loading: authPropTypes().loading,
  currentUser: authPropTypes().currentUser
};

const mapStateToProps = store => ({
  loading: store.auth.loading,
  currentUser: store.auth.currentUser
});

export default connect(mapStateToProps)(App);
