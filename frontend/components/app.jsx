import React from 'react';
import Forms from './forms/forms_container';

const App = ({ children }) => (
  <div id="app" className="container-fluid">
    <header>
      <div className="header-title">Arka Coding Challenge!</div>
    </header>
    <div className="children-container">
      { children }
    </div>
  </div>
);

export default App;
