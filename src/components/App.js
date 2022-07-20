import '../styles/App.scss';
import { useState } from 'react';

import Rating from './Rating';
import Thankyou from './Thankyou';

function App() {
  const [number, setNumber] = useState(0);
  const [submit, setSubmit] = useState(false);

  const handleSaveValue = (value) => {
    setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <main>
      {submit && <Thankyou number={number}></Thankyou>}
      {!submit && (
        <Rating
          savedValue={handleSaveValue}
          handleSubmit={handleSubmit}
        ></Rating>
      )}
    </main>
  );
}

export default App;
