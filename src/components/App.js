import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Rating from './Rating';
import Thankyou from './Thankyou';

function App() {
  const [number, setNumber] = useState(0);

  const savedValue = (value) => {
    setNumber(value);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Rating savedValue={savedValue}></Rating>} />
        <Route path='/thankyou' element={<Thankyou></Thankyou>} />
      </Routes>
    </>
  );
}

export default App;
