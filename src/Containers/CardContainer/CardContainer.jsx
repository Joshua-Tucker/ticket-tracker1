import React from "react";
import "./CardContainer.scss";
import Cards from "../../components/Cards/Cards";

const CardContainer = (props) =>{
    const {teamArr} = props
    const cardJSX = teamArr.map((employee)=>{
        return (
            <div className="employee-Card" key={employee.id}
            >
                <Cards
                name={employee.name}
                id={employee.id}
                role={employee.role}
                />

            </div>
        )
    })

    return <div className="cardContainer">{cardJSX}</div>;
}

export default CardContainer