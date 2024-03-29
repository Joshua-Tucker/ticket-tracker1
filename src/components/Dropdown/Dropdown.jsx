import React from "react";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const { optionsArr, handleSelect } = props;

  const optionsJSX = optionsArr.map((element, index) => {
    return (
      <option key={index} value={element}>
        {element}
      </option>
    );
  });

  return (
    <select onChange={handleSelect} className="dropdown">
      <option value="">All</option>
      {optionsJSX}
    </select>
  );
};

export default Dropdown;
