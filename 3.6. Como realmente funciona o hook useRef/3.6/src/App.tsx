import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import useCounter from './hooks/useCounter';
import PeopleList from './hooks/PeopleList';
import { useEffect } from 'react';

function App() {
  const number = useCounter()
  //const counter = { current: 2 }
  const counter = useRef(2)
  const div = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(div.current){
      div.current.style.backgroundColor = '#09f'
    }
    
    setTimeout(() => {
      console.log(div)
      counter.current = 5
      console.log('O valor de counter foi alterado!')
    }, 2000);

  }, [])



  return (
    <div className="App" ref={div}>
      <header className="App-header">

        {number}
        <div style={{ backgroundColor: 'peachpuff' }}>
          {counter.current}
        </div>
        <PeopleList />
        <PeopleList />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Como realmente funciona o hook useRef.
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
