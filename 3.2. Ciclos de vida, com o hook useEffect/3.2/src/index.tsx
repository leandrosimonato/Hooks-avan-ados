import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Batata () {
  const [canViewApp, setCanViewApp] = useState(true) 
  return <>
    {
      canViewApp && 
        <App />
    }
    <button onClick={() =>{
      setCanViewApp(!canViewApp)
    }}>
      toggle
    </button>
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <Batata />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
