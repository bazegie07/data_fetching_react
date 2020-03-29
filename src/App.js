import React from 'react';

import './App.css';
import {Link, Router } from '@reach/router';
import Homepage from './views/Homepage';
import Secondary from './views/Secondary';
import Launches from './views/Lunches';
import SingleLunch from './views/SingleLaunch';
function App() {
  return (
    <div>
      <div>
        <Link to="/">Homepage</Link>
        <Link to="secondary">Second page</Link>
        <Link to="launches">Launches</Link>
      </div>
    <Router>
      <Homepage path="/" />
      <Secondary path="secondary"/>
      <Launches path="launches"/>
      <SingleLunch path="launches/:id"/>
    </Router>
    </div>
  );
}

export default App;
