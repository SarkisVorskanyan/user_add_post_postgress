import React from 'react';
import { useAppSelector } from './myHooks/Redux';

function App() {

  const {load} = useAppSelector(state => state.user);

  return (
    <div className="App">
      <p>Hello node</p>
      <p>{load}</p>
      <button>Send</button>
    </div>
  );
}

export default App;
