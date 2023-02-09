import "./App.scss";
import CardContainer from "./Containers/CardContainer/CardContainer";
import teamArray from "./assets/data/team";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";

function App() {
  const [employeeArr, setEmployeeArr] = useState(teamArray);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const employeeNames = teamArray.filter((employee) => {
      if (employee.name.toLowerCase().includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
    });
    setEmployeeArr(employeeNames);
  };

  const handleSelect = (event) => {
    const filteredByRoleArr = teamArray.filter((employee) => {
      return employee.role.includes(event.target.value);
    });
    setEmployeeArr(filteredByRoleArr);
  };

  return (
    <div className="App">
      <header className="header-container">
        <h1 className="header-container__title"> Ticket Tracker</h1>

        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search.."
          className="header-container__search"
        ></input>

        <Dropdown
          handleSelect={handleSelect}
          optionsArr={[
            "Junior Software Developer",
            "Software Developer",
            "Senior Software Developer",
            "Project Manager",
            "Tester",
            "Hard Man",
          ]}
        />
      </header>
      <CardContainer teamArr={employeeArr} />
    </div>
  );
}

export default App;
