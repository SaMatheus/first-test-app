import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className='App'>
      <h1
        className={
          number > 0 ? 'positive' : number < 0 ? 'negative' : 'counter'
        }
      >
        {number}
      </h1>
      <div>
        <button onClick={() => setNumber(number + 1)}>Incrementar</button>
        <button onClick={() => setNumber(number - 1)}>Decrementar</button>
      </div>
    </div>
  );
}

export default App;
