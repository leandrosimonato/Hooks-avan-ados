import React from 'react';
import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './hooks/PeopleList';

function App() {
  const number = useCounter()
  return (
    <div className="App">
      <header className="App-header">
      {number}
      <PeopleList/>
      <PeopleList/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Passando parâmetros para os hooks.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
