import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './DummyComponent.css';

class DummyComponent extends Component {
  render() {
    return (
      <div className="dummy-component">
        <Link to="/">Hide Me !</Link>
      </div>
    )
  }
}

export default DummyComponent;
