import './App.css';
import { useReducer } from 'react';

interface InitialState { count: number }

type Action =
  { type: 'DECREMENT' } |
  { type: 'INCREMENT', payload: number }

const initialState: InitialState = {
  count: 1
}

function reducer (state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
    case 'DECREMENT':
      return {
        count: state.count -1 
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <p>
        Gerenciamento de estado complexo com useReducer.
      </p>
      <div style={{ backgroundColor: 'peachpuff' }}>
        { state.count }
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: 1 })
        }}
      >
        acrescer
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' })
        }}
      >
        diminuir
      </button>
    </div>
  );
}
export default App;
