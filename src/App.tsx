import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IncrementButton } from './components/IncrementButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Narnok</p>
        <IncrementButton />
      </header>
    </div>
  );
};

export default App;
