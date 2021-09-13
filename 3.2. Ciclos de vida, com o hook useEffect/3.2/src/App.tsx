import logo from './heart.svg';
import './App.css';
import { useEffect, useState } from 'react';




function App() {
const [names, setNames] = useState([
  'Leandro', 'Ana Carolina', 'Antonella'
])

const [toggle, setToggle] = useState(false)

useEffect(() => {
  console.log(names)
  console.log('Componente montado!')
  return () => {
    console.log('Componente foi desmontado')
  }
}, [names])

useEffect(() => {
  console.log('toggle', toggle)
  
}, [toggle])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { //Key={id} geralmente usa seu id por ser único.
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
        <button onClick={() => {setNames([...names, 'Herico'])}}>
          Adicionar henrico
        </button>
        <button onClick={() => {setToggle(!toggle)}}>
          toggle
        </button>
        <img src={logo} className="App-logo" alt="logo" />
            <p>
              "Ciclos de vida" com o hook useEffect.
            </p>
      </header>
    </div>
  );
}

export default App;
