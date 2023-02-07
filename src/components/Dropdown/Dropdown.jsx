import React from "react";
import "./Dropdown.scss";

const Dropdown= (props) => {
    const {optionsArr}= props

    const optionsJSX = optionsArr.map((element)=>{
        return (
            <option>{element}</option>
        )
    })


  return (<select className="dropdown">{optionsJSX}</select>

  );
};

export default Dropdown;

