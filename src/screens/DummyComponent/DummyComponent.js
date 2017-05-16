import React from 'react';

import { Link } from 'react-router-dom';
import './DummyComponent.css';

function DummyComponent() {
  return (
    <div className="dummy-component">
      <Link to="/">Hide Me !</Link>
    </div>
  );
}

export default DummyComponent;
