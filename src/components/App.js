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

        {number !== 0 && (
          <Route
            path='/thankyou'
            element={<Thankyou number={number}></Thankyou>}
          />
        )}
        {number === 0 && (
          <Route path='*' element={<Rating savedValue={savedValue}></Rating>} />
        )}
      </Routes>
    </>
  );
}

export default App;
