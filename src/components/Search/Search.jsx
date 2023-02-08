import React from "react";
import "./Dropdown.scss";
import { useState } from "react";

const Search = (props) => {


  const { optionsArr, handleSearch } = props;


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
