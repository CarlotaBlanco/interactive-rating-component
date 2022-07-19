import '../styles/App.scss';
import { useState } from 'react';
import Rating from './Rating';

function App() {
  const [number, setNumber] = useState(0);

  const savedValue = (value) => {
    setNumber(value);
  };

  return (
    <>
      <Rating savedValue={savedValue}></Rating>;
    </>
  );
}

export default App;
