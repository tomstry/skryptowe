import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [displayValue, setDisplayValue] = useState(10);

  useEffect(() => {

    const interval = setInterval(() => {

      if (displayValue === 0) {
        clearInterval(interval);
      } else {
        setDisplayValue(displayValue - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [displayValue]);

  return (
    <div className='App'>
      <input
        type="number"
        value={displayValue}
        onChange={event => setDisplayValue(event.target.value)}
      />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
      <Label value={displayValue} />
    </div>
  );
}

function Label({value}){
  return (
    <span>
      {value}
    </span>
  );
}

export default App;
