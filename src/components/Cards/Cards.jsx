import React from "react";
import "./Cards.scss";
import Counter from "../Counter/Counter";

const Cards = (props) => {
  const { name, role } = props;

  return (
    <div className="employee-card">
      <p className="employee-card__name">Name: {name} </p>
      <p className="employee-card__role">Role: {role} </p>
      <Counter />
    </div>
  );
};

export default Cards;
