import '../styles/App.scss';
import { useState } from 'react';
import Rating from './Rating';
import Thankyou from './Thankyou';

function App() {
  const [number, setNumber] = useState(0);

  const savedValue = (value) => {
    setNumber(value);
  };

  return (
    <main>
      {number !== 0 && <Thankyou number={number}></Thankyou>}
      {number === 0 && <Rating savedValue={savedValue}></Rating>}
    </main>
  );
}

export default App;
