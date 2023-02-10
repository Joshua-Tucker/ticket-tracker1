import React from "react";
import "./Counter.scss";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-card">
      <button className="counter-card__decrement" onClick={handleDecrement}>
        -
      </button>
      <p className="counter-card__display">{counter}</p>
      <button className="counter-card__increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
