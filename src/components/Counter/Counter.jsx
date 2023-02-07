import React from "react";
import "./Counter.scss";

const Counter = () => {
  return (
    <div className="counter-card">
      <button className="counter-card__increment">+</button>
      <p className="counter-card__display">0</p>
      <button className="counter-card__decrement">-</button>
    </div>
  );
};

export default Counter;
